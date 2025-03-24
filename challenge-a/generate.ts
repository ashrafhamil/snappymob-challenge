import * as fs from 'fs';
import * as path from 'path';

const OUTPUT_FILE = path.join(__dirname, '../output/data.txt');
const TARGET_SIZE_MB = 0.1;
const TARGET_SIZE_BYTES = TARGET_SIZE_MB * 1024 * 1024;

const getRandomInt = (min = 0, max = 100000): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomFloat = (): number =>
    parseFloat((Math.random() * 10000).toFixed(4));

const getRandomAlpha = (length = 8): string =>
    Array.from({ length }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('');

const getRandomAlphanumeric = (): string => {
    const core = Math.random().toString(36).slice(2, 10);
    const paddingLeft = ' '.repeat(getRandomInt(0, 10));
    const paddingRight = ' '.repeat(getRandomInt(0, 10));
    return `${paddingLeft}${core}${paddingRight}`;
};

const getRandomObject = (): string => {
    const type = getRandomInt(0, 3);
    switch (type) {
        case 0:
            return getRandomAlpha(getRandomInt(5, 15));
        case 1:
            return getRandomFloat().toString();
        case 2:
            return getRandomInt().toString();
        case 3:
            return getRandomAlphanumeric();
        default:
            return '';
    }
};

const generateData = () => {
    const writeStream = fs.createWriteStream(OUTPUT_FILE, { flags: 'w' });

    let size = 0;
    while (size < TARGET_SIZE_BYTES) {
        const obj = getRandomObject();
        const data = obj + ',';
        writeStream.write(data);
        size += Buffer.byteLength(data, 'utf8');
    }

    writeStream.end(() => {
        console.log(`Done. File generated at: ${OUTPUT_FILE}`);
    });
};

generateData();
