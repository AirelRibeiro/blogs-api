const categoryController = {
  create: async (req, res, next) => {
    try {
      const category = await categoryService.create(req.body.name);
      return res.status(201).json(category);
    } catch (err) {
      return next(err);
    }
};