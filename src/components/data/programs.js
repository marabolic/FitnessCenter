const programs = [
    {
        id: 1,
        type: 'Yoga',
        alttype: 'Joga',
        subtype: 'Meditation',
        altsubtype: 'Meditacija',
        difficulty: 1,
        rating: 3.4,
		pictures: 'Meditation.jpg',
		picF: 'Meditation.jpg',
		picS: 'Meditation2.jpg',
		picT: 'Meditation3.jpg',
			
		video: "https://www.youtube.com/embed/4pLUleLdwY4",
       
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
        difficulty: 3,
        rating: 4.0,
		pictures: 'vinyasaYoga.jpg',
		picF: 'vinyasaYoga.jpg',
		picS: 'vinyasaYoga2.jpg',
		picT: 'vinyasaYoga3.jpg',
		
		video: "https://www.youtube.com/embed/9kOCY0KNByw",
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
        difficulty: 2,
        rating: 4.2,
		pictures: 'HathaYoga.jpg',
		picF: 'HathaYoga.jpg',
		picS: 'HathaYoga2.jpg',
		picT: 'HathaYoga3.jpg',
			
        video: "https://www.youtube.com/embed/GWg-siH2VEA",
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
        difficulty: 3,
        rating: 4.8,
		pictures: 'ClassicPilates.jpg',
		picF: 'ClassicPilates.jpg',
		picS: 'ClassicPilates2.jpg',
		picT: 'ClassicPilates3.jpg',
		
        video: "https://www.youtube.com/embed/Itui6v6nRYI",
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
        difficulty: 4,
        rating: 3.7,
		pictures: 'StotPilates.jpg',
		picF: 'StotPilates.jpg',
		picS: 'StotPilates2.jpg',
		picT: 'StotPilates3.jpg',
		
        video: "https://www.youtube.com/embed/ZbGMaIkHrw8",
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
        difficulty: 4,
        rating: 4.5,
		pictures: 'ReformerPilates.jpg',
		picF: 'ReformerPilates.jpg',
		picS: 'ReformerPilates2.jpg',
		picT: 'ReformerPilates3.jpg',
		
        video: "https://www.youtube.com/embed/M43CvYO3EOw",
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
        difficulty: 4,
        rating: 5.0,
		pictures: 'Core.jpg',
		picF: 'Core.jpg',
		picS: 'Core2.jpg',
		picT: 'Core3.jpg',
		
        video: "https://www.youtube.com/embed/dJlFmxiL11s",
        comments: "",
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
        difficulty: 4,
        rating: 4.4,
		pictures: 'GluteCore.jpg',
		picF: 'GluteCore.jpg',
		picS: 'GluteCore2.jpg',
		picT: 'GluteCore3.jpg',
		
        video: "https://www.youtube.com/embed/ApWl8QR7EeA",
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
        difficulty: 5,
        rating: 4.2,
		pictures: 'BodyPump.png',
		picF: 'BodyPump.png',
		picS: 'BodyPump2.jpg',
		picT: 'BodyPump3.jpg',
		
        video: "https://www.youtube.com/embed/z4JDrD1mGjA" ,
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
        difficulty: 3,
        rating: 4.3,
		pictures: 'CardioBox.jpg',
		picF: 'CardioBox.jpg',
		picS: 'CardioBox2.jpg',
		picT: 'CardioBox3.jpg',
		
        video: "https://www.youtube.com/embed/yVrcrOMWdMY",
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
        difficulty: 5,
        rating: 3.7,
		pictures: 'tabata.jpg',
		picF: 'tabata.jpg',
		picS: 'tabata2.jpg',
		picT: 'tabata3.jpg',
		
        video: "https://www.youtube.com/embed/kTvHJe6_h1c",
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
        difficulty: 4,
        rating: 4.3,
		pictures: 'SpinBurn.png',
		picF: 'SpinBurn.png',
		picS: 'SpinBurn2.jpg',
		picT: 'SpinBurn3.jpg',
		
        video: "https://www.youtube.com/embed/xal93B_vS88",
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
