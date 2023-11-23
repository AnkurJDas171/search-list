const mockLIstData = [
    {
        "bananas": 36750,
        "lastDayPlayed": "2018-07-21",
        "longestStreak": 18,
        "name": "Chris Buckley",
        "stars": 176,
        "subscribed": true,
        "uid": "zJsI8m74uqOI3el3EM1u64kbUWd2",
        "isSearched": false,
        "rank": 1
    },
    {
        "bananas": 27800,
        "lastDayPlayed": "2018-12-30",
        "longestStreak": 7,
        "name": "Patrick Kennedy",
        "stars": 104,
        "subscribed": true,
        "uid": "zOztg0xHJwN2GSHO9XSFAPvTl7E2",
        "isSearched": true,
        "rank": 2
    },
    {
        "bananas": 19500,
        "lastDayPlayed": "2019-02-02",
        "longestStreak": 9,
        "name": "Wolfgang Wirtz",
        "stars": 92,
        "subscribed": true,
        "uid": "zQH10NTZfYaXACdiF3V6hd7Ahn93",
        "isSearched": false,
        "rank": 3
    },
    {
        "bananas": 18250,
        "lastDayPlayed": "2019-02-01",
        "longestStreak": 13,
        "name": "Bryan Holleman",
        "stars": 66,
        "subscribed": true,
        "uid": "zBgGPzU0saQuZHL7EH3T8xX6zCm2",
        "isSearched": false,
        "rank": 4
    },
    {
        "bananas": 17200,
        "lastDayPlayed": "2018-12-14",
        "longestStreak": 4,
        "name": "Kim Schytt-Nielsen ",
        "stars": 35,
        "subscribed": true,
        "uid": "zyqWz9Obwsfk9TIkDAoNshMGPtc2",
        "isSearched": false,
        "rank": 5
    },
    {
        "bananas": 14300,
        "lastDayPlayed": "2018-05-15",
        "longestStreak": 3,
        "name": "Tobias Fager",
        "stars": 64,
        "subscribed": false,
        "uid": "znHBpuZTcVhC5DpMtSAYLGtWo023",
        "isSearched": false,
        "rank": 6
    },
    {
        "bananas": 11250,
        "lastDayPlayed": "2019-01-29",
        "longestStreak": 4,
        "name": "Lawrence Chan",
        "stars": 53,
        "subscribed": true,
        "uid": "zOCMOcl3dKfgnJFvaS1Tk9Ifq3A3",
        "isSearched": false,
        "rank": 7
    },
    {
        "bananas": 8300,
        "lastDayPlayed": "2019-01-25",
        "longestStreak": 4,
        "name": "Hannah Krzywicki",
        "stars": 34,
        "subscribed": true,
        "uid": "zRa6fy2hvtYWXkKI3jKoASOqmd32",
        "isSearched": false,
        "rank": 8
    },
    {
        "bananas": 6550,
        "lastDayPlayed": "2018-09-18",
        "longestStreak": 6,
        "name": "Emma",
        "stars": 24,
        "subscribed": false,
        "uid": "zDHhDho9h5fTDntQhyEg66RMvqK2",
        "isSearched": false,
        "rank": 9
    },
    {
        "bananas": 6200,
        "lastDayPlayed": "2018-12-23",
        "longestStreak": 2,
        "name": "Alexander Mochalski",
        "stars": 26,
        "subscribed": true,
        "uid": "zOKzuWGBUVWRrTxyEHgTKc4gin32",
        "isSearched": false,
        "rank": 10
    }
]

export const expectedLowestRankValues = [
    {
        bananas: 2350,
        isSearched: false,
        lastDayPlayed: '2019-02-01',
        longestStreak: 2,
        name: 'Safwan Fatih',
        rank: 40,
        stars: 16,
        subscribed: false,
        uid: 'zrghPITD6tZPSgWQmaxjzPCMdVz2'
    },
    {
        bananas: 2400,
        isSearched: false,
        lastDayPlayed: '2018-11-28',
        longestStreak: 2,
        name: 'Fab Ulousfab',
        rank: 39,
        stars: 11,
        subscribed: false,
        uid: 'zgd3dQQcYoferMuzilX8OzPLiqG3'
    },
    {
        bananas: 2450,
        isSearched: false,
        lastDayPlayed: '2018-12-31',
        longestStreak: 1,
        name: '方景',
        rank: 38,
        stars: 16,
        subscribed: false,
        uid: 'zxtxBkJPtXaNnfithxer7rczOS72'
    },
    {
        bananas: 2500,
        isSearched: false,
        lastDayPlayed: '2018-05-25',
        longestStreak: 3,
        name: 'Atlan Gonozal',
        rank: 37,
        stars: 15,
        subscribed: false,
        uid: 'z48Wfqhx5xaUBkLyMFCElVuiDFr1'
    },
    {
        bananas: 2550,
        isSearched: false,
        lastDayPlayed: '2018-12-29',
        longestStreak: 1,
        name: 'Husna Latif',
        rank: 36,
        stars: 10,
        subscribed: false,
        uid: 'zIuUTLc10jdvp1RAmK21OFv0Jas1'
    },
    {
        bananas: 2600,
        isSearched: false,
        lastDayPlayed: '2019-01-18',
        longestStreak: 2,
        name: 'Diyanah Nisa',
        rank: 35,
        stars: 15,
        subscribed: false,
        uid: 'zje4fPFNhaPJCtXHEDltLl5Xpcj2'
    },
    {
        bananas: 2650,
        isSearched: false,
        lastDayPlayed: '2019-01-19',
        longestStreak: 1,
        name: 'Ole',
        rank: 34,
        stars: 13,
        subscribed: false,
        uid: 'yuc1YnVeKnWf5h72ihDynqop4tk1'
    },
    {
        bananas: 2750,
        isSearched: false,
        lastDayPlayed: '2018-10-05',
        longestStreak: 2,
        name: 'David Deluca',
        rank: 33,
        stars: 17,
        subscribed: false,
        uid: 'zQHqAv92CPNkIHAE1W9zxHfhTn92'
    },
    {
        bananas: 3150,
        isSearched: false,
        lastDayPlayed: '2018-12-27',
        longestStreak: 1,
        name: 'David Seok',
        rank: 29,
        stars: 20,
        subscribed: false,
        uid: 'z4rQXao1uwYh2ur4dfzDHGwOp5A2'
    },
    {
        bananas: 3150,
        isSearched: false,
        lastDayPlayed: '2018-09-05',
        longestStreak: 5,
        name: 'li Choi',
        rank: 30,
        stars: 17,
        subscribed: false,
        uid: 'zZslrtbGXsW9MiDOtTKOGARBiYw2'
    }
]

