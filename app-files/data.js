var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-do-memorial",
      "name": "Entrada do Memorial",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2877.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0540121532038107,
          "pitch": 0.172351066818468,
          "rotation": 0,
          "target": "1-porta-de-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.628326452382252,
          "pitch": 0.14235107893307486,
          "title": "Memorial TJDFT",
          "quadroImg": "assets/memorial_tjdft.png"      // O quadro em si
        }
      ]
    },
    {
      "id": "1-porta-de-entrada",
      "name": "Porta de Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2865.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9767372806219896,
          "pitch": 0.34332856746333285,
          "rotation": 0,
          "target": "0-entrada-do-memorial"
        },
        {
          "yaw": 0.1173348679477293,
          "pitch": 0.40949645050478445,
          "rotation": 0,
          "target": "2-hall-de-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6453494681736416,
          "pitch": -0.09586382016306061,
          "title": "Prêmios 1",
          "quadroImg": "assets/prêmios-1.jpg"      // O quadro em si
        },
        {
          "yaw": -0.9905497718451901,
          "pitch": -0.10494076861798973,
          "title": "Prêmios 2",
          "quadroImg": "assets/prêmios-2.jpg"      // O quadro em si
        },
        {
          "yaw": -1.5154576738523833,
          "pitch": -0.09273094261187609,
          "title": "Prêmios 3",
          "quadroImg": "assets/prêmios-3.jpg"      // O quadro em si
        },
        {
          "yaw": -2.0434797461773826,
          "pitch": -0.06927802569286712,
          "title": "Prêmios 4",
            "quadroImg": "assets/prêmios-4.jpg"      // O quadro em si
        },
        {
          "yaw": 1.3623307340365258,
          "pitch": -0.28594498063375795,
          "title": "Deusa da Justiça",
          "etiquetaImg": "assets/Deusa da Justiça Informação.png", // A imagem da etiqueta
          "quadroImg": "assets/Deusa da Justiça.png"      // O quadro em si
        },
        {
          "yaw": -2.4994380989360145,
          "pitch": -0.21392003073689025,
          "title": "Acesso Negado",
          "etiquetaImg": "assets/Acesso Negado Informação.png", // A imagem da etiqueta
          "quadroImg": "assets/Acesso Negado.png"      // O quadro em si
        }
      ]
    },
    {
      "id": "2-hall-de-entrada",
      "name": "Hall de Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2820,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.985331665824182,
          "pitch": 0.42610588105322655,
          "rotation": 0,
          "target": "1-porta-de-entrada"
        },
        {
          "yaw": -1.418056946664482,
          "pitch": 0.38167518427169966,
          "rotation": 0,
          "target": "3-espao-de-exposio-inicial"
        },
        {
          "yaw": 0.6641145600761877,
          "pitch": 0.6190013608082374,
          "rotation": 0,
          "target": "18-hall-de-entrada--direita"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.13679069996249638,
          "pitch": -0.23075937246969502,
          "title": "Busto: Desembargadora Lila Pimenta Duarte",
          "etiquetaImg": "assets/Busto Desembargadora Lila Pimenta Duarte Informação.png", // A imagem da etiqueta
          "quadroImg": "assets/Busto Desembargadora Lila Pimenta Duarte.jpg"      // O quadro em si
        }
      ]
    },
    {
      "id": "3-espao-de-exposio-inicial",
      "name": "Espaço de Exposição Inicial",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2833.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.080486322206438,
          "pitch": 0.2767656170208532,
          "rotation": 0,
          "target": "2-hall-de-entrada"
        },
        {
          "yaw": -0.9474750619133125,
          "pitch": 0.6469501529448642,
          "rotation": 5.497787143782138,
          "target": "4-fotos-desembargadora-lila-pimenta-duarte"
        },
        {
          "yaw": 1.9599737090403355,
          "pitch": 0.24230961952907748,
          "rotation": 18.84955592153877,
          "target": "5-espao-de-exposio-desembargadores"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.108912005416217,
          "pitch": -0.2801220059606173,
          "title": "Festa Popular II",
          "etiquetaImg": "assets/Festa Popular II Informação.png", // A imagem da etiqueta
          "quadroImg": "assets/Festa Popular II.png"      // O quadro em si
        },
        {
          "yaw": -1.4225834870167446,
          "pitch": -0.3307939537445854,
          "title": "STF",
          "etiquetaImg": "assets/STF Informação.png", // A imagem da etiqueta
          "quadroImg": "assets/STF.png"   
        },
        {
          "yaw": -0.34593367156104904,
          "pitch": -0.2530397610532322,
          "title": "Escultura de Madeira - Deusa da Justiça",
          "etiquetaImg": "assets/Escultura de Madeira - Deusa da Justiça Informação.png", // A imagem da etiqueta
          "quadroImg": "assets/Escultura de Madeira - Deusa da Justiça.jpg"   
        },
        {
          "yaw": 0.3521821597544861,
          "pitch": -0.233188049192254,
          "title": "A Ariano",
          "etiquetaImg": "assets/A Ariano Informação.png", // A imagem da etiqueta
          "quadroImg": "assets/A Ariano.jpg"  
        },
        {
          "yaw": 1.5746966530068267,
          "pitch": -0.28350094968932993,
          "title": "Obras Diversas",
          "etiquetaImg": "assets/Obras Diversas Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Obras Diversas.jpg" 
        }
      ]
    },
    {
      "id": "4-fotos-desembargadora-lila-pimenta-duarte",
      "name": "Fotos Desembargadora Lila Pimenta Duarte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2878,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9706288278561743,
          "pitch": 0.5644713453158605,
          "rotation": 0,
          "target": "3-espao-de-exposio-inicial"
        },
        {
          "yaw": -2.6537535088150275,
          "pitch": 0.28679168559662216,
          "rotation": 5.497787143782138,
          "target": "5-espao-de-exposio-desembargadores"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6904141097433953,
          "pitch": 0.45390301659791277,
          "title": "Fotos Desembargadora Lila Pimenta Duarte 1",
          "quadroImg": "assets/Fotos Desembargadora Lila Pimenta Duarte 1.jpg"      // O quadro em si
        },
        {
          "yaw": -0.0720776563085419,
          "pitch": 0.5791339177780088,
          "title": "Fotos Desembargadora Lila Pimenta Duarte 2",
          "quadroImg": "assets/Fotos Desembargadora Lila Pimenta Duarte 2.jpg"      // O quadro em si
        },
        {
          "yaw": 0.5300841773211893,
          "pitch": 0.5134087797427149,
          "title": "Fotos Desembargadora Lila Pimenta Duarte 3",
          "quadroImg": "assets/Fotos Desembargadora Lila Pimenta Duarte 3.jpg"      // O quadro em si
        }
      ]
    },
    {
      "id": "5-espao-de-exposio-desembargadores",
      "name": "Espaço De Exposição Desembargadores",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2832.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0406666722407607,
          "pitch": 0.30131598681605354,
          "rotation": 0,
          "target": "3-espao-de-exposio-inicial"
        },
        {
          "yaw": -0.21758326248225934,
          "pitch": 0.46881752075299943,
          "rotation": 0,
          "target": "6-espao-de-exposio-maquete-tjdft-lateral-direita"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5488138949614054,
          "pitch": -0.43321432485328515,
          "title": "Desembargador Hugo",
          "quadroImg": "assets/Desembargador Hugo.jpg" 
        },
        {
          "yaw": 2.306313706682733,
          "pitch": -0.41917673638280384,
          "title": "Desembargadora Lila Pimenta Duarte",
          "quadroImg": "assets/Desembargadora Lila Pimenta Duarte.jpg" 
        },
        {
          "yaw": 1.2787618265220555,
          "pitch": 0.36317600838559194,
          "title": "Desembargador Lúcio Arantes",
          "quadroImg": "assets/Desembargador Lúcio Arantes.jpg" 
        },
        {
          "yaw": 2.4498847031340816,
          "pitch": 0.25243760747425803,
          "title": "Desembargador José Colombo",
          "quadroImg": "assets/Desembargador José Colombo.jpg" 
        }
      ]
    },
    {
      "id": "6-espao-de-exposio-maquete-tjdft-lateral-direita",
      "name": "Espaço de Exposição Maquete TJDFT Lateral Direita",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2821.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1347099510421597,
          "pitch": 0.46433683656138314,
          "rotation": 0,
          "target": "5-espao-de-exposio-desembargadores"
        },
        {
          "yaw": -1.2977717360358945,
          "pitch": 0.526249793997172,
          "rotation": 12.566370614359176,
          "target": "7-espao-de-exposio-bancada-inicial"
        },
        {
          "yaw": 0.7911599259335791,
          "pitch": 0.6357067856300507,
          "rotation": 11.780972450961727,
          "target": "16-espao-de-exposio-maquete-tjdft-posterior"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2155011036960648,
          "pitch": 0.048132527047553,
          "title": "Maquete TJDFT Lateral Direita",
          "quadroImg": "assets/Maquete TJDFT Lateral Direita.jpg" 
        }
      ]
    },
    {
      "id": "7-espao-de-exposio-bancada-inicial",
      "name": "Espaço de Exposição Bancada Inicial",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2887.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09012987718000431,
          "pitch": 0.41176855623208297,
          "rotation": 0,
          "target": "8-espao-de-exposio-maquete-tjdft-de-frente"
        },
        {
          "yaw": 1.7851349569157868,
          "pitch": 0.47705265706915156,
          "rotation": 0,
          "target": "6-espao-de-exposio-maquete-tjdft-lateral-direita"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7277288471202574,
          "pitch": 0.0770316278738008,
          "title": "Papeleta de Julgamento Des. Lila Pimenta Duarte",
          "quadroImg": "assets/Papeleta de Julgamento Des. Lila Pimenta Duarte.jpg" 
        },
        {
          "yaw": -3.0853454584024878,
          "pitch": 0.10334924062846618,
          "title": "Documentos Históricos",
          "etiquetaImg": "assets/catedradojuizinformacao.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Documentos Históricos.jpg" 
        },
        {
          "yaw": -2.5939679548555397,
          "pitch": 0.08802403530063785,
          "title": "Máquina de Escrever",
          "quadroImg": "assets/Máquina De Escrever.jpg" 
        },
        {
          "yaw": 3.0276618811761864,
          "pitch": -0.24770543149768187,
          "title": "Crucifixo",
          "etiquetaImg": "assets/crucifixoinformacao.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Crucifixo.jpg"
        },
        {
          "yaw": -2.4680537146996855,
          "pitch": -0.26055393076574695,
          "title": "São João Bosco",
          "etiquetaImg": "assets/São João Bosco Informação.png", // A imagem da etiqueta
          "quadroImg": "assets/São João Bosco.png"      // O quadro em si
        },
        {
          "yaw": -1.9335299503546715,
          "pitch": 0.45946659696192427,
          "title": "Mobiliário Histórico 1",
          "quadroImg": "assets/Mobiliário Histórico 1.jpg"      // O quadro em si
        },
        {
          "yaw": -1.1801824905545768,
          "pitch": 0.04269496175131948,
          "title": "Caso Mário Eugênio",
          "quadroImg": "assets/Caso Mário Eugênio.jpg" 
        },
        {
          "yaw": 0.8768641449344656,
          "pitch": 0.07623176709049773,
          "title": "Maquete TJDFT Frente",
          "quadroImg": "assets/Maquete TJDFT Frente.jpg" 
        },
        {
          "yaw": -0.6498670637153072,
          "pitch": -0.013914102476093149,
          "title": "Queixa-crime contra Darcy Ribeiro",
          "quadroImg": "assets/Queixa-crime contra Darcy Ribeiro.jpg" 
        }
      ]
    },
    {
      "id": "8-espao-de-exposio-maquete-tjdft-de-frente",
      "name": "Espaço de Exposição Maquete TJDFT de Frente",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2848,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.135940625555964,
          "pitch": 0.5537806794529399,
          "rotation": 0,
          "target": "7-espao-de-exposio-bancada-inicial"
        },
        {
          "yaw": 0.7113466183572736,
          "pitch": 0.43029786594036246,
          "rotation": 6.283185307179586,
          "target": "10-espao-de-exposio-casos-criminais"
        },
        {
          "yaw": 0.028483303704852858,
          "pitch": 0.24040196074794729,
          "rotation": 0,
          "target": "9-espao-de-exposio-fontes-antigas"
        },
      ],
      "infoHotspots": [
        {
          "yaw": 1.8149368590065285,
          "pitch": 0.21232908029736564,
          "title": "Maquete TJDFT Frente",
          "quadroImg": "assets/Maquete TJDFT Frente.jpg" 
        },
        {
          "yaw": -2.288445846563281,
          "pitch": 0.031322909580513425,
          "title": "Caso Mário Eugênio",
           "quadroImg": "assets/Caso Mário Eugênio.jpg" 
        },
        {
          "yaw": -1.5546417742385952,
          "pitch": 0.050794141958043326,
          "title": "Queixa-crime contra Darcy Ribeiro",
           "quadroImg": "assets/Queixa-crime contra Darcy Ribeiro.jpg" 
        },
        {
          "yaw": -0.7705015214639008,
          "pitch": 0.021330038013250174,
          "title": "Inventário Des. Hugo Auler",
         "quadroImg": "assets/Inventário Des. Hugo Auler.jpg" 
        },
        {
          "yaw": 0.48086442170720467,
          "pitch": 0.03312677419563492,
          "title": "Caso Índio Galdino",
         "quadroImg": "assets/Caso Índio Galdino.jpg" 
        },
        {
          "yaw": 0.7376509376429254,
          "pitch": 0.008995117795626228,
          "title": "Caso A Festa da Rockonha",
         "quadroImg": "assets/Caso A Festa da Rockonha.jpg" 
        }
      ]
    },
    {
      "id": "9-espao-de-exposio-fontes-antigas",
      "name": "Espaço de Exposição Fontes Antigas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2857,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2463625130058382,
          "pitch": 0.5391485544576788,
          "rotation": 0,
          "target": "10-espao-de-exposio-casos-criminais"
        },
        {
          "yaw": -3.1053811709895243,
          "pitch": 0.40153710269449583,
          "rotation": 0,
          "target": "8-espao-de-exposio-maquete-tjdft-de-frente"
        },
        {
          "yaw": 0.113912208622585,
          "pitch": 0.3901720091460277,
          "rotation": 0,
          "target": "11-sala-da-presidncia"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.623043265372341,
          "pitch": 0.2840017985268073,
          "title": "Caso Índio Galdino",
         "quadroImg": "assets/Caso Índio Galdino.jpg" 
        },
        {
          "yaw": 1.6451527824636534,
          "pitch": 0.06404471832705916,
          "title": "Caso A Festa da Rockonha",
         "quadroImg": "assets/Caso A Festa da Rockonha.jpg"
        },
        {
          "yaw": -1.3653112892099806,
          "pitch": -0.3664768348133478,
          "title": "Fontes Tipográficas Antigas",
         "quadroImg": "assets/Fontes Tipográficas Antigas.jpg"
        },
        {
          "yaw": -1.9715802786224383,
          "pitch": 0.2510941596378302,
          "title": "Fragmentadora de Papel Antiga",
         "quadroImg": "assets/Fragmentadora de Papel Antiga.jpg"
        },
        {
          "yaw": -1.3471339684234742,
          "pitch": 0.3552811334951862,
          "title": "Gravador para Fitas de Rolo",
         "quadroImg": "assets/Gravador para Fitas de Rolo.jpg"
        },
        {
          "yaw": 1.1006905784942482,
          "pitch": 0.1571949031183344,
          "title": "Caso Silvio Hollembach",
         "quadroImg": "assets/Caso Silvio Hollembach.jpg"
        },
        {
          "yaw": 1.2927590153702742,
          "pitch": 0.04393194873666317,
          "title": "Caso Arnon De Mello",
         "quadroImg": "assets/Caso Arnon De Mello.jpg"
        }
      ]
    },
    {
      "id": "10-espao-de-exposio-casos-criminais",
      "name": "Espaço de Exposição Casos Criminais",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2842,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9232881291178661,
          "pitch": 0.4525402226459114,
          "rotation": 0.7853981633974483,
          "target": "9-espao-de-exposio-fontes-antigas"
        },
        {
          "yaw": -2.4607191755314677,
          "pitch": 0.3968028540047257,
          "rotation": 5.497787143782138,
          "target": "8-espao-de-exposio-maquete-tjdft-de-frente"
        },
        {
          "yaw": 1.3463810191378265,
          "pitch": 0.4538996649116207,
          "rotation": 4.71238898038469,
          "target": "17-espao-de-exposio-imisso-de-posse-de-terreno-no-ncleo-bandeirante"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.33345349233416144,
          "pitch": 0.17558456828017732,
          "title": "Caso Índio Galdino",
         "quadroImg": "assets/Caso Índio Galdino.jpg"
        },
        {
          "yaw": 0.40647372898306955,
          "pitch": 0.15506099859399214,
          "title": "Caso A Festa da Rockonha",
         "quadroImg": "assets/Caso A Festa da Rockonha.jpg"
        },
        {
          "yaw": 3.086505718001648,
          "pitch": 0.12847811161856626,
          "title": "Maquete TJDFT Lateral Esquerda",
         "quadroImg": "assets/Maquete TJDFT Lateral Esquerda.jpg"
        }
      ]
    },
    {
      "id": "11-sala-da-presidncia",
      "name": "Sala da Presidência",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2856.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9810215338296775,
          "pitch": 0.4593581625417489,
          "rotation": 0,
          "target": "9-espao-de-exposio-fontes-antigas"
        },
        {
          "yaw": 1.0097042651665653,
          "pitch": 0.3675396613116746,
          "rotation": 5.497787143782138,
          "target": "12-entrada-do-espao-histria-oral"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9195378893970485,
          "pitch": 0.12248749890158805,
          "title": "Sala de Chá TJDFT",
          "etiquetaImg": "assets/tjdftchainformacao.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Sala de Chá TJDFT.jpg"      // O quadro em si
        },
        {
          "yaw": -0.15385278917373135,
          "pitch": -0.32061956336491626,
          "title": "Deusa da Justiça Entalhe de Madeira",
          "etiquetaImg": "assets/deusadajusticainformacao.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Deusa da Justiça Entalhe de Madeira.png"    
        },
        {
          "yaw": -0.48741451586937323,
          "pitch": -0.03512457684933601,
          "title": "Des. Hugo Auler e Des. Joaquim de Sousa",
          "quadroImg": "assets/Des. Hugo Auler e Des. Joaquim de Sousa.jpg" 
        },
        {
          "yaw": -0.0350555115089346,
          "pitch": -0.03608607956224397,
          "title": "Cadeira Histórica",
          "quadroImg": "assets/Cadeira Histórica.jpg" 
        },
        {
          "yaw": 0.4219746681735117,
          "pitch": -0.04006235059800467,
          "title": "Relíquia de Documento",
          "quadroImg": "assets/Relíquia de Documento.jpg" 
        },
        {
          "yaw": 2.765534548268917,
          "pitch": 0.0990194726920457,
          "title": "Caso Silvio Hollembach",
          "quadroImg": "assets/Caso Silvio Hollembach.jpg" 
        },
        {
          "yaw": 2.3957040855558525,
          "pitch": 0.042831500804332734,
          "title": "Caso Arnon De Mello",
          "quadroImg": "assets/Caso Arnon De Mello.jpg" 
        },
        {
          "yaw": -1.5728439321152283,
          "pitch": -0.38805313581351086,
          "title": "Sem Título",
          "etiquetaImg": "assets/semtituloinformacao.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Sem Título 2.jpg"      // O quadro em si
        },
        {
          "yaw": -2.212045093358835,
          "pitch": 0.1457436483470289,
          "title": "Caso Ana Lídia",
          "quadroImg": "assets/Caso Ana Lídia.jpg"
        },
        {
          "yaw": -1.754801377716749,
          "pitch": 0.21754009479878533,
          "title": "Inventário de Juscelino Kubitschek",
          "quadroImg": "assets/Invetário de Juscelino Kubitschek.jpg"
        }
      ]
    },
    {
      "id": "12-entrada-do-espao-histria-oral",
      "name": "Entrada do Espaço História Oral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2817.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10625971262073364,
          "pitch": 0.2916757997698234,
          "rotation": 0,
          "target": "13-espao-histria-oral"
        },
        {
          "yaw": -2.276613304892603,
          "pitch": 0.41838948054699543,
          "rotation": 0,
          "target": "11-sala-da-presidncia"
        },
        {
          "yaw": 2.8429068150712062,
          "pitch": 0.28458437093563305,
          "rotation": 0,
          "target": "17-espao-de-exposio-imisso-de-posse-de-terreno-no-ncleo-bandeirante"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5582084999953665,
          "pitch": 0.10775876254908034,
          "title": "Telefone de Disco",
          "etiquetaImg": "assets/saladapresidenciatelefoneinformacao.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Telefone de Disco.jpg"
        },
        {
          "yaw": 0.886621866628726,
          "pitch": -0.05327309590469653,
          "title": "Processo contra Oscar Niemeyer",
          "quadroImg": "assets/Processo contra Oscar Niemeyer.jpg"
        },
        {
          "yaw": 1.5416689059025224,
          "pitch": -0.0780797482130744,
          "title": "Demolição da Caixa D'água de Taguatinga",
          "quadroImg": "assets/Demolição da Caixa D'água de Taguatinga.jpg"
        },
        {
          "yaw": 2.22102730397285,
          "pitch": -0.07746581704739164,
          "title": "Suposto Roubo do diamante 007",
          "quadroImg": "assets/Suposto Roubo de Diamante 007.jpg"
        },
        {
          "yaw": 1.5047613726374145,
          "pitch": -0.552078393652609,
          "title": "Quadro Maravilhas do Mundo",
          "quadroImg": "assets/Quadro Maravilhas do Mundo.png"
        }
      ]
    },
    {
      "id": "13-espao-histria-oral",
      "name": "Espaço História Oral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2844.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0180740186000232,
          "pitch": 0.4423870887136392,
          "rotation": 0,
          "target": "12-entrada-do-espao-histria-oral"
        },
        {
          "yaw": -0.7751382528301427,
          "pitch": 0.3685906529747349,
          "rotation": 0,
          "target": "14-espao-de-entrevista-histria-oral"
        },
        {
          "yaw": 1.7798525973920594,
          "pitch": 0.3496215997265857,
          "rotation": 1.5707963267948966,
          "target": "22-espao-de-exposio-quadro-com-tapearia"
        },
        { "yaw": 0.581959889128969,
          "pitch": 0.47553521234800655,
          "rotation": 0,
          "target": "15-espao-da-toga---histria-oral"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1790017732361147,
          "pitch": 0.03266021450578016,
          "title": "Indenização por Acidente de Trabalho",
          "quadroImg": "assets/Indenização por Acidente de Trabalho.jpg"      // O quadro em si
        },
        {
          "yaw": 2.4531533430910297,
          "pitch": 0.3607277675817109,
          "title": "Cadeira pés-de-palito",
          "quadroImg": "assets/Cadeira pés-de-palito.jpg"  
        },
        {
          "yaw": 1.5130544128781658,
          "pitch": -0.1783949357491732,
          "title": "Entalhe em Madeira",
          "etiquetaImg": "assets/Entalhe em Madeira Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Entalhe em Madeira.png"      // O quadro em si
        }
      ]
    },
    {
      "id": "14-espao-de-entrevista-histria-oral",
      "name": "Espaço de Entrevista História Oral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2813.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9873580682133429,
          "pitch": 0.4214355324071519,
          "rotation": 0,
          "target": "13-espao-histria-oral"
        },
        {
          "yaw": -1.6488477111384299,
          "pitch": 0.2973348903015207,
          "rotation": 0,
          "target": "15-espao-da-toga---histria-oral"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1277278194064806,
          "pitch": -0.22342920046981973,
          "title": "Quadro Juscelino Kubitschek",
          "etiquetaImg": "assets/quadrojkinformacao.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Quadro Juscelino Kubitschek.png"      // O quadro em si
        },
        {
          "yaw": 0.3785993067173301,
          "pitch": -0.1725823184057358,
          "title": "Estátua Deusa da Justiça",
          "etiquetaImg": "assets/deusadajusticagessoinformacao.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Estátua Deusa da Justiça.jpg"      // O quadro em si
        },
        {
          "yaw": -0.20289063251138728,
          "pitch": 0.10705466383865314,
          "title": "Martelo da Justiça",
          "quadroImg": "assets/Martelo da Justiça.jpg"      // O quadro em si
        },
        {
          "yaw": 0.1997184097483462,
          "pitch": 0.06939857184474896,
          "title": "Balança da Justiça",
          "quadroImg": "assets/Balança da Justiça.jpg"      // O quadro em si
        },
        {
          "yaw": 2.968641043934129,
          "pitch": 0.07816388536428498,
          "title": "Objeto Histórico",
          "quadroImg": "assets/Objeto Histórico.jpg"      // O quadro em si
        }
      ]
    },
    {
      "id": "15-espao-da-toga---histria-oral",
      "name": "Espaço da Toga - História Oral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2857,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7186709102668853,
          "pitch": 0.4639331691678805,
          "rotation": 0,
          "target": "13-espao-histria-oral"
        },
        {
          "yaw": -1.425894669156552,
          "pitch": 0.3714412811664616,
          "rotation": 0,
          "target": "14-espao-de-entrevista-histria-oral"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7482850364145612,
          "pitch": 0.5152612911568948,
          "title": "Mobiliário Histórico - história oral",
          "quadroImg": "assets/Mobiliário Histórico - história oral.jpg"      // O quadro em si
        },
        {
          "yaw": 1.3669903825953504,
          "pitch": 0.4755918718846086,
          "title": "Sala de Sessões Plenárias 1",
          "quadroImg": "assets/Sala de Sessões Plenárias 1.jpg"      // O quadro em si
        },
        {
          "yaw": -0.8346984224818907,
          "pitch": -0.12976123757154312,
          "title": "Toga - Des. Lila Pimenta Duarte",
          "quadroImg": "assets/Toga - Des. Lila Pimenta Duarte.jpg" 
        },
        {
          "yaw": -0.20308251040620462,
          "pitch": -0.24537439575940745,
          "title": "Toga Juiz Hector Valverde",
          "quadroImg": "assets/Toga Juiz Hector Valverde.jpg" 
        },
        {
          "yaw": 0.5996314870409662,
          "pitch": -0.14754848132328746,
          "title": "Toga de Gala - Des. Maria Thereza",
          "quadroImg": "assets/Toga de Gala - Des. Maria Thereza.jpg" 
        },
        {
          "yaw": 0.46640000489867717,
          "pitch": 0.3956027617093856,
          "title": "Toga de Gala - Des. Maria Thereza Informação",
          "quadroImg": "assets/Toga de Gala - Des. Maria Thereza Informação.jpg" 
        },
        {
          "yaw": -0.22263276954921452,
          "pitch": 0.4682982498136141,
          "title": "Toga Juiz Hector Valverde Informação",
          "quadroImg": "assets/Toga Juiz Hector Valverde Informação.jpg" 
        },
        {
          "yaw": -0.7716908279980927,
          "pitch": 0.31097932175842935,
          "title": "Toga - Des. Lila Pimenta Duarte Informação",
          "quadroImg": "assets/Toga - Des. Lila Pimenta Duarte Informação.jpg" 
        },
        {
          "yaw": 2.479344436715314,
          "pitch": 0.346178572849702,
          "title": "Cadeira pé palito",
          "quadroImg": "assets/Cadeira pé palito.jpg" 
        },
        {
          "yaw": 1.900281839313081,
          "pitch": 0.4488241336733818,
          "title": "Sala de Sessões Plenárias 2",
          "quadroImg": "assets/Sala de Sessões Plenárias 2.jpg" 
        }
      ]
    },
    {
      "id": "16-espao-de-exposio-maquete-tjdft-posterior",
      "name": "Espaço de Exposição Maquete TJDFT posterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2855,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.704011513421504,
          "pitch": 0.45101454559121734,
          "rotation": 6.283185307179586,
          "target": "5-espao-de-exposio-desembargadores"
        },
        {
          "yaw": -1.434529102841239,
          "pitch": 0.4062047321999671,
          "rotation": 6.283185307179586,
          "target": "7-espao-de-exposio-bancada-inicial"
        },
        {
          "yaw": 0.12503070564446617,
          "pitch": 0.3483230336686276,
          "rotation": 0,
          "target": "17-espao-de-exposio-imisso-de-posse-de-terreno-no-ncleo-bandeirante"
        },
        {
          "yaw": 1.7613395897870614,
          "pitch": 0.40621189508353694,
          "rotation": 0,
          "target": "20-espao-de-exposio-roda-viva"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5588834622600505,
          "pitch": 0.11922721452344831,
          "title": "Maquete TJDFT posterior",
          "quadroImg": "assets/Maquete TJDFT posterior.jpg" 
        },
        {
          "yaw": 2.5908844497012025,
          "pitch": -0.4185546231776236,
          "title": "Roda Viva",
          "etiquetaImg": "assets/Roda Viva Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Roda Viva.png"      // O quadro em si
        },
        {
          "yaw": 2.485044798270759,
          "pitch": 0.07133686514579018,
          "title": "Habeas Corpus e Mandado de Segurança",
          "quadroImg": "assets/Habeas Corpus e Mandado de Segurança.jpg" 
        },
        {
          "yaw": 1.014533266345973,
          "pitch": 0.09411019856313274,
          "title": "Primeria Sentença Criminal",
          "quadroImg": "assets/Primeria Sentença Criminal.jpg" 
        }
      ]
    },
    {
      "id": "17-espao-de-exposio-imisso-de-posse-de-terreno-no-ncleo-bandeirante",
      "name": "Espaço de Exposição Imissão de Posse de Terreno no Núcleo Bandeirante",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2837,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10039726782975222,
          "pitch": 0.21604991442197274,
          "rotation": 0,
          "target": "12-entrada-do-espao-histria-oral"
        },
        {
          "yaw": -3.0341769815185486,
          "pitch": 0.43987649553566754,
          "rotation": 0,
          "target": "16-espao-de-exposio-maquete-tjdft-posterior"
        },
        {
          "yaw": 1.3810855342795882,
          "pitch": 0.4217527694560701,
          "rotation": 6.283185307179586,
          "target": "21-espao-de-exposio-tori-e-pingente-catedral"
        },
        {
          "yaw": -1.5119002695937773,
          "pitch": 0.638624265875583,
          "rotation": 0,
          "target": "10-espao-de-exposio-casos-criminais"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.046572931796671,
          "pitch": 0.14355340108924253,
          "title": "Imissão de Posse de Terreno no Núcleo Bandeirante",
          "quadroImg": "assets/Imissão de Posse de Terreno no Núcleo Bandeirante.jpg"      // O quadro em si
        },
        {
          "yaw": 0.7237681097763176,
          "pitch": 0.06242606396276251,
          "title": "Crime Passional",
          "quadroImg": "assets/Crime Passional.jpg" 
        },
        {
          "yaw": -1.0726496216068302,
          "pitch": 0.19512385275947253,
          "title": "Caso Índio Galdino",
          "quadroImg": "assets/Caso Índio Galdino.jpg"
        },
        {
          "yaw": -0.7630580258044262,
          "pitch": 0.3065688043003689,
          "title": "Caso A Festa da Rockonha",
         "quadroImg": "assets/Caso A Festa da Rockonha.jpg"
        }
      ]
    },
    {
      "id": "18-hall-de-entrada--direita",
      "name": "Hall de Entrada à Direita",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2817,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.411591254226039,
          "pitch": 0.6496161901666042,
          "rotation": 5.497787143782138,
          "target": "2-hall-de-entrada"
        },
        {
          "yaw": -1.5836576288907889,
          "pitch": 0.2795622162317031,
          "rotation": 0,
          "target": "3-espao-de-exposio-inicial"
        },
        {
          "yaw": 0.11337437329484246,
          "pitch": 0.4523842916308407,
          "rotation": 0,
          "target": "19-espao-de-exposio-menina-massai"
        },
        {
          "yaw": 1.9389251925456534,
          "pitch": 0.3935876128537892,
          "rotation": 0,
          "target": "23-espao-de-exposio-congresso"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7171531210020152,
          "pitch": -0.20014796522573342,
          "title": "Busto: Des. Lila Pimenta Duarte",
          "etiquetaImg": "assets/Busto Desembargadora Lila Pimenta Duarte Informação.png", // A imagem da etiqueta
          "quadroImg": "assets/Busto Desembargadora Lila Pimenta Duarte.jpg"      // O quadro em si
        },
        {
          "yaw": 0.8179469819116516,
          "pitch": -0.10194909108733086,
          "title": "Congresso",
          "quadroImg": "assets/Congresso.jpg"
        }
      ]
    },
    {
      "id": "19-espao-de-exposio-menina-massai",
      "name": "Espaço de Exposição Menina Massai",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2880,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0243594608431135,
          "pitch": 0.4281852574254117,
          "rotation": 0,
          "target": "18-hall-de-entrada--direita"
        },
        {
          "yaw": 0.09473374682328028,
          "pitch": 0.3526066312371725,
          "rotation": 0,
          "target": "20-espao-de-exposio-roda-viva"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8718874389597744,
          "pitch": -0.28005722373404573,
          "title": "Menina Massai",
          "etiquetaImg": "assets/Menina Massai Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Menina Massai.png"      // O quadro em si
        },
        {
          "yaw": 1.5424401680475617,
          "pitch": 0.1837529552409496,
          "title": "Matérias Jornalísticas",
          "quadroImg": "assets/Matérias Jornalísticas.jpg"      // O quadro em si
        }
      ]
    },
    {
      "id": "20-espao-de-exposio-roda-viva",
      "name": "Espaço de Exposição Roda Viva",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2828,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09862614026807748,
          "pitch": 0.49857139269418127,
          "rotation": 0,
          "target": "21-espao-de-exposio-tori-e-pingente-catedral"
        },
        {
          "yaw": -3.01721004393918,
          "pitch": 0.4045740734276748,
          "rotation": 0,
          "target": "19-espao-de-exposio-menina-massai"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.254660771976784,
          "pitch": -0.21440644506033912,
          "title": "Roda Viva",
          "etiquetaImg": "assets/Roda Viva Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Roda Viva.png"      // O quadro em si
        },
        {
          "yaw": -2.160332432236128,
          "pitch": 0.15800276961673987,
          "title": "Habeas Corpus e Mandado de Segurança",
          "quadroImg": "assets/Habeas Corpus e Mandado de Segurança.jpg"      // O quadro em si
        },
        {
          "yaw": -0.9787665484043302,
          "pitch": 0.22209732371016244,
          "title": "Primeria Sentença Criminal",
          "quadroImg": "assets/Primeria Sentença Criminal.jpg"   
        },
        {
          "yaw": 0.7267799249480973,
          "pitch": 0.32297652871054794,
          "title": "Tori e Pingente Catedral",
          "quadroImg": "assets/Tori e Pingente Catedral.jpg"  
        },
        {
          "yaw": 0.767355296837561,
          "pitch": -0.16199890203534828,
          "title": "Caminhantes",
          "etiquetaImg": "assets/Caminhanetes Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Caminhantes.png"      // O quadro em si
        }
      ]
    },
    {
      "id": "21-espao-de-exposio-tori-e-pingente-catedral",
      "name": "Espaço de Exposição Tori e Pingente Catedral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2863,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.10203824441861,
          "pitch": 0.5480496716850762,
          "rotation": 0,
          "target": "20-espao-de-exposio-roda-viva"
        },
        {
          "yaw": 0.11313173892324535,
          "pitch": 0.43713405370293756,
          "rotation": 0,
          "target": "22-espao-de-exposio-quadro-com-tapearia"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3251856917826288,
          "pitch": 0.2612716045152439,
          "title": "Imissão de Posse de Terreno no Núcleo Bandeirante",
          "quadroImg": "assets/Imissão de Posse de Terreno no Núcleo Bandeirante.jpg"      // O quadro em si
        },
        {
          "yaw": 1.9283383575352246,
          "pitch": 0.16236714027204613,
          "title": "Tori e Pingente Catedral",
          "quadroImg": "assets/Tori e Pingente Catedral.jpg"      // O quadro em si
        }
      ]
    },
    {
      "id": "22-espao-de-exposio-quadro-com-tapearia",
      "name": "Espaço de Exposição Quadro com Tapeçaria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2854,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.063447486531194,
          "pitch": 0.4389621624847404,
          "rotation": 0,
          "target": "21-espao-de-exposio-tori-e-pingente-catedral"
        },
        {
          "yaw": 1.9297288575440321,
          "pitch": 0.3443806875650548,
          "rotation": 0,
          "target": "30-espao-de-exposio-morro"
        },
        {
          "yaw": 1.151338453494155,
          "pitch": 0.21433642186817892,
          "rotation": 11.780972450961727,
          "target": "36-espao-de-exposio-galeria-de-desembargadores-2"
        },
        {
          "yaw": 0.08784866795600443,
          "pitch": 0.3179380194974595,
          "rotation": 4.71238898038469,
          "target": "13-espao-histria-oral"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.181847730206126,
          "pitch": 0.23592655317121292,
          "title": "Crime Passional",
          "quadroImg": "assets/Crime Passional.jpg"      // O quadro em si
        },
        {
          "yaw": 2.5145890983420696,
          "pitch": 0.12374557945581444,
          "title": "Primeira sentença em Processo Judicial Eletrônico",
          "quadroImg": "assets/Primeira sentença em Processo Judicial Eletrônico.jpg"      // O quadro em si
        },
        {
          "yaw": 2.7692833381215376,
          "pitch": -0.14086152747449532,
          "title": "Cuidado para Unir",
          "etiquetaImg": "assets/Cuidado para Unir Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Cuidado para Unir.png"      // O quadro em si

        },
        {
          "yaw": -0.48929751177908365,
          "pitch": -0.12315014218231113,
          "title": "Quadro com Tapeçaria",
          "etiquetaImg": "assets/Quadro com Tapeçaria Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Quadro com Tapeçaria.png"      // O quadro em si
        },
        {
          "yaw": -0.8354575325921676,
          "pitch": 0.29919429265867237,
          "title": "Casos e Inquéritos 1",
          "quadroImg": "assets/Casos e Inquéritos 1.jpg"      // O quadro em si
        },
        {
          "yaw": -0.523643974489854,
          "pitch": 0.22374956274736668,
          "title": "Casos e Inquéritos 2",
          "quadroImg": "assets/Casos e Inquéritos 2.jpg"      // O quadro em si
        }
      ]
    },
    {
      "id": "23-espao-de-exposio-congresso",
      "name": "Espaço de Exposição Congresso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2899.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3369628722453921,
          "pitch": 0.5227188838435186,
          "rotation": 0,
          "target": "18-hall-de-entrada--direita"
        },
        {
          "yaw": 0.06109130845129229,
          "pitch": 0.4197607250376443,
          "rotation": 0,
          "target": "24-espao-de-exposio-des-pontes-de-miranda"
        },
        {
          "yaw": 1.9696704758887167,
          "pitch": 0.5387207791248958,
          "rotation": 0,
          "target": "26-espao-de-exposio-galeria-de-desembargadores"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.43513239642220825,
          "pitch": -0.0023146439537953256,
          "title": "Congresso",
          "quadroImg": "assets/Congresso.jpg"      // O quadro em si
        },
        {
          "yaw": 1.5626358969492316,
          "pitch": -0.12565493687935714,
          "title": "Painel Inicial Des. Pontes de Miranda",
          "quadroImg": "assets/painel1.jpg"      // O quadro em si
        }
      ]
    },
    {
      "id": "24-espao-de-exposio-des-pontes-de-miranda",
      "name": "Espaço de Exposição Des. Pontes de Miranda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2850.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.114663613408853,
          "pitch": 0.4720315488079265,
          "rotation": 0,
          "target": "23-espao-de-exposio-congresso"
        },
        {
          "yaw": 0.12850546636902216,
          "pitch": 0.40206608075749983,
          "rotation": 0,
          "target": "25-espao-de-exposio-caminhantes"
        },
        {
          "yaw": -0.8588060902065777,
          "pitch": 0.47710736563170997,
          "rotation": 0.7853981633974483,
          "target": "20-espao-de-exposio-roda-viva"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.564970659943345,
          "pitch": 0.12716955516080475,
          "title": "Foto de Pontes de Miranda quando jovem",
          "quadroImg": "assets/Quadro Pontes de Miranda.png"      // O quadro em si
        },
        {
          "yaw": -2.233933034230283,
          "pitch": -0.3162582012439401,
          "title": "Falecimento do Des. Pontes de Miranda",
          "quadroImg": "assets/Falecimento do Des. Pontes de Miranda.png" 
        },
        {
          "yaw": -2.02285047666307,
          "pitch": 0.2872529992592927,
          "title": "Matérias Jornalísticas",
          "quadroImg": "assets/Matérias Jornalísticas.jpg" 
        },
        {
          "yaw": 1.339285215673378,
          "pitch": -0.09602838043211293,
          "title": "Segundo Painel do Des. Pontes de Miranda",
          "quadroImg": "assets/painel25.jpg" 
        },
        {
          "yaw": 0.9770414561075054,
          "pitch": -0.0007728318327107075,
          "title": "Cadeados",
          "etiquetaImg": "assets/Cadeados Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Cadeados.png"      // O quadro em si
        }
      ]
    },
    {
      "id": "25-espao-de-exposio-caminhantes",
      "name": "Espaço de Exposição Caminhantes",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2813,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0806843604669485,
          "pitch": 0.4272647429282337,
          "rotation": 0,
          "target": "24-espao-de-exposio-des-pontes-de-miranda"
        },
        {
          "yaw": -1.9880587220152677,
          "pitch": 0.5072132207789739,
          "rotation": 1.5707963267948966,
          "target": "20-espao-de-exposio-roda-viva"
        },
        {
          "yaw": 0.47799535441184204,
          "pitch": 0.4696266114499874,
          "rotation": 5.497787143782138,
          "target": "30-espao-de-exposio-morro"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3008327168294045,
          "pitch": 0.45606408587815395,
          "title": "Brasília",
          "etiquetaImg": "assets/Brasília Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Brasília.png"      // O quadro em si
        },
        {
          "yaw": 1.3073479676949002,
          "pitch": -0.04975677587651006,
          "title": "Cidade de Goiás",
          "etiquetaImg": "assets/Cidade de Goiás Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Cidade de Goiás.png"      // O quadro em si
        },
        {
          "yaw": -0.7042226889352055,
          "pitch": -0.21041092601264744,
          "title": "Caminhantes",
          "etiquetaImg": "assets/Caminhanetes Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Caminhantes.png"      // O quadro em si
        },
        {
          "yaw": -0.5609960170583861,
          "pitch": 0.19762930887328878,
          "title": "Tori e Pingente Catedral",
          "quadroImg": "assets/Tori e Pingente Catedral.jpg"      // O quadro em si
        }
      ]
    },
    {
      "id": "26-espao-de-exposio-galeria-de-desembargadores",
      "name": "Espaço de Exposição Galeria de Desembargadores",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2883.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5037831324953181,
          "pitch": 0.4140157088914975,
          "rotation": 0,
          "target": "23-espao-de-exposio-congresso"
        },
        {
          "yaw": 0.03446279078547043,
          "pitch": 0.45643765982110196,
          "rotation": 0,
          "target": "27-espao-de-exposio-terceiro-painel-pontes-de-miranda"
        },
        {
          "yaw": 1.6776320973931682,
          "pitch": 0.7713316593433444,
          "rotation": 0,
          "target": "31-espao-de-exposio-jornalstica-de-pontes-de-miranda"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5562863504218107,
          "pitch": -0.1268644615266581,
          "title": "Painel Inicial Posterior Des. Pontes de Miranda",
          "quadroImg": "assets/painel5.jpg"      // O quadro em si
        },
        {
          "yaw": 2.4261021924864323,
          "pitch": -0.07661212860362276,
          "title": "Galeria de Desembargadores 1",
          "quadroImg": "assets/Galeria de Desembargadores 1.jpg"      // O quadro em si
        },
        {
          "yaw": 3.0726559184344513,
          "pitch": -0.07574204406435037,
          "title": "Galeria de Desembargadores 2",
          "quadroImg": "assets/Galeria de Desembargadores 2.jpg"      // O quadro em si
        },
        {
          "yaw": -2.4248469685655856,
          "pitch": -0.06188429567034959,
          "title": "Galeria de Desembargadores 3",
          "quadroImg": "assets/Galeria de Desembargadores 3.jpg"      // O quadro em si
        },
        {
          "yaw": -2.007511299861889,
          "pitch": -0.047463146382735744,
          "title": "Galeria de Desembargadores 4",
          "quadroImg": "assets/Galeria de Desembargadores 4.jpg"      // O quadro em si
        }
      ]
    },
    {
      "id": "27-espao-de-exposio-terceiro-painel-pontes-de-miranda",
      "name": "Espaço de Exposição Terceiro Painel Pontes de Miranda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2868,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.876174947500602,
          "pitch": 0.616888783461345,
          "rotation": 6.283185307179586,
          "target": "26-espao-de-exposio-galeria-de-desembargadores"
        },
        {
          "yaw": 0.24110167480521127,
          "pitch": 0.5871162905044489,
          "rotation": 6.283185307179586,
          "target": "28-espao-de-exposio-segundo-painel-pontes-de-miranda"
        },
        {
          "yaw": -2.577680011942329,
          "pitch": 0.5363803543579309,
          "rotation": 2.356194490192345,
          "target": "23-espao-de-exposio-congresso"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.980408329258033,
          "pitch": -0.12881718664134212,
          "title": "Terceiro Painel Des. Pontes de Miranda",
          "quadroImg": "assets/painel2.jpg"      // O quadro em si
        }
      ]
    },
    {
      "id": "28-espao-de-exposio-segundo-painel-pontes-de-miranda",
      "name": "Espaço de Exposição Segundo Painel Pontes de Miranda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2822.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8929018605316124,
          "pitch": 0.596003601198392,
          "rotation": 0,
          "target": "27-espao-de-exposio-terceiro-painel-pontes-de-miranda"
        },
        {
          "yaw": -0.11795601387336063,
          "pitch": 0.456696589131937,
          "rotation": 0,
          "target": "29-espao-de-exposio-cadeados"
        },
        {
          "yaw": -0.7084449339387238,
          "pitch": 0.36704697567259004,
          "rotation": 7.0685834705770345,
          "target": "25-espao-de-exposio-caminhantes"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5526701879171902,
          "pitch": -0.10523887322151282,
          "title": "Segundo Painel posterior Des. Pontes de Miranda",
          "quadroImg": "assets/painel26.jpg"      // O quadro em si
        }
      ]
    },
    {
      "id": "29-espao-de-exposio-cadeados",
      "name": "Espaço de Exposição Cadeados",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2910.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.136771551262038,
          "pitch": 0.43805524863932277,
          "rotation": 0,
          "target": "28-espao-de-exposio-segundo-painel-pontes-de-miranda"
        },
        {
          "yaw": -0.07633636764269269,
          "pitch": 0.4418387177863714,
          "rotation": 0,
          "target": "30-espao-de-exposio-morro"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0083975229862645,
          "pitch": -0.08025980607996352,
          "title": "Cadeados",
          "etiquetaImg": "assets/Cadeados Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Cadeados.png"      // O quadro em si
        },
        {
          "yaw": -1.7427567705589322,
          "pitch": -0.05086474504010141,
          "title": "Sem Título",
          "etiquetaImg": "assets/Sem Título Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Sem Título.png"      // O quadro em si
        }
      ]
    },
    {
      "id": "30-espao-de-exposio-morro",
      "name": "Espaço de Exposição Morro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2854.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14012651710731205,
          "pitch": 0.17676969759260253,
          "rotation": 0,
          "target": "36-espao-de-exposio-galeria-de-desembargadores-2"
        },
        {
          "yaw": 2.9747553116983108,
          "pitch": 0.35615512119714055,
          "rotation": 0,
          "target": "29-espao-de-exposio-cadeados"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.285461745611025,
          "pitch": 0.13420955104577992,
          "title": "Justiça é Tudo",
          "quadroImg": "assets/Justiça é Tudo.jpg"      // O quadro em si
        },
        {
          "yaw": -1.716292891763235,
          "pitch": 0.1766793628573673,
          "title": "Livros Comemorativos do TJDFT",
          "quadroImg": "assets/Livros Comemorativos do TJDFT.jpg"      // O quadro em si
        },
        {
          "yaw": -1.5690200719762402,
          "pitch": -0.33678345879317106,
          "title": "Pássaros",
          "etiquetaImg": "assets/Pássaros Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Pássaros.png"      // O quadro em si
        },
        {
          "yaw": 1.3225630483411255,
          "pitch": -0.03655710792273403,
          "title": "Morro",
          "etiquetaImg": "assets/Morro Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Morro.png"      // O quadro em si
        }
      ]
    },
    {
      "id": "31-espao-de-exposio-jornalstica-de-pontes-de-miranda",
      "name": "Espaço de Exposição Jornalística de Pontes de Miranda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2860.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1639846839264472,
          "pitch": 0.828688630276627,
          "rotation": 0.7853981633974483,
          "target": "26-espao-de-exposio-galeria-de-desembargadores"
        },
        {
          "yaw": 0.1335341803412149,
          "pitch": 0.3923683132733249,
          "rotation": 0,
          "target": "32-espao-de-exposio-mveis-feitos-por-pontes-de-miranda"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.221697743893346,
          "pitch": -0.12284065805449274,
          "title": "Documentos Antigos 1",
          "quadroImg": "assets/Documentos Antigos 1.jpg"      // O quadro em si
        },
        {
          "yaw": 2.2280697500332955,
          "pitch": 0.12306663854755229,
          "title": "Documentos Antigos 2",
          "quadroImg": "assets/Documentos Antigos 2.jpg"      // O quadro em si
        },
        {
          "yaw": 1.6764434806639805,
          "pitch": -0.28293253488472736,
          "title": "Matérias Jornalísticas Pontes de Miranda",
          "quadroImg": "assets/Matérias Jornalísticas Pontes de Miranda.jpg"      // O quadro em si
        },
        {
          "yaw": 1.6739403537025765,
          "pitch": 0.2978553047346484,
          "title": "Carta enviada por Pontes de Miranda",
          "quadroImg": "assets/Carta enviada por Pontes de Miranda.jpg" 
        },
        {
          "yaw": 1.4514483300270555,
          "pitch": -0.3181503848971765,
          "title": "Jornal Antigo 2",
          "quadroImg": "assets/Jornal Antigo 2.jpg" 
        },
        {
          "yaw": 1.48411192298253,
          "pitch": 0.4369739495051288,
          "title": "Jornal Antigo 1",
          "quadroImg": "assets/Jornal Antigo 1.jpg"
        },
        {
          "yaw": 0.7029332408739588,
          "pitch": 0.11434871269456437,
          "title": "Móveis feitos por Pontes de Miranda",
          "quadroImg": "assets/Móveis feitos por Pontes de Miranda.jpg"
        },
        {
          "yaw": -0.16475212281696727,
          "pitch": 0.0587384143947105,
          "title": "Terceiro Painel posterior Des. Pontes de Miranda",
          "quadroImg": "assets/painel6.jpg"
        }
      ]
    },
    {
      "id": "32-espao-de-exposio-mveis-feitos-por-pontes-de-miranda",
      "name": "Espaço de Exposição Móveis feitos por Pontes de Miranda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2834.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02778248014162621,
          "pitch": 0.3310428364718945,
          "rotation": 0,
          "target": "33-espao-de-exposio-morro-e-cais"
        },
        {
          "yaw": -2.9951033915810044,
          "pitch": 0.42789776653183864,
          "rotation": 0,
          "target": "31-espao-de-exposio-jornalstica-de-pontes-de-miranda"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8171075387059634,
          "pitch": -0.17821009106987518,
          "title": "Terceiro Painel posterior Des. Pontes de Miranda",
          "quadroImg": "assets/painel6.jpg"
        },
        {
          "yaw": 1.7160337537194303,
          "pitch": 0.0975263399658779,
          "title": "Móveis feitos por Pontes de Miranda",
          "quadroImg": "assets/Móveis feitos por Pontes de Miranda.jpg"
        },
        {
          "yaw": 2.535185640843065,
          "pitch": -0.27212241156933104,
          "title": "Formatura de Direito Pontes de Miranda",
          "quadroImg": "assets/Formatura de Direito Pontes de Miranda.jpg"
        },
        {
          "yaw": 2.331867774975377,
          "pitch": 0.01882368962222003,
          "title": "Pontes de Miranda e sua esposa",
          "quadroImg": "assets/Pontes de Miranda e sua esposa.jpg"
        },
        {
          "yaw": 2.8046748990602888,
          "pitch": -0.2675011474850013,
          "title": "Aula Magna proferida por Pontes de Miranda",
          "quadroImg": "assets/Aula Magna proferida por Pontes de Miranda.jpg"
        },
        {
          "yaw": 2.8569461347684335,
          "pitch": 0.044399973026781225,
          "title": "Pontes de Miranda presentou Des. Roberval Casemiro",
          "quadroImg": "assets/Pontes de Miranda presentou Des. Roberval Casemiro.jpg"
        },
        {
          "yaw": 2.8071668808823578,
          "pitch": 0.30965324098526636,
          "title": "Informação sobre os móveis de Pontes de Miranda",
          "quadroImg": "assets/Informação sobre os móveis de Pontes de Miranda.jpg"
        },
        {
          "yaw": 0.7295298044760923,
          "pitch": -0.34689312134135086,
          "title": "Foto de Pontes de Miranda já idoso",
          "quadroImg": "assets/Foto de Pontes de Miranda já idoso.jpg"
        },
        {
          "yaw": 0.47410147327427055,
          "pitch": -0.24753385996448785,
          "title": "Matérias Jornalísticas Pontes de Miranda 2",
          "quadroImg": "assets/Matérias Jornalísticas Pontes de Miranda 2.jpg"
        },
        {
          "yaw": 0.8378232818323692,
          "pitch": 0.09157180969317302,
          "title": "Matérias Jornalísticas Pontes de Miranda 3",
          "quadroImg": "assets/Matérias Jornalísticas Pontes de Miranda 3.jpg"
        }
      ]
    },
    {
      "id": "33-espao-de-exposio-morro-e-cais",
      "name": "Espaço de Exposição Morro e Cais",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2849.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.081784321045067,
          "pitch": 0.4003818025042776,
          "rotation": 0,
          "target": "32-espao-de-exposio-mveis-feitos-por-pontes-de-miranda"
        },
        {
          "yaw": -0.07542366789834887,
          "pitch": 0.575252494260992,
          "rotation": 0,
          "target": "34-espao-de-exibio-adorvel-danarina-espanhola"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8344670500800717,
          "pitch": 0.011392248786322057,
          "title": "Morro e Cais (da série Favela)",
          "etiquetaImg": "assets/Morro e Cais (da série Favela) Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Morro e Cais (da série Favela).png"      // O quadro em si
        },
        {
          "yaw": 2.43946153984451,
          "pitch": -0.33898879722137565,
          "title": "Coruja do Cerrado e da Sabedoria",
          "etiquetaImg": "assets/Coruja do Cerrado e da Sabedoria Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Coruja do Cerrado e da Sabedoria.png"      // O quadro em si
        },
        {
          "yaw": 1.281725814693898,
          "pitch": -0.3989729740274939,
          "title": "Camadas #5",
          "etiquetaImg": "assets/Camadas5 Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Camadas5.png"      // O quadro em si
        }
      ]
    },
    {
      "id": "34-espao-de-exibio-adorvel-danarina-espanhola",
      "name": "Espaço de Exibição Adorável Dançarina Espanhola",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2831.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0901363271366558,
          "pitch": 0.5250956722752633,
          "rotation": 0,
          "target": "33-espao-de-exposio-morro-e-cais"
        },
        {
          "yaw": 0.04768297543906641,
          "pitch": 0.5832763996851575,
          "rotation": 0,
          "target": "35-espao-de-exposio-zen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3948373249436896,
          "pitch": -0.2558135786078619,
          "title": "Adorável Dançarina Espanhola",
          "etiquetaImg": "assets/Adorável Dançarina Espanhola Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Adorável Dançarina Espanhola.png"      // O quadro em si
        },
        {
          "yaw": 1.6904392332937972,
          "pitch": -0.13185897761379906,
          "title": "Casinha de Tábuas com Roupas no Varal",
          "etiquetaImg": "assets/Casinha de Tábuas com Roupas no Varal informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Casinha de Tábuas com Roupas no Varal.png"      // O quadro em si
        },
        {
          "yaw": 1.549413381130524,
          "pitch": 0.3140989975408246,
          "title": "Fulgor: Os Barcos ao Pôr do Sol&nbsp;",
          "etiquetaImg": "assets/Fulgor Os Barcos ao Pôr do Sol informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Fulgor Os Barcos ao Pôr do Sol.png"      // O quadro em si
        },
        {
          "yaw": 1.4103048693607718,
          "pitch": -0.3114159229686848,
          "title": "Pamonha da Mariana - Gostosa e Fresquinha",
          "etiquetaImg": "assets/Pamonha da Mariana - Gostosa e Fresquinha Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Pamonha da Mariana - Gostosa e Fresquinha.png"      // O quadro em si
        },
        {
          "yaw": 1.2937974596707136,
          "pitch": 0.619183878975015,
          "title": "Casinha na Montanha",
          "etiquetaImg": "assets/Casinha na Montanha Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Casinha na Montanha.png"    
        }
      ]
    },
    {
      "id": "35-espao-de-exposio-zen",
      "name": "Espaço de Exposição Zen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2858,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.031229849131563,
          "pitch": 0.4557240676048284,
          "rotation": 0,
          "target": "34-espao-de-exibio-adorvel-danarina-espanhola"
        },
        {
          "yaw": -0.5467718985060159,
          "pitch": 0.1356563845810257,
          "rotation": 0,
          "target": "36-espao-de-exposio-galeria-de-desembargadores-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.1594227959419445,
          "pitch": -0.10386923870388998,
          "title": "Tragicomédia Cotidiana 5",
          "etiquetaImg": "assets/Tragicomédia Cotidiana 5 Informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Tragicomédia Cotidiana 5.png"      // O quadro em si

        },
        {
          "yaw": -1.5927375391500664,
          "pitch": 0.39184531747390494,
          "title": "Zen",
          "etiquetaImg": "assets/Zen informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Zen.png"      // O quadro em si
        },
        {
          "yaw": 2.535557853646891,
          "pitch": -0.3959818301003821,
          "title": "Primeiro Amor",
          "etiquetaImg": "assets/Primeiro Amor informação.jpg", // A imagem da etiqueta
         "quadroImg": "assets/Primeiro Amor.png"      // O quadro em si
        },
        {
          "yaw": 1.719086354849301,
          "pitch": -0.5116441400915228,
          "title": "Lançamento da Pedra Fundamental&nbsp;",
          "etiquetaImg": "assets/Lançamento da Pedra Fundamental informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Lançamento da Pedra Fundamental.jpg"      // O quadro em si
        },
        {
          "yaw": 1.725075061680113,
          "pitch": 0.24496319829946245,
          "title": "Reinauguração do Memorial&nbsp;",
          "etiquetaImg": "assets/Reinauguração do Memorial informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Reinauguração do Memorial.jpg"  
        },
        {
          "yaw": 0.984710204370062,
          "pitch": -0.4407891054198636,
          "title": "Formiga Livre Interpretação",
          "etiquetaImg": "assets/Formiga Livre Interpretação informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Formiga Livre Interpretação.png"  
        }
      ]
    },
    {
      "id": "36-espao-de-exposio-galeria-de-desembargadores-2",
      "name": "Espaço de Exposição Galeria de Desembargadores 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2849,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3880722393051741,
          "pitch": 0.19498044930270453,
          "rotation": 0,
          "target": "35-espao-de-exposio-zen"
        },
        {
          "yaw": 0.8946276419798824,
          "pitch": 0.18591508989968197,
          "rotation": 5.497787143782138,
          "target": "22-espao-de-exposio-quadro-com-tapearia"
        },
        {
          "yaw": 0.09004459948676669,
          "pitch": 0.13374017635782032,
          "rotation": 0,
          "target": "29-espao-de-exposio-cadeados"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1575586773596127,
          "pitch": -0.013154136766139857,
          "title": "Galeria de Desembargadores 5",
          "quadroImg": "assets/Galeria de Desembargadores 5.png"      // O quadro em si
        },
        {
          "yaw": -0.9415061048198154,
          "pitch": -0.21173917482732385,
          "title": "Polis 4",
          "etiquetaImg": "assets/Polis 4 informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Polis 4.png"      // O quadro em si
        },
        {
          "yaw": -0.8104945654433173,
          "pitch": 0.015769548875793404,
          "title": "Fosso",
          "etiquetaImg": "assets/Fosso informação.jpg", // A imagem da etiqueta
          "quadroImg": "assets/Fosso.png"      // O quadro em si
        },
        {
          "yaw": -1.3197923136077385,
          "pitch": 0.041406279123906486,
          "title": "Obras selecionadas para mostra temporária",
          "quadroImg": "assets/Obras selecionadas para mostra temporária.jpg"      // O quadro em si
        },
        {
          "yaw": -2.978133419778672,
          "pitch": 0.12099251584601411,
          "title": "Galeria de Desembargadores 6",
          "quadroImg": "assets/Galeria de Desembargadores 6.jpg" 
        },
        {
          "yaw": -1.9451017802824033,
          "pitch": -0.002398587065604474,
          "title": "Galeria de Desembargadores 7",
          "quadroImg": "assets/Galeria de Desembargadores 7.png" 
        }
      ]
    }
  ],
  "name": "Tour Virtual Memorial TJDFT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
