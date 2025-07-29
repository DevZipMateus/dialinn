
// Image cache utility for better performance
class ImageCache {
  private cache = new Map<string, { url: string; status: 'loading' | 'loaded' | 'error' }>();
  private loadingPromises = new Map<string, Promise<string>>();

  async getWorkingImageUrl(originalUrl: string): Promise<string> {
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

    // Start loading
    const loadPromise = this.loadImage(originalUrl);
    this.loadingPromises.set(originalUrl, loadPromise);

    try {
      const workingUrl = await loadPromise;
      this.cache.set(originalUrl, { url: workingUrl, status: 'loaded' });
      this.loadingPromises.delete(originalUrl);
      return workingUrl;
    } catch (error) {
      this.cache.set(originalUrl, { url: originalUrl, status: 'error' });
      this.loadingPromises.delete(originalUrl);
      throw error;
    }
  }

  private async loadImage(url: string): Promise<string> {
    // Set loading status
    this.cache.set(url, { url, status: 'loading' });

    // Try original URL first
    if (await this.checkImageExists(url)) {
      return url;
    }

    // Try alternative formats (only one retry)
    const fileName = url.split('/').pop();
    if (fileName) {
      const nameWithoutExt = fileName.split('.')[0];
      const alternatives = [
        url.toLowerCase(),
        `/lovable-uploads/galeria/${nameWithoutExt}.jpg`,
        `/lovable-uploads/galeria/${nameWithoutExt}.png`,
        `/lovable-uploads/galeria/${nameWithoutExt}.webp`,
      ];

      for (const altUrl of alternatives) {
        if (altUrl !== url && await this.checkImageExists(altUrl)) {
          return altUrl;
        }
      }
    }

    throw new Error('No working image URL found');
  }

  private async checkImageExists(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }

  clearCache(): void {
    this.cache.clear();
    this.loadingPromises.clear();
  }
}

export const imageCache = new ImageCache();
