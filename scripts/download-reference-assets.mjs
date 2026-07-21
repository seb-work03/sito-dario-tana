// Temporary script: downloads the public assets referenced by adviest.framer.ai
// for the fidelity-clone prototype phase. Not part of the production build.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../public/reference-assets/adviest");

const urls = [
  "https://framerusercontent.com/images/kS4IUkso6eoSwwkNJt8iut6Qo.svg",
  "https://framerusercontent.com/images/i3hyvUzl7FhrcIR6gR2nigcrK0.png",
  "https://framerusercontent.com/images/Yg8dAfpwRjbExvmOSbt26OHTJu8.svg",
  "https://framerusercontent.com/images/4TUjaTEnKAcWv7ghXUsBaRXx7fk.svg",
  "https://framerusercontent.com/images/TVuuWCrHWvJTP85qP6WmxCA2vMg.svg",
  "https://framerusercontent.com/images/C1il2dIUmabuXa1inwQA7i6sCY.svg",
  "https://framerusercontent.com/images/T8nJknVCwXBGAlfuC8C3Z5pZPAk.svg",
  "https://framerusercontent.com/images/51Fdd4S0S8qaz8T41jJaeXfVE.svg",
  "https://framerusercontent.com/images/lWBGvORq26aRQEptEZJQdspijzk.jpg",
  "https://framerusercontent.com/images/Frr87XRtMwvMp0tFB6pIPmdE.jpg",
  "https://framerusercontent.com/images/NvZiTw96HWXcrbBJEfgmR444VR4.jpg",
  "https://framerusercontent.com/images/cDLsgPeqL3pVLJhyEAVtGkcw0A.jpg",
  "https://framerusercontent.com/images/fyJf6KtkbPj5vEpJXQT8mlRMLI.jpg",
  "https://framerusercontent.com/images/orECDk1yHAceniWXq7yKvfvv7Y.jpg",
  "https://framerusercontent.com/images/kTNfvH5fO590g54cJ9kM95wUgs.jpg",
  "https://framerusercontent.com/images/DMlUCGGMzVafAtP3YgY1Z7nAfhE.jpg",
  "https://framerusercontent.com/images/pK0MgeT7XpWRNeefyNQiRiZz7nQ.jpg",
  "https://framerusercontent.com/images/2HY57myX3y7mgS1UFfrGVyN2yPw.jpg",
  "https://framerusercontent.com/images/h4Vde8UkfZBpzplF7BaH0980o.jpg",
  "https://framerusercontent.com/images/Bbboi4AXyPJPomZeBfoeBQjvFfA.jpg",
  "https://framerusercontent.com/images/0MOEYyAAQpBf4BhTNL0rh0kmJoU.jpg",
  "https://framerusercontent.com/images/U2BCGakYtmoTeb2cJuHIw7BiCWA.jpg",
  "https://framerusercontent.com/images/pWdflF1Kk7imAbImoSDBfTT3JsE.png",
  "https://framerusercontent.com/images/23vOiraARMkLH53nLLcz9iY3M4.svg",
  "https://framerusercontent.com/images/6KOKZ6o9umNtbSW8DNXdQdttgbU.png",
  "https://framerusercontent.com/images/8nmd4a4Fuz2gP25iKfTc5Obrs.png",
  "https://framerusercontent.com/images/rrNch9N9OQU5efJ9D2cgY0jsnE.svg",
  "https://framerusercontent.com/images/kANo7sHqr5DgblibNk5CSaco9PY.svg",
  "https://framerusercontent.com/images/w3a6K30kwRgfW5LWY8jl0URTDwo.png",
  "https://framerusercontent.com/images/JjUw52EussY8kwoSstWgrw6glNA.jpg",
  "https://framerusercontent.com/images/sKfOtNNshIWgszaVsZ1LVN9BjUw.jpg",
  "https://framerusercontent.com/images/JctX5w47uDkusOAsdQO5gGY4pzM.jpg",
  "https://framerusercontent.com/images/Ot8OKCzulylneqfh15IVEkBZVq8.svg",
  "https://framerusercontent.com/images/qCWvLff7EOqVKn95M40zJcKZQg.svg",
  "https://framerusercontent.com/images/vwtvMCPzC53KxqVm04ecDX0mk.svg",
  "https://framerusercontent.com/images/f8wibq1eCPCZfEQ5A4AAJJrSAA.png",
];

async function downloadOne(url) {
  const filename = path.basename(new URL(url).pathname);
  const dest = path.join(outDir, filename);
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    return { url, filename, size: buf.length, ok: true };
  } catch (err) {
    return { url, filename, ok: false, error: err.message };
  }
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const results = [];
  const batchSize = 4;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(downloadOne));
    results.push(...batchResults);
  }
  const failed = results.filter((r) => !r.ok);
  console.log(`Downloaded ${results.length - failed.length}/${results.length}`);
  if (failed.length) {
    console.log("Failed:", JSON.stringify(failed, null, 2));
  }
  console.log(JSON.stringify(results, null, 2));
}

main();
