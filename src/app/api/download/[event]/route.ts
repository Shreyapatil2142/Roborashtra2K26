import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

const ALLOWED_EVENTS = ['resqlympics', 'yantrautsav', 'chakravyuh'] as const;
type EventType = typeof ALLOWED_EVENTS[number];

const PDF_CONFIG: Record<EventType, { filename: string; displayName: string }> = {
  resqlympics: { filename: 'resqlympics.pdf', displayName: 'ResQlympics-Rulebook.pdf' },
  yantrautsav: { filename: 'yantrautsav.pdf', displayName: 'Yantrautsav-Rulebook.pdf' },
  chakravyuh: { filename: 'chakravyuh.pdf', displayName: 'Chakravyuh-Rulebook.pdf' },
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ event: string }> }
) {
  const { event: eventParam } = await params;
  const event = eventParam.toLowerCase() as EventType;

  if (!ALLOWED_EVENTS.includes(event)) {
    return NextResponse.json({ error: 'Invalid event' }, { status: 404 });
  }

  try {
    const config = PDF_CONFIG[event];
    const pdfPath = join(process.cwd(), 'public', 'rulebooks', config.filename);
    // const buffer = await readFile(pdfPath);

    const buffer = await readFile(pdfPath);
return new NextResponse(new Uint8Array(buffer), {
  headers: {
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename="${config.displayName}"`,
  },
});


  } catch (error) {
    console.error('PDF download error:', error);
    return NextResponse.json({ error: 'PDF not found' }, { status: 404 });
  }
}
