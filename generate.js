const fs = require('fs');
const path = require('path');

const content = `---
layout: layouts/base.njk
title: Post {{ id }}
---

# Post {{ id }}

This is post {{ id }} in my Eleventy project.
`;

const baseDir = './src/posts';

// Create directory if it doesn't exist
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// Generate 14800 posts
for (let i = 1; i <= 14800; i++) {
  const filename = `post-${i}.md`;
  const filePath = path.join(baseDir, filename);
  const fileContent = content.replace('{{ id }}', i);
  fs.writeFileSync(filePath, fileContent);
  console.log(`Generated ${filePath}`);
}
