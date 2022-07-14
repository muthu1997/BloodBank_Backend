
// category id Beginner = 1, Intermediate 2, Advanced = 3

const InterMediateWorkoutPlan = [
    {
        id: 1,
        day: "Sunday",
        workout: "Rest day",
        type: "Intermediate",
        image: "https://t3.ftcdn.net/jpg/02/22/81/16/240_F_222811663_jgiHFddGD8pJXSIdup6LcBA6v5sgqBvQ.jpg",
        category: "LEG"
    },
    {
        id: 1,
        day: "Monday",
        workout: "Leg day",
        type: "Intermediate",
        image: "https://t3.ftcdn.net/jpg/02/22/81/16/240_F_222811663_jgiHFddGD8pJXSIdup6LcBA6v5sgqBvQ.jpg",
        category: "LEG"
    },
    {
        id: 2,
        day: "Tuesday",
        workout: "Chest & Abs",
        type: "Intermediate",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIe4TaT-jVRraDYD1JjgSJ4V9bj_BV8oQHg&usqp=CAU",
        category: "CHEST"
    },
    {
        id: 3,
        day: "Wednesday",
        workout: "Back  & Biceps",
        type: "Intermediate",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3ro6wejKgZDC0F4kgvgPdWBNfjvV5GAGwDuh8YqwU0EJ-HyAfy1C3ZEeosr6YxxW7KA&usqp=CAU",
        category: "BACK"
    },
    {
        id: 4,
        day: "Thursday",
        workout: "Shoulder & Triceps",
        type: "Intermediate",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK48enRujcm0PnN8R5GyzIb7vMqyzGmAQSFGKTh0Aym8iah7fuAMJ62hg030f7P7-fl3Y&usqp=CAU",
        category: "SHOULDER"
    },
    {
        id: 5,
        day: "Friday",
        workout: "Biceps & Abs",
        type: "Intermediate",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4-ILZtluuVYEbVYyDf88-j7PBjMGhKRYZdmq5fTeheO9SN_ntqPfkgDhpm3TtTFORW0&usqp=CAU",
        category: "BICEP"
    },
    {
        id: 6,
        day: "Saturday",
        workout: "Functional Workout",
        type: "Intermediate",
        image: "https://http2.mlstatic.com/D_NQ_NP_651161-MLM26562409010_122017-O.webp",
        category: "FULL"
    }
]
const BeginnerWorkoutPlan = [
    {
        id: 0,
        day: "Sunday",
        workout: "Rest day",
        type: "Beginner",
        image: "1EcvreIYO4BhESxCmCfXcvb8hNxD1ab5d",
        category: "REST",
        dayid: 1
    },
    {
        id: 1,
        day: "Monday",
        workout: "Leg day",
        type: "Beginner",
        image: "1YBjGE98DqCsWGGpARLYMYhrJaYapMvDB",
        category: "LEG",
        dayid: 2
    },
    {
        id: 2,
        day: "Tuesday",
        workout: "Chest & Back",
        type: "Beginner",
        image: "1Q-4nPdA-kNMRZAHbu9lB9mg-x43tLJ83",
        category: "CHEST",
        dayid: 3
    },
    {
        id: 3,
        day: "Wednesday",
        workout: "Arms & Abs",
        type: "Beginner",
        image: "1PtAB4IaTiLuQXMe2NDLuwfUzhL0Gmovf",
        category: "BICEP",
        dayid: 4
    },
    {
        id: 4,
        day: "Thursday",
        workout: "Leg day",
        type: "Beginner",
        image: "1YBjGE98DqCsWGGpARLYMYhrJaYapMvDB",
        category: "LEG",
        dayid: 5
    },
    {
        id: 5,
        day: "Friday",
        workout: "Chest & Back",
        type: "Beginner",
        image: "1Q-4nPdA-kNMRZAHbu9lB9mg-x43tLJ83",
        category: "CHEST",
        dayid: 6
    },
    {
        id: 6,
        day: "Saturday",
        workout: "Arms & Abs",
        type: "Beginner",
        image: "1PtAB4IaTiLuQXMe2NDLuwfUzhL0Gmovf",
        category: "BICEP",
        dayid: 7
    }
]

