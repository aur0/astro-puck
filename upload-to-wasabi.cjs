import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";

const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
});

const bucket = process.env.R2_BUCKET;
const distDir = path.join(process.cwd(), "dist");

async function uploadDir(dir, prefix = "") {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      await uploadDir(fullPath, `${prefix}${file}/`);
    } else {
      const fileContent = fs.readFileSync(fullPath);
      const key = `${prefix}${file}`;
      await s3Client.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: key,
          Body: fileContent,
          ACL: "public-read", // Note: might be ignored by R2
        })
      );
      console.log(`Uploaded: ${key}`);
    }
  }
}

uploadDir(distDir)
  .then(() => {
    console.log("✅ Upload complete");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Upload failed", err);
    process.exit(1);
  });
