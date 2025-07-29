
// Advanced video loading queue system
interface VideoLoadItem {
  url: string;
  element: HTMLVideoElement;
  priority: number;
  onLoad: () => void;
  onError: () => void;
}

class VideoLoadingQueue {
  private queue: VideoLoadItem[] = [];
  private activeLoads = 0;
  private maxConcurrentLoads = 2; // Conservative for video
  private loadedVideos = new Set<string>();

  constructor() {
    this.adjustConcurrencyByNetwork();
  }

  private adjustConcurrencyByNetwork() {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        switch (connection.effectiveType) {
          case '4g':
            this.maxConcurrentLoads = 3;
            break;
          case '3g':
            this.maxConcurrentLoads = 2;
            break;
          case '2g':
          case 'slow-2g':
            this.maxConcurrentLoads = 1;
            break;
          default:
            this.maxConcurrentLoads = 2;
        }
      }
    }
  }

  addToQueue(item: VideoLoadItem) {
    // Don't add if already loaded or in queue
    if (this.loadedVideos.has(item.url)) {
      item.onLoad();
      return;
    }

    const existing = this.queue.find(q => q.url === item.url);
    if (existing) {
      // Update priority if higher
      if (item.priority > existing.priority) {
        existing.priority = item.priority;
        this.queue.sort((a, b) => b.priority - a.priority);
      }
      return;
    }

    this.queue.push(item);
    this.queue.sort((a, b) => b.priority - a.priority);
    this.processQueue();
  }

  private async processQueue() {
    if (this.activeLoads >= this.maxConcurrentLoads || this.queue.length === 0) {
      return;
    }

    const item = this.queue.shift();
    if (!item) return;

    this.activeLoads++;

    try {
      await this.loadVideo(item);
      this.loadedVideos.add(item.url);
      item.onLoad();
    } catch (error) {
      console.log('Video load failed:', item.url, error);
      item.onError();
    } finally {
      this.activeLoads--;
      this.processQueue();
    }
  }

  private loadVideo(item: VideoLoadItem): Promise<void> {
    return new Promise((resolve, reject) => {
      const { element, url } = item;
      
      const handleLoad = () => {
        element.removeEventListener('loadeddata', handleLoad);
        element.removeEventListener('error', handleError);
        resolve();
      };

      const handleError = () => {
        element.removeEventListener('loadeddata', handleLoad);
        element.removeEventListener('error', handleError);
        reject(new Error('Video load failed'));
      };

      element.addEventListener('loadeddata', handleLoad);
      element.addEventListener('error', handleError);
      
      // Set preload based on priority
      element.preload = item.priority > 8 ? 'auto' : 'metadata';
      element.load();
    });
  }

  removeFromQueue(url: string) {
    this.queue = this.queue.filter(item => item.url !== url);
  }

  clearQueue() {
    this.queue = [];
    this.loadedVideos.clear();
  }

  getQueueStats() {
    return {
      queued: this.queue.length,
      active: this.activeLoads,
      loaded: this.loadedVideos.size,
      maxConcurrent: this.maxConcurrentLoads
    };
  }
}

export const videoQueue = new VideoLoadingQueue();
