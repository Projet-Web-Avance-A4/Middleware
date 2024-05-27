import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  const componentsDirectory = path.join(process.cwd(), 'src/app/components');
  const files = fs.readdirSync(componentsDirectory);
  const components = files.filter(file => file.endsWith('.tsx'));

  return NextResponse.json({ components });
}
