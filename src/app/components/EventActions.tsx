'use client';

import { Button } from '../ui/button';

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
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a
        href={rulebookPath}
        download
        className="inline-block flex-1 min-w-[150px]"
        aria-label={`Download ${eventTitle} rulebook`}
      >
        <Button className="w-full bg-[#ffc045] hover:bg-[#ffc045]/80 text-black font-semibold px-6 py-6">
           Download Rulebook
        </Button>
      </a>

      <a
        href={registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block flex-1 min-w-[150px]"
        aria-label={`Register for ${eventTitle}`}
      >
        <Button className="w-full bg-gradient-to-r from-[#0a91ab] to-[#ffc045] md:text-lg text-white py-6 sm:text-base font-mono uppercase tracking-wider rounded-lg">
          Register Now
        </Button>
      </a>
    </div>
  );
}
