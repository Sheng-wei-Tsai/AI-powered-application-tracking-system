/**
 * Utility functions for the application
 */

/**
 * Formats a file size in bytes to a human-readable string
 * @param bytes - The size in bytes
 * @returns A human-readable string (e.g., "1.5 KB", "2.3 MB", "1.2 GB")
 */
export function formatSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  // Determine the appropriate unit
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  // Calculate the value in the appropriate unit
  // Round to 2 decimal places
  const value = parseFloat((bytes / Math.pow(k, i)).toFixed(2));
  
  return `${value} ${sizes[i]}`;
}