const AdvancedWorkoutPlan = [
    {
        id: 1,
        day: "Sunday",
        workout: "Advance day",
        type: "Intermediate",
        image: "https://t3.ftcdn.net/jpg/02/22/81/16/240_F_222811663_jgiHFddGD8pJXSIdup6LcBA6v5sgqBvQ.jpg",
        category: "LEG"
    },
    {
        id: 1,
        day: "Monday",
        workout: "Leg day",
        type: "Intermediate",
        image: "https://t3.ftcdn.net/jpg/02/22/81/16/240_F_222811663_jgiHFddGD8pJXSIdup6LcBA6v5sgqBvQ.jpg",
        category: "LEG"
    },
    {
        id: 2,
        day: "Tuesday",
        workout: "Chest & Abs",
        type: "Intermediate",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIe4TaT-jVRraDYD1JjgSJ4V9bj_BV8oQHg&usqp=CAU",
        category: "CHEST"
    },
    {
        id: 3,
        day: "Wednesday",
        workout: "Back  & Biceps",
        type: "Intermediate",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3ro6wejKgZDC0F4kgvgPdWBNfjvV5GAGwDuh8YqwU0EJ-HyAfy1C3ZEeosr6YxxW7KA&usqp=CAU",
        category: "BACK"
    },
    {
        id: 4,
        day: "Thursday",
        workout: "Shoulder & Triceps",
        type: "Intermediate",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK48enRujcm0PnN8R5GyzIb7vMqyzGmAQSFGKTh0Aym8iah7fuAMJ62hg030f7P7-fl3Y&usqp=CAU",
        category: "SHOULDER"
    },
    {
        id: 5,
        day: "Friday",
        workout: "Biceps & Abs",
        type: "Intermediate",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4-ILZtluuVYEbVYyDf88-j7PBjMGhKRYZdmq5fTeheO9SN_ntqPfkgDhpm3TtTFORW0&usqp=CAU",
        category: "BICEP"
    },
    {
        id: 6,
        day: "Saturday",
        workout: "Functional Workout",
        type: "Intermediate",
        image: "https://http2.mlstatic.com/D_NQ_NP_651161-MLM26562409010_122017-O.webp",
        category: "FULL"
    }
]

