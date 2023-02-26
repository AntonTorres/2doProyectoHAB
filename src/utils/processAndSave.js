const sharp = require("sharp");
const uuid = require("uuid");
const path = require("path");

const processAndSave = async (imageBuffer) => {
  const image = sharp(imageBuffer);

  const imageMeta = await image.metadata();

  if (imageMeta.width > 1000) {
    image.resize(1000);
  }

  const imageName = `${uuid.v4()}.${imageMeta.format}`;

  const imagePath = path.join(__dirname, "..", "uploads/services", imageName);

  await image.toFile(imagePath);

  return imageName;
};

module.exports = processAndSave;
