exports.main = (context = {}, callback) => {
  console.log(context.propertiesToSend);
  return callback({});
};