export const expectedSortedValues = [
    {
        bananas: 6200,
        lastDayPlayed: '2018-12-23',
        longestStreak: 2,
        name: 'Alexander Mochalski',
        stars: 26,
        subscribed: true,
        uid: 'zOKzuWGBUVWRrTxyEHgTKc4gin32',
        isSearched: false,
        rank: 10
    },
    {
        bananas: 18250,
        lastDayPlayed: '2019-02-01',
        longestStreak: 13,
        name: 'Bryan Holleman',
        stars: 66,
        subscribed: true,
        uid: 'zBgGPzU0saQuZHL7EH3T8xX6zCm2',
        isSearched: false,
        rank: 4
    },
    {
        bananas: 36750,
        lastDayPlayed: '2018-07-21',
        longestStreak: 18,
        name: 'Chris Buckley',
        stars: 176,
        subscribed: true,
        uid: 'zJsI8m74uqOI3el3EM1u64kbUWd2',
        isSearched: false,
        rank: 1
    },
    {
        bananas: 6550,
        lastDayPlayed: '2018-09-18',
        longestStreak: 6,
        name: 'Emma',
        stars: 24,
        subscribed: false,
        uid: 'zDHhDho9h5fTDntQhyEg66RMvqK2',
        isSearched: false,
        rank: 9
    },
    {
        bananas: 8300,
        lastDayPlayed: '2019-01-25',
        longestStreak: 4,
        name: 'Hannah Krzywicki',
        stars: 34,
        subscribed: true,
        uid: 'zRa6fy2hvtYWXkKI3jKoASOqmd32',
        isSearched: false,
        rank: 8
    },
    {
        bananas: 17200,
        lastDayPlayed: '2018-12-14',
        longestStreak: 4,
        name: 'Kim Schytt-Nielsen ',
        stars: 35,
        subscribed: true,
        uid: 'zyqWz9Obwsfk9TIkDAoNshMGPtc2',
        isSearched: false,
        rank: 5
    },
    {
        bananas: 11250,
        lastDayPlayed: '2019-01-29',
        longestStreak: 4,
        name: 'Lawrence Chan',
        stars: 53,
        subscribed: true,
        uid: 'zOCMOcl3dKfgnJFvaS1Tk9Ifq3A3',
        isSearched: false,
        rank: 7
    },
    {
        bananas: 27800,
        lastDayPlayed: '2018-12-30',
        longestStreak: 7,
        name: 'Patrick Kennedy',
        stars: 104,
        subscribed: true,
        uid: 'zOztg0xHJwN2GSHO9XSFAPvTl7E2',
        isSearched: true,
        rank: 2
    },
    {
        bananas: 14300,
        lastDayPlayed: '2018-05-15',
        longestStreak: 3,
        name: 'Tobias Fager',
        stars: 64,
        subscribed: false,
        uid: 'znHBpuZTcVhC5DpMtSAYLGtWo023',
        isSearched: false,
        rank: 6
    },
    {
        bananas: 19500,
        lastDayPlayed: '2019-02-02',
        longestStreak: 9,
        name: 'Wolfgang Wirtz',
        stars: 92,
        subscribed: true,
        uid: 'zQH10NTZfYaXACdiF3V6hd7Ahn93',
        isSearched: false,
        rank: 3
    }
]

export const expectedFuzzyMatchedList = [
    {
        bananas: 4100,
        isSearched: false,
        lastDayPlayed: '2018-11-27',
        longestStreak: 3,
        name: 'Beatrice Kalalo',
        rank: 20,
        stars: 14,
        subscribed: false,
        uid: 'yzqGJMNMEPU7lsjq7TE19qmectr1'
    },
    {
        bananas: 27800,
        isSearched: false,
        lastDayPlayed: '2018-12-30',
        longestStreak: 7,
        name: 'Patrick Kennedy',
        rank: 2,
        stars: 104,
        subscribed: true,
        uid: 'zOztg0xHJwN2GSHO9XSFAPvTl7E2'
    }
]

export default mockLIstData;
