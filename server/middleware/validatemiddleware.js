const validatemiddleware = (schema) => {
  return async (req, res, next) => {
    try {
      const result = schema.safeParse(req.body);

      if (!result.success) {
        const zodErrors = result.error?.errors;

        const formattedErrors = Array.isArray(zodErrors)
          ? zodErrors.map((err) => ({
              field: err.path.join('.'),
              message: err.message,
            }))
          : [{ field: 'unknown', message: 'Validation failed' }];

        return res.status(400).json({
          status: 'validation_error',
          errors: formattedErrors,
        });
      }

      req.body = result.data;
      next();
    } catch (err) {
      console.error('Validation middleware error:', err);
      return res.status(500).json({
        status: 'internal_error',
        message: 'Something went wrong during validation',
      });
    }
  };
};

module.exports = validatemiddleware;
