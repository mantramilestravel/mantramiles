// Debug script to check environment variables during build
console.log('🔍 Environment Variables Debug Script');
console.log('=====================================');

// Check Node.js environment variables
console.log('\n📋 Node.js process.env variables:');
Object.keys(process.env)
  .filter(key => key.startsWith('VITE_'))
  .forEach(key => {
    console.log(`${key}: ${process.env[key]}`);
  });

// Check if we're in development or production
console.log('\n🌍 Environment Info:');
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`PWD: ${process.env.PWD || process.cwd()}`);

// Check for .env files
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envFiles = ['.env', '.env.local', '.env.production', '.env.development'];
console.log('\n📁 Checking for .env files:');

envFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n').filter(line => line.trim() && !line.startsWith('#'));
      console.log(`   Variables found: ${lines.length}`);
      lines.forEach(line => {
        const [key] = line.split('=');
        if (key) {
          console.log(`   - ${key.trim()}`);
        }
      });
    } catch (error) {
      console.log(`   ❌ Error reading ${file}:`, error.message);
    }
  } else {
    console.log(`❌ ${file} not found`);
  }
});

console.log('\n🔧 Vite Environment Variables (import.meta.env):');
console.log('Note: These are only available in the browser, not in Node.js');
console.log('Expected variables:');
console.log('- VITE_META_PIXEL_ID');
console.log('- VITE_META_PIXEL_TOKEN');
console.log('- VITE_META_PIXEL_TEST_CODE');
console.log('- VITE_META_PIXEL_API_VERSION');
console.log('- VITE_META_PIXEL_LOGGING');

console.log('\n=====================================');
console.log('✅ Debug script completed');