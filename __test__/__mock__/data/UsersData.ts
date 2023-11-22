const mockUsersdata = [
  {
    "bananas": 36750,
    "isSearched": false,
    "lastDayPlayed": "2018-07-21",
    "longestStreak": 18,
    "name": "Chris Buckley",
    "rank": 1,
    "stars": 176,
    "subscribed": true,
    "uid": "zJsI8m74uqOI3el3EM1u64kbUWd2"
  },
  {
    "bananas": 27800,
    "isSearched": false,
    "lastDayPlayed": "2018-12-30",
    "longestStreak": 7,
    "name": "Patrick Kennedy",
    "rank": 2,
    "stars": 104,
    "subscribed": true,
    "uid": "zOztg0xHJwN2GSHO9XSFAPvTl7E2"
  },
  {
    "bananas": 19500,
    "isSearched": false,
    "lastDayPlayed": "2019-02-02",
    "longestStreak": 9,
    "name": "Wolfgang Wirtz",
    "rank": 3,
    "stars": 92,
    "subscribed": true,
    "uid": "zQH10NTZfYaXACdiF3V6hd7Ahn93"
  },
  {
    "bananas": 18250,
    "isSearched": false,
    "lastDayPlayed": "2019-02-01",
    "longestStreak": 13,
    "name": "Bryan Holleman",
    "rank": 4,
    "stars": 66,
    "subscribed": true,
    "uid": "zBgGPzU0saQuZHL7EH3T8xX6zCm2"
  },
  {
    "bananas": 17200,
    "isSearched": false,
    "lastDayPlayed": "2018-12-14",
    "longestStreak": 4,
    "name": "Kim Schytt-Nielsen",
    "rank": 5,
    "stars": 35,
    "subscribed": true,
    "uid": "zyqWz9Obwsfk9TIkDAoNshMGPtc2"
  },
  {
    "bananas": 14300,
    "isSearched": false,
    "lastDayPlayed": "2018-05-15",
    "longestStreak": 3,
    "name": "Tobias Fager",
    "rank": 6,
    "stars": 64,
    "subscribed": false,
    "uid": "znHBpuZTcVhC5DpMtSAYLGtWo023"
  },
  {
    "bananas": 11250,
    "isSearched": false,
    "lastDayPlayed": "2019-01-29",
    "longestStreak": 4,
    "name": "Lawrence Chan",
    "rank": 7,
    "stars": 53,
    "subscribed": true,
    "uid": "zOCMOcl3dKfgnJFvaS1Tk9Ifq3A3"
  },
  {
    "bananas": 8300,
    "isSearched": false,
    "lastDayPlayed": "2019-01-25",
    "longestStreak": 4,
    "name": "Hannah Krzywicki",
    "rank": 8,
    "stars": 34,
    "subscribed": true,
    "uid": "zRa6fy2hvtYWXkKI3jKoASOqmd32"
  },
  {
    "bananas": 6550,
    "isSearched": false,
    "lastDayPlayed": "2018-09-18",
    "longestStreak": 6,
    "name": "Emma",
    "rank": 9,
    "stars": 24,
    "subscribed": false,
    "uid": "zDHhDho9h5fTDntQhyEg66RMvqK2"
  },
  {
    "bananas": 6200,
    "isSearched": false,
    "lastDayPlayed": "2018-12-23",
    "longestStreak": 2,
    "name": "Alexander Mochalski",
    "rank": 10,
    "stars": 26,
    "subscribed": true,
    "uid": "zOKzuWGBUVWRrTxyEHgTKc4gin32"
  },
  {
    "bananas": 6050,
    "isSearched": false,
    "lastDayPlayed": "2019-02-10",
    "longestStreak": 2,
    "name": "Paula Nicholson",
    "rank": 11,
    "stars": 26,
    "subscribed": false,
    "uid": "zxYQWVjG0lVofYMq7E6YHv2rOOx1"
  },
  {
    "bananas": 5900,
    "isSearched": false,
    "lastDayPlayed": "2018-07-12",
    "longestStreak": 5,
    "name": "LI Fei",
    "rank": 12,
    "stars": 23,
    "subscribed": false,
    "uid": "zLlxeBk5X1RGxyyBaLpTqJ77X433"
  },
  {
    "bananas": 5850,
    "isSearched": false,
    "lastDayPlayed": "2018-04-12",
    "longestStreak": 2,
    "name": "Julius tan",
    "rank": 13,
    "stars": 29,
    "subscribed": false,
    "uid": "zCjuR4mh5waicF2sGAc5a5wBfzy1"
  },
  {
    "bananas": 5600,
    "isSearched": false,
    "lastDayPlayed": "2018-08-10",
    "longestStreak": 4,
    "name": "T-ran TheMan",
    "rank": 14,
    "stars": 27,
    "subscribed": false,
    "uid": "z5I2l0nLnqas8H4bQEAiIX6iTT72"
  },
  {
    "bananas": 5400,
    "isSearched": false,
    "lastDayPlayed": "2019-02-01",
    "longestStreak": 4,
    "name": "James Edmans",
    "rank": 15,
    "stars": 5,
    "subscribed": false,
    "uid": "zU6sDK44MPTVxoMZQXvZUfkhbqs1"
  },
  {
    "bananas": 5250,
    "isSearched": false,
    "lastDayPlayed": "2018-08-23",
    "longestStreak": 4,
    "name": "Gregory S.Pettys",
    "rank": 16,
    "stars": 20,
    "subscribed": true,
    "uid": "yrRdJiWXAASYiUDsGCEfvbiEqbh2"
  },
  {
    "bananas": 4600,
    "isSearched": false,
    "lastDayPlayed": "2018-04-18",
    "longestStreak": 4,
    "name": "Ivy",
    "rank": 17,
    "stars": 21,
    "subscribed": false,
    "uid": "zycLGDOMWLZLyjGrc98TdumJHl32"
  },
  {
    "bananas": 4300,
    "isSearched": false,
    "lastDayPlayed": "2018-10-31",
    "longestStreak": 8,
    "name": "Will Gao",
    "rank": 18,
    "stars": 21,
    "subscribed": false,
    "uid": "zYPGJUJV3wY1jANnWacpxwsD7FJ2"
  },
  {
    "bananas": 4200,
    "isSearched": false,
    "lastDayPlayed": "2018-12-02",
    "longestStreak": 2,
    "name": "Ken Chan",
    "rank": 19,
    "stars": 23,
    "subscribed": false,
    "uid": "zfhA4TxCQvXvPYUGR2U6yifugHw2"
  },
  {
    "bananas": 4100,
    "isSearched": false,
    "lastDayPlayed": "2018-11-27",
    "longestStreak": 3,
    "name": "Beatrice Kalalo",
    "rank": 20,
    "stars": 14,
    "subscribed": false,
    "uid": "yzqGJMNMEPU7lsjq7TE19qmectr1"
  },
  {
    "bananas": 3750,
    "isSearched": false,
    "lastDayPlayed": "2019-02-10",
    "longestStreak": 2,
    "name": "Antonio Hugo",
    "rank": 21,
    "stars": 23,
    "subscribed": true,
    "uid": "yusdv5L6tVfjozEh2j74EQaCJ8u2"
  },
  {
    "bananas": 3600,
    "isSearched": false,
    "lastDayPlayed": "2018-05-24",
    "longestStreak": 3,
    "name": "Mark Appleton",
    "rank": 22,
    "stars": 14,
    "subscribed": false,
    "uid": "ywDuLHGhIqfx5D0ZHidMftfrrpg2"
  },
  {
    "bananas": 3550,
    "isSearched": false,
    "lastDayPlayed": "2019-01-28",
    "longestStreak": 1,
    "name": "Chaiya Vomschee",
    "rank": 23,
    "stars": 14,
    "subscribed": false,
    "uid": "zrPeBbET8jWcbxPOzXiIZ3gFezE3"
  },
  {
    "bananas": 3500,
    "isSearched": false,
    "lastDayPlayed": "2019-01-13",
    "longestStreak": 2,
    "name": "SmoKing500",
    "rank": 24,
    "stars": 21,
    "subscribed": false,
    "uid": "zJwSgKip9kRVcRjSITq4lqTpWdu1"
  },
  {
    "bananas": 3450,
    "isSearched": false,
    "lastDayPlayed": "2018-09-02",
    "longestStreak": 1,
    "name": "ឡាំ អរុណ",
    "rank": 25,
    "stars": 18,
    "subscribed": false,
    "uid": "zayhZbpkubUaYzQ1nc50ZUkpPh42"
  },
  {
    "bananas": 3400,
    "isSearched": false,
    "lastDayPlayed": "2018-08-09",
    "longestStreak": 2,
    "name": "Khwanoi",
    "rank": 26,
    "stars": 8,
    "subscribed": false,
    "uid": "z6RVBacBiMbmS5xtTZXcDcyeQZI3"
  },
  {
    "bananas": 3200,
    "isSearched": false,
    "lastDayPlayed": "2018-10-27",
    "longestStreak": 1,
    "name": "Luana Souza",
    "rank": 27,
    "stars": 13,
    "subscribed": false,
    "uid": "zz3PO3lfXzQAx12HilVxkPrgcP63"
  },
  {
    "bananas": 3200,
    "isSearched": false,
    "lastDayPlayed": "2018-07-01",
    "longestStreak": 1,
    "name": "OneEyed JackBurton",
    "rank": 28,
    "stars": 15,
    "subscribed": false,
    "uid": "zBqesUIHQxZhKlmeiuIeX1URPrk2"
  },
  {
    "bananas": 3150,
    "isSearched": false,
    "lastDayPlayed": "2018-12-27",
    "longestStreak": 1,
    "name": "David Seok",
    "rank": 29,
    "stars": 20,
    "subscribed": false,
    "uid": "z4rQXao1uwYh2ur4dfzDHGwOp5A2"
  },
  {
    "bananas": 3150,
    "isSearched": false,
    "lastDayPlayed": "2018-09-05",
    "longestStreak": 5,
    "name": "li Choi",
    "rank": 30,
    "stars": 17,
    "subscribed": false,
    "uid": "zZslrtbGXsW9MiDOtTKOGARBiYw2"
  },
  {
    "bananas": 3150,
    "isSearched": false,
    "lastDayPlayed": "2018-10-22",
    "longestStreak": 2,
    "name": "Mohamad R JulianWangsadinata",
    "rank": 31,
    "stars": 17,
    "subscribed": false,
    "uid": "zywwDpX4ovUw52Kt2vOP6tFbpzG3"
  },
  {
    "bananas": 3150,
    "isSearched": false,
    "lastDayPlayed": "2018-10-29",
    "longestStreak": 3,
    "name": "Ruthie Duncan",
    "rank": 32,
    "stars": 16,
    "subscribed": true,
    "uid": "zuHgvZULlXe6EJABD3aveXq5QSE2"
  },
  {
    "bananas": 2750,
    "isSearched": false,
    "lastDayPlayed": "2018-10-05",
    "longestStreak": 2,
    "name": "David Deluca",
    "rank": 33,
    "stars": 17,
    "subscribed": false,
    "uid": "zQHqAv92CPNkIHAE1W9zxHfhTn92"
  },
  {
    "bananas": 2650,
    "isSearched": false,
    "lastDayPlayed": "2019-01-19",
    "longestStreak": 1,
    "name": "Ole",
    "rank": 34,
    "stars": 13,
    "subscribed": false,
    "uid": "yuc1YnVeKnWf5h72ihDynqop4tk1"
  },
  {
    "bananas": 2600,
    "isSearched": false,
    "lastDayPlayed": "2019-01-18",
    "longestStreak": 2,
    "name": "Diyanah Nisa",
    "rank": 35,
    "stars": 15,
    "subscribed": false,
    "uid": "zje4fPFNhaPJCtXHEDltLl5Xpcj2"
  },
  {
    "bananas": 2550,
    "isSearched": false,
    "lastDayPlayed": "2018-12-29",
    "longestStreak": 1,
    "name": "Husna Latif",
    "rank": 36,
    "stars": 10,
    "subscribed": false,
    "uid": "zIuUTLc10jdvp1RAmK21OFv0Jas1"
  },
  {
    "bananas": 2500,
    "isSearched": false,
    "lastDayPlayed": "2018-05-25",
    "longestStreak": 3,
    "name": "Atlan Gonozal",
    "rank": 37,
    "stars": 15,
    "subscribed": false,
    "uid": "z48Wfqhx5xaUBkLyMFCElVuiDFr1"
  },
  {
    "bananas": 2450,
    "isSearched": false,
    "lastDayPlayed": "2018-12-31",
    "longestStreak": 1,
    "name": "方景",
    "rank": 38,
    "stars": 16,
    "subscribed": false,
    "uid": "zxtxBkJPtXaNnfithxer7rczOS72"
  },
  {
    "bananas": 2400,
    "isSearched": false,
    "lastDayPlayed": "2018-11-28",
    "longestStreak": 2,
    "name": "Fab Ulousfab",
    "rank": 39,
    "stars": 11,
    "subscribed": false,
    "uid": "zgd3dQQcYoferMuzilX8OzPLiqG3"
  },
  {
    "bananas": 2350,
    "isSearched": false,
    "lastDayPlayed": "2019-02-01",
    "longestStreak": 2,
    "name": "Safwan Fatih",
    "rank": 40,
    "stars": 16,
    "subscribed": false,
    "uid": "zrghPITD6tZPSgWQmaxjzPCMdVz2"
  }
]

