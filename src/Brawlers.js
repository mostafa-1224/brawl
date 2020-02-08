import React,  { useState } from 'react';
import Brawler from './Brawler';

import './App.css';

  

function Brawlers() {

const items = {
  "items": [
      {
          "id": 16000000,
          "name": "SHELLY",
          "starPowers": [
              {
                  "id": 23000076,
                  "name": "Shell Shock"
              },
              {
                  "id": 23000135,
                  "name": "Band-Aid"
              }
          ]
      },
      {
          "id": 16000001,
          "name": "COLT",
          "starPowers": [
              {
                  "id": 23000077,
                  "name": "Slick Boots"
              },
              {
                  "id": 23000138,
                  "name": "Magnum Special"
              }
          ]
      },
      {
          "id": 16000002,
          "name": "BULL",
          "starPowers": [
              {
                  "id": 23000078,
                  "name": "Berserker"
              },
              {
                  "id": 23000137,
                  "name": "Tough Guy"
              }
          ]
      },
      {
          "id": 16000003,
          "name": "BROCK",
          "starPowers": [
              {
                  "id": 23000079,
                  "name": "Incendiary"
              },
              {
                  "id": 23000150,
                  "name": "Rocket No. Four"
              }
          ]
      },
      {
          "id": 16000004,
          "name": "RICO",
          "starPowers": [
              {
                  "id": 23000080,
                  "name": "Super Bouncy"
              },
              {
                  "id": 23000156,
                  "name": "Robo Retreat"
              }
          ]
      },
      {
          "id": 16000005,
          "name": "SPIKE",
          "starPowers": [
              {
                  "id": 23000081,
                  "name": "Fertilize"
              },
              {
                  "id": 23000151,
                  "name": "Curveball"
              }
          ]
      },
      {
          "id": 16000006,
          "name": "BARLEY",
          "starPowers": [
              {
                  "id": 23000082,
                  "name": "Medical Use"
              },
              {
                  "id": 23000158,
                  "name": "Extra Noxious"
              }
          ]
      },
      {
          "id": 16000007,
          "name": "JESSIE",
          "starPowers": [
              {
                  "id": 23000083,
                  "name": "Energize"
              },
              {
                  "id": 23000149,
                  "name": "Shocky"
              }
          ]
      },
      {
          "id": 16000008,
          "name": "NITA",
          "starPowers": [
              {
                  "id": 23000084,
                  "name": "Bear With Me"
              },
              {
                  "id": 23000136,
                  "name": "Hyper Bear"
              }
          ]
      },
      {
          "id": 16000009,
          "name": "DYNAMIKE",
          "starPowers": [
              {
                  "id": 23000085,
                  "name": "Dyna-Jump"
              },
              {
                  "id": 23000155,
                  "name": "Demolition"
              }
          ]
      },
      {
          "id": 16000010,
          "name": "EL PRIMO",
          "starPowers": [
              {
                  "id": 23000086,
                  "name": "El Fuego"
              },
              {
                  "id": 23000140,
                  "name": "Meteor Rush"
              }
          ]
      },
      {
          "id": 16000011,
          "name": "MORTIS",
          "starPowers": [
              {
                  "id": 23000087,
                  "name": "Creepy Harvest"
              },
              {
                  "id": 23000154,
                  "name": "Coiled Snake"
              }
          ]
      },
      {
          "id": 16000012,
          "name": "CROW",
          "starPowers": [
              {
                  "id": 23000088,
                  "name": "Extra Toxic"
              },
              {
                  "id": 23000143,
                  "name": "Carrion Crow"
              }
          ]
      },
      {
          "id": 16000013,
          "name": "POCO",
          "starPowers": [
              {
                  "id": 23000089,
                  "name": "Da Capo!"
              },
              {
                  "id": 23000144,
                  "name": "Screeching Solo"
              }
          ]
      },
      {
          "id": 16000014,
          "name": "BO",
          "starPowers": [
              {
                  "id": 23000090,
                  "name": "Circling Eagle"
              },
              {
                  "id": 23000148,
                  "name": "Snare a Bear"
              }
          ]
      },
      {
          "id": 16000015,
          "name": "PIPER",
          "starPowers": [
              {
                  "id": 23000091,
                  "name": "Ambush"
              },
              {
                  "id": 23000152,
                  "name": "Snappy Sniping"
              }
          ]
      },
      {
          "id": 16000016,
          "name": "PAM",
          "starPowers": [
              {
                  "id": 23000092,
                  "name": "Mama's Hug"
              },
              {
                  "id": 23000139,
                  "name": "Mama's Squeeze"
              }
          ]
      },
      {
          "id": 16000017,
          "name": "TARA",
          "starPowers": [
              {
                  "id": 23000093,
                  "name": "Black Portal"
              },
              {
                  "id": 23000160,
                  "name": "Healing Shade"
              }
          ]
      },
      {
          "id": 16000018,
          "name": "DARRYL",
          "starPowers": [
              {
                  "id": 23000094,
                  "name": "Steel Hoops"
              },
              {
                  "id": 23000157,
                  "name": "Rolling Reload"
              }
          ]
      },
      {
          "id": 16000019,
          "name": "PENNY",
          "starPowers": [
              {
                  "id": 23000099,
                  "name": "Last Blast"
              },
              {
                  "id": 23000142,
                  "name": "Balls of Fire"
              }
          ]
      },
      {
          "id": 16000020,
          "name": "FRANK",
          "starPowers": [
              {
                  "id": 23000104,
                  "name": "Power Grab"
              },
              {
                  "id": 23000153,
                  "name": "Sponge"
              }
          ]
      },
      {
          "id": 16000021,
          "name": "GENE",
          "starPowers": [
              {
                  "id": 23000109,
                  "name": "Magic Puffs"
              },
              {
                  "id": 23000159,
                  "name": "Spirit Slap"
              }
          ]
      },
      {
          "id": 16000022,
          "name": "TICK",
          "starPowers": [
              {
                  "id": 23000114,
                  "name": "Well Oiled"
              },
              {
                  "id": 23000161,
                  "name": "Automa-Tick Reload"
              }
          ]
      },
      {
          "id": 16000023,
          "name": "LEON",
          "starPowers": [
              {
                  "id": 23000119,
                  "name": "Smoke Trails"
              },
              {
                  "id": 23000141,
                  "name": "Invisiheal"
              }
          ]
      },
      {
          "id": 16000024,
          "name": "ROSA",
          "starPowers": [
              {
                  "id": 23000124,
                  "name": "Plant Life"
              },
              {
                  "id": 23000147,
                  "name": "Thorny Gloves"
              }
          ]
      },
      {
          "id": 16000025,
          "name": "CARL",
          "starPowers": [
              {
                  "id": 23000129,
                  "name": "Power Throw"
              },
              {
                  "id": 23000145,
                  "name": "Protective Pirouette"
              }
          ]
      },
      {
          "id": 16000026,
          "name": "BIBI",
          "starPowers": [
              {
                  "id": 23000134,
                  "name": "Home Run"
              },
              {
                  "id": 23000146,
                  "name": "Batting Stance"
              }
          ]
      },
      {
          "id": 16000027,
          "name": "8-BIT",
          "starPowers": [
              {
                  "id": 23000168,
                  "name": "Boosted Booster"
              },
              {
                  "id": 23000181,
                  "name": "Extra Life"
              }
          ]
      },
      {
          "id": 16000028,
          "name": "SANDY",
          "starPowers": [
              {
                  "id": 23000186,
                  "name": "Rude Sands"
              },
              {
                  "id": 23000187,
                  "name": "Healing Winds"
              }
          ]
      },
      {
          "id": 16000029,
          "name": "BEA",
          "starPowers": [
              {
                  "id": 23000192,
                  "name": "Insta Beeload"
              },
              {
                  "id": 23000193,
                  "name": "Honey Coat"
              }
          ]
      },
      {
          "id": 16000030,
          "name": "EMZ",
          "starPowers": [
              {
                  "id": 23000198,
                  "name": "Bad Karma"
              },
              {
                  "id": 23000199,
                  "name": "Hype"
              }
          ]
      },
      {
          "id": 16000031,
          "name": "MR. P",
          "starPowers": [
              {
                  "id": 23000204,
                  "name": "Handle With Care"
              }
          ]
      },
      {
          "id": 16000032,
          "name": "MAX",
          "starPowers": [
              {
                  "id": 23000210,
                  "name": "Super Charged"
              },
              {
                  "id": 23000211,
                  "name": "Run n' Gun"
              }
          ]
      }
  ]
}

const [brawlers] = useState({items});
  /*const fetchItems = async () => {
    const data = await fetch('https://api.brawlstars.com/v1/brawlers?Authorization=Bearer:%20{eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM2ODNjMDkxLWE0YjItNDAwMS04M2IyLTU2NDJjYjU2YjRiNiIsImlhdCI6MTU4MDg2NDM3OCwic3ViIjoiZGV2ZWxvcGVyL2NhM2FlMjdiLTkzY2YtZGE1OC1kMGY5LWQ5ODcyODEzMzg0ZSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTk3LjYwLjEwMi4xNjUiXSwidHlwZSI6ImNsaWVudCJ9XX0.BIVSiTL82uNRAldNdxe2rbkv_vi9xawXoNnvH2lulQ4p1z_6hF6mdhL8Zo4dNmzbomOdJxGtmP47hmvLjVSVnQ%20}', { mode: 'no-cors' });             
    //const list = await data.json();
    //console.log(list);
  }*/
  return(
    <div className="brawlers">
      {brawlers.items.items.map((item, index, id) => <Brawler key = {index} item = {item} index = {index} id = {item.id}/>)}
    </div>
  );
}


export default Brawlers;
