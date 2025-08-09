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

const speakerImageMap: Record<string, string> = {
  "Abdullah Talayhan": "/speakers/abdullah.webp",
  "Hunter Beast": "/speakers/hunter.webp",
  "Robin Linus": "/speakers/robin.webp",
  "Furkan Boyraz": "/speakers/furkan.webp",
  "Dan Mills": "/speakers/dan.webp",
  "Toghrul Maharramov": "/speakers/toghrul.webp",
  "Alp Bassa": "/speakers/alp.webp",
  "David TSE": "/speakers/david.webp",
};

export async function fetchSpeakersData(spreadsheetId: string): Promise<SpeakersApiResponse> {
  try {
    console.log('📊 Fetching speakers data from Google Sheets...');

    const PublicGoogleSheetsParser = (await import('public-google-sheets-parser')).default;
    const parser = new PublicGoogleSheetsParser(spreadsheetId);
    const data = await parser.parse();

    console.log(`✅ Found ${data.length} rows in spreadsheet`);

    const speakers: Speaker[] = data
      .filter((row: any) => row.NAME && row.NAME.trim() !== '')
      .map((row: any) => {
        const speakerName = row.NAME || 'Unknown';
        const speakerImage = speakerImageMap[speakerName];

        if (!speakerImage && speakerName !== 'Unknown') {
          console.warn(`⚠️  Missing image for speaker: "${speakerName}" - Add to speakerImageMap`);
        }

        return {
          name: speakerName,
          company: row['COMPANY'] || '‎',
          image: speakerImage || '/hover.webp',
          type: "Speakers" as const,
          presentationTitle: row['PRESENTATION TITLE'] || row['TITLE'] || undefined,
          url: row['URL'] || undefined,
        };
      });

    console.log(`✅ Processed ${speakers.length} speakers`);

    return {
      speakers,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error('❌ Error fetching speakers data:', error);
    throw error;
  }
}

async function main() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID || '1tKjedplkGFrsCePf5LaeX2SAeW2-Qgcd2Scchk0bUXc';

  if (!spreadsheetId) {
    console.error('❌ Please provide GOOGLE_SHEETS_ID environment variable');
    process.exit(1);
  }

  try {
    const speakersData = await fetchSpeakersData(spreadsheetId);

    const dataDir = path.join(process.cwd(), 'src', 'data');
    try {
      fs.mkdirSync(dataDir, { recursive: true });
    } catch (error) {
    }

    const outputPath = path.join(dataDir, 'speakers.json');
    fs.writeFileSync(outputPath, JSON.stringify(speakersData, null, 2));

    console.log(`✅ Speakers data saved to ${outputPath}`);
    console.log(`📝 Found ${speakersData.speakers.length} speakers`);
    console.log(`🕐 Last updated: ${speakersData.lastUpdated}`);
  } catch (error) {
    console.error('❌ Failed to fetch and save speakers data:', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}