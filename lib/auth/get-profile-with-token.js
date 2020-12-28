const jwt = require("./jwt");

module.exports = (user) => {
  // eslint-disable-next-line no-unused-vars
  const { hash, ...rest } = user;
  return {
    ...rest,
    token: jwt.sign({ id: user.id }),
  };
};
