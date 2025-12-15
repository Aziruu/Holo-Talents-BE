const mysql = require("mysql2");

const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "hololive-db",
});

db.connect((err) => {
        if (err) throw err;
        console.log("Memulai Penghapusan Data...");

        const sql = "DROP TABLE IF EXISTS talents";

        db.query(sql, (err, result) => {
                if (err) {
                        console.error("❌ Gagal Rollback:", err);
                } else {
                        console.log("Tabel 'talents' berhasil dihapus");
                }
                db.end();
        });
});