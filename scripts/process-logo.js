const sharp = require('sharp');
const fs = require('fs');

async function processLogo() {
  const inputBuffer = fs.readFileSync('logo.jpeg');
  const image = sharp(inputBuffer);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;

  // 1. Create transparent full logo: turn white/near-white pixels transparent with soft alpha falloff
  const transparentData = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * 3;
      const dstIdx = (y * width + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      // Calculate how close it is to white
      // Average brightness
      const brightness = (r + g + b) / 3;

      transparentData[dstIdx] = r;
      transparentData[dstIdx + 1] = g;
      transparentData[dstIdx + 2] = b;

      if (brightness >= 245) {
        // Completely transparent
        transparentData[dstIdx + 3] = 0;
      } else if (brightness > 215) {
        // Smooth linear transition between 215 and 245
        const factor = (245 - brightness) / 30;
        transparentData[dstIdx + 3] = Math.round(factor * 255);
      } else {
        // Fully opaque
        transparentData[dstIdx + 3] = 255;
      }
    }
  }

  // Save transparent full logo
  await sharp(transparentData, {
    raw: { width, height, channels: 4 }
  })
    .png()
    .toFile('public/logo-transparent.png');

  console.log("Saved public/logo-transparent.png");

  // 2. Crop the emblem specifically (Y: 360 to 1085, X: 420 to 1180)
  // Let us make it a centered square
  const emblemMinY = 360;
  const emblemMaxY = 1085;
  const emblemMinX = 420;
  const emblemMaxX = 1182;
  const emblemW = emblemMaxX - emblemMinX;
  const emblemH = emblemMaxY - emblemMinY;
  const size = Math.max(emblemW, emblemH) + 40;

  const padX = Math.round((size - emblemW) / 2);
  const padY = Math.round((size - emblemH) / 2);

  const startX = Math.max(0, emblemMinX - padX);
  const startY = Math.max(0, emblemMinY - padY);

  const emblemSquare = Buffer.alloc(size * size * 4);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const srcY = startY + y;
      const srcX = startX + x;
      const dstIdx = (y * size + x) * 4;

      if (srcY >= 0 && srcY < height && srcX >= 0 && srcX < width) {
        const srcDstIdx = (srcY * width + srcX) * 4;
        emblemSquare[dstIdx] = transparentData[srcDstIdx];
        emblemSquare[dstIdx + 1] = transparentData[srcDstIdx + 1];
        emblemSquare[dstIdx + 2] = transparentData[srcDstIdx + 2];
        emblemSquare[dstIdx + 3] = transparentData[srcDstIdx + 3];
      } else {
        emblemSquare[dstIdx + 3] = 0;
      }
    }
  }

  // Save transparent emblem
  await sharp(emblemSquare, {
    raw: { width: size, height: size, channels: 4 }
  })
    .png()
    .toFile('public/logo-emblem.png');
  console.log("Saved public/logo-emblem.png");

  // 3. For favicon:
  // To ensure the favicon is crystal clear on dark browser tabs AND light browser tabs:
  // In addition to the navy & red phoenix, let's ensure the outer boundary has crisp contrast
  // Create multi-size favicons: 32x32, 64x64, 180x180, 512x512
  const emblemImg = sharp(emblemSquare, {
    raw: { width: size, height: size, channels: 4 }
  });

  await emblemImg
    .clone()
    .resize(32, 32)
    .png()
    .toFile('public/favicon-32x32.png');

  await emblemImg
    .clone()
    .resize(64, 64)
    .png()
    .toFile('public/favicon.ico'); // PNG favicon in .ico format is standard in modern browsers

  await emblemImg
    .clone()
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');

  await emblemImg
    .clone()
    .resize(192, 192)
    .png()
    .toFile('public/icon-192.png');

  await emblemImg
    .clone()
    .resize(512, 512)
    .png()
    .toFile('public/icon-512.png');

  // Copy to src/app/icon.png so Next.js App Router serves it directly
  fs.copyFileSync('public/icon-192.png', 'src/app/icon.png');
  fs.copyFileSync('public/favicon.ico', 'src/app/favicon.ico');
  fs.copyFileSync('public/apple-touch-icon.png', 'src/app/apple-icon.png');

  console.log("Favicons generated successfully without boxy borders!");
}

processLogo().catch(console.error);
