const mysql = require("mysql2");

const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "hololive-db",
});

db.connect((err) => {
        if (err) throw err;
        console.log("🔨 Sedang membangun ulang tabel talents...");

        const sql = `
        CREATE TABLE IF NOT EXISTS talents (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                jp_name VARCHAR(100),
                gen VARCHAR(50),
                height VARCHAR(20),
                image VARCHAR(255)
                )
        `;

        db.query(sql, (err, result) => {
                if (err) {
                        console.error("❌ Gagal bikin tabel:", err);
                } else {
                        console.log("✅ Tabel 'talents' berhasil dibangun ulang! Siap diisi.");
                }
                db.end();
        });
});