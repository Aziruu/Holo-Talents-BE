const myql = require("mysql2");
const talentsData = require("./data-hololive")

const db = myql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "hololive-db",
});

db.connect((err) => {
        console.log("Terhubung ke Database! Mengecek Data...")

        processTalent(0);
});

function processTalent(index) {
        if (index >= talentsData.length) {
                console.log("Selesai! Semua data telah di proses.");
                db.end();
                return;
        }

        const talent = talentsData[index];

        const queryCek = "SELECT id FROM talents WHERE name = ?";

        db.query(queryCek, [talent.name], (err, results) => {
                if (err) {
                        console.error("Error pas Cek: ", err);
                        processTalent(index + 1);
                        return;
                }

                // Logic
                if (results.length > 0) {
                        // Data Sudah Ada
                        console.log(` ${talent.name} sudah ada. Di-SKIP biar manual update kamu aman.`);
                        processTalent(index + 1);
                } else {
                        //  Data Belum Ada >> Dimasukin.
                        const queryInsert = "INSERT INTO talents (name, jp_name, gen, height, image) VALUES (?, ?, ?, ?, ?)";
                        const values = [talent.name, talent.jp_name, talent.gen, talent.height, talent.image];

                        db.query(queryInsert, values, (err) => {
                                if (err) console.error("Gagal Insert", err);
                                else console.log(`${talent.name} berhasil ditambah!`);

                                processTalent(index + 1);
                        });
                }
        });
}