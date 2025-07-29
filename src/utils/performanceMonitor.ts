
// Performance monitoring utilities
class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initObservers();
  }

  private initObservers() {
    try {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          this.recordMetric('LCP', entry.startTime);
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      this.observers.push(lcpObserver);

      // First Input Delay
      const fidObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          this.recordMetric('FID', (entry as any).processingStart - entry.startTime);
        }
      });
      fidObserver.observe({ type: 'first-input', buffered: true });
      this.observers.push(fidObserver);

      // Layout Shifts
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsScore = 0;
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsScore += (entry as any).value;
          }
        }
        if (clsScore > 0) {
          this.recordMetric('CLS', clsScore);
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      this.observers.push(clsObserver);
    } catch (error) {
      console.log('Performance observers not supported:', error);
    }
  }

  recordMetric(name: string, value: number) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)!.push(value);
  }

  recordImageLoad(url: string, loadTime: number) {
    this.recordMetric('ImageLoad', loadTime);
    console.log(`Image loaded: ${url} in ${loadTime.toFixed(2)}ms`);
  }

  recordVideoLoad(url: string, loadTime: number) {
    this.recordMetric('VideoLoad', loadTime);
    console.log(`Video loaded: ${url} in ${loadTime.toFixed(2)}ms`);
  }

  getMetrics() {
    const results: Record<string, { avg: number; max: number; min: number; count: number }> = {};
    
    this.metrics.forEach((values, name) => {
      if (values.length > 0) {
        const avg = values.reduce((a, b) => a + b) / values.length;
        const max = Math.max(...values);
        const min = Math.min(...values);
        results[name] = { avg, max, min, count: values.length };
      }
    });

    return results;
  }

  logPerformanceReport() {
    console.group('🚀 Performance Report');
    
    const metrics = this.getMetrics();
    Object.entries(metrics).forEach(([name, data]) => {
      console.log(`${name}: Avg ${data.avg.toFixed(2)}ms, Max ${data.max.toFixed(2)}ms, Count ${data.count}`);
    });

    // Network information
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        console.log(`Network: ${connection.effectiveType}, Downlink: ${connection.downlink}Mbps`);
      }
    }

    console.groupEnd();
  }

  clearMetrics() {
    this.metrics.clear();
  }

  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export const performanceMonitor = new PerformanceMonitor();

// Auto-log performance report every 30 seconds in development
if (process.env.NODE_ENV === 'development') {
  setInterval(() => {
    performanceMonitor.logPerformanceReport();
  }, 30000);
}
