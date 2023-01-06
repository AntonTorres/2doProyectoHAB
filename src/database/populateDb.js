require("dotenv").config();
const getPool = require("./getPool");

const populateDb = async () => {
  try {
    const pool = getPool();

    await pool.query(
      `INSERT INTO users (name, password, email) VALUES 
      ("Andrea", "1234", "andrea@email.com"),
      ("Juana", "5678", "juana@email.com")
      ("Antón", "1234", "anton@email.com")`
    );
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

populateDb();
