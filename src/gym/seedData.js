
// category id Beginner = 1, Intermediate 2, Advanced = 3

const InterMediateWorkoutPlan = [
    {
        id: 0,
        day: "Sunday",
        workout: "Rest day",
        type: "Intermediate",
        image: "1EcvreIYO4BhESxCmCfXcvb8hNxD1ab5d",
        category: "REST"
    },
    {
        id: 1,
        day: "Monday",
        workout: "Leg day",
        type: "Intermediate",
        image: "1YBjGE98DqCsWGGpARLYMYhrJaYapMvDB",
        category: "LEG"
    },
    {
        id: 2,
        day: "Tuesday",
        workout: "Chest & Abs",
        type: "Intermediate",
        image: "1Q-4nPdA-kNMRZAHbu9lB9mg-x43tLJ83",
        category: "CHEST"
    },
    {
        id: 3,
        day: "Wednesday",
        workout: "Back  & Biceps",
        type: "Intermediate",
        image: "1Px2P2L-sGgPgJ_Z5IefjJ0xtlRPc0tnP",
        category: "BACK"
    },
    {
        id: 4,
        day: "Thursday",
        workout: "Shoulder & Triceps",
        type: "Intermediate",
        image: "1Pj5YRlb7rjjgNG_U9kd9HAz9ogfHONYO",
        category: "SHOULDER"
    },
    {
        id: 5,
        day: "Friday",
        workout: "Biceps & Abs",
        type: "Intermediate",
        image: "1PtAB4IaTiLuQXMe2NDLuwfUzhL0Gmovf",
        category: "BICEP"
    },
    {
        id: 6,
        day: "Saturday",
        workout: "Functional Workout",
        type: "Intermediate",
        image: "1RtBZecdF_ezMBGyRHoSAuV4-fw7Joljz",
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
        workout: "Functional",
        type: "Beginner",
        image: "1PtAB4IaTiLuQXMe2NDLuwfUzhL0Gmovf",
        category: "FUNCTIONAL",
        dayid: 7
    }
]
const AdvancedWorkoutPlan = [
    {
        id: 1,
        day: "Sunday",
        workout: "Advance day",
        type: "Intermediate",
        image: "",
        category: "LEG"
    },
    {
        id: 1,
        day: "Monday",
        workout: "Leg day",
        type: "Intermediate",
        image: "",
        category: "LEG"
    },
    {
        id: 2,
        day: "Tuesday",
        workout: "Chest & Abs",
        type: "Intermediate",
        image: "",
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
const BWorkouts = [
    {
        id: 1,
        catid: 1,
        name: "Dumbell leg squat",
        image: ["1xjaVkfHUdMhUOh5HbmF8unEY_ns9qNai", "16DuYZWmf6O8_NuBagBBJmYkcL-HA1ERh", "1kmhof209bw2tBcG_JSUf9qdNU3ywj8AJ"],
        set: 2,
        rep: "6-8",
        description: "",
        category: "LEG"
    },
    {
        id: 2,
        catid: 1,
        name: "Dumbell standing shoulder press",
        image: ["1ll4eFhOagH1K6SzGF3gkGWE1T3tFGhs9", "1Di1GNWuI6rfYesROdqXTy2y6CNKi0NJD"],
        set: 2,
        rep: "6-8",
        description: "",
        category: "LEG"
    },
    {
        id: 3,
        catid: 1,
        name: "Walking lunge",
        image: ["1xjaVkfHUdMhUOh5HbmF8unEY_ns9qNai", "16DuYZWmf6O8_NuBagBBJmYkcL-HA1ERh", "1kmhof209bw2tBcG_JSUf9qdNU3ywj8AJ"],
        set: 2,
        rep: "8-10",
        description: "Need to walk straightly.",
        category: "LEG"
    },
    {
        id: 4,
        catid: 1,
        name: "Dumbell upright row",
        image: ["1BtCShCjxBItEDt2t0YQr9pRK6IHvEwa5", "1qSRIIFf7svStCxYfnQUIQkpU1bzWDmHy"],
        set: 2,
        rep: "8-10",
        description: "",
        category: "LEG"
    },
    {
        id: 5,
        catid: 1,
        name: "RDL",
        image: ["1iS-3WqpHDnQtsi8s10iHPJTUWqSZ4w3U", "19r81-fdJtWAxPOX1WlWp_TY2m50p1eRA"],
        set: 2,
        rep: "6-8",
        description: "",
        category: "LEG"
    },
    {
        id: 6,
        catid: 1,
        name: "Dumbell lateral raise",
        image: ["13JEh7Tpwh-ftq-i2rYZ47cFpTrVhu5nK", "1R3EDxQ4qSQ5a49JejO2OV99Cx3rzArTh"],
        set: 3,
        rep: "8-10",
        description: "",
        category: "LEG"
    },
    {
        id: 7,
        catid: 1,
        name: "Seated calf raise",
        image: [],
        set: 3,
        rep: "10-12",
        description: "",
        category: "LEG"
    },
    {
        id: 8,
        catid: 1,
        name:"Crunches",
        image: ["1t_PLfVQGnXu9oFtGhNXYSe44McpAB7NC", "1fZNJ46FDfoq336l0WOFmqFYfS2tLeLlX"],
        set: 3,
        rep: "10-12",
        description: "",
        category: "LEG"
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
        
      },
      {
        "id": 16,
        "catid": 1,
        "name": "Overhead tricep extension",
        "image": ["1HgqcLn0kIxGoV3hTXln-OtMkTTmzP0i7", "1c-vlQO78QRCOUKA-ERHsJ43-mTP2yGll", "1UTuJSowTVPm3D1Xk4zYdvliORa6ZP6ob", "1ggdkRcsK3f41yJtz9aJVmOdnJNYJWlJg"],
        "set": 3,
        "rep": "8-10",
        "description": "",
        "category": "BICEP",
        
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
        
      },
      {
        "id": 18,
        "catid": 1,
        "name": "Bench dips",
        "image": ["1hN0Xhq0oGG_ySNny_sqLhSftvhJOeihj","1Hpg8p4KSlHQcY6VOz7YhhlmaWE4HB2Pb"],
        "set": 2,
        "rep": "10-12",
        "description": "",
        "category": "BICEP",
        
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
        
      },
      {
        "id": 20,
        "catid": 1,
        "name": "Dumbell kickback",
        "image": ["1FO0xKtj7UD8k3yQe9fKqmJCg5AjBxzMK","1NKAI_RGqiteXQXyBPeZmuMkwah__ZAdk"],
        "set": 3,
        "rep": "8-10",
        "description": "",
        "category": "BICEP",
        
      },
      {
        "id": 21,
        "catid": 1,
        "name": "Plank",
        "image": [],
        "set": 3,
        "rep": "30",
        "description": "30 Seconds",
        "category": "BICEP",
        
      },
      {
          id: 22,
          catid: 1,
          name:"Barpee",
          image: [],
          set: 4,
          rep: "10",
          description: "",
          category: "FUNCTIONAL"
      },
      {
          id: 23,
          catid: 1,
          name:"FYR push-up",
          image: [],
          set: 4,
          rep: "10",
          description: "",
          category: "FUNCTIONAL"
      },
      {
          id: 24,
          catid: 1,
          name:"Kettables swing",
          image: [],
          set: 6,
          rep: "10",
          description: "",
          category: "FUNCTIONAL"
      }
]
const IWorkouts = [
    {
        id: 1,
        catid: 2,
        name: "Leg extension",
        image: ["1YBjGE98DqCsWGGpARLYMYhrJaYapMvDB"],
        set: 5,
        rep: 15,
        description: "",
        category: "LEG"
    },
    {
        id: 2,
        catid: 2,
        name: "Barbell back squat",
        image: [],
        set: 4,
        rep: "8-10",
        description: "",
        category: "LEG"
    },
    {
        id: 3,
        catid: 2,
        name: "Leg press",
        image: ["1riAZCzaWuNS4-ykxInEQZALGYWgH1sOH","1jotFHwNC93VZw22iiI-LP28Ed4Gyfj9J"],
        set: 4,
        rep: "12-15",
        description: "",
        category: "LEG"
    },
    {
        id: 4,
        catid: 2,
        name: "Walking Lunges",
        image: ["1xjaVkfHUdMhUOh5HbmF8unEY_ns9qNai", "16DuYZWmf6O8_NuBagBBJmYkcL-HA1ERh", "1kmhof209bw2tBcG_JSUf9qdNU3ywj8AJ"],
        set: 4,
        rep: 30,
        description: "",
        category: "LEG"
    },
    {
        id: 5,
        catid: 2,
        name: "Hack squat with barbell",
        image: [],
        set: 4,
        rep: "10-15",
        description: "",
        category: "LEG"
    },
    {
        id: 6,
        catid: 2,
        name: "Stiff leg deadlift",
        image: [],
        set: 3,
        rep: 10,
        description: "",
        category: "LEG"
    },
    {
        id: 7,
        catid: 2,
        name: "Seated calf raise",
        image: [],
        set: 3,
        rep: "10-15",
        description: "",
        category: "LEG"
    },
    {
        id: 8,
        catid: 2,
        name:"Bench press",
        image: ["1eu7es_Wbn1IRWlXmlHbrUGtv26Zt465u", "13SxebB5KHfvZq-Gg7C0jXZ83Cku7w4VG"],
        set: 4,
        rep: "10-15",
        description: "",
        category: "CHEST"
    },
    {
        id: 9,
        catid: 2,
        name:"Bar dips",
        "image": ["1hN0Xhq0oGG_ySNny_sqLhSftvhJOeihj","1Hpg8p4KSlHQcY6VOz7YhhlmaWE4HB2Pb"],
        set: 3,
        rep: "10-15",
        description: "",
        category: "CHEST"
    },
    {
        id: 10,
        catid: 2,
        name:"Dumbell incline bench press",
        image: ["1zHVPOV6XQ10A7eZ_-CN2h-7rZZvmCzU-","1pNZG-6hENzv1rtluR1oxaJVBE1DtdZOS"],
        set: 3,
        rep: "10-15",
        description: "",
        category: "CHEST"
    },
    {
        id: 11,
        catid: 2,
        name:"Incline dumbell fly",
        image: ["1zHVPOV6XQ10A7eZ_-CN2h-7rZZvmCzU-","1c6RmCfrNAjSTSOsXHngSoxzhv4ZpY1Ov"],
        set: 3,
        rep: "10-15",
        description: "",
        category: "CHEST"
    },
    {
        id: 12,
        catid: 2,
        name:"Cable cross over",
        image: ["1e1sIx5ay9aQ4GOT1IfxOlnkEa0l4m4-Q","1gA1cwA0Ozv4ZoR-yzc6R8rGIzwHp8RBC"],
        set: 4,
        rep: "10-15",
        description: "",
        category: "CHEST"
    },
    {
        id: 13,
        catid: 2,
        name:"Crunches",
        image: ["1t_PLfVQGnXu9oFtGhNXYSe44McpAB7NC", "1fZNJ46FDfoq336l0WOFmqFYfS2tLeLlX"],
        set: 4,
        rep: "25",
        description: "",
        category: "CHEST"
    },
    {
        id: 14,
        catid: 2,
        name:"Hanging knee raise",
        image: [],
        set: 4,
        rep: "20",
        description: "",
        category: "CHEST"
    },
    {
        id: 15,
        catid: 2,
        name:"Reverse crunch",
        image: ["1t_PLfVQGnXu9oFtGhNXYSe44McpAB7NC", "1fZNJ46FDfoq336l0WOFmqFYfS2tLeLlX"],
        set: 4,
        rep: "20",
        description: "",
        category: "CHEST"
    },
    {
        id: 16,
        catid: 2,
        name:"Lat pull down",
        image: ["1mpf1V49MsFIDrwmtvzJUxWsbBRvkSCXR", "1Y-DOpPO5pVLnxQHBBE-9-iZ9rUMpeobQ"],
        set: 4,
        rep: "10-15",
        description: "",
        category: "BACK"
    },
    {
        id: 17,
        catid: 2,
        name:"Pull up",
        image: ["1Cn7RpH8AjwCmSUMMoTkXxzrL800J2o39", "1v1ff1Fgt7UkeMiJ7ABuRHSdyczsh6ZrF", "1wqbG8x7C1J83QzM1H4kDioeNHI3WL79M", "1dSQ2PxCtU5bXRz-rJtNbgriOQ419vdJD"],
        set: 3,
        rep: "8-10",
        description: "",
        category: "BACK"
    },
    {
        id: 18,
        catid: 2,
        name:"Barbell deadlift",
        image: [],
        set: 4,
        rep: "8-10",
        description: "",
        category: "BACK"
    },
    {
        id: 19,
        catid: 2,
        name:"Barbell bent over row",
        image: [],
        set: 4,
        rep: "8-10",
        description: "",
        category: "BACK"
    },
    {
        id: 20,
        catid: 2,
        name:"Seated row",
        image: ["18gvYzxIKGmQStswSlPm0iZtHI-RHsGSA", "15sPDgBsDFBsEgFjFS9hXl88xbdeuzaxF"],
        set: 7,
        rep: "8-10",
        description: "",
        category: "BACK"
    },
    {
        id: 21,
        catid: 2,
        name:"Barbell curl",
        image: [],
        set: 4,
        rep: "8-10",
        description: "",
        category: "BACK"
    },
    {
        id: 22,
        catid: 2,
        name:"Hammer curl",
        image: ["18hZ3hAjPf933ekSwczwbqPGxUPUfeU4u","1K-U8hA89-M44-_1AH6Wk9Z4mzN-dvdBL"],
        set: 3,
        rep: "8-10",
        description: "",
        category: "BACK"
    },
    {
        id: 23,
        catid: 2,
        name:"Incline alternative biceps curl",
        image: [],
        set: 3,
        rep: "10-16",
        description: "5 reps per hand",
        category: "BACK"
    },
    {
        id: 24,
        catid: 2,
        name:"Dumbell shoulder press",
        image: ["1ll4eFhOagH1K6SzGF3gkGWE1T3tFGhs9", "1Di1GNWuI6rfYesROdqXTy2y6CNKi0NJD"],
        set: 4,
        rep: "8-10",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 25,
        catid: 2,
        name:"Cabel front raise one hand",
        image: [],
        set: 4,
        rep: "10",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 26,
        catid: 2,
        name:"Lateral raise dumbell",
        image: ["13JEh7Tpwh-ftq-i2rYZ47cFpTrVhu5nK", "1R3EDxQ4qSQ5a49JejO2OV99Cx3rzArTh"],
        set: 4,
        rep: "10-15",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 27,
        catid: 2,
        name:"Bent over lateral raise",
        image: [],
        set: 3,
        rep: "8",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 28,
        catid: 2,
        name:"Upright row",
        image: ["1BtCShCjxBItEDt2t0YQr9pRK6IHvEwa5", "1qSRIIFf7svStCxYfnQUIQkpU1bzWDmHy"],
        set: 3,
        rep: "8",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 29,
        catid: 2,
        name:"Dumbell shrug",
        image: [],
        set: 4,
        rep: "10",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 30,
        catid: 2,
        name:"Cabel rod push down",
        image: [],
        set: 4,
        rep: "8-10",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 31,
        catid: 2,
        name:"Dumbell overhead extension",
        "image": ["1HgqcLn0kIxGoV3hTXln-OtMkTTmzP0i7", "1c-vlQO78QRCOUKA-ERHsJ43-mTP2yGll", "1UTuJSowTVPm3D1Xk4zYdvliORa6ZP6ob", "1ggdkRcsK3f41yJtz9aJVmOdnJNYJWlJg"],
        set: 3,
        rep: "8-10",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 32,
        catid: 2,
        name:"Bench dips",
        "image": ["1hN0Xhq0oGG_ySNny_sqLhSftvhJOeihj","1Hpg8p4KSlHQcY6VOz7YhhlmaWE4HB2Pb"],
        set: 3,
        rep: "20",
        description: "",
        category: "SHOULDER"
    },
    {
        id: 33,
        catid: 2,
        name:"Diamond push-up",
        image: [],
        set: 5,
        rep: "10",
        description: "",
        category: "BICEP"
    },
    {
        id: 34,
        catid: 2,
        name:"Alternative bicep curl",
        "image": ["11OLHdzv2icAtPj0boUkSLBVNGtVl149j", "1CxwICZKQTe9gGh0NnGPSqmFKPt5TGvVi","1GLTUyIphSM2PAy-ZTQD0LIID3W7sujhl"],
        set: 4,
        rep: "10",
        description: "",
        category: "BICEP"
    },
    {
        id: 35,
        catid: 2,
        name:"Triceps skull crusher",
        image: [],
        set: 3,
        rep: "10",
        description: "",
        category: "BICEP"
    },
    {
        id: 36,
        catid: 2,
        name:"EZ bar bicep curl",
        image: [],
        set: 3,
        rep: "15",
        description: "",
        category: "BICEP"
    },
    {
        id: 37,
        catid: 2,
        name:"Reverse cabel push down",
        image: [],
        set: 4,
        rep: "15",
        description: "",
        category: "BICEP"
    },
    {
        id: 38,
        catid: 2,
        name:"Concentration curl",
        "image": ["1aoyyEwiU8zMx01vkZde3-xrg8uuT6uIG","1ckkkG8z7JCDQiWEWthz-AsK_VQcid-2j"],
        set: 4,
        rep: "10",
        description: "",
        category: "BICEP"
    },
    {
        id: 39,
        catid: 2,
        name:"Crunches",
        image: ["1t_PLfVQGnXu9oFtGhNXYSe44McpAB7NC", "1fZNJ46FDfoq336l0WOFmqFYfS2tLeLlX"],
        set: 4,
        rep: "25",
        description: "",
        category: "BICEP"
    },
    {
        id: 40,
        catid: 2,
        name:"Hanging knee raise",
        image: [],
        set: 4,
        rep: "25",
        description: "",
        category: "BICEP"
    },
    {
        id: 41,
        catid: 2,
        name:"Reverse crunches",
        image: ["1t_PLfVQGnXu9oFtGhNXYSe44McpAB7NC", "1fZNJ46FDfoq336l0WOFmqFYfS2tLeLlX"],
        set: 4,
        rep: "25",
        description: "",
        category: "BICEP"
    },
    {
        id: 42,
        catid: 2,
        name:"Pull up",
        image: ["1Cn7RpH8AjwCmSUMMoTkXxzrL800J2o39", "1v1ff1Fgt7UkeMiJ7ABuRHSdyczsh6ZrF", "1wqbG8x7C1J83QzM1H4kDioeNHI3WL79M", "1dSQ2PxCtU5bXRz-rJtNbgriOQ419vdJD"],
        set: 5,
        rep: "10",
        description: "",
        category: "FULL"
    },
    {
        id: 43,
        catid: 2,
        name:"Bar dips",
        "image": ["1hN0Xhq0oGG_ySNny_sqLhSftvhJOeihj","1Hpg8p4KSlHQcY6VOz7YhhlmaWE4HB2Pb"],
        set: 5,
        rep: "10",
        description: "",
        category: "FULL"
    },
    {
        id: 44,
        catid: 2,
        name: "Walking lunge",
        image: ["1xjaVkfHUdMhUOh5HbmF8unEY_ns9qNai", "16DuYZWmf6O8_NuBagBBJmYkcL-HA1ERh", "1kmhof209bw2tBcG_JSUf9qdNU3ywj8AJ"],
        set: 3,
        rep: "15",
        description: "Need to walk straightly.",
        category: "FULL"
    },
    {
        "id": 45,
        "catid": 2,
        "name": "Bench dips",
        "image": ["1hN0Xhq0oGG_ySNny_sqLhSftvhJOeihj","1Hpg8p4KSlHQcY6VOz7YhhlmaWE4HB2Pb"],
        "set": 4,
        "rep": "15",
        "description": "",
        "category": "FULL",
        
      },
      {
        id: 46,
        catid: 2,
        name:"Crunches",
        image: ["1t_PLfVQGnXu9oFtGhNXYSe44McpAB7NC", "1fZNJ46FDfoq336l0WOFmqFYfS2tLeLlX"],
        set: 3,
        rep: "25",
        description: "",
        category: "FULL"
    },
    {
        id: 47,
        catid: 2,
        name:"Hanging knee raise",
        image: [],
        set: 3,
        rep: "20",
        description: "",
        category: "FULL"
    },
    {
        id: 48,
        catid: 2,
        name:"Reverse crunch",
        image: ["1t_PLfVQGnXu9oFtGhNXYSe44McpAB7NC", "1fZNJ46FDfoq336l0WOFmqFYfS2tLeLlX"],
        set: 4,
        rep: "20",
        description: "",
        category: "FULL"
    },
    {
        id: 49,
        catid: 2,
        name:"Thread mill",
        image: [],
        set: 1,
        rep: "0",
        description: "Walk 30 minutes",
        category: "FULL"
    }
]


module.exports = {
    BeginnerWorkoutPlan,
    InterMediateWorkoutPlan,
    AdvancedWorkoutPlan,
    BWorkouts,
    IWorkouts
  };

  
