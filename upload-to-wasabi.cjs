const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");

const s3 = new AWS.S3({
  accessKeyId: process.env.R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  endpoint: process.env.R2_ENDPOINT,
  region: "auto",
  signatureVersion: "v4",
});

const bucket = process.env.R2_BUCKET;
const distDir = path.join(__dirname, "dist");

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
      await s3
        .upload({
          Bucket: bucket,
          Key: key,
          Body: fileContent,
          ACL: "public-read",
        })
        .promise();
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
