const talents = [
        // ====================
        // 🇯🇵 HOLOLIVE JAPAN
        // ====================
        // Gen 0
        { name: "Tokino Sora", jp_name: "ときのそら", gen: "JP - Gen 0", height: "160 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Tokino_Sora_pr-img_01.png" },
        { name: "Roboco san", jp_name: "ロボ子さん", gen: "JP - Gen 0", height: "154 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Robocosan_pr-img_01.png" },
        { name: "AZKi", jp_name: "AZKi", gen: "JP - Gen 0", height: "158 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/AZKi_pr-img_01.png" },
        { name: "Sakura Miko", jp_name: "さくらみこ", gen: "JP - Gen 0", height: "152 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Sakura_Miko_pr-img_01.png" },
        { name: "Hoshimachi Suisei", jp_name: "星街すいせい", gen: "JP - Gen 0", height: "160 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Hoshimachi_Suisei_pr-img_01.png" },

        // Gen 1
        { name: "Shirakami Fubuki", jp_name: "白上フブキ", gen: "JP - Gen 1", height: "155 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Shirakami_Fubuki_pr-img_01.png" },
        { name: "Natsuiro Matsuri", jp_name: "夏色まつり", gen: "JP - Gen 1", height: "152 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Natsuiro_Matsuri_pr-img_01.png" },
        { name: "Aki Rosenthal", jp_name: "アキ・ローゼンタール", gen: "JP - Gen 1", height: "162 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Aki_Rosenthal_pr-img_01.png" },
        { name: "Akai Haato", jp_name: "赤井はあと", gen: "JP - Gen 1", height: "154 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Akai_Haato_pr-img_01.png" },

        // Gen 2
        { name: "Murasaki Shion", jp_name: "紫咲シオン", gen: "JP - Gen 2", height: "145 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Murasaki_Shion_pr-img_01.png" },
        { name: "Nakiri Ayame", jp_name: "百鬼あやめ", gen: "JP - Gen 2", height: "152 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Nakiri_Ayame_pr-img_01.png" },
        { name: "Yuzuki Choco", jp_name: "癒月ちょこ", gen: "JP - Gen 2", height: "165 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Yuzuki_Choco_pr-img_01.png" },
        { name: "Oozora Subaru", jp_name: "大空スバル", gen: "JP - Gen 2", height: "154 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Oozora_Subaru_pr-img_01.png" },

        // Gamers
        { name: "Ookami Mio", jp_name: "大神ミオ", gen: "JP - Gamers", height: "165 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Ookami_Mio_pr-img_01.png" },
        { name: "Nekomata Okayu", jp_name: "猫又おかゆ", gen: "JP - Gamers", height: "152 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Nekomata_Okayu_pr-img_01.png" },
        { name: "Inugami Korone", jp_name: "戌神ころね", gen: "JP - Gamers", height: "156 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Inugami_Korone_pr-img_01.png" },

        // Gen 3 (Fantasy)
        { name: "Usada Pekora", jp_name: "兎田ぺこら", gen: "JP - Gen 3", height: "153 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Usada_Pekora_pr-img_01.png" },
        { name: "Shiranui Flare", jp_name: "不知火フレア", gen: "JP - Gen 3", height: "158 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Shiranui_Flare_pr-img_01.png" },
        { name: "Shirogane Noel", jp_name: "白銀ノエル", gen: "JP - Gen 3", height: "158 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Shirogane_Noel_pr-img_01.png" },
        { name: "Houshou Marine", jp_name: "宝鐘マリン", gen: "JP - Gen 3", height: "150 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Houshou_Marine_pr-img_01.png" },

        // Gen 4
        { name: "Amane Kanata", jp_name: "天音かなた", gen: "JP - Gen 4", height: "142 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Amane_Kanata_pr-img_01.png" },
        { name: "Tsunomaki Watame", jp_name: "角巻わため", gen: "JP - Gen 4", height: "151 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Tsunomaki_Watame_pr-img_01.png" },
        { name: "Tokoyami Towa", jp_name: "常闇トワ", gen: "JP - Gen 4", height: "150 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Tokoyami_Towa_pr-img_01.png" },
        { name: "Himemori Luna", jp_name: "姫森ルーナ", gen: "JP - Gen 4", height: "150 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Himemori_Luna_pr-img_01.png" },

        // Gen 5
        { name: "Yukihana Lamy", jp_name: "雪花ラミィ", gen: "JP - Gen 5", height: "158 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Yukihana_Lamy_pr-img_01.png" },
        { name: "Momosuzu Nene", jp_name: "桃鈴ねね", gen: "JP - Gen 5", height: "159 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Momosuzu_Nene_pr-img_01.png" },
        { name: "Shishiro Botan", jp_name: "獅白ぼたん", gen: "JP - Gen 5", height: "166 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Shishiro_Botan_pr-img_01.png" },
        { name: "Omaru Polka", jp_name: "尾丸ポルカ", gen: "JP - Gen 5", height: "153 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Omaru_Polka_pr-img_01.png" },

        // HoloX (Gen 6)
        { name: "La+ Darknesss", jp_name: "ラプラス・ダークネス", gen: "JP - HoloX", height: "139 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/La-Darknesss_pr-img_01.png" },
        { name: "Takane Lui", jp_name: "鷹嶺ルイ", gen: "JP - HoloX", height: "161 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Takane_Lui_pr-img_01.png" },
        { name: "Hakui Koyori", jp_name: "博衣こより", gen: "JP - HoloX", height: "153 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Hakui_Koyori_pr-img_01.png" },
        { name: "Sakamata Chloe", jp_name: "沙花叉クロヱ", gen: "JP - HoloX", height: "148 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Sakamata_Chloe_pr-img_01.png" },
        { name: "Kazama Iroha", jp_name: "風真いろは", gen: "JP - HoloX", height: "156 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Kazama_Iroha_pr-img_01.png" },

        // ====================
        // 🇮🇩 HOLOLIVE INDONESIA
        // ====================
        // Gen 1
        { name: "Ayunda Risu", jp_name: "アユンダ・リス", gen: "ID - Gen 1", height: "153 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Ayunda_Risu_pr-img_01.png" },
        { name: "Moona Hoshinova", jp_name: "ムーナ・ホシノヴァ", gen: "ID - Gen 1", height: "165 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Moona_Hoshinova_pr-img_01.png" },
        { name: "Airani Iofifteen", jp_name: "アイラニ・イオフィフティーン", gen: "ID - Gen 1", height: "150 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Airani_Iofifteen_pr-img_01.png" },
        // Gen 2
        { name: "Kureiji Ollie", jp_name: "クレイジー・オリー", gen: "ID - Gen 2", height: "162 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Kureiji_Ollie_pr-img_01.png" },
        { name: "Anya Melfissa", jp_name: "アーニャ・メルフィッサ", gen: "ID - Gen 2", height: "147 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Anya_Melfissa_pr-img_01.png" },
        { name: "Pavolia Reine", jp_name: "パヴォリア・レイネ", gen: "ID - Gen 2", height: "172 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Pavolia_Reine_pr-img_01.png" },
        // Gen 3
        { name: "Vestia Zeta", jp_name: "ベスティア・ゼータ", gen: "ID - Gen 3", height: "155 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Vestia_Zeta_pr-img_01.png" },
        { name: "Kaela Kovalskia", jp_name: "カエラ・コヴァルスキア", gen: "ID - Gen 3", height: "173 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Kaela_Kovalskia_pr-img_01.png" },
        { name: "Kobo Kanaeru", jp_name: "こぼ・かなえる", gen: "ID - Gen 3", height: "150 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Kobo_Kanaeru_pr-img_01.png" },

        // ====================
        // 🇺🇸 HOLOLIVE ENGLISH
        // ====================
        // Myth
        { name: "Mori Calliope", jp_name: "森カリオペ", gen: "EN - Myth", height: "167 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Mori_Calliope_pr-img_01.png" },
        { name: "Takanashi Kiara", jp_name: "小鳥遊キアラ", gen: "EN - Myth", height: "165 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Takanashi_Kiara_pr-img_01.png" },
        { name: "Ninomae Ina'nis", jp_name: "一伊那尓栖", gen: "EN - Myth", height: "157 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Ninomae_Inanis_pr-img_01.png" },
        { name: "Gawr Gura", jp_name: "がうる・ぐら", gen: "EN - Myth", height: "141 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Gawr_Gura_pr-img_01.png" },

        // Promise (Council + Hope)
        { name: "IRyS", jp_name: "IRyS", gen: "EN - Promise", height: "166 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/IRyS_pr-img_01.png" },
        { name: "Ceres Fauna", jp_name: "セレス・ファウナ", gen: "EN - Promise", height: "164 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Ceres_Fauna_pr-img_01.png" },
        { name: "Ouro Kronii", jp_name: "オーロ・クロニー", gen: "EN - Promise", height: "168 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Ouro_Kronii_pr-img_01.png" },
        { name: "Nanashi Mumei", jp_name: "七詩ムメイ", gen: "EN - Promise", height: "156 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Nanashi_Mumei_pr-img_01.png" },
        { name: "Hakos Baelz", jp_name: "ハコス・ベールズ", gen: "EN - Promise", height: "149 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Hakos_Baelz_pr-img_01.png" },

        // Advent
        { name: "Shiori Novella", jp_name: "シオリ・ノヴェラ", gen: "EN - Advent", height: "153 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/07/Shiori_Novella_pr-img_01.png" },
        { name: "Koseki Bijou", jp_name: "古石ビジュー", gen: "EN - Advent", height: "140 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/07/Koseki_Bijou_pr-img_01.png" },
        { name: "Nerissa Ravencroft", jp_name: "ネリッサ・レイヴンクロフト", gen: "EN - Advent", height: "175 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/07/Nerissa_Ravencroft_pr-img_01.png" },
        { name: "Fuwawa Abysgard", jp_name: "フワワ・アビスガード", gen: "EN - Advent", height: "167 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/07/Fuwawa_Abysgard_pr-img_01.png" },
        { name: "Mococo Abysgard", jp_name: "モココ・アビスガード", gen: "EN - Advent", height: "167 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/07/Mococo_Abysgard_pr-img_01.png" },

        // Justice
        { name: "Elizabeth Rose Bloodflame", jp_name: "エリザベス・ローズ・ブラッドフレイム", gen: "EN - Justice", height: "165 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2024/06/Elizabeth_Rose_Bloodflame_pr-img_01.png" },
        { name: "Gigi Murin", jp_name: "ジジ・ムリン", gen: "EN - Justice", height: "149 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2024/06/Gigi_Murin_pr-img_01.png" },
        { name: "Cecilia Immergreen", jp_name: "セシリア・イマーグリーン", gen: "EN - Justice", height: "155 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2024/06/Cecilia_Immergreen_pr-img_01.png" },
        { name: "Raora Panthera", jp_name: "ラオーラ・パンテーラ", gen: "EN - Justice", height: "158 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2024/06/Raora_Panthera_pr-img_01.png" },

        // ====================
        // 🎹 HOLOLIVE DEV_IS
        // ====================
        // ReGLOSS
        { name: "Hiodoshi Ao", jp_name: "火威青", gen: "DEV_IS - ReGLOSS", height: "171 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/09/Hiodoshi_Ao_pr-img_01.png" },
        { name: "Otonose Kanade", jp_name: "音乃瀬奏", gen: "DEV_IS - ReGLOSS", height: "153 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/09/Otonose_Kanade_pr-img_01.png" },
        { name: "Ichijou Ririka", jp_name: "一条莉々華", gen: "DEV_IS - ReGLOSS", height: "162 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/09/Ichijou_Ririka_pr-img_01.png" },
        { name: "Juufuutei Raden", jp_name: "儒烏風亭らでん", gen: "DEV_IS - ReGLOSS", height: "159 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/09/Juufuutei_Raden_pr-img_01.png" },
        { name: "Todoroki Hajime", jp_name: "轟はじめ", gen: "DEV_IS - ReGLOSS", height: "155 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/09/Todoroki_Hajime_pr-img_01.png" },

        // FLOW GLOW
        { name: "Isalie", jp_name: "イザリー", gen: "DEV_IS - FLOW GLOW", height: "163 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2024/11/Isalie_pr-img_01.png" },
        { name: "Koganei Niko", jp_name: "小金井ニコ", gen: "DEV_IS - FLOW GLOW", height: "148 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2024/11/Koganei_Niko_pr-img_01.png" },
        { name: "Vivi Geidou", jp_name: " Vivi Geidou", gen: "DEV_IS - FLOW GLOW", height: "156 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2024/11/Vivi_Geidou_pr-img_01.png" },
        { name: "Suou Rurika", jp_name: "周防ルリカ", gen: "DEV_IS - FLOW GLOW", height: "154 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2024/11/Suou_Rurika_pr-img_01.png" },
        { name: "Kihatsu Cion", jp_name: "綺八シオン", gen: "DEV_IS - FLOW GLOW", height: "165 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2024/11/Kihatsu_Cion_pr-img_01.png" },

        // ====================
        // 🎓 ALUMNI (GRADUATED)
        // ====================
        // Karena mereka udah graduate, web resmi mungkin udah hapus fotonya.
        // Ini pake placeholder atau link arsip kalau ada.
        { name: "Kiryu Coco", jp_name: "桐生ココ", gen: "Alumni - JP 4", height: "180 cm", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/8/87/Kiryu_Coco_-_Portrait_01.png" },
        { name: "Uruha Rushia", jp_name: "潤羽るしあ", gen: "Alumni - JP 3", height: "143 cm", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/1/10/Uruha_Rushia_-_Portrait_01.png" },
        { name: "Minato Aqua", jp_name: "湊あくあ", gen: "Alumni - JP 2", height: "148 cm", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/cd/Minato_Aqua_-_Portrait_01.png" },
        { name: "Yozora Mel", jp_name: "夜空メル", gen: "Alumni - JP 1", height: "154 cm", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/5/5e/Yozora_Mel_-_Portrait_01.png" },
        { name: "Tsukumo Sana", jp_name: "九十九佐命", gen: "Alumni - EN Council", height: "169 cm", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/c9/Tsukumo_Sana_-_Portrait_01.png" },
        { name: "Magni Dezmond", jp_name: "マグニ・デズモンド", gen: "Alumni - EN Tempus", height: "185 cm", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/b/b3/Magni_Dezmond_-_Portrait_01.png" },
        { name: "Noir Vesper", jp_name: "ノワール・ヴェスパー", gen: "Alumni - EN Tempus", height: "188 cm", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/30/Noir_Vesper_-_Portrait_01.png" },
        { name: "A-chan", jp_name: "友人A", gen: "Alumni - Staff", height: "157 cm", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/b/b8/Yuujin_A_-_Portrait_01.png" },
        { name: "Watson Amelia", jp_name: "ワトソン・アメリア", gen: "Alumni - Affiliate", height: "150 cm", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/8/8e/Watson_Amelia_-_Portrait_01.png" },

        // ====================
        // 🏢 OFFICE STAFF
        // ====================
        { name: "YAGOO", jp_name: "谷郷元昭", gen: "Office - CEO", height: "170 cm", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/e/ef/Tanigo_Motoaki_-_Portrait_01.png" },
        { name: "Harusaki Nodoka", jp_name: "春先のどか", gen: "Office - Staff", height: "155 cm", image: "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Harusaki_Nodoka_pr-img_01.png" }
];

module.exports = talents;