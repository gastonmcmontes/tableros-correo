window.PBA_DATA = {
  "region": "Región PBA",
  "regionFull": "Provincia de Buenos Aires / La Pampa",
  "maestroLastUpload": "16/11/2026 12:56 hs",
  "lastSyncMoment": "24/11/2026 21:48 hs",
  "lastUpdate": "16/11/2026 12:56 hs",
  "pureDayLabel": "Día Hábil Anterior (01/11/2026)",
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
      "backlog": 1224,
      "a_vencer": 150002,
      "guarda_vencida": 1292,
      "q": {
        "pas": 0,
        "expreso": 0
      },
      "sla_paqar": {
        "value": 0,
        "target": 95,
        "status": "danger",
        "delta": -95,
        "activacion": 97.41,
        "encaminamiento": 97.38
      },
      "sla_clasico": {
        "value": 98.46,
        "target": 95,
        "status": "ok",
        "delta": 3.46
      },
      "sla_expreso": {
        "value": 78.99,
        "target": 95,
        "status": "danger",
        "delta": -16.01
      },
      "fv_expreso": {
        "value": 88.3,
        "target": 90,
        "volume": 521,
        "status": "warning",
        "delta": -1.7
      },
      "fv_paqar": {
        "value": 0,
        "target": 90,
        "volume": 169895,
        "status": "danger",
        "delta": -90
      },
      "sla_pas": {
        "value": 88.69,
        "target": 95,
        "volume": 955,
        "status": "warning",
        "delta": -6.31
      },
      "fv_pas": {
        "value": 63.94,
        "target": 90,
        "volume": 955,
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
      "periodDetail": "01/11/2026 (Última jornada cerrada)",
      "totalVolume": 316517,
      "vencidos": 316517,
      "backlog": 1224,
      "a_vencer": 150002,
      "guarda_vencida": 1292,
      "q": {
        "total": 316517,
        "paq_ar": 316517,
        "pas": 0,
        "expreso": 16762
      },
      "sla_paqar": {
        "value": 97.44,
        "target": 95,
        "volume": 316517,
        "status": "ok",
        "delta": 2.44,
        "activacion": 97.28,
        "encaminamiento": 97.26
      },
      "sla_clasico": {
        "value": 98.5,
        "target": 95,
        "status": "ok",
        "delta": 3.5
      },
      "sla_expreso": {
        "value": 80.41,
        "target": 95,
        "volume": 16762,
        "status": "danger",
        "delta": -14.59
      },
      "fv_expreso": {
        "value": 85.61,
        "target": 90,
        "volume": 16762,
        "status": "danger",
        "delta": -4.39
      },
      "fv_paqar": {
        "value": 88.79,
        "target": 90,
        "volume": 24295,
        "status": "warning",
        "delta": -1.21
      },
      "sla_pas": {
        "value": 79.92,
        "target": 95,
        "volume": 955,
        "status": "danger",
        "delta": -15.08
      },
      "fv_pas": {
        "value": 64.08,
        "target": 90,
        "volume": 955,
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
          "value": 95.96,
          "target": 95,
          "delta": 0.96,
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
          ]
        },
        "fv_paqar": {
          "value": 89.34,
          "target": 90,
          "delta": -0.66,
          "status": "warning",
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
          ]
        },
        "sla_pas": {
          "value": 88.17,
          "target": 95,
          "delta": -6.83,
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
          ]
        },
        "fv_pas": {
          "value": 63.78,
          "target": 90,
          "delta": -26.22,
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
          ]
        },
        "sla_expreso": {
          "value": 59.29,
          "target": 95,
          "delta": -35.71,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 58.79,
              "target": 95,
              "volume": 2651
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 61.09,
              "target": 95,
              "volume": 2388
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 61.8,
              "target": 95,
              "volume": 2718
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 53.09,
              "target": 95,
              "volume": 2499
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 60.66,
              "target": 95,
              "volume": 2692
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 64.9,
              "target": 95,
              "volume": 2751
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 62.11,
              "target": 95,
              "volume": 2834
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 65.76,
              "target": 95,
              "volume": 2710
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 54.15,
              "target": 95,
              "volume": 2834
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 59.29,
              "target": 95,
              "volume": 3193
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 70.07,
              "target": 95,
              "volume": 1146
            }
          ]
        },
        "fv_expreso": {
          "value": 90.73,
          "target": 90,
          "delta": 0.73,
          "status": "ok",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 81.78,
              "target": 90,
              "volume": 1857
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 83.06,
              "target": 90,
              "volume": 1629
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 81.02,
              "target": 90,
              "volume": 1770
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 82.37,
              "target": 90,
              "volume": 1571
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 83.11,
              "target": 90,
              "volume": 1717
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 86.32,
              "target": 90,
              "volume": 1806
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 87.42,
              "target": 90,
              "volume": 1876
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 88.52,
              "target": 90,
              "volume": 1769
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 88.96,
              "target": 90,
              "volume": 1869
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 90.73,
              "target": 90,
              "volume": 2135
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 88.52,
              "target": 90,
              "volume": 697
            }
          ]
        },
        "volume": 0,
        "q": {
          "total": 0,
          "paq_ar": 0,
          "pas": 0,
          "expreso": 0
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
              "dateLabel": "22 Oct",
              "isoDate": "2026-10-22",
              "value": 97.49,
              "target": 95,
              "volume": 3466
            },
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 97.37,
              "target": 95,
              "volume": 3199
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 97.66,
              "target": 95,
              "volume": 3383
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 96.73,
              "target": 95,
              "volume": 3421
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 96.78,
              "target": 95,
              "volume": 2825
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 96.92,
              "target": 95,
              "volume": 2730
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 97.19,
              "target": 95,
              "volume": 2987
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 97.35,
              "target": 95,
              "volume": 3509
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 96.37,
              "target": 95,
              "volume": 3606
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 97.06,
              "target": 95,
              "volume": 2921
            }
          ],
          "volume": 51956
        },
        "fv_paqar": {
          "value": 90.31,
          "target": 90,
          "delta": 0.31,
          "status": "ok",
          "series": [
            {
              "dateLabel": "22 Oct",
              "isoDate": "2026-10-22",
              "value": 89.31,
              "target": 90,
              "volume": 1936
            },
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 89.33,
              "target": 90,
              "volume": 1762
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 90.35,
              "target": 90,
              "volume": 1834
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 92.42,
              "target": 90,
              "volume": 1887
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 92.04,
              "target": 90,
              "volume": 1469
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 92.11,
              "target": 90,
              "volume": 1483
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 92.91,
              "target": 90,
              "volume": 1621
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 89.91,
              "target": 90,
              "volume": 1933
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 91.27,
              "target": 90,
              "volume": 2039
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 90.93,
              "target": 90,
              "volume": 1665
            }
          ],
          "volume": 51956
        },
        "sla_pas": {
          "value": 81.7,
          "target": 95,
          "delta": -13.3,
          "status": "danger",
          "series": [
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 82.51,
              "target": 95,
              "volume": 1075
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 86.91,
              "target": 95,
              "volume": 726
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 91.19,
              "target": 95,
              "volume": 772
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 79.08,
              "target": 95,
              "volume": 870
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 90.1,
              "target": 95,
              "volume": 1112
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 93.77,
              "target": 95,
              "volume": 1429
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 87.66,
              "target": 95,
              "volume": 932
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 92.98,
              "target": 95,
              "volume": 1082
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 81.7,
              "target": 95,
              "volume": 705
            },
            {
              "dateLabel": "5 Nov",
              "isoDate": "2026-11-05",
              "value": 87.28,
              "target": 95,
              "volume": 726
            }
          ]
        },
        "fv_pas": {
          "value": 66.81,
          "target": 90,
          "delta": -23.19,
          "status": "danger",
          "series": [
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 60.74,
              "target": 90,
              "volume": 1075
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 62.12,
              "target": 90,
              "volume": 726
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 66.58,
              "target": 90,
              "volume": 772
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 64.02,
              "target": 90,
              "volume": 870
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 64.84,
              "target": 90,
              "volume": 1112
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 63.47,
              "target": 90,
              "volume": 1429
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 64.06,
              "target": 90,
              "volume": 932
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 69.87,
              "target": 90,
              "volume": 1082
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 66.81,
              "target": 90,
              "volume": 705
            },
            {
              "dateLabel": "5 Nov",
              "isoDate": "2026-11-05",
              "value": 70.8,
              "target": 90,
              "volume": 726
            }
          ]
        },
        "sla_expreso": {
          "value": 71.51,
          "target": 95,
          "volume": 2064,
          "status": "danger",
          "delta": -23.49
        },
        "fv_expreso": {
          "value": 88.27,
          "target": 90,
          "volume": 2064,
          "status": "warning",
          "delta": -1.73
        },
        "volume": 51956,
        "q": {
          "total": 51956,
          "paq_ar": 51956,
          "pas": 0,
          "expreso": 2064
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
          "value": 97.37,
          "target": 95,
          "delta": 2.37,
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
          ]
        },
        "fv_paqar": {
          "value": 87.97,
          "target": 90,
          "delta": -2.03,
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
          ]
        },
        "sla_pas": {
          "value": 95.12,
          "target": 95,
          "delta": 0.12,
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
          ]
        },
        "fv_pas": {
          "value": 62.76,
          "target": 90,
          "delta": -27.24,
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
          ]
        },
        "sla_expreso": {
          "value": 81.1,
          "target": 95,
          "delta": -13.9,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 79.26,
              "target": 95,
              "volume": 4505
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 76.22,
              "target": 95,
              "volume": 4198
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 80.26,
              "target": 95,
              "volume": 4739
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 52.5,
              "target": 95,
              "volume": 4141
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 75.05,
              "target": 95,
              "volume": 4722
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 78.69,
              "target": 95,
              "volume": 5342
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 79.61,
              "target": 95,
              "volume": 5269
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 79.59,
              "target": 95,
              "volume": 4939
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 78.72,
              "target": 95,
              "volume": 5044
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 81.1,
              "target": 95,
              "volume": 5625
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 78.82,
              "target": 95,
              "volume": 1950
            }
          ]
        },
        "fv_expreso": {
          "value": 90.93,
          "target": 90,
          "delta": 0.93,
          "status": "ok",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 83.67,
              "target": 90,
              "volume": 3174
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 82.29,
              "target": 90,
              "volume": 2999
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 82.46,
              "target": 90,
              "volume": 3249
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 79.95,
              "target": 90,
              "volume": 2783
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 83.22,
              "target": 90,
              "volume": 2992
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 86.66,
              "target": 90,
              "volume": 3621
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 86.51,
              "target": 90,
              "volume": 3431
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 84.71,
              "target": 90,
              "volume": 3251
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 88.26,
              "target": 90,
              "volume": 3306
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 90.93,
              "target": 90,
              "volume": 3560
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 89.65,
              "target": 90,
              "volume": 1082
            }
          ]
        },
        "volume": 0,
        "q": {
          "total": 0,
          "paq_ar": 0,
          "pas": 0,
          "expreso": 0
        }
      },
      "dia_puro": {
        "sla_paqar": {
          "value": 97.17,
          "target": 95,
          "delta": 2.17,
          "status": "ok",
          "series": [
            {
              "dateLabel": "22 Oct",
              "isoDate": "2026-10-22",
              "value": 97.59,
              "target": 95,
              "volume": 4355
            },
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 97.41,
              "target": 95,
              "volume": 3898
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 98.05,
              "target": 95,
              "volume": 4312
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 98.01,
              "target": 95,
              "volume": 4275
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 97.52,
              "target": 95,
              "volume": 3473
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 96.83,
              "target": 95,
              "volume": 3528
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 97.27,
              "target": 95,
              "volume": 3264
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 97.95,
              "target": 95,
              "volume": 4331
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 98.21,
              "target": 95,
              "volume": 4367
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 97.91,
              "target": 95,
              "volume": 3676
            }
          ],
          "volume": 62913
        },
        "fv_paqar": {
          "value": 89.04,
          "target": 90,
          "delta": -0.96,
          "status": "warning",
          "series": [
            {
              "dateLabel": "22 Oct",
              "isoDate": "2026-10-22",
              "value": 90.19,
              "target": 90,
              "volume": 2211
            },
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 86.1,
              "target": 90,
              "volume": 1878
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 88.73,
              "target": 90,
              "volume": 2111
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 89.13,
              "target": 90,
              "volume": 2143
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 89.69,
              "target": 90,
              "volume": 1716
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 89.55,
              "target": 90,
              "volume": 1819
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 88.78,
              "target": 90,
              "volume": 1596
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 88.58,
              "target": 90,
              "volume": 2155
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 89.41,
              "target": 90,
              "volume": 2116
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 90.4,
              "target": 90,
              "volume": 1843
            }
          ],
          "volume": 62913
        },
        "sla_pas": {
          "value": 94.68,
          "target": 95,
          "delta": -0.32,
          "status": "warning",
          "series": [
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 94,
              "target": 95,
              "volume": 1250
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 92.36,
              "target": 95,
              "volume": 956
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 95.62,
              "target": 95,
              "volume": 890
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 96.84,
              "target": 95,
              "volume": 1581
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 96.92,
              "target": 95,
              "volume": 1885
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 95.87,
              "target": 95,
              "volume": 678
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 98.28,
              "target": 95,
              "volume": 2785
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 95.4,
              "target": 95,
              "volume": 1546
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 94.68,
              "target": 95,
              "volume": 1204
            },
            {
              "dateLabel": "5 Nov",
              "isoDate": "2026-11-05",
              "value": 94.99,
              "target": 95,
              "volume": 1060
            }
          ]
        },
        "fv_pas": {
          "value": 66.36,
          "target": 90,
          "delta": -23.64,
          "status": "danger",
          "series": [
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 57.2,
              "target": 90,
              "volume": 1250
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 56.8,
              "target": 90,
              "volume": 956
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 62.81,
              "target": 90,
              "volume": 890
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 63,
              "target": 90,
              "volume": 1581
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 62.97,
              "target": 90,
              "volume": 1885
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 56.34,
              "target": 90,
              "volume": 678
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 61.15,
              "target": 90,
              "volume": 2785
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 57.76,
              "target": 90,
              "volume": 1546
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 66.36,
              "target": 90,
              "volume": 1204
            },
            {
              "dateLabel": "5 Nov",
              "isoDate": "2026-11-05",
              "value": 69.15,
              "target": 90,
              "volume": 1060
            }
          ]
        },
        "sla_expreso": {
          "value": 81.69,
          "target": 95,
          "volume": 3555,
          "status": "danger",
          "delta": -13.31
        },
        "fv_expreso": {
          "value": 90.63,
          "target": 90,
          "volume": 3555,
          "status": "ok",
          "delta": 0.63
        },
        "volume": 62913,
        "q": {
          "total": 62913,
          "paq_ar": 62913,
          "pas": 0,
          "expreso": 3555
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
          "value": 96.58,
          "target": 95,
          "delta": 1.58,
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
          ]
        },
        "fv_paqar": {
          "value": 91.17,
          "target": 90,
          "delta": 1.17,
          "status": "ok",
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
          ]
        },
        "sla_pas": {
          "value": 93.68,
          "target": 95,
          "delta": -1.32,
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
          ]
        },
        "fv_pas": {
          "value": 55.59,
          "target": 90,
          "delta": -34.41,
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
          ]
        },
        "sla_expreso": {
          "value": 69.51,
          "target": 95,
          "delta": -25.49,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 64.26,
              "target": 95,
              "volume": 4651
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 65.66,
              "target": 95,
              "volume": 4122
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 64.95,
              "target": 95,
              "volume": 3756
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 60.87,
              "target": 95,
              "volume": 3270
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 60.2,
              "target": 95,
              "volume": 3403
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 63.64,
              "target": 95,
              "volume": 3532
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 66.57,
              "target": 95,
              "volume": 3668
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 66.69,
              "target": 95,
              "volume": 3485
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 65.04,
              "target": 95,
              "volume": 3626
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 69.51,
              "target": 95,
              "volume": 4254
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 72.95,
              "target": 95,
              "volume": 1512
            }
          ]
        },
        "fv_expreso": {
          "value": 88.7,
          "target": 90,
          "delta": -1.3,
          "status": "warning",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 83.86,
              "target": 90,
              "volume": 3390
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 85.91,
              "target": 90,
              "volume": 2995
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 83.28,
              "target": 90,
              "volume": 2578
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 84.43,
              "target": 90,
              "volume": 2196
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 82.9,
              "target": 90,
              "volume": 2217
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 86.96,
              "target": 90,
              "volume": 2378
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 86.01,
              "target": 90,
              "volume": 2480
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 87.09,
              "target": 90,
              "volume": 2370
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 90.8,
              "target": 90,
              "volume": 2463
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 88.7,
              "target": 90,
              "volume": 2840
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 84.09,
              "target": 90,
              "volume": 943
            }
          ]
        },
        "volume": 0,
        "q": {
          "total": 0,
          "paq_ar": 0,
          "pas": 0,
          "expreso": 0
        }
      },
      "dia_puro": {
        "sla_paqar": {
          "value": 97.63,
          "target": 95,
          "delta": 2.63,
          "status": "ok",
          "series": [
            {
              "dateLabel": "22 Oct",
              "isoDate": "2026-10-22",
              "value": 97.41,
              "target": 95,
              "volume": 3663
            },
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 98.19,
              "target": 95,
              "volume": 3545
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 97.61,
              "target": 95,
              "volume": 3723
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 96.81,
              "target": 95,
              "volume": 3578
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 97.19,
              "target": 95,
              "volume": 3064
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 97.11,
              "target": 95,
              "volume": 2874
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 96.99,
              "target": 95,
              "volume": 3224
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 97.57,
              "target": 95,
              "volume": 3657
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 96.93,
              "target": 95,
              "volume": 3811
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 97.36,
              "target": 95,
              "volume": 3069
            }
          ],
          "volume": 55408
        },
        "fv_paqar": {
          "value": 88.21,
          "target": 90,
          "delta": -1.79,
          "status": "warning",
          "series": [
            {
              "dateLabel": "22 Oct",
              "isoDate": "2026-10-22",
              "value": 91.77,
              "target": 90,
              "volume": 2162
            },
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 92.65,
              "target": 90,
              "volume": 2083
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 91.33,
              "target": 90,
              "volume": 2145
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 91.24,
              "target": 90,
              "volume": 2112
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 93.2,
              "target": 90,
              "volume": 1779
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 91.25,
              "target": 90,
              "volume": 1702
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 90.42,
              "target": 90,
              "volume": 1775
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 89.75,
              "target": 90,
              "volume": 2117
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 90.04,
              "target": 90,
              "volume": 2279
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 89.34,
              "target": 90,
              "volume": 1810
            }
          ],
          "volume": 55408
        },
        "sla_pas": {
          "value": 89.44,
          "target": 95,
          "delta": -5.56,
          "status": "danger",
          "series": [
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 94.48,
              "target": 95,
              "volume": 1359
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 92.94,
              "target": 95,
              "volume": 1076
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 89.82,
              "target": 95,
              "volume": 904
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 91.22,
              "target": 95,
              "volume": 752
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 95.24,
              "target": 95,
              "volume": 883
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 94.99,
              "target": 95,
              "volume": 1376
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 95.11,
              "target": 95,
              "volume": 1288
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 90.37,
              "target": 95,
              "volume": 1194
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 89.44,
              "target": 95,
              "volume": 1392
            },
            {
              "dateLabel": "5 Nov",
              "isoDate": "2026-11-05",
              "value": 68.84,
              "target": 95,
              "volume": 1320
            }
          ]
        },
        "fv_pas": {
          "value": 60.06,
          "target": 90,
          "delta": -29.94,
          "status": "danger",
          "series": [
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 62.4,
              "target": 90,
              "volume": 1359
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 60.13,
              "target": 90,
              "volume": 1076
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 61.95,
              "target": 90,
              "volume": 904
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 59.44,
              "target": 90,
              "volume": 752
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 61.38,
              "target": 90,
              "volume": 883
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 59.38,
              "target": 90,
              "volume": 1376
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 60.56,
              "target": 90,
              "volume": 1288
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 58.04,
              "target": 90,
              "volume": 1194
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 60.06,
              "target": 90,
              "volume": 1392
            },
            {
              "dateLabel": "5 Nov",
              "isoDate": "2026-11-05",
              "value": 60.45,
              "target": 90,
              "volume": 1320
            }
          ]
        },
        "sla_expreso": {
          "value": 74.63,
          "target": 95,
          "volume": 2649,
          "status": "danger",
          "delta": -20.37
        },
        "fv_expreso": {
          "value": 82.6,
          "target": 90,
          "volume": 2649,
          "status": "danger",
          "delta": -7.4
        },
        "volume": 55408,
        "q": {
          "total": 55408,
          "paq_ar": 55408,
          "pas": 0,
          "expreso": 2649
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
          "value": 97.77,
          "target": 95,
          "delta": 2.77,
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
          ]
        },
        "fv_paqar": {
          "value": 86.9,
          "target": 90,
          "delta": -3.1,
          "status": "danger",
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
          ]
        },
        "sla_pas": {
          "value": 94.75,
          "target": 95,
          "delta": -0.25,
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
          ]
        },
        "fv_pas": {
          "value": 62.02,
          "target": 90,
          "delta": -27.98,
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
          ]
        },
        "sla_expreso": {
          "value": 85.1,
          "target": 95,
          "delta": -9.9,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 80.02,
              "target": 95,
              "volume": 4037
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 84.25,
              "target": 95,
              "volume": 3728
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 89.04,
              "target": 95,
              "volume": 4070
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 82.62,
              "target": 95,
              "volume": 3701
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 84.4,
              "target": 95,
              "volume": 3936
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 86.44,
              "target": 95,
              "volume": 4494
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 85.61,
              "target": 95,
              "volume": 4406
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 87.68,
              "target": 95,
              "volume": 4229
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 86.15,
              "target": 95,
              "volume": 4209
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 85.1,
              "target": 95,
              "volume": 4663
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 82.5,
              "target": 95,
              "volume": 1537
            }
          ]
        },
        "fv_expreso": {
          "value": 88.17,
          "target": 90,
          "delta": -1.83,
          "status": "warning",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 80.19,
              "target": 90,
              "volume": 3031
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 82.05,
              "target": 90,
              "volume": 2803
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 81.43,
              "target": 90,
              "volume": 2983
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 80.19,
              "target": 90,
              "volume": 2595
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 79.06,
              "target": 90,
              "volume": 2880
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 80.26,
              "target": 90,
              "volume": 3368
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 82.13,
              "target": 90,
              "volume": 3318
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 83.49,
              "target": 90,
              "volume": 3174
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 85.7,
              "target": 90,
              "volume": 3040
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 88.17,
              "target": 90,
              "volume": 3357
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 85.35,
              "target": 90,
              "volume": 1017
            }
          ]
        },
        "volume": 0,
        "q": {
          "total": 0,
          "paq_ar": 0,
          "pas": 0,
          "expreso": 0
        }
      },
      "dia_puro": {
        "sla_paqar": {
          "value": 97.63,
          "target": 95,
          "delta": 2.63,
          "status": "ok",
          "series": [
            {
              "dateLabel": "22 Oct",
              "isoDate": "2026-10-22",
              "value": 97.33,
              "target": 95,
              "volume": 3705
            },
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 98.42,
              "target": 95,
              "volume": 3351
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 98.7,
              "target": 95,
              "volume": 3690
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 98.69,
              "target": 95,
              "volume": 3746
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 98.3,
              "target": 95,
              "volume": 3119
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 97.75,
              "target": 95,
              "volume": 3112
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 97.6,
              "target": 95,
              "volume": 2878
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 98.64,
              "target": 95,
              "volume": 3823
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 98.34,
              "target": 95,
              "volume": 4047
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 98.73,
              "target": 95,
              "volume": 3144
            }
          ],
          "volume": 54764
        },
        "fv_paqar": {
          "value": 89.59,
          "target": 90,
          "delta": -0.41,
          "status": "warning",
          "series": [
            {
              "dateLabel": "22 Oct",
              "isoDate": "2026-10-22",
              "value": 87.58,
              "target": 90,
              "volume": 2310
            },
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 89.3,
              "target": 90,
              "volume": 2084
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 89.41,
              "target": 90,
              "volume": 2266
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 90.37,
              "target": 90,
              "volume": 2367
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 90.28,
              "target": 90,
              "volume": 1863
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 90.79,
              "target": 90,
              "volume": 1966
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 93.45,
              "target": 90,
              "volume": 1694
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 90.56,
              "target": 90,
              "volume": 2425
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 88.94,
              "target": 90,
              "volume": 2585
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 89.6,
              "target": 90,
              "volume": 1933
            }
          ],
          "volume": 54764
        },
        "sla_pas": {
          "value": 93.91,
          "target": 95,
          "delta": -1.09,
          "status": "warning",
          "series": [
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 92.07,
              "target": 95,
              "volume": 1047
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 90.47,
              "target": 95,
              "volume": 903
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 92.63,
              "target": 95,
              "volume": 692
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 95.77,
              "target": 95,
              "volume": 734
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 96.88,
              "target": 95,
              "volume": 928
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 98.54,
              "target": 95,
              "volume": 1236
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 97.41,
              "target": 95,
              "volume": 1198
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 96.67,
              "target": 95,
              "volume": 930
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 93.91,
              "target": 95,
              "volume": 1183
            },
            {
              "dateLabel": "5 Nov",
              "isoDate": "2026-11-05",
              "value": 88.55,
              "target": 95,
              "volume": 936
            }
          ]
        },
        "fv_pas": {
          "value": 72.1,
          "target": 90,
          "delta": -17.9,
          "status": "danger",
          "series": [
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 74.79,
              "target": 90,
              "volume": 1047
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 66.89,
              "target": 90,
              "volume": 903
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 65.32,
              "target": 90,
              "volume": 692
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 68.53,
              "target": 90,
              "volume": 734
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 65.73,
              "target": 90,
              "volume": 928
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 69.01,
              "target": 90,
              "volume": 1236
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 70.45,
              "target": 90,
              "volume": 1198
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 66.77,
              "target": 90,
              "volume": 930
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 72.1,
              "target": 90,
              "volume": 1183
            },
            {
              "dateLabel": "5 Nov",
              "isoDate": "2026-11-05",
              "value": 67.2,
              "target": 90,
              "volume": 936
            }
          ]
        },
        "sla_expreso": {
          "value": 83.41,
          "target": 95,
          "volume": 2724,
          "status": "danger",
          "delta": -11.59
        },
        "fv_expreso": {
          "value": 85.73,
          "target": 90,
          "volume": 2724,
          "status": "danger",
          "delta": -4.27
        },
        "volume": 54764,
        "q": {
          "total": 54764,
          "paq_ar": 54764,
          "pas": 0,
          "expreso": 2724
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
          "value": 98.31,
          "target": 95,
          "delta": 3.31,
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
          ]
        },
        "fv_paqar": {
          "value": 89.28,
          "target": 90,
          "delta": -0.72,
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
          ]
        },
        "sla_pas": {
          "value": 95.73,
          "target": 95,
          "delta": 0.73,
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
          ]
        },
        "fv_pas": {
          "value": 63.14,
          "target": 90,
          "delta": -26.86,
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
          ]
        },
        "sla_expreso": {
          "value": 90.66,
          "target": 95,
          "delta": -4.34,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 61.22,
              "target": 95,
              "volume": 5976
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 87.23,
              "target": 95,
              "volume": 5462
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 87.73,
              "target": 95,
              "volume": 5863
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 86.56,
              "target": 95,
              "volume": 5671
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 86.34,
              "target": 95,
              "volume": 6305
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 88.61,
              "target": 95,
              "volume": 7152
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 88.37,
              "target": 95,
              "volume": 7073
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 89.47,
              "target": 95,
              "volume": 6476
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 91.03,
              "target": 95,
              "volume": 6566
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 90.66,
              "target": 95,
              "volume": 7556
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 87.16,
              "target": 95,
              "volume": 2687
            }
          ]
        },
        "fv_expreso": {
          "value": 88.61,
          "target": 90,
          "delta": -1.39,
          "status": "warning",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 83.1,
              "target": 90,
              "volume": 4141
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 82.67,
              "target": 90,
              "volume": 3820
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 82.2,
              "target": 90,
              "volume": 4011
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 83.17,
              "target": 90,
              "volume": 3750
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 85.48,
              "target": 90,
              "volume": 4099
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 86.06,
              "target": 90,
              "volume": 4735
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 86.96,
              "target": 90,
              "volume": 4724
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 87.51,
              "target": 90,
              "volume": 4283
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 87.4,
              "target": 90,
              "volume": 4376
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 88.61,
              "target": 90,
              "volume": 5030
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 88.77,
              "target": 90,
              "volume": 1621
            }
          ]
        },
        "volume": 0,
        "q": {
          "total": 0,
          "paq_ar": 0,
          "pas": 0,
          "expreso": 0
        }
      },
      "dia_puro": {
        "sla_paqar": {
          "value": 97.8,
          "target": 95,
          "delta": 2.8,
          "status": "ok",
          "series": [
            {
              "dateLabel": "22 Oct",
              "isoDate": "2026-10-22",
              "value": 97.89,
              "target": 95,
              "volume": 4590
            },
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 98.53,
              "target": 95,
              "volume": 4148
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 98.53,
              "target": 95,
              "volume": 4546
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 98.16,
              "target": 95,
              "volume": 4519
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 98.28,
              "target": 95,
              "volume": 3833
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 98.17,
              "target": 95,
              "volume": 3830
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 98.41,
              "target": 95,
              "volume": 3588
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 98.72,
              "target": 95,
              "volume": 4441
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 99.18,
              "target": 95,
              "volume": 4515
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 98.49,
              "target": 95,
              "volume": 3829
            }
          ],
          "volume": 66780
        },
        "fv_paqar": {
          "value": 88.74,
          "target": 90,
          "delta": -1.26,
          "status": "warning",
          "series": [
            {
              "dateLabel": "22 Oct",
              "isoDate": "2026-10-22",
              "value": 88.82,
              "target": 90,
              "volume": 3094
            },
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 88.88,
              "target": 90,
              "volume": 2724
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 90.27,
              "target": 90,
              "volume": 3124
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 90.85,
              "target": 90,
              "volume": 3061
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 91.38,
              "target": 90,
              "volume": 2574
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 92.36,
              "target": 90,
              "volume": 2605
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 91.86,
              "target": 90,
              "volume": 2470
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 91.32,
              "target": 90,
              "volume": 3008
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 90.37,
              "target": 90,
              "volume": 3105
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 89.42,
              "target": 90,
              "volume": 2655
            }
          ],
          "volume": 66780
        },
        "sla_pas": {
          "value": 93.38,
          "target": 95,
          "delta": -1.62,
          "status": "warning",
          "series": [
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 95.01,
              "target": 95,
              "volume": 982
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 95.75,
              "target": 95,
              "volume": 636
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 94.47,
              "target": 95,
              "volume": 778
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 97.39,
              "target": 95,
              "volume": 730
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 98.28,
              "target": 95,
              "volume": 1108
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 98.59,
              "target": 95,
              "volume": 1066
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 98.17,
              "target": 95,
              "volume": 986
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 95.58,
              "target": 95,
              "volume": 1041
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 93.38,
              "target": 95,
              "volume": 861
            },
            {
              "dateLabel": "5 Nov",
              "isoDate": "2026-11-05",
              "value": 94.22,
              "target": 95,
              "volume": 970
            }
          ]
        },
        "fv_pas": {
          "value": 63.3,
          "target": 90,
          "delta": -26.7,
          "status": "danger",
          "series": [
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 65.89,
              "target": 90,
              "volume": 982
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 64.31,
              "target": 90,
              "volume": 636
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 61.18,
              "target": 90,
              "volume": 778
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 67.67,
              "target": 90,
              "volume": 730
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 66.34,
              "target": 90,
              "volume": 1108
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 66.42,
              "target": 90,
              "volume": 1066
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 61.76,
              "target": 90,
              "volume": 986
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 50.14,
              "target": 90,
              "volume": 1041
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 63.3,
              "target": 90,
              "volume": 861
            },
            {
              "dateLabel": "5 Nov",
              "isoDate": "2026-11-05",
              "value": 69.79,
              "target": 90,
              "volume": 970
            }
          ]
        },
        "sla_expreso": {
          "value": 86.97,
          "target": 95,
          "volume": 5095,
          "status": "danger",
          "delta": -8.03
        },
        "fv_expreso": {
          "value": 83.7,
          "target": 90,
          "volume": 5095,
          "status": "danger",
          "delta": -6.3
        },
        "volume": 66780,
        "q": {
          "total": 66780,
          "paq_ar": 66780,
          "pas": 0,
          "expreso": 5095
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
          "value": 96.75,
          "target": 95,
          "delta": 1.75,
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
          ]
        },
        "fv_paqar": {
          "value": 83.14,
          "target": 90,
          "delta": -6.86,
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
          ]
        },
        "sla_pas": {
          "value": 78.21,
          "target": 95,
          "delta": -16.79,
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
          ]
        },
        "fv_pas": {
          "value": 60.55,
          "target": 90,
          "delta": -29.45,
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
          ]
        },
        "sla_expreso": {
          "value": 60.75,
          "target": 95,
          "delta": -34.25,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 59.96,
              "target": 95,
              "volume": 942
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 59.18,
              "target": 95,
              "volume": 811
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 61.82,
              "target": 95,
              "volume": 867
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 58.88,
              "target": 95,
              "volume": 815
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 54.34,
              "target": 95,
              "volume": 933
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 59.76,
              "target": 95,
              "volume": 952
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 57.17,
              "target": 95,
              "volume": 934
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 57.33,
              "target": 95,
              "volume": 928
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 60.21,
              "target": 95,
              "volume": 890
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 60.75,
              "target": 95,
              "volume": 1060
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 60.24,
              "target": 95,
              "volume": 410
            }
          ]
        },
        "fv_expreso": {
          "value": 83.44,
          "target": 90,
          "delta": -6.56,
          "status": "danger",
          "series": [
            {
              "dateLabel": "Ene",
              "isoDate": "2026-01-01",
              "value": 70.81,
              "target": 90,
              "volume": 556
            },
            {
              "dateLabel": "Feb",
              "isoDate": "2026-02-01",
              "value": 70.96,
              "target": 90,
              "volume": 458
            },
            {
              "dateLabel": "Mar",
              "isoDate": "2026-03-01",
              "value": 56.24,
              "target": 90,
              "volume": 489
            },
            {
              "dateLabel": "Abr",
              "isoDate": "2026-04-01",
              "value": 70.74,
              "target": 90,
              "volume": 434
            },
            {
              "dateLabel": "May",
              "isoDate": "2026-05-01",
              "value": 66.43,
              "target": 90,
              "volume": 554
            },
            {
              "dateLabel": "Jun",
              "isoDate": "2026-06-01",
              "value": 78.39,
              "target": 90,
              "volume": 509
            },
            {
              "dateLabel": "Jul",
              "isoDate": "2026-07-01",
              "value": 73.94,
              "target": 90,
              "volume": 541
            },
            {
              "dateLabel": "Ago",
              "isoDate": "2026-08-01",
              "value": 76.83,
              "target": 90,
              "volume": 505
            },
            {
              "dateLabel": "Sep",
              "isoDate": "2026-09-01",
              "value": 78.83,
              "target": 90,
              "volume": 521
            },
            {
              "dateLabel": "Oct",
              "isoDate": "2026-10-01",
              "value": 83.44,
              "target": 90,
              "volume": 598
            },
            {
              "dateLabel": "Nov",
              "isoDate": "2026-11-01",
              "value": 82.18,
              "target": 90,
              "volume": 202
            }
          ]
        },
        "volume": 0,
        "q": {
          "total": 0,
          "paq_ar": 0,
          "pas": 0,
          "expreso": 0
        }
      },
      "dia_puro": {
        "sla_paqar": {
          "value": 96.91,
          "target": 95,
          "delta": 1.91,
          "status": "ok",
          "series": [
            {
              "dateLabel": "22 Oct",
              "isoDate": "2026-10-22",
              "value": 95.93,
              "target": 95,
              "volume": 1547
            },
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 96.37,
              "target": 95,
              "volume": 1489
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 97.07,
              "target": 95,
              "volume": 1671
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 97.61,
              "target": 95,
              "volume": 1755
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 96.85,
              "target": 95,
              "volume": 1493
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 96.18,
              "target": 95,
              "volume": 1310
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 97.08,
              "target": 95,
              "volume": 1370
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 96.34,
              "target": 95,
              "volume": 1751
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 96.98,
              "target": 95,
              "volume": 1853
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 96.61,
              "target": 95,
              "volume": 1328
            }
          ],
          "volume": 24696
        },
        "fv_paqar": {
          "value": 84.87,
          "target": 90,
          "delta": -5.13,
          "status": "danger",
          "series": [
            {
              "dateLabel": "22 Oct",
              "isoDate": "2026-10-22",
              "value": 82.81,
              "target": 90,
              "volume": 960
            },
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 84.8,
              "target": 90,
              "volume": 888
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 84.4,
              "target": 90,
              "volume": 1000
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 83.59,
              "target": 90,
              "volume": 1091
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 86.65,
              "target": 90,
              "volume": 869
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 89.15,
              "target": 90,
              "volume": 756
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 86.22,
              "target": 90,
              "volume": 762
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 87.72,
              "target": 90,
              "volume": 1083
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 86.14,
              "target": 90,
              "volume": 1111
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 88.76,
              "target": 90,
              "volume": 783
            }
          ],
          "volume": 24696
        },
        "sla_pas": {
          "value": 85,
          "target": 95,
          "delta": -10,
          "status": "danger",
          "series": [
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 89.36,
              "target": 95,
              "volume": 94
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 96.43,
              "target": 95,
              "volume": 84
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 88.99,
              "target": 95,
              "volume": 109
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 67.03,
              "target": 95,
              "volume": 182
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 63.46,
              "target": 95,
              "volume": 52
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 82.05,
              "target": 95,
              "volume": 39
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 66.67,
              "target": 95,
              "volume": 69
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 77.78,
              "target": 95,
              "volume": 27
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 85,
              "target": 95,
              "volume": 60
            },
            {
              "dateLabel": "5 Nov",
              "isoDate": "2026-11-05",
              "value": 86.49,
              "target": 95,
              "volume": 37
            }
          ]
        },
        "fv_pas": {
          "value": 75,
          "target": 90,
          "delta": -15,
          "status": "danger",
          "series": [
            {
              "dateLabel": "23 Oct",
              "isoDate": "2026-10-23",
              "value": 64.89,
              "target": 90,
              "volume": 94
            },
            {
              "dateLabel": "26 Oct",
              "isoDate": "2026-10-26",
              "value": 69.05,
              "target": 90,
              "volume": 84
            },
            {
              "dateLabel": "27 Oct",
              "isoDate": "2026-10-27",
              "value": 58.72,
              "target": 90,
              "volume": 109
            },
            {
              "dateLabel": "28 Oct",
              "isoDate": "2026-10-28",
              "value": 62.64,
              "target": 90,
              "volume": 182
            },
            {
              "dateLabel": "29 Oct",
              "isoDate": "2026-10-29",
              "value": 51.92,
              "target": 90,
              "volume": 52
            },
            {
              "dateLabel": "30 Oct",
              "isoDate": "2026-10-30",
              "value": 56.41,
              "target": 90,
              "volume": 39
            },
            {
              "dateLabel": "2 Nov",
              "isoDate": "2026-11-02",
              "value": 72.46,
              "target": 90,
              "volume": 69
            },
            {
              "dateLabel": "3 Nov",
              "isoDate": "2026-11-03",
              "value": 85.19,
              "target": 90,
              "volume": 27
            },
            {
              "dateLabel": "4 Nov",
              "isoDate": "2026-11-04",
              "value": 75,
              "target": 90,
              "volume": 60
            },
            {
              "dateLabel": "5 Nov",
              "isoDate": "2026-11-05",
              "value": 75.68,
              "target": 90,
              "volume": 37
            }
          ]
        },
        "sla_expreso": {
          "value": 61.93,
          "target": 95,
          "volume": 675,
          "status": "danger",
          "delta": -33.07
        },
        "fv_expreso": {
          "value": 76.73,
          "target": 90,
          "volume": 675,
          "status": "danger",
          "delta": -13.27
        },
        "volume": 24696,
        "q": {
          "total": 24696,
          "paq_ar": 24696,
          "pas": 0,
          "expreso": 675
        }
      }
    }
  ],
  "series": {
    "slaPaq": {
      "Último día operativo": [
        [
          "22 Oct",
          97.44,
          21326
        ],
        [
          "23 Oct",
          97.88,
          19630
        ],
        [
          "26 Oct",
          98.05,
          21325
        ],
        [
          "27 Oct",
          97.72,
          21294
        ],
        [
          "28 Oct",
          97.59,
          17807
        ],
        [
          "29 Oct",
          97.3,
          17384
        ],
        [
          "30 Oct",
          97.48,
          17311
        ],
        [
          "2 Nov",
          97.94,
          21512
        ],
        [
          "3 Nov",
          97.81,
          22199
        ],
        [
          "4 Nov",
          97.85,
          17967
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
          "22 Oct",
          88.95,
          12673
        ],
        [
          "23 Oct",
          88.94,
          11419
        ],
        [
          "26 Oct",
          89.58,
          12480
        ],
        [
          "27 Oct",
          90.14,
          12661
        ],
        [
          "28 Oct",
          90.91,
          10270
        ],
        [
          "29 Oct",
          91.11,
          10331
        ],
        [
          "30 Oct",
          91.12,
          9918
        ],
        [
          "2 Nov",
          89.93,
          12721
        ],
        [
          "3 Nov",
          89.66,
          13235
        ],
        [
          "4 Nov",
          89.79,
          10689
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
          "23 Oct",
          91.73,
          5807
        ],
        [
          "26 Oct",
          91.78,
          4381
        ],
        [
          "27 Oct",
          92.64,
          4145
        ],
        [
          "28 Oct",
          91.58,
          4849
        ],
        [
          "29 Oct",
          95.36,
          5968
        ],
        [
          "30 Oct",
          96.12,
          5824
        ],
        [
          "2 Nov",
          95.89,
          7258
        ],
        [
          "3 Nov",
          94.07,
          5820
        ],
        [
          "4 Nov",
          91.15,
          5405
        ],
        [
          "5 Nov",
          85.57,
          5049
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
          "23 Oct",
          63.84,
          5807
        ],
        [
          "26 Oct",
          61.9,
          4381
        ],
        [
          "27 Oct",
          63.33,
          4145
        ],
        [
          "28 Oct",
          64.16,
          4849
        ],
        [
          "29 Oct",
          64.04,
          5968
        ],
        [
          "30 Oct",
          63.34,
          5824
        ],
        [
          "2 Nov",
          63.14,
          7258
        ],
        [
          "3 Nov",
          60.27,
          5820
        ],
        [
          "4 Nov",
          65.66,
          5405
        ],
        [
          "5 Nov",
          66.92,
          5049
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
          "22 Oct",
          84.48,
          1450
        ],
        [
          "23 Oct",
          83.17,
          1016
        ],
        [
          "26 Oct",
          85.82,
          1058
        ],
        [
          "27 Oct",
          83.07,
          1028
        ],
        [
          "28 Oct",
          80.7,
          1000
        ],
        [
          "29 Oct",
          83.61,
          1470
        ],
        [
          "30 Oct",
          80.36,
          1049
        ],
        [
          "2 Nov",
          81.89,
          983
        ],
        [
          "3 Nov",
          77.86,
          944
        ],
        [
          "4 Nov",
          77.69,
          901
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
          "22 Oct",
          89.75,
          1015
        ],
        [
          "23 Oct",
          86.86,
          647
        ],
        [
          "26 Oct",
          88.73,
          710
        ],
        [
          "27 Oct",
          89.97,
          708
        ],
        [
          "28 Oct",
          91.67,
          672
        ],
        [
          "29 Oct",
          91.44,
          1028
        ],
        [
          "30 Oct",
          91.65,
          695
        ],
        [
          "2 Nov",
          89.2,
          648
        ],
        [
          "3 Nov",
          89.16,
          609
        ],
        [
          "4 Nov",
          87.54,
          602
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