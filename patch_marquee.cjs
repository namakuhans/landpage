const fs = require('fs');
const file = 'src/components/CurvedMarquee.jsx';
let code = fs.readFileSync(file, 'utf8');

// We need to measure repeatedText, not baseText!
code = code.replace('{baseText}', '{repeatedText}');

fs.writeFileSync(file, code);
