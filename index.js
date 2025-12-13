const express = require("express")
const cors = require("cors")
const myql = require("mysql2")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const db = myql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "hololive-db",
});

db.connect((err) => {
        if (err) {
                console.log("Error gagal koneksi database", err)
        } else {
                console.log("Database terkoneksi!")
        }
});

// ROUTE GET
app.get("/", (req, res) => {
        res.send("Backend Holo Ready")
});

app.get("/api/talents", (req, res) => {
        const { name, gen } = req.query
        let sql = "SELECT * FROM talents"
        let values = []

        // FILTER SEARCH NAME / GEN
        if (name || gen) {
                sql += "WHERE"
                if (name) {
                        sql += " name LIKE ?"
                        values.push(`%${name}%`)
                }
                if (gen) {
                        sql += " name LIKE ?"
                        values.push(`%${gen}%`)
                }
        }

        db.query(sql, values, (err, results) => {
                if (err) return res.status(500).json({ error: err.message })
                res.json(results)
        });
});

// ROUTE POST
app.post("/api/talents", (req, res) => {
        const { name, jp_name, gen, height, image } = req.body

        if (!name || !gen) {
                return res.status(400).json({ message: "Nama dan Gen Wajib diisi!" })
        }

        const sql = "INSERT INTO talents (name, jp_name, gen, height, image) VALUES (?, ?, ?, ?, ?)"
        const values = [name, jp_name || "-", gen, height || "-", image || "-"]

        db.query(sql, values, (err, result) => {
                if (err) return res.status(500).json({ error: err.message });

                res.status(201).json({
                        status: "success",
                        message: "Data Berhasil Di Input ke database",
                        data: { id: result.insertId, ...req.body }
                });
        });
});

// ROUTE EDIT / UPDATE
app.put("/api/talents:id", (req, res) => {
        const id = req.params.id;
        const { name, jp_name, gen, height, image } = req.body;

        let sqlCek = "SELECT * FROM talent WHERE id = ? ";
        db.query(sqlCek, [id], (req, results) => {
                if (err) return res.status(500).json({ error: err.message });
                if (results.length === 0) return res.status(404).json({ message: "Talent ga ada, mau edit siapa?" });

                //Data Lama
                const talentLama = results[0];

                //Data Baru
                const updateName = name || talentLama.name;
                const updateJp = jp_name || talentLama.jp_name;
                const updateGen = gen || talentLama.gen;
                const updateHeight = height || talentLama.height;
                const updateImage = image || talentLama.image;

                //Update Data
                let sqlUpdate = `UPDATE talents SET name=?, jp_name=?, gen=?, height=?, image=? WHERE id=?`;
                let values = [updateName, updateJp, updateGen, updateHeight, updateImage, id];

                db.query(sqlUpdate, values, (err, res) => {
                        if (err) return res.status(500).json({ error: err.message });

                        res.json({
                                status: "success",
                                message: "Data Berhasil Di Update!",
                                data: {
                                        id: id,
                                        name: updateName,
                                        jp_name: updateJp,
                                        gen: updateGen,
                                        height: updateHeight,
                                        image: updateImage
                                }
                        });
                });
        });
});

// ROUTE DELETE
app.delete("/api/talents/:id", (req, res) => {
        const sql = "DELETE FROM talents WHERE id = ?";
        db.query(sql, [req.params.id], (err, result) => {
                if (err) return res.status(500).json({ error: err.message });
                res.json({ message: "Talent berhasil dihapus" });
        });
});

app.listen(PORT, () => {
        console.log(`Server jalan di port ${PORT}`)
});
