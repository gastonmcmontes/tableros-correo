window.PBA_DATA = {
  "region": "Región PBA",
  "regionFull": "Provincia de Buenos Aires / La Pampa",
  "maestroLastUpload": "26/11/2026 11:56 hs",
  "lastSyncMoment": "26/11/2026 15:45 hs",
  "lastUpdate": "26/11/2026 11:56 hs",
  "pureDayLabel": "Día Hábil Anterior (25/11/2026)",
  "monthLabel": "Mes en Curso Acumulado (Noviembre 2026)",
  "targets": {
    "sla_paqar": 95,
    "fv_paqar": 90,
    "sla_pas": 95,
    "fv_pas": 90,
    "sla_expreso": 95,
    "fv_expreso": 90
  },
  "regionalKpis": {
    "mes_anterior": {
      "periodName": "Mes en Curso",
      "periodCode": "mes_anterior",
      "periodDetail": "Acumulado Noviembre 2026",
      "totalVolume": 440545,
      "vencidos": 440545,
      "backlog": 1224,
      "a_vencer": 150002,
      "guarda_vencida": 1292,
      "q": {
        "total": 440545,
        "paq_ar": 367617,
        "pas": 72928,
        "expreso": 18924
      },
      "sla_paqar": {
        "value": 97.45,
        "target": 95,
        "volume": 367617,
        "status": "ok",
        "delta": 2.45,
        "activacion": 97.41,
        "encaminamiento": 97.38
      },
      "sla_clasico": {
        "value": 98.38,
        "target": 95,
        "delta": 3.38,
        "status": "ok"
      },
      "sla_expreso": {
        "value": 80.27,
        "target": 95,
        "volume": 18924,
        "status": "danger",
        "delta": -14.73
      },
      "fv_expreso": {
        "value": 85.46,
        "target": 90,
        "volume": 18924,
        "status": "danger",
        "delta": -4.54
      },
      "fv_paqar": {
        "value": 88.78,
        "target": 90,
        "volume": 169895,
        "status": "warning",
        "delta": -1.22
      },
      "sla_pas": {
        "value": 88.69,
        "target": 95,
        "volume": 72928,
        "status": "warning",
        "delta": -6.31
      },
      "fv_pas": {
        "value": 63.94,
        "target": 90,
        "volume": 72928,
        "status": "danger",
        "delta": -26.06
      },
      "fv_pas_final": {
        "value": 68.27,
        "target": 95,
        "status": "danger",
        "delta": -26.73
      }
    },
    "dia_puro": {
      "periodName": "Día Hábil Anterior",
      "periodCode": "dia_puro",
      "periodDetail": "25/11/2026 (Última jornada cerrada)",
      "totalVolume": 30850,
      "vencidos": 30850,
      "backlog": 1224,
      "a_vencer": 150002,
      "guarda_vencida": 1292,
      "q": {
        "total": 30850,
        "paq_ar": 25154,
        "pas": 5696,
        "expreso": 1140
      },
      "sla_paqar": {
        "value": 97.13,
        "target": 95,
        "volume": 25154,
        "status": "ok",
        "delta": 2.13,
        "activacion": 97.28,
        "encaminamiento": 97.26
      },
      "sla_clasico": {
        "value": 98.12,
        "target": 95,
        "delta": 3.12,
        "status": "ok"
      },
      "sla_expreso": {
        "value": 76.14,
        "target": 95,
        "volume": 1140,
        "status": "danger",
        "delta": -18.86
      },
      "fv_expreso": {
        "value": 85.54,
        "target": 90,
        "volume": 1140,
        "status": "danger",
        "delta": -4.46
      },
      "fv_paqar": {
        "value": 88.82,
        "target": 90,
        "volume": 24295,
        "status": "warning",
        "delta": -1.18
      },
      "sla_pas": {
        "value": 79.92,
        "target": 95,
        "volume": 5696,
        "status": "danger",
        "delta": -15.08
      },
      "fv_pas": {
        "value": 64.08,
        "target": 90,
        "volume": 5696,
        "status": "danger",
        "delta": -25.92
      },
      "fv_pas_final": {
        "value": 50.69,
        "target": 95,
        "status": "danger",
        "delta": -44.31
      }
    }
  },
  "nodes": [
    {
      "id": "NODO_BHI",
      "code": "BHI",
      "name": "Bahía Blanca",
      "city": "Bahía Blanca",
      "mes_anterior": {
        "sla_paqar": {
          "value": 97.09,
          "target": 95,
          "delta": 2.09,
          "status": "ok",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 95.15,
              "target": 95,
              "volume": 70078
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 96.02,
              "target": 95,
              "volume": 63766
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 96.46,
              "target": 95,
              "volume": 72144
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 92.29,
              "target": 95,
              "volume": 73579
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 94.68,
              "target": 95,
              "volume": 73822
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 97.51,
              "target": 95,
              "volume": 75598
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 96.74,
              "target": 95,
              "volume": 75600
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 97.24,
              "target": 95,
              "volume": 71195
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 95.3,
              "target": 95,
              "volume": 71429
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 95.96,
              "target": 95,
              "volume": 69386
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 97.06,
              "target": 95,
              "volume": 27532
            }
          ],
          "volume": 60413
        },
        "fv_paqar": {
          "value": 90.09,
          "target": 90,
          "delta": 0.09,
          "status": "ok",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 80.25,
              "target": 90,
              "volume": 37082
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 80.66,
              "target": 90,
              "volume": 33693
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 79.92,
              "target": 90,
              "volume": 36729
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 80.98,
              "target": 90,
              "volume": 38732
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 80.99,
              "target": 90,
              "volume": 39589
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 83,
              "target": 90,
              "volume": 40424
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 82.3,
              "target": 90,
              "volume": 41181
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 84.91,
              "target": 90,
              "volume": 39838
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 86.9,
              "target": 90,
              "volume": 40363
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 89.34,
              "target": 90,
              "volume": 39188
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 90.63,
              "target": 90,
              "volume": 15248
            }
          ],
          "volume": 60413
        },
        "sla_pas": {
          "value": 84.73,
          "target": 95,
          "delta": -10.27,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 83.84,
              "target": 95,
              "volume": 13478
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 74.39,
              "target": 95,
              "volume": 27662
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 82.24,
              "target": 95,
              "volume": 29093
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 68.37,
              "target": 95,
              "volume": 27836
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 77.62,
              "target": 95,
              "volume": 37300
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 84.31,
              "target": 95,
              "volume": 24604
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 84.35,
              "target": 95,
              "volume": 23319
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 86.92,
              "target": 95,
              "volume": 27440
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 88.17,
              "target": 95,
              "volume": 22586
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 80.66,
              "target": 95,
              "volume": 5717
            }
          ],
          "volume": 10759
        },
        "fv_pas": {
          "value": 68.5,
          "target": 90,
          "delta": -21.5,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 62.04,
              "target": 90,
              "volume": 13478
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 60.22,
              "target": 90,
              "volume": 27662
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 57.81,
              "target": 90,
              "volume": 29093
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 56.7,
              "target": 90,
              "volume": 27836
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 56.16,
              "target": 90,
              "volume": 37300
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 56.69,
              "target": 90,
              "volume": 24604
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 58.52,
              "target": 90,
              "volume": 23319
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 58.87,
              "target": 90,
              "volume": 27440
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 63.78,
              "target": 90,
              "volume": 22586
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 66.49,
              "target": 90,
              "volume": 5717
            }
          ],
          "volume": 10759
        },
        "sla_expreso": {
          "value": 70.68,
          "target": 95,
          "volume": 2326,
          "status": "danger",
          "delta": -24.32
        },
        "fv_expreso": {
          "value": 87.89,
          "target": 90,
          "volume": 2326,
          "status": "warning",
          "delta": -2.11
        },
        "volume": 71172,
        "q": {
          "total": 71172,
          "paq_ar": 60413,
          "pas": 10759,
          "expreso": 2326
        }
      },
      "dia_puro": {
        "sla_paqar": {
          "value": 96.54,
          "target": 95,
          "delta": 1.54,
          "status": "ok",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 100,
              "target": 95,
              "volume": 18
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 97.96,
              "target": 95,
              "volume": 4226
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 96.86,
              "target": 95,
              "volume": 4110
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 97.4,
              "target": 95,
              "volume": 3808
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 96.58,
              "target": 95,
              "volume": 4070
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 97.66,
              "target": 95,
              "volume": 5253
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 97.54,
              "target": 95,
              "volume": 6495
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 96.77,
              "target": 95,
              "volume": 4798
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 97.01,
              "target": 95,
              "volume": 4351
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 96.54,
              "target": 95,
              "volume": 4106
            }
          ],
          "volume": 4106
        },
        "fv_paqar": {
          "value": 88.79,
          "target": 90,
          "delta": -1.21,
          "status": "warning",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 71.43,
              "target": 90,
              "volume": 18
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 90.85,
              "target": 90,
              "volume": 4226
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 88.37,
              "target": 90,
              "volume": 4110
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 88.26,
              "target": 90,
              "volume": 3808
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 89.57,
              "target": 90,
              "volume": 4070
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 90.89,
              "target": 90,
              "volume": 5253
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 90.05,
              "target": 90,
              "volume": 6495
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 90.48,
              "target": 90,
              "volume": 4798
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 89.17,
              "target": 90,
              "volume": 4351
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 88.79,
              "target": 90,
              "volume": 4106
            }
          ],
          "volume": 4106
        },
        "sla_pas": {
          "value": 93.54,
          "target": 95,
          "delta": -1.46,
          "status": "warning",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 66.67,
              "target": 95,
              "volume": 38
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 58.36,
              "target": 95,
              "volume": 640
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 59.67,
              "target": 95,
              "volume": 564
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 66.95,
              "target": 95,
              "volume": 348
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 68.19,
              "target": 95,
              "volume": 622
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 87.94,
              "target": 95,
              "volume": 876
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 88.1,
              "target": 95,
              "volume": 825
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 88.5,
              "target": 95,
              "volume": 789
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 81.27,
              "target": 95,
              "volume": 788
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 92.22,
              "target": 95,
              "volume": 743
            }
          ],
          "volume": 743
        },
        "fv_pas": {
          "value": 70.39,
          "target": 90,
          "delta": -19.61,
          "status": "danger",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 51.28,
              "target": 90,
              "volume": 38
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 67.68,
              "target": 90,
              "volume": 640
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 64.06,
              "target": 90,
              "volume": 564
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 75.64,
              "target": 90,
              "volume": 348
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 73.45,
              "target": 90,
              "volume": 622
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 81.13,
              "target": 90,
              "volume": 876
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 76.44,
              "target": 90,
              "volume": 825
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 75.82,
              "target": 90,
              "volume": 789
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 75.61,
              "target": 90,
              "volume": 788
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 65.03,
              "target": 90,
              "volume": 743
            }
          ],
          "volume": 743
        },
        "sla_expreso": {
          "value": 61.59,
          "target": 95,
          "volume": 138,
          "status": "danger",
          "delta": -33.41,
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 100,
              "target": 95,
              "volume": 1
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 83.33,
              "target": 95,
              "volume": 144
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 66.67,
              "target": 95,
              "volume": 174
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 79.64,
              "target": 95,
              "volume": 167
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 78.72,
              "target": 95,
              "volume": 235
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 69.57,
              "target": 95,
              "volume": 161
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 69.42,
              "target": 95,
              "volume": 206
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 67.11,
              "target": 95,
              "volume": 149
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 66.94,
              "target": 95,
              "volume": 124
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 61.59,
              "target": 95,
              "volume": 138
            }
          ]
        },
        "fv_expreso": {
          "value": 86.67,
          "target": 90,
          "volume": 138,
          "status": "danger",
          "delta": -3.33,
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 0,
              "target": 90,
              "volume": 1
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 88.66,
              "target": 90,
              "volume": 144
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 82.86,
              "target": 90,
              "volume": 174
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 85.05,
              "target": 90,
              "volume": 167
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 85.19,
              "target": 90,
              "volume": 235
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 93.07,
              "target": 90,
              "volume": 161
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 88.57,
              "target": 90,
              "volume": 206
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 87.37,
              "target": 90,
              "volume": 149
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 86.15,
              "target": 90,
              "volume": 124
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 86.67,
              "target": 90,
              "volume": 138
            }
          ]
        },
        "volume": 4849,
        "q": {
          "total": 4849,
          "paq_ar": 4106,
          "pas": 743,
          "expreso": 138
        }
      }
    },
    {
      "id": "NODO_LPG",
      "code": "LPG",
      "name": "La Plata",
      "city": "La Plata",
      "mes_anterior": {
        "sla_paqar": {
          "value": 97.19,
          "target": 95,
          "delta": 2.19,
          "status": "ok",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 96.46,
              "target": 95,
              "volume": 82461
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 95.85,
              "target": 95,
              "volume": 74197
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 97.15,
              "target": 95,
              "volume": 83466
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 90.08,
              "target": 95,
              "volume": 81715
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 95.99,
              "target": 95,
              "volume": 80758
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 97.22,
              "target": 95,
              "volume": 83953
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 97.17,
              "target": 95,
              "volume": 86097
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 97.44,
              "target": 95,
              "volume": 80773
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 97.2,
              "target": 95,
              "volume": 82730
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 97.37,
              "target": 95,
              "volume": 85428
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 96.95,
              "target": 95,
              "volume": 33660
            }
          ],
          "volume": 72810
        },
        "fv_paqar": {
          "value": 89.06,
          "target": 90,
          "delta": -0.94,
          "status": "warning",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 80.91,
              "target": 90,
              "volume": 41857
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 81.89,
              "target": 90,
              "volume": 37312
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 81.48,
              "target": 90,
              "volume": 40756
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 77.5,
              "target": 90,
              "volume": 39350
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 79.57,
              "target": 90,
              "volume": 38893
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 81.81,
              "target": 90,
              "volume": 40357
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 81.8,
              "target": 90,
              "volume": 42126
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 81.89,
              "target": 90,
              "volume": 40273
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 85.9,
              "target": 90,
              "volume": 42326
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 87.97,
              "target": 90,
              "volume": 43599
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 89.36,
              "target": 90,
              "volume": 16372
            }
          ],
          "volume": 72810
        },
        "sla_pas": {
          "value": 97.06,
          "target": 95,
          "delta": 2.06,
          "status": "ok",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 95.52,
              "target": 95,
              "volume": 28718
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 92.34,
              "target": 95,
              "volume": 48327
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 85.84,
              "target": 95,
              "volume": 52823
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 84.49,
              "target": 95,
              "volume": 50438
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 91.15,
              "target": 95,
              "volume": 58615
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 91.93,
              "target": 95,
              "volume": 38061
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 92.69,
              "target": 95,
              "volume": 37963
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 94.92,
              "target": 95,
              "volume": 44797
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 95.12,
              "target": 95,
              "volume": 34961
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 95.86,
              "target": 95,
              "volume": 9142
            }
          ],
          "volume": 19846
        },
        "fv_pas": {
          "value": 65,
          "target": 90,
          "delta": -25,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 58.97,
              "target": 90,
              "volume": 28718
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 56.97,
              "target": 90,
              "volume": 48327
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 53.44,
              "target": 90,
              "volume": 52823
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 54.41,
              "target": 90,
              "volume": 50438
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 52.97,
              "target": 90,
              "volume": 58615
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 53.7,
              "target": 90,
              "volume": 38061
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 54.79,
              "target": 90,
              "volume": 37963
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 56.36,
              "target": 90,
              "volume": 44797
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 62.76,
              "target": 90,
              "volume": 34961
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 63.98,
              "target": 90,
              "volume": 9142
            }
          ],
          "volume": 19846
        },
        "sla_expreso": {
          "value": 81.25,
          "target": 95,
          "volume": 3974,
          "status": "danger",
          "delta": -13.75
        },
        "fv_expreso": {
          "value": 90.61,
          "target": 90,
          "volume": 3974,
          "status": "ok",
          "delta": 0.61
        },
        "volume": 92656,
        "q": {
          "total": 92656,
          "paq_ar": 72810,
          "pas": 19846,
          "expreso": 3974
        }
      },
      "dia_puro": {
        "sla_paqar": {
          "value": 97.47,
          "target": 95,
          "delta": 2.47,
          "status": "ok",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 96.56,
              "target": 95,
              "volume": 5091
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 97.69,
              "target": 95,
              "volume": 4941
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 97.34,
              "target": 95,
              "volume": 4543
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 97.28,
              "target": 95,
              "volume": 5364
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 97.4,
              "target": 95,
              "volume": 5306
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 97.68,
              "target": 95,
              "volume": 8106
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 97.05,
              "target": 95,
              "volume": 5934
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 96.71,
              "target": 95,
              "volume": 4991
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 97.47,
              "target": 95,
              "volume": 4906
            }
          ],
          "volume": 4906
        },
        "fv_paqar": {
          "value": 89.71,
          "target": 90,
          "delta": -0.29,
          "status": "warning",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 88.87,
              "target": 90,
              "volume": 5091
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 88.7,
              "target": 90,
              "volume": 4941
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 89.1,
              "target": 90,
              "volume": 4543
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 86.98,
              "target": 90,
              "volume": 5364
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 89.06,
              "target": 90,
              "volume": 5306
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 89.07,
              "target": 90,
              "volume": 8106
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 88.71,
              "target": 90,
              "volume": 5934
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 89.1,
              "target": 90,
              "volume": 4991
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 89.71,
              "target": 90,
              "volume": 4906
            }
          ],
          "volume": 4906
        },
        "sla_pas": {
          "value": 98.89,
          "target": 95,
          "delta": 3.89,
          "status": "ok",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 84.9,
              "target": 95,
              "volume": 587
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 95.03,
              "target": 95,
              "volume": 457
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 96.48,
              "target": 95,
              "volume": 1420
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 91.52,
              "target": 95,
              "volume": 1330
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 93.53,
              "target": 95,
              "volume": 1484
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 87.09,
              "target": 95,
              "volume": 1734
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 99.06,
              "target": 95,
              "volume": 1615
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 94.73,
              "target": 95,
              "volume": 1291
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 98.52,
              "target": 95,
              "volume": 1807
            }
          ],
          "volume": 1807
        },
        "fv_pas": {
          "value": 63.53,
          "target": 90,
          "delta": -26.47,
          "status": "danger",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 72.64,
              "target": 90,
              "volume": 587
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 64.08,
              "target": 90,
              "volume": 457
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 75.1,
              "target": 90,
              "volume": 1420
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 68.8,
              "target": 90,
              "volume": 1330
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 71.29,
              "target": 90,
              "volume": 1484
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 68.55,
              "target": 90,
              "volume": 1734
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 69.49,
              "target": 90,
              "volume": 1615
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 69.9,
              "target": 90,
              "volume": 1291
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 63.91,
              "target": 90,
              "volume": 1807
            }
          ],
          "volume": 1807
        },
        "sla_expreso": {
          "value": 77.25,
          "target": 95,
          "volume": 211,
          "status": "danger",
          "delta": -17.75,
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 79.2,
              "target": 95,
              "volume": 226
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 77.65,
              "target": 95,
              "volume": 255
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 83.38,
              "target": 95,
              "volume": 331
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 85.81,
              "target": 95,
              "volume": 437
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 84.05,
              "target": 95,
              "volume": 257
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 89.34,
              "target": 95,
              "volume": 347
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 81.97,
              "target": 95,
              "volume": 233
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 76.92,
              "target": 95,
              "volume": 208
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 77.25,
              "target": 95,
              "volume": 211
            }
          ]
        },
        "fv_expreso": {
          "value": 92.79,
          "target": 90,
          "volume": 211,
          "status": "ok",
          "delta": 2.79,
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 86.44,
              "target": 90,
              "volume": 226
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 87.18,
              "target": 90,
              "volume": 255
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 90.28,
              "target": 90,
              "volume": 331
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 90.53,
              "target": 90,
              "volume": 437
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 94.74,
              "target": 90,
              "volume": 257
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 93.1,
              "target": 90,
              "volume": 347
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 88.89,
              "target": 90,
              "volume": 233
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 88.54,
              "target": 90,
              "volume": 208
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 92.79,
              "target": 90,
              "volume": 211
            }
          ]
        },
        "volume": 6713,
        "q": {
          "total": 6713,
          "paq_ar": 4906,
          "pas": 1807,
          "expreso": 211
        }
      }
    },
    {
      "id": "NODO_MDQ",
      "code": "MDQ",
      "name": "Mar del Plata",
      "city": "Mar del Plata",
      "mes_anterior": {
        "sla_paqar": {
          "value": 97.57,
          "target": 95,
          "delta": 2.57,
          "status": "ok",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 94.84,
              "target": 95,
              "volume": 86454
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 96.13,
              "target": 95,
              "volume": 76300
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 96.36,
              "target": 95,
              "volume": 79685
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 95.28,
              "target": 95,
              "volume": 75540
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 95.68,
              "target": 95,
              "volume": 74998
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 96.73,
              "target": 95,
              "volume": 76436
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 96.92,
              "target": 95,
              "volume": 77506
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 97.15,
              "target": 95,
              "volume": 73811
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 96.6,
              "target": 95,
              "volume": 75153
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 96.58,
              "target": 95,
              "volume": 75025
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 97.45,
              "target": 95,
              "volume": 29144
            }
          ],
          "volume": 64198
        },
        "fv_paqar": {
          "value": 88.09,
          "target": 90,
          "delta": -1.91,
          "status": "warning",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 80.52,
              "target": 90,
              "volume": 50785
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 81.55,
              "target": 90,
              "volume": 44561
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 80.47,
              "target": 90,
              "volume": 45545
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 81.95,
              "target": 90,
              "volume": 43427
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 82.08,
              "target": 90,
              "volume": 43578
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 84.09,
              "target": 90,
              "volume": 44326
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 84.12,
              "target": 90,
              "volume": 45418
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 85.86,
              "target": 90,
              "volume": 43806
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 90.8,
              "target": 90,
              "volume": 44866
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 91.17,
              "target": 90,
              "volume": 44875
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 88.56,
              "target": 90,
              "volume": 16768
            }
          ],
          "volume": 64198
        },
        "sla_pas": {
          "value": 80.46,
          "target": 95,
          "delta": -14.54,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 89.17,
              "target": 95,
              "volume": 19361
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 66.55,
              "target": 95,
              "volume": 49739
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 88.87,
              "target": 95,
              "volume": 49113
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 82.45,
              "target": 95,
              "volume": 45027
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 75.95,
              "target": 95,
              "volume": 52845
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 85.77,
              "target": 95,
              "volume": 34613
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 94.18,
              "target": 95,
              "volume": 31832
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 95.86,
              "target": 95,
              "volume": 38202
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 93.68,
              "target": 95,
              "volume": 30964
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 79.54,
              "target": 95,
              "volume": 8168
            }
          ],
          "volume": 14908
        },
        "fv_pas": {
          "value": 60.01,
          "target": 90,
          "delta": -29.99,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 60.55,
              "target": 90,
              "volume": 19361
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 52.05,
              "target": 90,
              "volume": 49739
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 44.92,
              "target": 90,
              "volume": 49113
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 49.07,
              "target": 90,
              "volume": 45027
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 48.33,
              "target": 90,
              "volume": 52845
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 48.14,
              "target": 90,
              "volume": 34613
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 48.86,
              "target": 90,
              "volume": 31832
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 49.5,
              "target": 90,
              "volume": 38202
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 55.59,
              "target": 90,
              "volume": 30964
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 59.12,
              "target": 90,
              "volume": 8168
            }
          ],
          "volume": 14908
        },
        "sla_expreso": {
          "value": 74.56,
          "target": 95,
          "volume": 3015,
          "status": "danger",
          "delta": -20.44
        },
        "fv_expreso": {
          "value": 82.38,
          "target": 90,
          "volume": 3015,
          "status": "danger",
          "delta": -7.62
        },
        "volume": 79106,
        "q": {
          "total": 79106,
          "paq_ar": 64198,
          "pas": 14908,
          "expreso": 3015
        }
      },
      "dia_puro": {
        "sla_paqar": {
          "value": 96.33,
          "target": 95,
          "delta": 1.33,
          "status": "ok",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 98.33,
              "target": 95,
              "volume": 4308
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 97.73,
              "target": 95,
              "volume": 4134
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 97.95,
              "target": 95,
              "volume": 4096
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 97.22,
              "target": 95,
              "volume": 4424
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 97.94,
              "target": 95,
              "volume": 5724
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 97.7,
              "target": 95,
              "volume": 6620
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 98.19,
              "target": 95,
              "volume": 5400
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 97.87,
              "target": 95,
              "volume": 4372
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 96.33,
              "target": 95,
              "volume": 4418
            }
          ],
          "volume": 4418
        },
        "fv_paqar": {
          "value": 87.55,
          "target": 90,
          "delta": -2.45,
          "status": "warning",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 87.5,
              "target": 90,
              "volume": 4308
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 86.47,
              "target": 90,
              "volume": 4134
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 87.99,
              "target": 90,
              "volume": 4096
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 86.2,
              "target": 90,
              "volume": 4424
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 87.88,
              "target": 90,
              "volume": 5724
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 87.89,
              "target": 90,
              "volume": 6620
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 88.64,
              "target": 90,
              "volume": 5400
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 87.67,
              "target": 90,
              "volume": 4372
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 87.55,
              "target": 90,
              "volume": 4418
            }
          ],
          "volume": 4418
        },
        "sla_pas": {
          "value": 84.24,
          "target": 95,
          "delta": -10.76,
          "status": "danger",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 56.75,
              "target": 95,
              "volume": 931
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 60.83,
              "target": 95,
              "volume": 606
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 72.73,
              "target": 95,
              "volume": 569
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 84.31,
              "target": 95,
              "volume": 132
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 79.95,
              "target": 95,
              "volume": 805
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 83.91,
              "target": 95,
              "volume": 1422
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 76.15,
              "target": 95,
              "volume": 1405
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 76.97,
              "target": 95,
              "volume": 1215
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 77.6,
              "target": 95,
              "volume": 1180
            }
          ],
          "volume": 1180
        },
        "fv_pas": {
          "value": 64.15,
          "target": 90,
          "delta": -25.85,
          "status": "danger",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 64.78,
              "target": 90,
              "volume": 931
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 65.56,
              "target": 90,
              "volume": 606
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 62.38,
              "target": 90,
              "volume": 569
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 59.89,
              "target": 90,
              "volume": 132
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 65.24,
              "target": 90,
              "volume": 805
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 64.27,
              "target": 90,
              "volume": 1422
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 59.84,
              "target": 90,
              "volume": 1405
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 66.85,
              "target": 90,
              "volume": 1215
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 69.84,
              "target": 90,
              "volume": 1180
            }
          ],
          "volume": 1180
        },
        "sla_expreso": {
          "value": 67.62,
          "target": 95,
          "volume": 210,
          "status": "danger",
          "delta": -27.38,
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 84.88,
              "target": 95,
              "volume": 172
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 77.23,
              "target": 95,
              "volume": 224
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 78.11,
              "target": 95,
              "volume": 233
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 76.07,
              "target": 95,
              "volume": 305
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 69.11,
              "target": 95,
              "volume": 191
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 78.3,
              "target": 95,
              "volume": 235
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 80.92,
              "target": 95,
              "volume": 173
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 81.41,
              "target": 95,
              "volume": 156
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 67.62,
              "target": 95,
              "volume": 210
            }
          ]
        },
        "fv_expreso": {
          "value": 81.58,
          "target": 90,
          "volume": 210,
          "status": "danger",
          "delta": -8.42,
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 80,
              "target": 90,
              "volume": 172
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 81.16,
              "target": 90,
              "volume": 224
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 85.16,
              "target": 90,
              "volume": 233
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 76.67,
              "target": 90,
              "volume": 305
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 77.19,
              "target": 90,
              "volume": 191
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 83.33,
              "target": 90,
              "volume": 235
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 79.63,
              "target": 90,
              "volume": 173
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 80,
              "target": 90,
              "volume": 156
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 81.58,
              "target": 90,
              "volume": 210
            }
          ]
        },
        "volume": 5598,
        "q": {
          "total": 5598,
          "paq_ar": 4418,
          "pas": 1180,
          "expreso": 210
        }
      }
    },
    {
      "id": "NODO_MER",
      "code": "MER",
      "name": "Mercedes",
      "city": "Mercedes",
      "mes_anterior": {
        "sla_paqar": {
          "value": 97.7,
          "target": 95,
          "delta": 2.7,
          "status": "ok",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 95.8,
              "target": 95,
              "volume": 73117
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 97.29,
              "target": 95,
              "volume": 63166
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 97.99,
              "target": 95,
              "volume": 72545
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 97.59,
              "target": 95,
              "volume": 73657
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 97.63,
              "target": 95,
              "volume": 72489
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 98.02,
              "target": 95,
              "volume": 78437
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 98.09,
              "target": 95,
              "volume": 77541
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 98.38,
              "target": 95,
              "volume": 73128
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 97.8,
              "target": 95,
              "volume": 74260
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 97.77,
              "target": 95,
              "volume": 74312
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 97.78,
              "target": 95,
              "volume": 29676
            }
          ],
          "volume": 63700
        },
        "fv_paqar": {
          "value": 89.65,
          "target": 90,
          "delta": -0.35,
          "status": "warning",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 80.25,
              "target": 90,
              "volume": 44335
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 82.04,
              "target": 90,
              "volume": 37469
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 81.07,
              "target": 90,
              "volume": 41694
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 81.56,
              "target": 90,
              "volume": 43359
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 80.54,
              "target": 90,
              "volume": 43639
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 80.45,
              "target": 90,
              "volume": 47178
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 81.87,
              "target": 90,
              "volume": 47241
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 83.35,
              "target": 90,
              "volume": 45784
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 85.7,
              "target": 90,
              "volume": 46657
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 86.9,
              "target": 90,
              "volume": 46992
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 89.91,
              "target": 90,
              "volume": 18495
            }
          ],
          "volume": 63700
        },
        "sla_pas": {
          "value": 92.8,
          "target": 95,
          "delta": -2.2,
          "status": "warning",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 89.53,
              "target": 95,
              "volume": 17965
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 83.74,
              "target": 95,
              "volume": 32983
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 82.6,
              "target": 95,
              "volume": 36077
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 84.61,
              "target": 95,
              "volume": 34641
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 87.35,
              "target": 95,
              "volume": 38973
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 87.94,
              "target": 95,
              "volume": 25682
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 88.88,
              "target": 95,
              "volume": 26959
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 92.62,
              "target": 95,
              "volume": 32441
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 94.75,
              "target": 95,
              "volume": 25164
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 91.64,
              "target": 95,
              "volume": 6541
            }
          ],
          "volume": 12892
        },
        "fv_pas": {
          "value": 70.54,
          "target": 90,
          "delta": -19.46,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 59.05,
              "target": 90,
              "volume": 17965
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 57.27,
              "target": 90,
              "volume": 32983
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 55.24,
              "target": 90,
              "volume": 36077
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 55.86,
              "target": 90,
              "volume": 34641
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 55.72,
              "target": 90,
              "volume": 38973
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 56.88,
              "target": 90,
              "volume": 25682
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 58.94,
              "target": 90,
              "volume": 26959
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 56.72,
              "target": 90,
              "volume": 32441
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 62.02,
              "target": 90,
              "volume": 25164
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 69.97,
              "target": 90,
              "volume": 6541
            }
          ],
          "volume": 12892
        },
        "sla_expreso": {
          "value": 83.96,
          "target": 95,
          "volume": 3062,
          "status": "danger",
          "delta": -11.04
        },
        "fv_expreso": {
          "value": 85.92,
          "target": 90,
          "volume": 3062,
          "status": "danger",
          "delta": -4.08
        },
        "volume": 76592,
        "q": {
          "total": 76592,
          "paq_ar": 63700,
          "pas": 12892,
          "expreso": 3062
        }
      },
      "dia_puro": {
        "sla_paqar": {
          "value": 98,
          "target": 95,
          "delta": 3,
          "status": "ok",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 97.83,
              "target": 95,
              "volume": 4421
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 98,
              "target": 95,
              "volume": 4304
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 98.03,
              "target": 95,
              "volume": 4017
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 97.21,
              "target": 95,
              "volume": 4368
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 97.53,
              "target": 95,
              "volume": 5058
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 97.89,
              "target": 95,
              "volume": 6720
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 97.3,
              "target": 95,
              "volume": 4925
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 97.04,
              "target": 95,
              "volume": 4594
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 98,
              "target": 95,
              "volume": 4342
            }
          ],
          "volume": 4342
        },
        "fv_paqar": {
          "value": 90.55,
          "target": 90,
          "delta": 0.55,
          "status": "ok",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 89.56,
              "target": 90,
              "volume": 4421
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 90.06,
              "target": 90,
              "volume": 4304
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 90.39,
              "target": 90,
              "volume": 4017
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 87.85,
              "target": 90,
              "volume": 4368
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 88.84,
              "target": 90,
              "volume": 5058
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 89.77,
              "target": 90,
              "volume": 6720
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 89.32,
              "target": 90,
              "volume": 4925
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 90.07,
              "target": 90,
              "volume": 4594
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 90.55,
              "target": 90,
              "volume": 4342
            }
          ],
          "volume": 4342
        },
        "sla_pas": {
          "value": 89.43,
          "target": 95,
          "delta": -5.57,
          "status": "danger",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 50,
              "target": 95,
              "volume": 5
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 76.85,
              "target": 95,
              "volume": 608
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 85.05,
              "target": 95,
              "volume": 383
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 85.23,
              "target": 95,
              "volume": 489
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 93.38,
              "target": 95,
              "volume": 576
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 97.33,
              "target": 95,
              "volume": 927
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 85.62,
              "target": 95,
              "volume": 1181
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 93.93,
              "target": 95,
              "volume": 1212
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 88.74,
              "target": 95,
              "volume": 1101
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 91.19,
              "target": 95,
              "volume": 842
            }
          ],
          "volume": 842
        },
        "fv_pas": {
          "value": 69.36,
          "target": 90,
          "delta": -20.64,
          "status": "danger",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 100,
              "target": 90,
              "volume": 5
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 76.31,
              "target": 90,
              "volume": 608
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 66.5,
              "target": 90,
              "volume": 383
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 72.43,
              "target": 90,
              "volume": 489
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 75.64,
              "target": 90,
              "volume": 576
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 66.09,
              "target": 90,
              "volume": 927
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 75.5,
              "target": 90,
              "volume": 1181
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 75.01,
              "target": 90,
              "volume": 1212
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 72.4,
              "target": 90,
              "volume": 1101
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 66.5,
              "target": 90,
              "volume": 842
            }
          ],
          "volume": 842
        },
        "sla_expreso": {
          "value": 82.87,
          "target": 95,
          "volume": 181,
          "status": "danger",
          "delta": -12.13,
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 87.13,
              "target": 95,
              "volume": 202
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 81.28,
              "target": 95,
              "volume": 203
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 89.81,
              "target": 95,
              "volume": 265
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 86.58,
              "target": 95,
              "volume": 298
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 78.33,
              "target": 95,
              "volume": 180
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 85.45,
              "target": 95,
              "volume": 275
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 84.02,
              "target": 95,
              "volume": 169
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 86.62,
              "target": 95,
              "volume": 157
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 82.87,
              "target": 95,
              "volume": 181
            }
          ]
        },
        "fv_expreso": {
          "value": 89.42,
          "target": 90,
          "volume": 181,
          "status": "warning",
          "delta": -0.58,
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 84.21,
              "target": 90,
              "volume": 202
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 85,
              "target": 90,
              "volume": 203
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 88.04,
              "target": 90,
              "volume": 265
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 83.9,
              "target": 90,
              "volume": 298
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 86.09,
              "target": 90,
              "volume": 180
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 89.69,
              "target": 90,
              "volume": 275
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 83.19,
              "target": 90,
              "volume": 169
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 84.38,
              "target": 90,
              "volume": 157
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 89.42,
              "target": 90,
              "volume": 181
            }
          ]
        },
        "volume": 5184,
        "q": {
          "total": 5184,
          "paq_ar": 4342,
          "pas": 842,
          "expreso": 181
        }
      }
    },
    {
      "id": "NODO_PER",
      "code": "PER",
      "name": "Pergamino",
      "city": "Pergamino",
      "mes_anterior": {
        "sla_paqar": {
          "value": 97.82,
          "target": 95,
          "delta": 2.82,
          "status": "ok",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 94.31,
              "target": 95,
              "volume": 79043
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 97.31,
              "target": 95,
              "volume": 71127
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 97.76,
              "target": 95,
              "volume": 80807
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 97.6,
              "target": 95,
              "volume": 81807
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 97.7,
              "target": 95,
              "volume": 83557
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 98.18,
              "target": 95,
              "volume": 88394
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 98.04,
              "target": 95,
              "volume": 84967
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 98.47,
              "target": 95,
              "volume": 84234
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 98.5,
              "target": 95,
              "volume": 88340
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 98.31,
              "target": 95,
              "volume": 90547
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 98,
              "target": 95,
              "volume": 34843
            }
          ],
          "volume": 77791
        },
        "fv_paqar": {
          "value": 88.83,
          "target": 90,
          "delta": -1.17,
          "status": "warning",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 74.85,
              "target": 90,
              "volume": 53260
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 80.92,
              "target": 90,
              "volume": 47614
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 79.58,
              "target": 90,
              "volume": 54241
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 81.18,
              "target": 90,
              "volume": 54133
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 86.21,
              "target": 90,
              "volume": 55284
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 86.41,
              "target": 90,
              "volume": 58303
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 86.35,
              "target": 90,
              "volume": 55886
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 86.46,
              "target": 90,
              "volume": 57251
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 87.4,
              "target": 90,
              "volume": 60287
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 89.28,
              "target": 90,
              "volume": 61938
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 89.61,
              "target": 90,
              "volume": 23390
            }
          ],
          "volume": 77791
        },
        "sla_pas": {
          "value": 96.44,
          "target": 95,
          "delta": 1.44,
          "status": "ok",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 92.41,
              "target": 95,
              "volume": 20292
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 87.19,
              "target": 95,
              "volume": 35806
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 91.3,
              "target": 95,
              "volume": 40976
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 90.68,
              "target": 95,
              "volume": 38936
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 91.54,
              "target": 95,
              "volume": 42446
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 94.72,
              "target": 95,
              "volume": 29162
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 94.88,
              "target": 95,
              "volume": 25961
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 92.62,
              "target": 95,
              "volume": 34632
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 95.73,
              "target": 95,
              "volume": 28969
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 95.34,
              "target": 95,
              "volume": 6517
            }
          ],
          "volume": 13936
        },
        "fv_pas": {
          "value": 63.46,
          "target": 90,
          "delta": -26.54,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 60.37,
              "target": 90,
              "volume": 20292
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 58.42,
              "target": 90,
              "volume": 35806
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 57.59,
              "target": 90,
              "volume": 40976
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 59.79,
              "target": 90,
              "volume": 38936
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 57.71,
              "target": 90,
              "volume": 42446
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 59.56,
              "target": 90,
              "volume": 29162
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 59.69,
              "target": 90,
              "volume": 25961
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 60.63,
              "target": 90,
              "volume": 34632
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 63.14,
              "target": 90,
              "volume": 28969
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 61.29,
              "target": 90,
              "volume": 6517
            }
          ],
          "volume": 13936
        },
        "sla_expreso": {
          "value": 86.96,
          "target": 95,
          "volume": 5790,
          "status": "danger",
          "delta": -8.04
        },
        "fv_expreso": {
          "value": 83.59,
          "target": 90,
          "volume": 5790,
          "status": "danger",
          "delta": -6.41
        },
        "volume": 91727,
        "q": {
          "total": 91727,
          "paq_ar": 77791,
          "pas": 13936,
          "expreso": 5790
        }
      },
      "dia_puro": {
        "sla_paqar": {
          "value": 97.14,
          "target": 95,
          "delta": 2.14,
          "status": "ok",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 98.05,
              "target": 95,
              "volume": 5229
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 97.61,
              "target": 95,
              "volume": 5019
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 98.15,
              "target": 95,
              "volume": 4865
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 96.31,
              "target": 95,
              "volume": 5529
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 97.31,
              "target": 95,
              "volume": 6130
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 98.26,
              "target": 95,
              "volume": 8312
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 97.87,
              "target": 95,
              "volume": 7101
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 97.41,
              "target": 95,
              "volume": 5592
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 97.14,
              "target": 95,
              "volume": 5419
            }
          ],
          "volume": 5419
        },
        "fv_paqar": {
          "value": 88.79,
          "target": 90,
          "delta": -1.21,
          "status": "warning",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 86.93,
              "target": 90,
              "volume": 5229
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 87.49,
              "target": 90,
              "volume": 5019
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 87.23,
              "target": 90,
              "volume": 4865
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 88.56,
              "target": 90,
              "volume": 5529
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 86.9,
              "target": 90,
              "volume": 6130
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 87.47,
              "target": 90,
              "volume": 8312
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 88.89,
              "target": 90,
              "volume": 7101
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 90.19,
              "target": 90,
              "volume": 5592
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 88.79,
              "target": 90,
              "volume": 5419
            }
          ],
          "volume": 5419
        },
        "sla_pas": {
          "value": 97.36,
          "target": 95,
          "delta": 2.36,
          "status": "ok",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 94.79,
              "target": 95,
              "volume": 524
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 89.57,
              "target": 95,
              "volume": 406
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 94.54,
              "target": 95,
              "volume": 558
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 90.59,
              "target": 95,
              "volume": 814
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 98.29,
              "target": 95,
              "volume": 1120
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 96.67,
              "target": 95,
              "volume": 1394
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 96.36,
              "target": 95,
              "volume": 1207
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 85.89,
              "target": 95,
              "volume": 1146
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 92.68,
              "target": 95,
              "volume": 1100
            }
          ],
          "volume": 1100
        },
        "fv_pas": {
          "value": 65.36,
          "target": 90,
          "delta": -24.64,
          "status": "danger",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 68.42,
              "target": 90,
              "volume": 524
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 79.29,
              "target": 90,
              "volume": 406
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 70.12,
              "target": 90,
              "volume": 558
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 70.91,
              "target": 90,
              "volume": 814
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 74.28,
              "target": 90,
              "volume": 1120
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 71.16,
              "target": 90,
              "volume": 1394
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 64.2,
              "target": 90,
              "volume": 1207
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 62.12,
              "target": 90,
              "volume": 1146
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 68.72,
              "target": 90,
              "volume": 1100
            }
          ],
          "volume": 1100
        },
        "sla_expreso": {
          "value": 86.24,
          "target": 95,
          "volume": 356,
          "status": "danger",
          "delta": -8.76,
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 91.12,
              "target": 95,
              "volume": 349
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 85.38,
              "target": 95,
              "volume": 390
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 87.61,
              "target": 95,
              "volume": 460
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 79.43,
              "target": 95,
              "volume": 671
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 89.24,
              "target": 95,
              "volume": 381
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 88.66,
              "target": 95,
              "volume": 485
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 88.32,
              "target": 95,
              "volume": 411
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 83.78,
              "target": 95,
              "volume": 339
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 86.24,
              "target": 95,
              "volume": 356
            }
          ]
        },
        "fv_expreso": {
          "value": 82.26,
          "target": 90,
          "volume": 356,
          "status": "danger",
          "delta": -7.74,
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 82.3,
              "target": 90,
              "volume": 349
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 87.61,
              "target": 90,
              "volume": 390
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 82.72,
              "target": 90,
              "volume": 460
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 86.08,
              "target": 90,
              "volume": 671
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 67.86,
              "target": 90,
              "volume": 381
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 71.68,
              "target": 90,
              "volume": 485
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 73.61,
              "target": 90,
              "volume": 411
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 83.95,
              "target": 90,
              "volume": 339
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 82.26,
              "target": 90,
              "volume": 356
            }
          ]
        },
        "volume": 6519,
        "q": {
          "total": 6519,
          "paq_ar": 5419,
          "pas": 1100,
          "expreso": 356
        }
      }
    },
    {
      "id": "NODO_RSA",
      "code": "RSA",
      "name": "Santa Rosa",
      "city": "Santa Rosa",
      "mes_anterior": {
        "sla_paqar": {
          "value": 96.98,
          "target": 95,
          "delta": 1.98,
          "status": "ok",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 96.88,
              "target": 95,
              "volume": 32797
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 96.94,
              "target": 95,
              "volume": 30089
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 96.95,
              "target": 95,
              "volume": 35374
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 96.69,
              "target": 95,
              "volume": 34410
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 96.79,
              "target": 95,
              "volume": 34903
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 97.24,
              "target": 95,
              "volume": 37580
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 96.86,
              "target": 95,
              "volume": 37351
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 96.84,
              "target": 95,
              "volume": 33782
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 97.1,
              "target": 95,
              "volume": 33721
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 96.75,
              "target": 95,
              "volume": 33251
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 96.81,
              "target": 95,
              "volume": 15040
            }
          ],
          "volume": 28705
        },
        "fv_paqar": {
          "value": 85,
          "target": 90,
          "delta": -5,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 72.99,
              "target": 90,
              "volume": 18286
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 71.9,
              "target": 90,
              "volume": 16079
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 60.69,
              "target": 90,
              "volume": 18268
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 71.94,
              "target": 90,
              "volume": 18397
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 71.03,
              "target": 90,
              "volume": 18946
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 79.99,
              "target": 90,
              "volume": 20767
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 79.43,
              "target": 90,
              "volume": 21389
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 80.87,
              "target": 90,
              "volume": 20029
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 82.7,
              "target": 90,
              "volume": 20678
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 83.14,
              "target": 90,
              "volume": 20420
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 86.32,
              "target": 90,
              "volume": 8978
            }
          ],
          "volume": 28705
        },
        "sla_pas": {
          "value": 71.89,
          "target": 95,
          "delta": -23.11,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": null,
              "target": 95,
              "volume": 0
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 75.54,
              "target": 95,
              "volume": 827
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 55.1,
              "target": 95,
              "volume": 1942
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 73.42,
              "target": 95,
              "volume": 1411
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 70.74,
              "target": 95,
              "volume": 1604
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 80.46,
              "target": 95,
              "volume": 1605
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 67.88,
              "target": 95,
              "volume": 1455
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 76.2,
              "target": 95,
              "volume": 1548
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 74.67,
              "target": 95,
              "volume": 1350
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 78.21,
              "target": 95,
              "volume": 1455
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 70,
              "target": 95,
              "volume": 360
            }
          ],
          "volume": 587
        },
        "fv_pas": {
          "value": 66.78,
          "target": 90,
          "delta": -23.22,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": null,
              "target": 90,
              "volume": 0
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 58.77,
              "target": 90,
              "volume": 827
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 51.54,
              "target": 90,
              "volume": 1942
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 59.46,
              "target": 90,
              "volume": 1411
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 62.16,
              "target": 90,
              "volume": 1604
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 59.88,
              "target": 90,
              "volume": 1605
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 61.44,
              "target": 90,
              "volume": 1455
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 62.92,
              "target": 90,
              "volume": 1548
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 56.89,
              "target": 90,
              "volume": 1350
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 60.55,
              "target": 90,
              "volume": 1455
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 70.56,
              "target": 90,
              "volume": 360
            }
          ],
          "volume": 587
        },
        "sla_expreso": {
          "value": 61.29,
          "target": 95,
          "volume": 757,
          "status": "danger",
          "delta": -33.71
        },
        "fv_expreso": {
          "value": 75.25,
          "target": 90,
          "volume": 757,
          "status": "danger",
          "delta": -14.75
        },
        "volume": 29292,
        "q": {
          "total": 29292,
          "paq_ar": 28705,
          "pas": 587,
          "expreso": 757
        }
      },
      "dia_puro": {
        "sla_paqar": {
          "value": 97.3,
          "target": 95,
          "delta": 2.3,
          "status": "ok",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 96.5,
              "target": 95,
              "volume": 2027
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 96.98,
              "target": 95,
              "volume": 1887
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 97.26,
              "target": 95,
              "volume": 1787
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 95.96,
              "target": 95,
              "volume": 1756
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 96.92,
              "target": 95,
              "volume": 2239
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 96.69,
              "target": 95,
              "volume": 2082
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 97.9,
              "target": 95,
              "volume": 1807
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 97.8,
              "target": 95,
              "volume": 1772
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 97.26,
              "target": 95,
              "volume": 2046
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 97.3,
              "target": 95,
              "volume": 1963
            }
          ],
          "volume": 1963
        },
        "fv_paqar": {
          "value": 85.79,
          "target": 90,
          "delta": -4.21,
          "status": "danger",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 85.58,
              "target": 90,
              "volume": 2027
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 87,
              "target": 90,
              "volume": 1887
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 86.72,
              "target": 90,
              "volume": 1787
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 85.36,
              "target": 90,
              "volume": 1756
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 81.62,
              "target": 90,
              "volume": 2239
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 81.1,
              "target": 90,
              "volume": 2082
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 83.23,
              "target": 90,
              "volume": 1807
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 82.44,
              "target": 90,
              "volume": 1772
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 86,
              "target": 90,
              "volume": 2046
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 85.79,
              "target": 90,
              "volume": 1963
            }
          ],
          "volume": 1963
        },
        "sla_pas": {
          "value": 79.17,
          "target": 95,
          "delta": -15.83,
          "status": "danger",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 54.41,
              "target": 95,
              "volume": 45
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 41.73,
              "target": 95,
              "volume": 47
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 56.67,
              "target": 95,
              "volume": 32
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 66.67,
              "target": 95,
              "volume": 12
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 53.97,
              "target": 95,
              "volume": 24
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 71.53,
              "target": 95,
              "volume": 34
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 95.39,
              "target": 95,
              "volume": 47
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 81.24,
              "target": 95,
              "volume": 50
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 76.67,
              "target": 95,
              "volume": 24
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 64.1,
              "target": 95,
              "volume": 24
            }
          ],
          "volume": 24
        },
        "fv_pas": {
          "value": 66.67,
          "target": 90,
          "delta": -23.33,
          "status": "danger",
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 68.78,
              "target": 90,
              "volume": 45
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 59.27,
              "target": 90,
              "volume": 47
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 85.83,
              "target": 90,
              "volume": 32
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 72,
              "target": 90,
              "volume": 12
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 48.81,
              "target": 90,
              "volume": 24
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 52.24,
              "target": 90,
              "volume": 34
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 54.26,
              "target": 90,
              "volume": 47
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 62.33,
              "target": 90,
              "volume": 50
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 49,
              "target": 90,
              "volume": 24
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 61.15,
              "target": 90,
              "volume": 24
            }
          ],
          "volume": 24
        },
        "sla_expreso": {
          "value": 47.73,
          "target": 95,
          "volume": 44,
          "status": "danger",
          "delta": -47.27,
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 44.74,
              "target": 95,
              "volume": 38
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 74.36,
              "target": 95,
              "volume": 39
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 73.13,
              "target": 95,
              "volume": 67
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 62.71,
              "target": 95,
              "volume": 59
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 59.38,
              "target": 95,
              "volume": 64
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 66.04,
              "target": 95,
              "volume": 53
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 68.09,
              "target": 95,
              "volume": 47
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 69.05,
              "target": 95,
              "volume": 42
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 65.79,
              "target": 95,
              "volume": 38
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 47.73,
              "target": 95,
              "volume": 44
            }
          ]
        },
        "fv_expreso": {
          "value": 69.23,
          "target": 90,
          "volume": 44,
          "status": "danger",
          "delta": -20.77,
          "series": [
            {
              "dateLabel": "11 Nov",
              "isoDate": "2026-11-11",
              "value": 75,
              "target": 90,
              "volume": 38
            },
            {
              "dateLabel": "12 Nov",
              "isoDate": "2026-11-12",
              "value": 80,
              "target": 90,
              "volume": 39
            },
            {
              "dateLabel": "13 Nov",
              "isoDate": "2026-11-13",
              "value": 70.59,
              "target": 90,
              "volume": 67
            },
            {
              "dateLabel": "16 Nov",
              "isoDate": "2026-11-16",
              "value": 82.35,
              "target": 90,
              "volume": 59
            },
            {
              "dateLabel": "17 Nov",
              "isoDate": "2026-11-17",
              "value": 62.5,
              "target": 90,
              "volume": 64
            },
            {
              "dateLabel": "18 Nov",
              "isoDate": "2026-11-18",
              "value": 66.67,
              "target": 90,
              "volume": 53
            },
            {
              "dateLabel": "19 Nov",
              "isoDate": "2026-11-19",
              "value": 64.71,
              "target": 90,
              "volume": 47
            },
            {
              "dateLabel": "20 Nov",
              "isoDate": "2026-11-20",
              "value": 58.33,
              "target": 90,
              "volume": 42
            },
            {
              "dateLabel": "24 Nov",
              "isoDate": "2026-11-24",
              "value": 50,
              "target": 90,
              "volume": 38
            },
            {
              "dateLabel": "25 Nov",
              "isoDate": "2026-11-25",
              "value": 69.23,
              "target": 90,
              "volume": 44
            }
          ]
        },
        "volume": 1987,
        "q": {
          "total": 1987,
          "paq_ar": 1963,
          "pas": 24,
          "expreso": 44
        }
      }
    }
  ],
  "series": {
    "slaPaq": {
      "Último día operativo": [
        [
          "11 Nov",
          96.53,
          2045
        ],
        [
          "12 Nov",
          97.66,
          25162
        ],
        [
          "13 Nov",
          97.56,
          24295
        ],
        [
          "16 Nov",
          97.64,
          23085
        ],
        [
          "17 Nov",
          96.91,
          25994
        ],
        [
          "18 Nov",
          97.5,
          29553
        ],
        [
          "19 Nov",
          97.83,
          38060
        ],
        [
          "20 Nov",
          97.49,
          29930
        ],
        [
          "24 Nov",
          97.21,
          25946
        ],
        [
          "25 Nov",
          97.13,
          25154
        ]
      ],
      "Mes en curso": [
        [
          "Ene",
          95.43,
          423950
        ],
        [
          "Feb",
          96.54,
          378645
        ],
        [
          "Mar",
          97.13,
          424021
        ],
        [
          "Abr",
          94.72,
          420708
        ],
        [
          "May",
          96.39,
          420527
        ],
        [
          "Jun",
          97.52,
          440398
        ],
        [
          "Jul",
          97.36,
          439062
        ],
        [
          "Ago",
          97.68,
          416923
        ],
        [
          "Sep",
          97.1,
          425633
        ],
        [
          "Oct",
          97.23,
          427949
        ],
        [
          "Nov",
          97.4,
          169895
        ]
      ]
    },
    "fvPaq": {
      "Último día operativo": [
        [
          "11 Nov",
          85.5,
          2045
        ],
        [
          "12 Nov",
          88.49,
          25162
        ],
        [
          "13 Nov",
          88.09,
          24295
        ],
        [
          "16 Nov",
          88.29,
          23085
        ],
        [
          "17 Nov",
          87.28,
          25994
        ],
        [
          "18 Nov",
          88,
          29553
        ],
        [
          "19 Nov",
          88.47,
          38060
        ],
        [
          "20 Nov",
          88.75,
          29930
        ],
        [
          "24 Nov",
          89.07,
          25946
        ],
        [
          "25 Nov",
          88.82,
          25154
        ]
      ],
      "Mes en curso": [
        [
          "Ene",
          78.71,
          245605
        ],
        [
          "Feb",
          80.7,
          216728
        ],
        [
          "Mar",
          78.94,
          237233
        ],
        [
          "Abr",
          80.03,
          237398
        ],
        [
          "May",
          81.29,
          239929
        ],
        [
          "Jun",
          83.07,
          251355
        ],
        [
          "Jul",
          83.11,
          253241
        ],
        [
          "Ago",
          84.33,
          246981
        ],
        [
          "Sep",
          87,
          255177
        ],
        [
          "Oct",
          88.47,
          257012
        ],
        [
          "Nov",
          89.31,
          99251
        ]
      ]
    },
    "slaPas": {
      "Último día operativo": [
        [
          "11 Nov",
          65.91,
          88
        ],
        [
          "12 Nov",
          80.07,
          3337
        ],
        [
          "13 Nov",
          79.12,
          2448
        ],
        [
          "16 Nov",
          90.37,
          3396
        ],
        [
          "17 Nov",
          92.32,
          3498
        ],
        [
          "18 Nov",
          95.35,
          5246
        ],
        [
          "19 Nov",
          94.78,
          6603
        ],
        [
          "20 Nov",
          91.73,
          6278
        ],
        [
          "24 Nov",
          91.12,
          5565
        ],
        [
          "25 Nov",
          93.38,
          5696
        ]
      ],
      "Mes en curso": [
        [
          "Feb",
          90.87,
          100641
        ],
        [
          "Mar",
          80.52,
          196459
        ],
        [
          "Abr",
          86.48,
          209493
        ],
        [
          "May",
          82.89,
          198482
        ],
        [
          "Jun",
          84.86,
          231784
        ],
        [
          "Jul",
          88.95,
          153577
        ],
        [
          "Ago",
          91.21,
          147582
        ],
        [
          "Sep",
          92.88,
          178862
        ],
        [
          "Oct",
          93.61,
          144099
        ],
        [
          "Nov",
          88.7,
          36445
        ]
      ]
    },
    "fvPas": {
      "Último día operativo": [
        [
          "11 Nov",
          70.45,
          88
        ],
        [
          "12 Nov",
          65.18,
          3337
        ],
        [
          "13 Nov",
          63.6,
          2448
        ],
        [
          "16 Nov",
          67.08,
          3396
        ],
        [
          "17 Nov",
          67.55,
          3498
        ],
        [
          "18 Nov",
          67.44,
          5246
        ],
        [
          "19 Nov",
          66.68,
          6603
        ],
        [
          "20 Nov",
          65.64,
          6278
        ],
        [
          "24 Nov",
          65.53,
          5565
        ],
        [
          "25 Nov",
          65.78,
          5696
        ]
      ],
      "Mes en curso": [
        [
          "Feb",
          59.98,
          100641
        ],
        [
          "Mar",
          56.44,
          196459
        ],
        [
          "Abr",
          53.21,
          209493
        ],
        [
          "May",
          54.89,
          198482
        ],
        [
          "Jun",
          53.8,
          231784
        ],
        [
          "Jul",
          54.64,
          153577
        ],
        [
          "Ago",
          55.8,
          147582
        ],
        [
          "Sep",
          56.18,
          178862
        ],
        [
          "Oct",
          61.3,
          144099
        ],
        [
          "Nov",
          63.94,
          36445
        ]
      ]
    },
    "slaExpreso": {
      "Último día operativo": [
        [
          "11 Nov",
          46.15,
          39
        ],
        [
          "12 Nov",
          85.51,
          1132
        ],
        [
          "13 Nov",
          78.75,
          1313
        ],
        [
          "16 Nov",
          83.76,
          1515
        ],
        [
          "17 Nov",
          80.65,
          2010
        ],
        [
          "18 Nov",
          79.8,
          1223
        ],
        [
          "19 Nov",
          83.64,
          1595
        ],
        [
          "20 Nov",
          81.99,
          1177
        ],
        [
          "24 Nov",
          79.75,
          1022
        ],
        [
          "25 Nov",
          76.14,
          1140
        ]
      ],
      "Mes en curso": [
        [
          "Ene",
          68.42,
          22762
        ],
        [
          "Feb",
          76.05,
          20709
        ],
        [
          "Mar",
          78.25,
          22013
        ],
        [
          "Abr",
          69.36,
          20097
        ],
        [
          "May",
          75.01,
          21991
        ],
        [
          "Jun",
          78.55,
          24223
        ],
        [
          "Jul",
          78.36,
          24184
        ],
        [
          "Ago",
          79.37,
          22767
        ],
        [
          "Sep",
          76.26,
          23169
        ],
        [
          "Oct",
          79.22,
          26351
        ],
        [
          "Nov",
          78.99,
          9242
        ]
      ]
    },
    "fvExpreso": {
      "Último día operativo": [
        [
          "11 Nov",
          75,
          39
        ],
        [
          "12 Nov",
          83.87,
          1132
        ],
        [
          "13 Nov",
          84.61,
          1313
        ],
        [
          "16 Nov",
          86.01,
          1515
        ],
        [
          "17 Nov",
          84.37,
          2010
        ],
        [
          "18 Nov",
          81.11,
          1223
        ],
        [
          "19 Nov",
          83.59,
          1595
        ],
        [
          "20 Nov",
          80.38,
          1177
        ],
        [
          "24 Nov",
          83.27,
          1022
        ],
        [
          "25 Nov",
          85.54,
          1140
        ]
      ],
      "Mes en curso": [
        [
          "Ene",
          82.25,
          16149
        ],
        [
          "Feb",
          82.81,
          14704
        ],
        [
          "Mar",
          81.31,
          15080
        ],
        [
          "Abr",
          81.63,
          13329
        ],
        [
          "May",
          82.33,
          14459
        ],
        [
          "Jun",
          84.92,
          16417
        ],
        [
          "Jul",
          85.36,
          16370
        ],
        [
          "Ago",
          85.79,
          15352
        ],
        [
          "Sep",
          88.54,
          15575
        ],
        [
          "Oct",
          89.09,
          17520
        ],
        [
          "Nov",
          87.25,
          5562
        ]
      ]
    }
  }
};