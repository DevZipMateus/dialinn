
import React from 'react';
import { Loader2 } from 'lucide-react';

interface PreloadIndicatorProps {
  loaded: number;
  total: number;
  isComplete: boolean;
}

const PreloadIndicator: React.FC<PreloadIndicatorProps> = ({ 
  loaded, 
  total, 
  isComplete 
}) => {
  if (isComplete || total === 0) return null;

  const percentage = Math.round((loaded / total) * 100);

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-lg">
      <div className="flex items-center gap-3">
        <Loader2 className="w-4 h-4 animate-spin text-gold-600" />
        <span className="text-sm font-medium text-gray-700">
          Carregando imagens... {loaded}/{total} ({percentage}%)
        </span>
        <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gold-600 transition-all duration-300 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PreloadIndicator;