export const mockUserDataFromApi = {
  "00D1LA8puAa1GINkVpfgC1TmO0m1": {
    "bananas": 200,
    "lastDayPlayed": "2018-11-22",
    "longestStreak": 1,
    "name": "Rica Ella Francisco",
    "stars": 6,
    "subscribed": false,
    "uid": "00D1LA8puAa1GINkVpfgC1TmO0m1"
  },
  "x8RNvUgv5pZqDVatEXb2aYgSflq1": {
    "bananas": 0,
    "lastDayPlayed": "2017-11-01",
    "longestStreak": 0,
    "name": "Adh Fuoo",
    "stars": 4,
    "subscribed": false,
    "uid": "x8RNvUgv5pZqDVatEXb2aYgSflq1"
  },

  "ylL3XqPOlycHiPBuf1uXHlgZzEr2": {
    "bananas": 150,
    "lastDayPlayed": "2018-10-17",
    "longestStreak": 1,
    "name": "Jayne Su YueHe",
    "stars": 4,
    "subscribed": false,
    "uid": "ylL3XqPOlycHiPBuf1uXHlgZzEr2"
  },
  "ylsPzJdfKggHuBVcqHVYxzVRdtJ2": {
    "bananas": 0,
    "lastDayPlayed": "2017-11-01",
    "longestStreak": 0,
    "name": "Yo Yo Chou",
    "stars": 4,
    "subscribed": false,
    "uid": "ylsPzJdfKggHuBVcqHVYxzVRdtJ2"
  },
  "ylwtBuIr70fEIxcCE80fSRRo7np2": {
    "bananas": 0,
    "lastDayPlayed": "2017-11-01",
    "longestStreak": 0,
    "name": "Toke Chen",
    "stars": 4,
    "subscribed": false,
    "uid": "ylwtBuIr70fEIxcCE80fSRRo7np2"
  },
  "ymAf3Zs3MCe0zwjQnATm2B9LmeY2": {
    "bananas": 0,
    "lastDayPlayed": "2017-11-01",
    "longestStreak": 0,
    "name": "王連辟",
    "stars": 5,
    "subscribed": false,
    "uid": "ymAf3Zs3MCe0zwjQnATm2B9LmeY2"
  },
  "ymXlQBolGjc664PfpwjeMG3slbD3": {
    "bananas": 1100,
    "lastDayPlayed": "2018-08-04",
    "longestStreak": 1,
    "name": "Bernard Andy Eugenio Gulla",
    "stars": 9,
    "subscribed": false,
    "uid": "ymXlQBolGjc664PfpwjeMG3slbD3"
  },
  "ymddj0GvbKSeNTC3zDa6eYqjZnY2": {
    "bananas": 750,
    "lastDayPlayed": "2018-12-10",
    "longestStreak": 2,
    "name": "Mark Wong",
    "stars": 7,
    "subscribed": false,
    "uid": "ymddj0GvbKSeNTC3zDa6eYqjZnY2"
  },
  "ymi5YolrBOTmzPJs1ZEvAxWVzx92": {
    "bananas": 200,
    "lastDayPlayed": "2018-06-17",
    "longestStreak": 1,
    "name": "amirul hariz",
    "stars": 5,
    "subscribed": false,
    "uid": "ymi5YolrBOTmzPJs1ZEvAxWVzx92"
  },
  "ymonOSLRONZxm99JFaPcbUoZSOF3": {
    "bananas": 0,
    "lastDayPlayed": "2017-11-01",
    "longestStreak": 0,
    "name": "Nur Gümüş",
    "stars": 5,
    "subscribed": false,
    "uid": "ymonOSLRONZxm99JFaPcbUoZSOF3"
  },
  "yn8Jn7LPoCcL3e6KZtGx3RmzDB63": {
    "bananas": 900,
    "lastDayPlayed": "2018-05-09",
    "longestStreak": 2,
    "name": "Victoria Vang",
    "stars": 8,
    "subscribed": false,
    "uid": "yn8Jn7LPoCcL3e6KZtGx3RmzDB63"
  },
  "ynGq0tckUyTBHFiB0c6v2Y2NxGH3": {
    "bananas": 2150,
    "lastDayPlayed": "2018-10-11",
    "longestStreak": 2,
    "name": "Iolanda Rodrigues",
    "stars": 15,
    "subscribed": false,
    "uid": "ynGq0tckUyTBHFiB0c6v2Y2NxGH3"
  },
  "ynXlyqthAfTrFbK8M4iQFFZTkYp2": {
    "bananas": 550,
    "lastDayPlayed": "2018-12-05",
    "longestStreak": 1,
    "name": "diana smith",
    "stars": 6,
    "subscribed": false,
    "uid": "ynXlyqthAfTrFbK8M4iQFFZTkYp2"
  },
  "yniH9BMgoUYDFV3oNzBoKLq9BYj1": {
    "bananas": 0,
    "lastDayPlayed": "2017-11-01",
    "longestStreak": 0,
    "name": "Qiao Yee",
    "stars": 5,
    "subscribed": false,
    "uid": "yniH9BMgoUYDFV3oNzBoKLq9BYj1"
  },
  "yniTP0KsvfRDuw8weRArLiUDLR13": {
    "bananas": 200,
    "lastDayPlayed": "2018-08-13",
    "longestStreak": 1,
    "name": "Daniel Horn",
    "stars": 6,
    "subscribed": false,
    "uid": "yniTP0KsvfRDuw8weRArLiUDLR13"
  },
  "ynp3NHnzBBYGf0WWiOdMDug0bXZ2": {
    "bananas": 0,
    "lastDayPlayed": "2017-11-01",
    "longestStreak": 0,
    "name": "",
    "stars": 5,
    "subscribed": false,
    "uid": "ynp3NHnzBBYGf0WWiOdMDug0bXZ2"
  },
  "yo4XFheX0DRGXLWsDMwUwvPUvN23": {
    "bananas": 2100,
    "lastDayPlayed": "2018-05-12",
    "longestStreak": 2,
    "name": "laila",
    "stars": 14,
    "subscribed": false,
    "uid": "yo4XFheX0DRGXLWsDMwUwvPUvN23"
  },
  "yo5Sj0tkgFeTAmfU72ankN9rMwO2": {
    "bananas": 150,
    "lastDayPlayed": "2019-02-06",
    "longestStreak": 1,
    "name": "Emma-Lee Crothers",
    "stars": 5,
    "subscribed": false,
    "uid": "yo5Sj0tkgFeTAmfU72ankN9rMwO2"
  },
  "yoDHUejMeshN1bOw9Bq671vMaph2": {
    "bananas": 0,
    "lastDayPlayed": "2017-11-01",
    "longestStreak": 0,
    "name": "Ocelotl Kanpol",
    "stars": 5,
    "subscribed": false,
    "uid": "yoDHUejMeshN1bOw9Bq671vMaph2"
  },
}

