import * as fs from 'fs';
import * as path from 'path';

const INPUT_FILE = path.join(__dirname, '../output/data.txt');

const detectType = (value: string): string => {
    const trimmed = value.trim();

    if (/^[a-zA-Z]+$/.test(trimmed)) return 'Alphabetical';
    if (/^[0-9]+$/.test(trimmed)) return 'Integer';
    if (/^[0-9]*\.[0-9]+$/.test(trimmed)) return 'Real Number';
    if (/^[a-zA-Z0-9]+$/.test(trimmed)) return 'Alphanumeric';

    return 'Unknown';
};

const processData = () => {
    const rawData = fs.readFileSync(INPUT_FILE, 'utf-8');
    const objects = rawData.split(',');

    for (const obj of objects) {
        const trimmed = obj.trim();
        if (!trimmed) continue;

        const type = detectType(trimmed);
        console.log(`${trimmed} - ${type}`);
    }
};

processData();
