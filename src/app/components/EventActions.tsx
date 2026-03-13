'use client';

import { Button } from '../ui/button';
import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

interface EventActionsProps {
  rulebookPath: string;
  registrationUrl: string;
  eventTitle: string;
  className?: string;
}

export default function EventActions({ 
  rulebookPath, 
  registrationUrl, 
  eventTitle,
  className = '' 
}: EventActionsProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const extractFilename = (contentDisposition: string | null): string => {
    if (!contentDisposition) return `${eventTitle}-rulebook.pdf`;
    
    // Try filename*=UTF-8 first (for Unicode support)
    const utf8Match = contentDisposition.match(/filename\*=UTF-8''([^;]+)/i);
    if (utf8Match && utf8Match[1]) {
      return decodeURIComponent(utf8Match[1]);
    }
    
    // Fall back to regular filename
    const match = contentDisposition.match(/filename="?([^";]+)"?/);
    return match && match[1] ? match[1] : `${eventTitle}-rulebook.pdf`;
  };

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (isDownloading) return;
    
    setIsDownloading(true);
    
    try {
      const response = await fetch(rulebookPath);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Extract filename from Content-Disposition header
      const contentDisposition = response.headers.get('Content-Disposition');
      const filename = extractFilename(contentDisposition);
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename; // Use extracted filename
      document.body.appendChild(a);
      a.click();
      
      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to direct download
      window.location.href = rulebookPath;
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a
        href={rulebookPath}
        onClick={handleDownload}
        className="inline-block flex-1 min-w-[150px]"
        aria-label={`Download ${eventTitle} rulebook`}
      >
        <Button 
          className="w-full bg-[#ffc045] hover:bg-[#ffc045]/80 text-black font-semibold px-6 py-6"
          disabled={isDownloading}
        >
          {isDownloading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Downloading...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Download className="h-4 w-4" />
              Download Rulebook
            </span>
          )}
        </Button>
      </a>

      <a
        href={registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block flex-1 min-w-[150px]"
        aria-label={`Register for ${eventTitle}`}
      >
        <Button className="w-full bg-[#ffc045] hover:bg-[#ffc045]/80 text-black font-semibold px-6 py-6">
          Register Now
        </Button>
      </a>
    </div>
  );
}
