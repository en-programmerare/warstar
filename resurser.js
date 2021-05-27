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
      textur: "https://media.discordapp.net/attachments/818403607841996870/843760279636803594/Konstig_vagg_2.png",
      vagg: true, //
      gangljud: [],
      interaktion: {
        typ: "ingen",
        varde: 0
      }
    },
    {
      id: 3,
      namn: "Vertikal vägg",
      textur: "https://media.discordapp.net/attachments/818403607841996870/847217227367186432/unknown.png",
        //Gammal: https://media.discordapp.net/attachments/818403607841996870/843760279636803594/Konstig_vagg_2.png
        //https://media.discordapp.net/attachments/818403607841996870/843756398361444352/Konstig_vagg.png
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
          namn: "Edvan soldier",
          halsa: 60,
          attacker: ["Fist fight", "Light saber", "Gun"],
          texturer: {
              rorelse: [
                 "https://media.discordapp.net/attachments/818403607841996870/840121614040694784/STA_STILL_FRAM_EDVAN.png",
                  "https://media.discordapp.net/attachments/818403607841996870/840127898751991848/STA_VANSTER_EDVAN.png",
                  "https://en-programmerare.github.io/keminiraknaren/pixil-frame-0%20(3).png",
                  "https://en-programmerare.github.io/keminiraknaren/STA_HOGER_EDVAN.webp"
                  ],
              stilla: [
 "https://media.discordapp.net/attachments/818403607841996870/840121614040694784/STA_STILL_FRAM_EDVAN.png",
                  "https://media.discordapp.net/attachments/818403607841996870/840127898751991848/STA_VANSTER_EDVAN.png",
                  "https://en-programmerare.github.io/keminiraknaren/pixil-frame-0%20(3).png",
                  "https://en-programmerare.github.io/keminiraknaren/STA_HOGER_EDVAN.webp"
                  ]
          },
          ganggljud: [],
          beteende: {
              ensam: {
                  typ: "ga-omkring",
                  varde: 1
              },
              spelare: {
                  typ: "forbered-strid",
                  varde: 0.9
              }
          }

      },
      {
          id: 1,
          namn: "Paj",
          halsa: 5,
          attacker: [],
          texturer: {
              rorelse: [
                  "https://lh3.google.com/u/0/ogw/ADGmqu_uSj00lup-wE9YHTKgyTsBXByRXPigXXfmYyz3=s32-c-mo",
                  "https://lh3.google.com/u/0/ogw/ADGmqu_uSj00lup-wE9YHTKgyTsBXByRXPigXXfmYyz3=s32-c-mo",
                  "https://lh3.google.com/u/0/ogw/ADGmqu_uSj00lup-wE9YHTKgyTsBXByRXPigXXfmYyz3=s32-c-mo",
                  "https://lh3.google.com/u/0/ogw/ADGmqu_uSj00lup-wE9YHTKgyTsBXByRXPigXXfmYyz3=s32-c-mo"
                  ],
              stilla: [
                  "https://lh3.google.com/u/0/ogw/ADGmqu_uSj00lup-wE9YHTKgyTsBXByRXPigXXfmYyz3=s32-c-mo",
                  "https://lh3.google.com/u/0/ogw/ADGmqu_uSj00lup-wE9YHTKgyTsBXByRXPigXXfmYyz3=s32-c-mo",
                  "https://lh3.google.com/u/0/ogw/ADGmqu_uSj00lup-wE9YHTKgyTsBXByRXPigXXfmYyz3=s32-c-mo",
                  "https://lh3.google.com/u/0/ogw/ADGmqu_uSj00lup-wE9YHTKgyTsBXByRXPigXXfmYyz3=s32-c-mo"
                  ]
          },
          ganggljud: [],
          beteende: {
              ensam: {
                  typ: "ga-omkring",
                  varde: 1
              },
              spelare: {
                  typ: "ga-omkring",
                  varde: 1
              }
          }

      },
      {
          id: 2,
          namn: "Monsterbråk",
          halsa: 8938934287343,
          attacker: [],
          texturer: {
              rorelse: [
                  "http://etc.usf.edu/clipart/37100/37135/frac_01-02_37135_lg.gif",
                  "http://etc.usf.edu/clipart/37100/37135/frac_01-02_37135_lg.gif",
                  "http://etc.usf.edu/clipart/37100/37135/frac_01-02_37135_lg.gif",
                  "http://etc.usf.edu/clipart/37100/37135/frac_01-02_37135_lg.gif"
                  ],
              stilla: [
                  "http://etc.usf.edu/clipart/37100/37135/frac_01-02_37135_lg.gif",
                  "http://etc.usf.edu/clipart/37100/37135/frac_01-02_37135_lg.gif",
                  "http://etc.usf.edu/clipart/37100/37135/frac_01-02_37135_lg.gif",
                  "http://etc.usf.edu/clipart/37100/37135/frac_01-02_37135_lg.gif"
                  ]
          },
          ganggljud: [],
          beteende: {
              ensam: {
                  typ: "forbered-strid",
                  varde: 0.2
              },
              spelare: {
                  typ: "forbered-strid",
                  varde: 0.2
              }
          }

      }
      
  ],
  attacker: [
      {
          namn: "Light saber",
          vapen: ["Light saber"],
          skada: 40,
          sannolikhet: 0.99,
          extra: [],
          supereffective: 0.3,
          animation: {
              typ: "spring",
              textur: "https://upload.wikimedia.org/wikipedia/commons/6/6e/PurpleLightsaber.png"
          }
      },
      {
          namn: "Gun",
          vapen: ["Gun"],
          skada: 30,
          sannolikhet: 0.8,
          extra: [],
          supereffective: 0,
          animation: {
              typ: "skott",
              textur: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Location_dot_red.svg/1024px-Location_dot_red.svg.png"
          }
          
      },
      {
          namn: "Fist fight",
          vapen: [],
          skada: 10,
          sannolikhet: 0.9,
          extra: [],
          supereffective: 0,
          animation: {
              typ: "spring",
              textur: "https://en-programmerare.github.io/keminiraknaren/helttransparent.png"
          }
          
      },
      {
          namn: "Jorge power",
          vapen: ["Jorge"],
          skada: 8938934287342,
          sannolikhet: 1,
          extra: [],
          supereffective: 1,
          animation: {
              typ: "magi",
              textur: ""
          }
      },
      {
          namn: "Toothbrush",
          vapen: ["Toothbrush"],
          skada: 31,
          sannolikhet: 1,
          extra: [],
          supereffective: 0,
          animation: {
              typ: "spring",
              textur: "https://cdn.pixabay.com/photo/2020/04/23/17/38/toothbrush-5083391_1280.png"
          }
          
      }
  ],
  vapen: [
      {
          id: 0,
          namn: "Light saber",
          textur: "https://upload.wikimedia.org/wikipedia/commons/6/6e/PurpleLightsaber.png",
      },
      {
          id: 1,
          namn: "Gun",
          textur: "https://cdn.pixabay.com/photo/2019/04/21/19/37/water-4144817_960_720.png"
      },
      {
          id: 2,
          namn: "Jorge",
          textur: "https://www.huddinge.se/ServeImage.ashx?image=/contentassets/b6ef38b911194cbda04d2377001bfab2/jorge-cardenas-calvo-2020.jpg&width=640&height=432&method=crop"
      },
      {
          id: 3,
          namn: "Toothbrush",
          textur: "https://cdn.pixabay.com/photo/2020/04/23/17/38/toothbrush-5083391_1280.png"
      }
  ]
};

function attackMedNamn(sokord) {
    for(let attack of resurser.attacker) {
        if(attack.namn === sokord)
            return attack;
    }
    return null;
}