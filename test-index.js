const express = require("express")
const cors = require("cors")


const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const hololiveTalents = [
  {
    id: 1,
    name: "Gawr Gura",
    jp_name: "がうる・ぐら",
    gen: "English - Myth",
    height: "141 cm",
  },
  {
    id: 2,
    name: "Usada Pekora",
    jp_name: "兎田ぺこら",
    gen: "JP - Gen 3",
    height: "153 cm",
  },
  {
    id: 3,
    name: "Kobo Kanaeru",
    jp_name: "こぼ・かなえる",
    gen: "Indonesia - Gen 3",
    height: "150 cm",
  },
  {
    id: 4,
    name: "Mori Calliope",
    jp_name: "森カリオペ",
    gen: "English - Myth",
    height: "167 cm",
  },
  {
    id: 5,
    name: "Hoshimachi Suisei",
    jp_name: "星街すいせい",
    gen: "JP - Gen 0",
    height: "160 cm",
  },
  {
    id: 6,
    name: "Kaela Kovalskia",
    jp_name: "カエラ・コヴァルスキア",
    gen: "Indonesia - Gen 3",
    height: "173 cm",
  },
]

// GET Data
app.get("/", (req, res) => {
  res.send("tes!!")
})

app.get("/api/talents", (req, res) => {
  const { name, gen } = req.query

  let hasilPencarian = hololiveTalents

  if (name) {
    hasilPencarian = hasilPencarian.filter((t) =>
      t.name.toLowerCase().includes(name.toLowerCase())
    )
  }

  if (gen) {
    hasilPencarian = hasilPencarian.filter((t) =>
      t.gen.toLowerCase().includes(gen.toLowerCase())
    )
  }

  res.json(hasilPencarian)
})

app.get("/api/talents/:id", (req, res) => {
  const idTalent = parseInt(req.params.id)

  const talent = hololiveTalents.find((t) => t.id === idTalent)

  if (talent) {
    res.json({
      status: "success",
      data: talent,
    })
  } else {
    res.status(404).json({
      status: "error",
      message: "Error Tidak ada Data",
    })
  }
})

//POST Data
app.post("/api/talents", (req, res) => {
  const dataBaru = req.body

  if (!dataBaru.name || !dataBaru.gen) {
    return res.status(400).json({
      status: "error",
      message: "Data invalid",
    })
  }

  const idBaru = hololiveTalents[hololiveTalents.length - 1].id + 1

  const talentBaru = {
    id: idBaru,
    name: dataBaru.name,
    jp_name: dataBaru.jp_name || "-",
    gen: dataBaru.gen,
    height: dataBaru.height || "-",
  }

  hololiveTalents.push(talentBaru)

  res.status(201).json({
    status: "success",
    message: "Data Berhasil Di Input",
    data: talentBaru,
  })
})

app.listen(PORT, () => {
  console.log("server jalan")
})
