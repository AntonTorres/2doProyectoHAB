const { insertService } = require("../../repositories/services");
const { createSerSchema } = require("../../schemas/services");
const processAndSave = require("../../utils/processAndSave");

const createService = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    await createSerSchema.validateAsync(req.body);

    const { tittle, explication, resolve } = req.body;

    const files = req.files.files || [];

    const fileArr = Array.isArray(files) ? files : [files];
    const fileNames = [];

    for (const file of fileArr) {
      const fileName = await processAndSave(file.data);
      fileNames.push(fileName);
    }

    const insertId = await insertService({
      tittle,
      explication,
      userId,
      file: fileNames.join(","),
      resolve,
    });

    res.status(201).send({
      status: "ok",
      data: {
        id: insertId,
        tittle,
        explication,
        userId,
        files: fileNames,
        resolve,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createService;