export const expectedValue = [
  {
    bananas: 2150,
    lastDayPlayed: '2018-10-11',
    longestStreak: 2,
    name: 'Iolanda Rodrigues',
    stars: 15,
    subscribed: false,
    uid: 'ynGq0tckUyTBHFiB0c6v2Y2NxGH3',
    isSearched: false,
    rank: 1
  },
  {
    bananas: 2100,
    lastDayPlayed: '2018-05-12',
    longestStreak: 2,
    name: 'laila',
    stars: 14,
    subscribed: false,
    uid: 'yo4XFheX0DRGXLWsDMwUwvPUvN23',
    isSearched: false,
    rank: 2
  },
  {
    bananas: 1100,
    lastDayPlayed: '2018-08-04',
    longestStreak: 1,
    name: 'Bernard Andy Eugenio Gulla',
    stars: 9,
    subscribed: false,
    uid: 'ymXlQBolGjc664PfpwjeMG3slbD3',
    isSearched: false,
    rank: 3
  },
  {
    bananas: 900,
    lastDayPlayed: '2018-05-09',
    longestStreak: 2,
    name: 'Victoria Vang',
    stars: 8,
    subscribed: false,
    uid: 'yn8Jn7LPoCcL3e6KZtGx3RmzDB63',
    isSearched: false,
    rank: 4
  },
  {
    bananas: 750,
    lastDayPlayed: '2018-12-10',
    longestStreak: 2,
    name: 'Mark Wong',
    stars: 7,
    subscribed: false,
    uid: 'ymddj0GvbKSeNTC3zDa6eYqjZnY2',
    isSearched: false,
    rank: 5
  },
  {
    bananas: 550,
    lastDayPlayed: '2018-12-05',
    longestStreak: 1,
    name: 'diana smith',
    stars: 6,
    subscribed: false,
    uid: 'ynXlyqthAfTrFbK8M4iQFFZTkYp2',
    isSearched: false,
    rank: 6
  },
  {
    bananas: 200,
    lastDayPlayed: '2018-06-17',
    longestStreak: 1,
    name: 'amirul hariz',
    stars: 5,
    subscribed: false,
    uid: 'ymi5YolrBOTmzPJs1ZEvAxWVzx92',
    isSearched: false,
    rank: 7
  },
  {
    bananas: 200,
    lastDayPlayed: '2018-08-13',
    longestStreak: 1,
    name: 'Daniel Horn',
    stars: 6,
    subscribed: false,
    uid: 'yniTP0KsvfRDuw8weRArLiUDLR13',
    isSearched: false,
    rank: 8
  },
  {
    bananas: 200,
    lastDayPlayed: '2018-11-22',
    longestStreak: 1,
    name: 'Rica Ella Francisco',
    stars: 6,
    subscribed: false,
    uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
    isSearched: false,
    rank: 9
  },
  {
    bananas: 150,
    lastDayPlayed: '2019-02-06',
    longestStreak: 1,
    name: 'Emma-Lee Crothers',
    stars: 5,
    subscribed: false,
    uid: 'yo5Sj0tkgFeTAmfU72ankN9rMwO2',
    isSearched: false,
    rank: 10
  },
  {
    bananas: 150,
    lastDayPlayed: '2018-10-17',
    longestStreak: 1,
    name: 'Jayne Su YueHe',
    stars: 4,
    subscribed: false,
    uid: 'ylL3XqPOlycHiPBuf1uXHlgZzEr2',
    isSearched: false,
    rank: 11
  },
  {
    bananas: 0,
    lastDayPlayed: '2017-11-01',
    longestStreak: 0,
    name: 'Adh Fuoo',
    stars: 4,
    subscribed: false,
    uid: 'x8RNvUgv5pZqDVatEXb2aYgSflq1',
    isSearched: false,
    rank: 12
  },
  {
    bananas: 0,
    lastDayPlayed: '2017-11-01',
    longestStreak: 0,
    name: 'Nur Gümüş',
    stars: 5,
    subscribed: false,
    uid: 'ymonOSLRONZxm99JFaPcbUoZSOF3',
    isSearched: false,
    rank: 13
  },
  {
    bananas: 0,
    lastDayPlayed: '2017-11-01',
    longestStreak: 0,
    name: 'Ocelotl Kanpol',
    stars: 5,
    subscribed: false,
    uid: 'yoDHUejMeshN1bOw9Bq671vMaph2',
    isSearched: false,
    rank: 14
  },
  {
    bananas: 0,
    lastDayPlayed: '2017-11-01',
    longestStreak: 0,
    name: 'Qiao Yee',
    stars: 5,
    subscribed: false,
    uid: 'yniH9BMgoUYDFV3oNzBoKLq9BYj1',
    isSearched: false,
    rank: 15
  },
  {
    bananas: 0,
    lastDayPlayed: '2017-11-01',
    longestStreak: 0,
    name: 'Toke Chen',
    stars: 4,
    subscribed: false,
    uid: 'ylwtBuIr70fEIxcCE80fSRRo7np2',
    isSearched: false,
    rank: 16
  },
  {
    bananas: 0,
    lastDayPlayed: '2017-11-01',
    longestStreak: 0,
    name: 'Yo Yo Chou',
    stars: 4,
    subscribed: false,
    uid: 'ylsPzJdfKggHuBVcqHVYxzVRdtJ2',
    isSearched: false,
    rank: 17
  },
  {
    bananas: 0,
    lastDayPlayed: '2017-11-01',
    longestStreak: 0,
    name: '王連辟',
    stars: 5,
    subscribed: false,
    uid: 'ymAf3Zs3MCe0zwjQnATm2B9LmeY2',
    isSearched: false,
    rank: 18
  }
]

export default mockUsersdata;
