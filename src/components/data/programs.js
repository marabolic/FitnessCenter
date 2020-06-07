const programs = [
    {
        id: 1,
        type: 'Yoga',
        alttype: 'Joga',
        subtype: 'Meditation',
        altsubtype: 'Meditacija',
        difficulty: "1",
        rating: 3.4,
        pictures: 'Meditation.jpg',
        video: '',
        comments: '',
		terms: [
			{
				id: 0,
				day: 1,
				hour: 15,
				min: 30,
				left: 9
			},
			{
				id: 1,
				day: 3,
				hour: 15,
				min: 30,
				left: 2
			},
			{
				id: 2,
				day: 3,
				hour: 17,
				min: 30,
				left: 5
			},
			{
				id: 3,
				day: 5,
				hour: 12,
				min: 0,
				left: 2
			}
		]
    },
    {
        id: 2,
        type: 'Yoga',
        alttype: 'Joga',
        subtype: 'Vinyasa Yoga',
        altsubtype: 'Vinyasa Yoga',
        difficulty: "3",
        rating: 4.0,
        pictures: 'vinyasaYoga.jpg',
        video: '',
        comments: '',
		terms: [
			{
				id: 0,
				day: 1,
				hour: 15,
				min: 30,
				left: 4
			},
			{
				id: 1,
				day: 3,
				hour: 15,
				min: 30,
				left: 3
			},
			{
				id: 2,
				day: 3,
				hour: 17,
				min: 30,
				left: 3
			},
			{
				id: 3,
				day: 5,
				hour: 12,
				min: 0,
				left: 4
			}
		]
    },
    {
        id: 3,
        type: 'Yoga',
        alttype: 'Joga',
        subtype: 'Hatha Yoga',
        altsubtype: 'Hatha Joga',
        difficulty: "2",
        rating: 4.2,
        pictures: 'HathaYoga.jpg',
        video: '',
        comments: '',
		terms: [
			{
				id: 0,
				day: 1,
				hour: 15,
				min: 30,
				left: 4
			},
			{
				id: 1,
				day: 3,
				hour: 15,
				min: 30,
				left: 2
			},
			{
				id: 2,
				day: 3,
				hour: 17,
				min: 30,
				left: 2
			},
			{
				id: 3,
				day: 5,
				hour: 12,
				min: 0,
				left: 2
			}
		]
    },
    {
        id: 4,
        type: 'Pilates',
        alttype: 'Pilates',
        subtype: 'Classic Pilates',
        altsubtype: 'Klasicni Pilates',
        difficulty: "",
        rating: 4.8,
        pictures: 'ClassicPilates.jpg',
        video: '',
        comments: '',
		terms: [
			{
				id: 0,
				day: 1,
				hour: 15,
				min: 30,
				left: 1
			},
			{
				id: 1,
				day: 3,
				hour: 15,
				min: 30,
				left: 0
			},
			{
				id: 2,
				day: 3,
				hour: 17,
				min: 30,
				left: 3
			},
			{
				id: 3,
				day: 5,
				hour: 12,
				min: 0,
				left: 2
			}
		]
    },
    {
        id: 5,
        type: 'Pilates',
        alttype: 'Pilates',
        subtype: 'Stott Pilates',
        altsubtype: 'Stot Pilates',
        difficulty: "",
        rating: 3.7,
        pictures: 'StotPilates.jpg',
        video: '',
        comments: '',
		terms: [
			{
				id: 0,
				day: 1,
				hour: 15,
				min: 30,
				left: 0
			},
			{
				id: 1,
				day: 3,
				hour: 15,
				min: 30,
				left: 3
			},
			{
				id: 2,
				day: 3,
				hour: 17,
				min: 30,
				left: 4
			},
			{
				id: 3,
				day: 5,
				hour: 12,
				min: 0,
				left: 1
			}
		]
    },
    {
        id: 6,
        type: 'Pilates',
        alttype: 'Pilates',
        subtype: 'Reformer Pilates',
        altsubtype: 'Reformer Pilates',
        difficulty: "",
        rating: 4.5,
        pictures: 'ReformerPilates.jpg',
        video: '',
        comments: '',
		terms: [
			{
				id: 0,
				day: 1,
				hour: 15,
				min: 30,
				left: 2
			},
			{
				id: 1,
				day: 3,
				hour: 15,
				min: 30,
				left: 3
			},
			{
				id: 2,
				day: 3,
				hour: 17,
				min: 30,
				left: 4
			},
			{
				id: 3,
				day: 5,
				hour: 12,
				min: 0,
				left: 2
			}
		]
    },
    {
        id: 7,
        type: 'Core',
        alttype: 'Kor',
        subtype: 'Classic Core',
        altsubtype: 'Klasicni Kor',
        difficulty: "",
        rating: 5.0,
        pictures: 'Core.jpg',
        video: '4',
        comments: '',
		terms: [
			{
				id: 0,
				day: 1,
				hour: 15,
				min: 30,
				left: 7
			},
			{
				id: 1,
				day: 3,
				hour: 15,
				min: 30,
				left: 6
			},
			{
				id: 2,
				day: 3,
				hour: 17,
				min: 30,
				left: 8
			},
			{
				id: 3,
				day: 5,
				hour: 12,
				min: 0,
				left: 2
			}
		]
    },
    {
        id: 8,
        type: 'Core',
        alttype: 'Kor',
        subtype: 'Glute and Core',
        altsubtype: 'Gluteusi i Kor',
        difficulty: "4",
        rating: 4.4,
        pictures: 'GluteCore.jpg',
        video: '',
        comments: '',
		terms: [
			{
				id: 0,
				day: 1,
				hour: 15,
				min: 30,
				left: 2
			},
			{
				id: 1,
				day: 3,
				hour: 15,
				min: 30,
				left: 1
			},
			{
				id: 2,
				day: 3,
				hour: 17,
				min: 30,
				left: 1
			},
			{
				id: 3,
				day: 5,
				hour: 12,
				min: 0,
				left: 0
			}
		]
    },
    {
        id: 9,
        type: 'Core',
        alttype: 'Kor',
        subtype: 'Body Pump',
        altsubtype: 'Bildovanje',
        difficulty: "5",
        rating: 4.2,
        pictures: 'BodyPump.png',
        video: '',
        comments: '',
		terms: [
			{
				id: 0,
				day: 1,
				hour: 15,
				min: 30,
				left: 5
			},
			{
				id: 1,
				day: 3,
				hour: 15,
				min: 30,
				left: 7
			},
			{
				id: 2,
				day: 3,
				hour: 17,
				min: 30,
				left: 7
			},
			{
				id: 3,
				day: 5,
				hour: 12,
				min: 0,
				left: 5
			}
		]
    },
    {
        id: 10,
        type: 'Cardio',
        alttype: 'Kardio',
        subtype: 'Cardio Box',
        altsubtype: 'Kardio Boks',
        difficulty: "3",
        rating: 4.3,
        pictures: 'CardioBox.jpg',
        video: '',
        comments: '',
		terms: [
			{
				id: 0,
				day: 1,
				hour: 15,
				min: 30,
				left: 5
			},
			{
				id: 1,
				day: 3,
				hour: 15,
				min: 30,
				left: 5
			},
			{
				id: 2,
				day: 3,
				hour: 17,
				min: 30,
				left: 2
			},
			{
				id: 3,
				day: 5,
				hour: 12,
				min: 0,
				left: 1
			}
		]
    },
    {
        id: 11,
        type: 'Cardio',
        alttype: 'Kardio',
        subtype: 'Tabata',
        altsubtype: 'Tabata',
        difficulty: "5",
        rating: 3.7,
        pictures: 'tabata.jpg',
        video: '',
        comments: '',
		terms: [
			{
				id: 0,
				day: 1,
				hour: 15,
				min: 30,
				left: 3
			},
			{
				id: 1,
				day: 3,
				hour: 15,
				min: 30,
				left: 5
			},
			{
				id: 2,
				day: 3,
				hour: 17,
				min: 30,
				left: 4
			},
			{
				id: 3,
				day: 5,
				hour: 12,
				min: 0,
				left: 4
			}
		]
    },
    {
        id: 12,
        type: 'Cardio',
        alttype: 'Kardio',
        subtype: 'Spin Burn',
        altsubtype: 'Pedalanje',
        difficulty: "4",
        rating: 4.3,
        pictures: 'SpinBurn.png',
        video: '',
        comments: '',
		terms: [
			{
				id: 0,
				day: 1,
				hour: 15,
				min: 30,
				left: 5
			},
			{
				id: 1,
				day: 3,
				hour: 15,
				min: 30,
				left: 3
			},
			{
				id: 2,
				day: 3,
				hour: 17,
				min: 30,
				left: 4
			},
			{
				id: 3,
				day: 5,
				hour: 12,
				min: 0,
				left: 3
			}
		]
    },

];

export default programs;
