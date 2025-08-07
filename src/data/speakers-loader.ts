import * as fs from 'fs';
import * as path from 'path';

interface Speaker {
  name: string;
  company: string;
  image: string;
  type: "Speakers";
  presentationTitle?: string;
  url?: string;
}

interface SpeakersApiResponse {
  speakers: Speaker[];
  lastUpdated: string;
}

export function loadSpeakers(): Speaker[] {
  try {
    const speakersPath = path.join(process.cwd(), 'src', 'data', 'speakers.json');

    if (!fs.existsSync(speakersPath)) {
      console.warn('⚠️  speakers.json not found, using empty array');
      return [];
    }

    const data = fs.readFileSync(speakersPath, 'utf-8');
    const speakersData: SpeakersApiResponse = JSON.parse(data);

    console.log(`✅ Loaded ${speakersData.speakers.length} speakers from JSON`);
    return speakersData.speakers;
  } catch (error) {
    console.warn('⚠️  Failed to load speakers data, using empty array:', error);
    return [];
  }
}

export function convertSpeakersForConfig(speakers: Speaker[]) {
  return speakers.map(speaker => ({
    name: speaker.name,
    company: speaker.company,
    image: speaker.image,
    url: speaker.url,
  }));
}