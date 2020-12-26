const pool = require("../utils/pool");

module.exports = class Message {
  _id;
  text;
  name;

  constructor(row) {
    this._id = row._id;
    this.text = row.text;
    this.name = row.name;
  }

  static async create(text, name) {
    const { rows } = await pool.query(
      `
        INSERT INTO messages (text, name)
        VALUES ($1, $2)
        RETURNING *
      `,
      [text, name]
    );

    return new Message(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query(`
        SELECT * FROM messages
      `);

    return rows.map((row) => new Message(row));
  }
};
