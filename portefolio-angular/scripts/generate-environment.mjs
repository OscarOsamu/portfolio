import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config();

const license = process.env.PRIMENG_LICENSE;

if (!license) {
  throw new Error('PRIMENG_LICENSE is not defined');
}

const content = `export const environment = {
  primengLicense: ${JSON.stringify(license)}
};
`;

const outputPath = path.resolve(
  'src/environments/environment.ts'
);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, content);

console.log('environment.ts generated');
