const { ZodError } = require('zod');

const validateMiddleware = (schema) => {
  return async (req, res, next) => {
    try {
      const result = schema.safeParse(req.body);

      if (!result.success) {
        const error = new ZodError(result.error.errors);
        console.log(error);
        error.status = 400;
         // attach status for error middleware
        return next(error); // pass to error middleware
      }

      req.body = result.data;
      next();
    } catch (err) {
      console.error('Validation middleware error:', err);
      err.status = 500;
      next(err); // pass to error middleware
    }
  };
};

module.exports = validateMiddleware;
