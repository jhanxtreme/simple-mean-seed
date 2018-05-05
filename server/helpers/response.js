let errorResponse = (err, code, res) => {
    code = code || 500;
    res.status(code).json({
      errMessage: err
    });
};

let successResponse = (data, message, res) => {
  message = message || 'Ok';
  res.status(200).json({
    message: message,
    result: data
  });
}

module.exports = {
  errorResponse,
  successResponse
};
