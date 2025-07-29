
// Image utility functions for handling gallery images
export const normalizeImagePath = (imagePath: string): string => {
  // Remove leading slash and ensure consistent path format
  const cleanPath = imagePath.replace(/^\/+/, '');
  
  // Log the path for debugging
  console.log('Original image path:', imagePath);
  console.log('Normalized path:', cleanPath);
  
  return `/${cleanPath}`;
};

export const getAlternativeImagePaths = (originalPath: string): string[] => {
  const alternatives: string[] = [];
  const fileName = originalPath.split('/').pop();
  
  if (fileName) {
    // Try different case variations
    alternatives.push(originalPath);
    alternatives.push(originalPath.toLowerCase());
    alternatives.push(originalPath.toUpperCase());
    
    // Try with different file extensions
    const nameWithoutExt = fileName.split('.')[0];
    alternatives.push(`/lovable-uploads/galeria/${nameWithoutExt}.jpg`);
    alternatives.push(`/lovable-uploads/galeria/${nameWithoutExt}.png`);
    alternatives.push(`/lovable-uploads/galeria/${nameWithoutExt}.webp`);
  }
  
  return [...new Set(alternatives)]; // Remove duplicates
};

export const checkImageExists = async (imagePath: string): Promise<boolean> => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    const exists = response.ok;
    console.log(`Image check for ${imagePath}:`, exists ? 'EXISTS' : 'NOT FOUND');
    return exists;
  } catch (error) {
    console.log(`Error checking image ${imagePath}:`, error);
    return false;
  }
};

export const findWorkingImagePath = async (originalPath: string): Promise<string | null> => {
  const alternatives = getAlternativeImagePaths(originalPath);
  
  console.log(`Trying ${alternatives.length} alternative paths for:`, originalPath);
  
  for (const path of alternatives) {
    const exists = await checkImageExists(path);
    if (exists) {
      console.log('Found working image path:', path);
      return path;
    }
  }
  
  console.log('No working image path found for:', originalPath);
  return null;
};