const Workouts = [
    {
        id: 1,
        catid: 1,
        name: "Dumbell leg squat",
        image: ["1xjaVkfHUdMhUOh5HbmF8unEY_ns9qNai", "16DuYZWmf6O8_NuBagBBJmYkcL-HA1ERh", "1kmhof209bw2tBcG_JSUf9qdNU3ywj8AJ"],
        set: 2,
        rep: "6-8",
        description: "",
        category: "LEG",
        dayid: [2, 5]
    },
    {
        id: 2,
        catid: 1,
        name: "Dumbell standing shoulder press",
        image: ["1ll4eFhOagH1K6SzGF3gkGWE1T3tFGhs9", "1Di1GNWuI6rfYesROdqXTy2y6CNKi0NJD"],
        set: 2,
        rep: "6-8",
        description: "",
        category: "SHOULDER",
        dayid: [2, 5]
    },
    {
        id: 3,
        catid: 1,
        name: "Walking lunge",
        image: ["1xjaVkfHUdMhUOh5HbmF8unEY_ns9qNai", "16DuYZWmf6O8_NuBagBBJmYkcL-HA1ERh", "1kmhof209bw2tBcG_JSUf9qdNU3ywj8AJ"],
        set: 2,
        rep: "8-10",
        description: "Need to walk straightly.",
        category: "LEG",
        dayid: [2, 5]
    },
    {
        id: 4,
        catid: 1,
        name: "Dumbell upright row",
        image: ["1BtCShCjxBItEDt2t0YQr9pRK6IHvEwa5", "1qSRIIFf7svStCxYfnQUIQkpU1bzWDmHy"],
        set: 2,
        rep: "8-10",
        description: "",
        category: "SHOULDER",
        dayid: [2, 5]
    },
    {
        id: 5,
        catid: 1,
        name: "RDL",
        image: ["1iS-3WqpHDnQtsi8s10iHPJTUWqSZ4w3U", "19r81-fdJtWAxPOX1WlWp_TY2m50p1eRA"],
        set: 2,
        rep: "6-8",
        description: "",
        category: "LEG",
        dayid: [2, 5]
    },
    {
        id: 6,
        catid: 1,
        name: "Dumbell lateral raise",
        image: ["13JEh7Tpwh-ftq-i2rYZ47cFpTrVhu5nK", "1R3EDxQ4qSQ5a49JejO2OV99Cx3rzArTh"],
        set: 3,
        rep: "8-10",
        description: "",
        category: "SHOULDER",
        dayid: [2, 5]
    },
    {
        id: 7,
        catid: 1,
        name: "Seated calf raise",
        image: [],
        set: 3,
        rep: "10-12",
        description: "",
        category: "LEG",
        dayid: [2, 5]
    },
    {
        id: 8,
        catid: 1,
        name:"Crunches",
        image: ["1t_PLfVQGnXu9oFtGhNXYSe44McpAB7NC", "1fZNJ46FDfoq336l0WOFmqFYfS2tLeLlX"],
        set: 3,
        rep: "10-12",
        description: "",
        category: "ABS",
        dayid: [2, 5]
    },
    {
        "id": 9,
        "catid": 1,
        "name": "Dumbell bench press",
        "image": ["1mY-Iz2ErGEjiugvlJcSdxBijdhc8bsZJ", "1pNZG-6hENzv1rtluR1oxaJVBE1DtdZOS"],
        "set": 3,
        "rep": "8-10",
        "description": "",
        "category": "CHEST",
        dayid: [3, 6]
      },
      {
        "id": 10,
        "catid": 1,
        "name": "Dumbell bent over row",
        "image": ["1iS-3WqpHDnQtsi8s10iHPJTUWqSZ4w3U","1QY1i3_09xHFYPkVzzpT2BSZUX8CDhrCT","102K2_95_mu7nv3BA4gqTy6g0TI64QIty","1QjyzOiN9QfSa5vapKOIT09lmavCnPspZ"],
        "set": 3,
        "rep": "6-8",
        "description": "",
        "category": "CHEST",
        dayid: [3, 6]
      },
      {
        "id": 11,
        "catid": 1,
        "name": "Dumbell fly",
        "image": ["1zHVPOV6XQ10A7eZ_-CN2h-7rZZvmCzU-","1c6RmCfrNAjSTSOsXHngSoxzhv4ZpY1Ov"],
        "set": 3,
        "rep": "8-10",
        "description": "",
        "category": "CHEST",
        dayid: [3, 6]
      },
      {
        "id": 12,
        "catid": 1,
        "name": "One arm dumbell row",
        "image": ["1agtXmLIhWodfCBBj6KlCHxy1o8Pdv1Y2","1WMFchx4CNtj9pRy8_YJEywp3ZElmAzIc"],
        "set": 3,
        "rep": "6-8",
        "description": "",
        "category": "CHEST",
        dayid: [3, 6]
      },
      {
        "id": 13,
        "catid": 1,
        "name": "Pushups",
        "image": [],
        "set": 3,
        "rep": "10-12",
        "description": "",
        "category": "CHEST",
        dayid: [3, 6]
      },
      {
        "id": 14,
        "catid": 1,
        "name": "Dumbell pull over",
        "image": [],
        "set": 3,
        "rep": "10-12",
        "description": "",
        "category": "CHEST",
        dayid: [3, 6]
      },
      {
        "id": 15,
        "catid": 1,
        "name": "Alternate bicep curl",
        "image": ["11OLHdzv2icAtPj0boUkSLBVNGtVl149j", "1CxwICZKQTe9gGh0NnGPSqmFKPt5TGvVi","1GLTUyIphSM2PAy-ZTQD0LIID3W7sujhl"],
        "set": 3,
        "rep": "8-10",
        "description": "",
        "category": "BICEP",
        dayid: [4, 7]
      },
      {
        "id": 16,
        "catid": 1,
        "name": "Overhead tricep extension",
        "image": ["1HgqcLn0kIxGoV3hTXln-OtMkTTmzP0i7", "1c-vlQO78QRCOUKA-ERHsJ43-mTP2yGll", "1UTuJSowTVPm3D1Xk4zYdvliORa6ZP6ob", "1ggdkRcsK3f41yJtz9aJVmOdnJNYJWlJg"],
        "set": 3,
        "rep": "8-10",
        "description": "",
        "category": "TRICEP",
        dayid: [4, 7]
      },
      {
        "id": 17,
        "catid": 1,
        "name": "Preacher curl",
        "image": ["1XeB6DWwi8QrRz75GWc-C5d6BuORZchpt","1n2DFKge9cM50ONKSsBy9HPdnx-T7eWuU","1kZS_ARcdJjWtJ8N0uB2V4gii8Mk_D3v8","1gfVK0N1g-rWcjYD9rH74TRugN5snDX-r"],
        "set": 2,
        "rep": "10-12",
        "description": "",
        "category": "BICEP",
        dayid: [4, 7]
      },
      {
        "id": 18,
        "catid": 1,
        "name": "Bench dips",
        "image": ["1hN0Xhq0oGG_ySNny_sqLhSftvhJOeihj","1Hpg8p4KSlHQcY6VOz7YhhlmaWE4HB2Pb"],
        "set": 2,
        "rep": "10-12",
        "description": "",
        "category": "TRICEP",
        dayid: [4, 7]
      },
      {
        "id": 19,
        "catid": 1,
        "name": "Concentration curl",
        "image": ["1aoyyEwiU8zMx01vkZde3-xrg8uuT6uIG","1ckkkG8z7JCDQiWEWthz-AsK_VQcid-2j"],
        "set": 3,
        "rep": "10-12",
        "description": "",
        "category": "BICEP",
        dayid: [4, 7]
      },
      {
        "id": 20,
        "catid": 1,
        "name": "Dumbell kickback",
        "image": ["1FO0xKtj7UD8k3yQe9fKqmJCg5AjBxzMK","1NKAI_RGqiteXQXyBPeZmuMkwah__ZAdk"],
        "set": 3,
        "rep": "8-10",
        "description": "",
        "category": "TRICEP",
        dayid: [4, 7]
      },
      {
        "id": 21,
        "catid": 1,
        "name": "Plank",
        "image": [],
        "set": 3,
        "rep": "30",
        "description": "30 Seconds",
        "category": "ABS",
        dayid: [4, 7]
      }
]

