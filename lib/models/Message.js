const pool = require("../utils/pool");
const _ = require("lodash");

module.exports = class Message {
  user_id;
  _id;
  text;

  constructor(row) {
    this.user_id = row._id;
    this._id = row._id;
    this.text = row.text;
  }

  static async create(user_id, text) {
    const { rows } = await pool.query(
      `
        INSERT INTO messages (user_id, text)
        VALUES ($1, $2)
        RETURNING *
      `,
      [user_id, text]
    );

    return new Message(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query(`
      SELECT 
        messages.user_id, users.name, users.email, messages.text AS chat_message
      FROM 
        users
      JOIN 
        messages
      ON 
        users._id = messages.user_id
      `);

    // this doesn't feel legit but i'm not sure why calling a new class instance is yielding undefined or why this works
    return rows.map((row) => row);
  }

  static async findById(user_id) {
    const { rows } = await pool.query(
      `
    SELECT 
      messages.user_id, users.name, users.email, messages.text AS chat_message
    FROM 
      users
    JOIN 
      messages
    ON 
      messages.user_id = $1
     `,
      [user_id]
    );

    if (!rows[0]) throw new Error(`No message corresponds with id ${user_id}`);
    return _.last(rows);
  }
};
