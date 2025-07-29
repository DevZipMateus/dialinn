
// Network-aware loading system
interface ConnectionInfo {
  effectiveType: '2g' | '3g' | '4g' | 'slow-2g';
  downlink: number;
  rtt: number;
  saveData: boolean;
}

class NetworkAwareLoader {
  private connectionInfo: Partial<ConnectionInfo> = {};
  private qualityLevel: 'low' | 'medium' | 'high' = 'high';

  constructor() {
    this.initNetworkInfo();
    this.setupNetworkListener();
  }

  private initNetworkInfo() {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        this.connectionInfo = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        };
        this.updateQualityLevel();
      }
    }
  }

  private setupNetworkListener() {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        connection.addEventListener('change', () => {
          this.initNetworkInfo();
        });
      }
    }
  }

  private updateQualityLevel() {
    const { effectiveType, saveData, downlink } = this.connectionInfo;
    
    if (saveData) {
      this.qualityLevel = 'low';
      return;
    }

    switch (effectiveType) {
      case 'slow-2g':
      case '2g':
        this.qualityLevel = 'low';
        break;
      case '3g':
        this.qualityLevel = downlink && downlink > 1.5 ? 'medium' : 'low';
        break;
      case '4g':
        this.qualityLevel = 'high';
        break;
      default:
        this.qualityLevel = 'medium';
    }
  }

  getOptimalSettings() {
    return {
      qualityLevel: this.qualityLevel,
      maxConcurrentLoads: this.getMaxConcurrentLoads(),
      preloadDistance: this.getPreloadDistance(),
      videoQuality: this.getVideoQuality()
    };
  }

  private getMaxConcurrentLoads(): number {
    switch (this.qualityLevel) {
      case 'low': return 2;
      case 'medium': return 4;
      case 'high': return 8;
      default: return 6;
    }
  }

  private getPreloadDistance(): number {
    switch (this.qualityLevel) {
      case 'low': return 50;
      case 'medium': return 100;
      case 'high': return 200;
      default: return 100;
    }
  }

  private getVideoQuality(): 'low' | 'medium' | 'high' {
    return this.qualityLevel;
  }

  shouldPreload(): boolean {
    return this.qualityLevel !== 'low' && !this.connectionInfo.saveData;
  }

  isSlowConnection(): boolean {
    return this.qualityLevel === 'low' || this.connectionInfo.saveData === true;
  }
}

export const networkAware = new NetworkAwareLoader();
