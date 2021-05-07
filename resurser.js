let resurser = {
  block: [
    {
      id: 0,
      namn: "Intet",
      textur: "https://en-programmerare.github.io/keminiraknaren/helttransparent.png",
      vagg: false,
      gangljud: [],
      interaktion: {
        typ: "ingen",
        varde: 0
      }
    },
    {
      id: 1,
      namn: "Golv",
      textur: "https://media.discordapp.net/attachments/818403607841996870/836170865741791232/floor_1.png",
      vagg: false,
      gangljud: [
        "https://cdn.discordapp.com/attachments/818403607841996870/836520619859771422/Ihopsattning_av_tva_ljud_projekt_WAV.wav",
        "https://cdn.discordapp.com/attachments/818403607841996870/836521296569303090/Ihopsattning_av_tre_ljud_projekt.wav"
      ],
      interaktion: {
        typ: "ingen",
        varde: 0
      }
    },
    {
      id: 2,
      namn: "Horisontell vägg",
      textur: "https://image.flaticon.com/icons/png/128/698/698684.png",
      vagg: true,
      gangljud: [],
      interaktion: {
        typ: "ingen",
        varde: 0
      }
    },
    {
      id: 3,
      namn: "Vertikal vägg",
      textur: "https://image.flaticon.com/icons/png/128/698/698684.png",
      vagg: true,
      gangljud: [],
      interaktion: {
        typ: "ingen",
        varde: 0
      }
    },
    {
      id: 4,
      namn: "Stängd horisontell dörr",
      textur: "https://media.discordapp.net/attachments/818403607841996870/836291672043159562/Metalldorr_ratt_pixlar.png",
      vagg: true,
      gangljud: [],
      interaktion: {
        typ: "bli-block",
        varde: 5
      }
    },
    {
      id: 5,
      namn: "Öppen horisontell dörr",
      textur: "https://media.discordapp.net/attachments/818403607841996870/837423527287324692/Metalldorr_oppen_ratt_pixlar.png",
      vagg: false,
      gangljud: [],
      interaktion: {
        typ: "bli-block",
        varde: 4
      }
    },
    {
      id: 6,
      namn: "Stängd vertikal dörr",
      textur: "https://iconarchive.com/download/i107955/google/noto-emoji-objects/62991-door.ico",
      vagg: true,
      gangljud: [],
      interaktion: {
        typ: "bli-block",
        varde: 7
      }
    },
    {
      id: 7,
      namn: "Öppen vertikal dörr",
      textur: "https://iconarchive.com/download/i33267/visualpharm/must-have/Log-Out.ico",
      vagg: false,
      gangljud: [],
      interaktion: {
        typ: "bli-block",
        varde: 6
      }
    },
    {
      id: 8,
      namn: "Edvansoldat (för test)",
      textur: "https://media.discordapp.net/attachments/783677919541198848/836216840639348826/unknown.png?width=478&height=450",
      vagg: false,
      gangljud: [],
      interaktion: {
        typ: "ingen",
        varde: 0
      }
    },
    {
      id: 9,
      namn: "Testgolv",
      textur: "https://media.discordapp.net/attachments/818403607841996870/836280107794300928/Metallgolv_forslag.png",
      vagg: false,
      gangljud: [],
      interaktion: {
        typ: "ingen",
        varde: 0
      }
    }
  ],
    

  entiteter: [
      {
          id: 0,
          namn: "Edvansoldat",
          halsa: 100,
          attacker: ["handgemang", "lasersvard", "pistol"],
          texturer: {
              rorelse: [
                  "https://media.discordapp.net/attachments/783677919541198848/836216840639348826/unknown.png?width=478&height=450",
                  "https://media.discordapp.net/attachments/783677919541198848/836216840639348826/unknown.png?width=478&height=450",
                  "https://media.discordapp.net/attachments/783677919541198848/836216840639348826/unknown.png?width=478&height=450",
                  "https://media.discordapp.net/attachments/783677919541198848/836216840639348826/unknown.png?width=478&height=450",
                  ],
              stilla: [
                  "https://media.discordapp.net/attachments/783677919541198848/836216840639348826/unknown.png?width=478&height=450",
                  "https://media.discordapp.net/attachments/783677919541198848/836216840639348826/unknown.png?width=478&height=450",
                  "https://media.discordapp.net/attachments/783677919541198848/836216840639348826/unknown.png?width=478&height=450",
                  "https://media.discordapp.net/attachments/783677919541198848/836216840639348826/unknown.png?width=478&height=450",
                  ]
          },
          ganggljud: []

      }
      
  ],
  attacker: [
      {
          namn: "lasersvard",
          vapen: ["lasersvard"]
      },
      {
          namn: "pistol",
          vapen: ["pistol"]
      },
      {
          namn: "handgemang",
          vapen: []
      }
  ],
  vapen: [
      {
          namn: "lasersvard",
          textur: "https://upload.wikimedia.org/wikipedia/commons/6/6e/PurpleLightsaber.png",
      },
      {
          namn: "pistol",
          textur: "https://cdn.pixabay.com/photo/2019/04/21/19/37/water-4144817_960_720.png"
      }
  ]
};