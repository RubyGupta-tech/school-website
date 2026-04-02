import { pdfToPng } from 'pdf-to-png-converter';
import { writeFileSync } from 'fs';

const pages = await pdfToPng('c:/Users/ruby4/Quantumleapwealth/school-website/image/LOGO.pdf', {
  disableFontFace: false,
  useSystemFonts: true,
  viewportScale: 3.0,
  pagesToProcess: [1],
  strictPagesToProcess: false,
  verbosityLevel: 0
});

if (pages.length > 0) {
  writeFileSync('c:/Users/ruby4/Quantumleapwealth/school-website/school-website/public/school-logo.png', pages[0].content);
  console.log('Logo converted successfully! Size:', pages[0].content.length, 'bytes');
} else {
  console.log('No pages found');
}
