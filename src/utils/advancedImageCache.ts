
// Streamlined image cache with aggressive loading
interface CacheEntry {
  url: string;
  status: 'loading' | 'loaded' | 'error';
  timestamp: number;
  priority: number;
}

interface LoadingQueue {
  url: string;
  priority: number;
  resolve: (url: string) => void;
  reject: (error: Error) => void;
}

class AdvancedImageCache {
  private cache = new Map<string, CacheEntry>();
  private loadingPromises = new Map<string, Promise<string>>();
  private loadingQueue: LoadingQueue[] = [];
  private activeLoads = 0;
  private maxConcurrentLoads = 12; // Increased for faster loading
  private readonly CACHE_VERSION = 'v2';
  private readonly CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

  constructor() {
    this.initPersistentCache();
    this.adjustConcurrencyByConnection();
  }

  private initPersistentCache() {
    try {
      const cached = localStorage.getItem(`imageCache_${this.CACHE_VERSION}`);
      if (cached) {
        const data = JSON.parse(cached);
        const now = Date.now();
        
        Object.entries(data).forEach(([url, entry]: [string, any]) => {
          if (now - entry.timestamp < this.CACHE_EXPIRY && entry.status === 'loaded') {
            this.cache.set(url, entry);
          }
        });
      }
    } catch (error) {
      console.log('Failed to load persistent cache:', error);
    }
  }

  private savePersistentCache() {
    try {
      const cacheData: Record<string, CacheEntry> = {};
      this.cache.forEach((entry, url) => {
        if (entry.status === 'loaded') {
          cacheData[url] = entry;
        }
      });
      localStorage.setItem(`imageCache_${this.CACHE_VERSION}`, JSON.stringify(cacheData));
    } catch (error) {
      console.log('Failed to save persistent cache:', error);
    }
  }

  private adjustConcurrencyByConnection() {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        switch (connection.effectiveType) {
          case '4g':
            this.maxConcurrentLoads = 16;
            break;
          case '3g':
            this.maxConcurrentLoads = 8;
            break;
          case '2g':
            this.maxConcurrentLoads = 4;
            break;
          default:
            this.maxConcurrentLoads = 12;
        }
      }
    }
  }

  async getOptimizedImageUrl(originalUrl: string, priority: number = 5): Promise<string> {
    // Check cache first
    const cached = this.cache.get(originalUrl);
    if (cached?.status === 'loaded') {
      return cached.url;
    }
    if (cached?.status === 'error') {
      throw new Error('Image failed to load');
    }

    // Check if already loading
    const existingPromise = this.loadingPromises.get(originalUrl);
    if (existingPromise) {
      return existingPromise;
    }

    // Create loading promise
    const loadPromise = new Promise<string>((resolve, reject) => {
      this.loadingQueue.push({ url: originalUrl, priority, resolve, reject });
      this.loadingQueue.sort((a, b) => b.priority - a.priority);
      this.processQueue();
    });

    this.loadingPromises.set(originalUrl, loadPromise);
    return loadPromise;
  }

  private async processQueue() {
    if (this.activeLoads >= this.maxConcurrentLoads || this.loadingQueue.length === 0) {
      return;
    }

    const queueItem = this.loadingQueue.shift();
    if (!queueItem) return;

    this.activeLoads++;
    
    try {
      const workingUrl = await this.loadOptimizedImage(queueItem.url);
      this.cache.set(queueItem.url, {
        url: workingUrl,
        status: 'loaded',
        timestamp: Date.now(),
        priority: queueItem.priority
      });
      this.savePersistentCache();
      this.loadingPromises.delete(queueItem.url);
      queueItem.resolve(workingUrl);
    } catch (error) {
      this.cache.set(queueItem.url, {
        url: queueItem.url,
        status: 'error',
        timestamp: Date.now(),
        priority: queueItem.priority
      });
      this.loadingPromises.delete(queueItem.url);
      queueItem.reject(error as Error);
    } finally {
      this.activeLoads--;
      this.processQueue();
    }
  }

  private async loadOptimizedImage(url: string): Promise<string> {
    this.cache.set(url, {
      url,
      status: 'loading',
      timestamp: Date.now(),
      priority: 5
    });

    // Simplified approach: try original URL first, then only webp as alternative
    if (await this.checkImageExists(url)) {
      return url;
    }

    // Only try webp as alternative (most common modern format)
    const fileName = url.split('/').pop();
    if (fileName) {
      const nameWithoutExt = fileName.split('.')[0];
      const basePath = url.substring(0, url.lastIndexOf('/'));
      
      const webpUrl = `${basePath}/${nameWithoutExt}.webp`;
      if (webpUrl !== url && await this.checkImageExists(webpUrl)) {
        return webpUrl;
      }
    }

    // Fallback to placeholder instead of failing
    return '/placeholder.svg';
  }

  private async checkImageExists(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { 
        method: 'HEAD',
        cache: 'force-cache'
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  preloadImages(urls: string[], priority: number = 3) {
    urls.forEach(url => {
      if (!this.cache.has(url) || this.cache.get(url)?.status !== 'loaded') {
        this.getOptimizedImageUrl(url, priority).catch(() => {
          // Silently fail preload attempts
        });
      }
    });
  }

  // Aggressive preload for critical images
  preloadImagesAggressively(urls: string[]) {
    urls.forEach((url, index) => {
      if (!this.cache.has(url)) {
        this.getOptimizedImageUrl(url, 10 - Math.floor(index / 4)).catch(() => {});
      }
    });
  }

  clearCache(): void {
    this.cache.clear();
    this.loadingPromises.clear();
    try {
      localStorage.removeItem(`imageCache_${this.CACHE_VERSION}`);
    } catch (error) {
      console.log('Failed to clear persistent cache:', error);
    }
  }

  getCacheStats() {
    const loaded = Array.from(this.cache.values()).filter(entry => entry.status === 'loaded').length;
    const loading = Array.from(this.cache.values()).filter(entry => entry.status === 'loading').length;
    const errors = Array.from(this.cache.values()).filter(entry => entry.status === 'error').length;
    
    return { loaded, loading, errors, total: this.cache.size };
  }
}

export const advancedImageCache = new AdvancedImageCache();
