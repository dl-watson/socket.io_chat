const pool = require("../utils/pool");

module.exports = class User {
  _id;
  name;
  email;
  hash;

  constructor(row) {
    this._id = row._id;
    this.name = row.name;
    this.email = row.email;
    this.hash = row.hash;
  }

  static async insertUser(name, email, hash) {
    const { rows } = await pool.query(
      `
        INSERT INTO users (name, email, hash)
        VALUES ($1, $2, $3)
        RETURNING *
      `,
      [name, email, hash]
    );

    return new User(rows[0]);
  }

  static async selectUser(email) {
    const { rows } = await pool.query(
      `
        SELECT *
        FROM users
        WHERE email=$1
      `,
      [email]
    );

    if (!rows[0]) return null;

    return new User(rows[0]);
  }
};