const dummy = [
    {
        id: 9,
        catid: 2,
        name:"Bar dips",
        image: [],
        set: 3,
        rep: "10-15",
        description: "",
        category: "CHEST"
    },
    {
        id: 10,
        catid: 2,
        name:"Dumbell incline bench press",
        image: "null",
        set: 3,
        rep: "10-15",
        description: "",
        category: "CHEST"
    },
    {
        id: 11,
        catid: 2,
        name:"Incline dumbell fly",
        image: "null",
        set: 3,
        rep: "10-15",
        description: "",
        category: "CHEST"
    },
    {
        id: 12,
        catid: 2,
        name:"Cable cross over",
        image: "null",
        set: 4,
        rep: "10-15",
        description: "",
        category: "CHEST"
    },
    {
        id: 13,
        catid: 2,
        name:"Crunches",
        image: "null",
        set: 4,
        rep: "25",
        description: "",
        category: "ABS"
    },
    {
        id: 14,
        catid: 2,
        name:"Hanging knee raise",
        image: "null",
        set: 4,
        rep: "20",
        description: "",
        category: "ABS"
    },
    {
        id: 15,
        catid: 2,
        name:"Reverse crunch",
        image: "null",
        set: 4,
        rep: "20",
        description: "",
        category: "ABS"
    },
    {
        id: 16,
        catid: 3,
        name:"Lat pull down",
        image: "null",
        set: 4,
        rep: "10-15",
        description: "",
        category: "BACK"
    },
    {
        id: 17,
        catid: 3,
        name:"Pull up",
        image: "https://cdn.mos.cms.futurecdn.net/oUM4CHGCEEMzdSUhtBQF9C.jpg",
        set: 3,
        rep: "8-10",
        description: "",
        category: "BACK"
    },
    {
        id: 18,
        catid: 3,
        name:"Barbell deadlift",
        image: "https://experiencelife.lifetime.life/wp-content/uploads/2021/08/f2-barbell-deadlift.jpg",
        set: 4,
        rep: "8-10",
        description: "",
        category: "BACK"
    },
    {
        id: 19,
        catid: 3,
        name:"Barbell bent over row",
        image: "https://s3.amazonaws.com/prod.skimble/assets/1782356/skimble-workout-trainer-exercise-barbell-bent-over-rows-5_iphone.jpg",
        set: 4,
        rep: "8-10",
        description: "",
        category: "BACK"
    },
    {
        id: 20,
        catid: 3,
        name:"Seated row",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9LG6mQvkX6bEQ96ocrHFYFlpBIZcEAk3IViitVXc5X53OEqIqYLWLtO41vNtGHngZ1U&usqp=CAU",
        set: 7,
        rep: "8-10",
        description: "",
        category: "BACK"
    },
    {
        id: 21,
        catid: 3,
        name:"Barbell curl",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_GQPF0SxJhOyv6rKnX2Lwmb4JT3Aj08ICQQ&usqp=CAU",
        set: 4,
        rep: "8-10",
        description: "",
        category: "BACK"
    },
    {
        id: 22,
        catid: 3,
        name:"Hammer curl",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhfPOnPTuLuzp1TYN2MJ7aJ3AZmXPy_1FRQ&usqp=CAU",
        set: 3,
        rep: "8-10",
        description: "",
        category: "BACK"
    },
    {
        id: 23,
        catid: 3,
        name:"Incline alternative biceps curl",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvdJSEeeYLGtS4He8QKikTU-hIUnd3C3QL_A&usqp=CAU",
        set: 3,
        rep: "10-16",
        description: "5 reps per hand",
        category: "BACK"
    },
    {
        id: 24,
        catid: 4,
        name:"Dumbell shoulder press",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0iyrc7xcD5vnkaCPSyn8re-o4ad0qM742KQDtHLlj5TJmJiDdEn1RvMSkQk158ltzXng&usqp=CAU",
        set: 4,
        rep: "8-10",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 25,
        catid: 4,
        name:"Cabel front raise one hand",
        image: "https://s3.amazonaws.com/prod.skimble/assets/466612/image_iphone.jpg",
        set: 4,
        rep: "10",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 26,
        catid: 4,
        name:"Lateral raise dumbell",
        image: "https://ci4.googleusercontent.com/proxy/wRlMhebFJfTO_35OCylaIfF9L4Uu6o8qIqvKg0ihv0y0jeInrtZIJJIxxNiCwawnJCxK5gvMYZET-K-3Yci_UtKu73H4WKcXKqYgHA7r6f6lNG12uWAuE_LiuV-Iwi99DD0eW9ZR-cGM-6htQSfuaUrVIGcf1G_g=s0-d-e1-ft#https://www.bodybuilding.com/images/2018/august/5-ways-to-spice-up-your-lateral-raises-1-700xh.jpg",
        set: 4,
        rep: "10-15",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 27,
        catid: 4,
        name:"Bent over lateral raise",
        image: "https://s3.amazonaws.com/prod.skimble/assets/1088389/image_iphone.jpg",
        set: 3,
        rep: "8",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 28,
        catid: 4,
        name:"Upright row",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpdBZ6pNGDSpoyfk6CvwkCUJlXnPBB7L4y7PHtvEECvMDlkblf86VLULG0AhxPlyP6BQ&usqp=CAU",
        set: 3,
        rep: "8",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 29,
        catid: 4,
        name:"Dumbell shrug",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzdcSjj5Klav5KbcXWZgXg89UR9QZAhrzTo7lCmK4oiPlbfqTB0duMp_PuC4Zo__pzwQ&usqp=CAU",
        set: 4,
        rep: "10",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 30,
        catid: 4,
        name:"Cabel rod push down",
        image: "https://i.ytimg.com/vi/vB5OHsJ3EME/maxresdefault.jpg",
        set: 4,
        rep: "8-10",
        description: "",
        category: "TRICEP"
    },
    {
        id: 31,
        catid: 4,
        name:"Dumbell overhead extension",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5dQSsqKHjisgHSTJoryQ0p5NAqnFn6nOhsxl2ExBJx9jEXVJB-hqVvszqMIAcFgDURk&usqp=CAU",
        set: 3,
        rep: "8-10",
        description: "",
        category: "TRICEP"
    },
    {
        id: 32,
        catid: 4,
        name:"Bench dips",
        image: "https://s3.amazonaws.com/prod.skimble/assets/1587897/image_iphone.jpg",
        set: 3,
        rep: "20",
        description: "",
        category: "TRICEP"
    },
    {
        id: 33,
        catid: 5,
        name:"Diamond push-up",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIgXhvHIsYZ0FCIzaVeJ2S_U-wVSsuAPvma9baghHRZNQfP6UcRDi-6-sOMdjtHth10No&usqp=CAU",
        set: 5,
        rep: "10",
        description: "",
        category: "TRICEP"
    },
    {
        id: 34,
        catid: 5,
        name:"Alternative bicep curl",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLlhxzjc0Vyg2vyPD4Rb5ezacmSHOAu000JIE-nXV-4uiLclJci1C14xubsIIwRoTKRk&usqp=CAU",
        set: 4,
        rep: "10",
        description: "",
        category: "BICEP"
    },
    {
        id: 35,
        catid: 5,
        name:"Triceps skull crusher",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9eTgWucccLa7pR4S5WjgohVIfWwbWOkQh0IF595NdDcuNIDHEhddXQtTWE_F-7rJdxuE&usqp=CAU",
        set: 3,
        rep: "10",
        description: "",
        category: "TRICEP"
    },
    {
        id: 36,
        catid: 5,
        name:"EZ bar bicep curl",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8I-voMWrkFxMNB5iTScJX-U6TQRjOU1_tNNuD8qeiAofNSpKj6zRGAGiTPQXRR-fdEOc&usqp=CAU",
        set: 3,
        rep: "15",
        description: "",
        category: "BICEP"
    },
    {
        id: 37,
        catid: 5,
        name:"Reverse cabel push down",
        image: "https://s3.amazonaws.com/prod.skimble/assets/980891/image_iphone.jpg",
        set: 4,
        rep: "15",
        description: "",
        category: "TRICEP"
    },
    {
        id: 38,
        catid: 5,
        name:"Concentration curl",
        image: "https://i.ytimg.com/vi/Jvj2wV0vOYU/maxresdefault.jpg",
        set: 4,
        rep: "10",
        description: "",
        category: "BICEP"
    },
    {
        id: 39,
        catid: 5,
        name:"Crunches",
        image: "https://media.self.com/photos/5dfa77378873ee00093325ae/4:3/w_2560%2Cc_limit/GettyImages-498282756.jpg",
        set: 4,
        rep: "25",
        description: "",
        category: "ABS"
    },
    {
        id: 40,
        catid: 5,
        name:"Hanging knee raise",
        image: "https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2017/08/The-Right-Way-to-Do-Hanging-Leg-Raises.jpg",
        set: 4,
        rep: "25",
        description: "",
        category: "ABS"
    },
    {
        id: 41,
        catid: 5,
        name:"Reverse crunches",
        image: "https://i.ytimg.com/vi/7rRWy7-Gokg/maxresdefault.jpg",
        set: 4,
        rep: "25",
        description: "",
        category: "ABS"
    },
    {
        id: 42,
        catid: 6,
        name:"Barpee",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOf30CpABLrPIpEId9I64jI9bhGwu2XiItZg&usqp=CAU",
        set: 4,
        rep: "10",
        description: "",
        category: "FULL"
    },
    {
        id: 43,
        catid: 6,
        name:"FYR push-up",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJrlV3Byk_I1jgi-rPSiYPtcDbXX430xhHojkfc2p6iQixwLcvgP8T0uO_fFNZainlQY&usqp=CAU",
        set: 4,
        rep: "10",
        description: "",
        category: "FULL"
    },
    {
        id: 44,
        catid: 6,
        name:"Kettables swing",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZgmBuwTtGy4zCTCzPZ8ReX52EkPMoObU5KurP6gsykHyIarxJheTszhth4lJVJbc0tU&usqp=CAU",
        set: 6,
        rep: "10",
        description: "",
        category: "FULL"
    }
]

module.exports = {
    BeginnerWorkoutPlan,
    InterMediateWorkoutPlan,
    AdvancedWorkoutPlan,
    Workouts
  };

  
