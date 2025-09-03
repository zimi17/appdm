const fs = require('fs');
const path = require('path');

// Template untuk konfigurasi yang benar
const createCorrectConfig = (originalTitle, originalDescription, originalContent) => {
  // Extract key information from original content
  const titleMatch = originalTitle;
  const descMatch = originalDescription;
  
  return `export const ${originalContent.match(/export const (\w+)/)?.[1] || 'pageConfig'} = {
  title: "${titleMatch}",
  description: "${descMatch}",
  
  topper: {
    _type: "simple-page-topper",
    title: "${titleMatch}",
    description: "${descMatch}",
    intro: "Kampus Rakyat, Kampus Perubahan",
    cta: {
      text: "Daftar Sekarang",
      href: "/pendaftaran"
    }
  },

  blocks: [
    {
      _type: "hero",
      _key: "hero-main",
      title: "${titleMatch}",
      description: "${descMatch}",
      imageUrl: "/images/hero-placeholder.jpg"
    },
    {
      _type: "twoColumnContent",
      _key: "main-content",
      title: "Informasi Utama",
      description: "${descMatch}"
    },
    {
      _type: "promoBar",
      _key: "cta-section",
      title: "Bergabunglah dengan STIE Dwimulya",
      description: "Wujudkan impian pendidikan tinggi berkualitas bersama kami"
    }
  ]
};`;
};

// Function to update a single file
const updateConfigFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract title and description from existing content
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const descMatch = content.match(/description:\s*"([^"]+)"/);
    
    if (titleMatch && descMatch) {
      const newContent = createCorrectConfig(titleMatch[1], descMatch[1], content);
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
};

// Get all .ts files in konsep directory recursively
const getAllTsFiles = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsFiles(fullPath));
    } else if (item.endsWith('.ts') && item !== 'index.ts' && item !== 'update-configs.js') {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Main execution
const konsepDir = __dirname;
const tsFiles = getAllTsFiles(konsepDir);

console.log(`Found ${tsFiles.length} TypeScript files to update...`);

tsFiles.forEach(updateConfigFile);

console.log('Update completed!');
