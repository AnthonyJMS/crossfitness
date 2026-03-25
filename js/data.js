const APP_DATA = {
  categories: [
    {
      id: 'haut',
      name: 'HAUT DU CORPS',
      color: '#FF5E00',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 6.99 5.57l-4 4L1.43 8.14 0 9.57l1.43 1.43L0 12.43 1.43 13.86l4-4 8.56 8.57-4 4L11.43 24l1.43-1.43L14.29 24l2.14-2.14-1.43-1.43 4-4z"/></svg>`,
      exercises: [
        {
          id: 'push-up',
          name: 'PUSH UP',
          norep: ['Corps non aligné', "Manque d'amplitude"],
          levels: [
            { id: 'N1', label: 'Shoulder Touch', video: 'videos/media1.mp4', poster: 'images/image1.png' },
            { id: 'N2', label: 'Knee Push Up', video: 'videos/media2.mp4', poster: 'images/image2.png' },
            { id: 'N3', label: 'Knee Push Up Complet', video: 'videos/media4.mp4', poster: 'images/image4.png' },
            { id: 'N4', label: 'Push Up', video: 'videos/media3.mp4', poster: 'images/image3.png' }
          ]
        },
        {
          id: 'crunchs',
          name: 'CRUNCHS',
          norep: ['Hyperflexion de la nuque', "Manque d'amplitude"],
          levels: [
            { id: 'N1', label: 'Basic Crunch', video: 'videos/media5.mp4', poster: 'images/image5.png' },
            { id: 'N2', label: 'Feet Off', video: 'videos/media6.mp4', poster: 'images/image6.png' },
            { id: 'N3', label: 'Russian Twist', video: 'videos/media7.mp4', poster: 'images/image7.png' },
            { id: 'N4', label: 'Butterfly', video: 'videos/media8.mp4', poster: 'images/image8.png' }
          ]
        }
      ]
    },
    {
      id: 'bas',
      name: 'BAS DU CORPS',
      color: '#0A84FF',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/></svg>`,
      exercises: [
        {
          id: 'squat',
          name: 'SQUAT',
          norep: ["Regard non orienté vers l'avant", "Cuisse non à l'horizontale", 'Les talons se décollent'],
          levels: [
            { id: 'N1', label: 'Assisted Squat', video: 'videos/media9.mp4', poster: 'images/image9.png' },
            { id: 'N2', label: 'Air Squat Complet', video: 'videos/media10.mp4', poster: 'images/image10.png' },
            { id: 'N3', label: 'Squat Jump', video: 'videos/media11.mp4', poster: 'images/image11.png' },
            { id: 'N4', label: 'Jump Squat 180°', video: 'videos/media12.mp4', poster: 'images/image12.png' }
          ]
        },
        {
          id: 'lunge',
          name: 'LUNGE',
          norep: ["Genou avant n'est pas à 90°", 'Le buste est penché vers l\'avant', 'Le genou vient percuter le sol'],
          levels: [
            { id: 'N1', label: 'Lunges Extension', video: 'videos/media13.mp4', poster: 'images/image13.png' },
            { id: 'N2', label: 'Front Lunge Pose Genou', video: 'videos/media14.mp4', poster: 'images/image14.png' },
            { id: 'N3', label: 'Front Lunges', video: 'videos/media15.mp4', poster: 'images/image15.png' },
            { id: 'N4', label: 'Jumping Lunges', video: 'videos/media16.mp4', poster: 'images/image16.png' }
          ]
        }
      ]
    },
    {
      id: 'gainage',
      name: 'GAINAGE',
      color: '#BF5AF2',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-5 8z"/></svg>`,
      exercises: [
        {
          id: 'plank',
          name: 'PLANK',
          norep: ['Corps non aligné', "Manque d'amplitude ou d'équilibre"],
          levels: [
            { id: 'N1', label: 'Knee Step Out', video: 'videos/media17.mp4', poster: 'images/image17.png' },
            { id: 'N2', label: 'Plank Jacks', video: 'videos/media18.mp4', poster: 'images/image18.png' },
            { id: 'N3', label: 'Military Plank', video: 'videos/media19.mp4', poster: 'images/image19.png' },
            { id: 'N4', label: 'Bird Dog Plank', video: 'videos/media20.mp4', poster: 'images/image20.png' }
          ]
        },
        {
          id: 'superman',
          name: 'SUPERMAN',
          norep: ['Tête en hyperextension', 'Ne lève que les bras sans contraction lombaire', "Manque d'amplitude"],
          levels: [
            { id: 'N1', label: 'Superman First', video: 'videos/media21.mp4', poster: 'images/image21.png' },
            { id: 'N2', label: 'Alternative Superman', video: 'videos/media22.mp4', poster: 'images/image22.png' },
            { id: 'N3', label: 'L Variation', video: 'videos/media23.mp4', poster: 'images/image23.png' },
            { id: 'N4', label: 'Superman', video: 'videos/media24.mp4', poster: 'images/image24.png' }
          ]
        }
      ]
    },
    {
      id: 'cardio',
      name: 'CARDIO',
      color: '#FF3B30',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
      exercises: [
        {
          id: 'jumping-jack',
          name: 'JUMPING JACK',
          norep: ['Corps non aligné', "Manque d'amplitude"],
          levels: [
            { id: 'N1', label: 'Jumping Jack Sans Bras', video: 'videos/media25.mp4', poster: 'images/image25.png' },
            { id: 'N2', label: 'Jumping Jack', video: 'videos/media26.mp4', poster: 'images/image26.png' },
            { id: 'N3', label: 'Crossover Jack', video: 'videos/media27.mp4', poster: 'images/image27.png' },
            { id: 'N4', label: 'Squat Jack', video: 'videos/media28.mp4', poster: 'images/image28.png' }
          ]
        },
        {
          id: 'mountain-climber',
          name: 'MOUNTAIN CLIMBER',
          norep: ['Corps non aligné', "Manque d'amplitude", 'Tête en hyperflexion'],
          levels: [
            { id: 'N1', label: 'Planche Alternée', video: 'videos/media29.mp4', poster: 'images/image29.png' },
            { id: 'N2', label: 'Plank Leg Lift', video: 'videos/media30.mp4', poster: 'images/image30.png' },
            { id: 'N3', label: 'Le Touch', video: 'videos/media31.mp4', poster: 'images/image31.png' },
            { id: 'N4', label: 'Mountain Climber', video: 'videos/media32.mp4', poster: 'images/image32.png' }
          ]
        },
        {
          id: 'burpees',
          name: 'BURPEES',
          norep: ['Pose des mains trop en avant', 'Retour des jambes serrées', 'Se redresse avec le dos penché'],
          levels: [
            { id: 'N1', label: 'Sprawl Cool', video: 'videos/media33.mp4', poster: 'images/image33.png' },
            { id: 'N2', label: 'Sprawl', video: 'videos/media34.mp4', poster: 'images/image34.png' },
            { id: 'N3', label: 'Sprawl Jump', video: 'videos/media35.mp4', poster: 'images/image35.png' },
            { id: 'N4', label: 'Burpees', video: 'videos/media36.mp4', poster: 'images/image36.png' }
          ]
        }
      ]
    }
  ]
};
