// Quiz data for all 5 levels
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Level {
  id: number;
  title: string;
  description: string;
  questions: Question[];
  totalQuestions: number;
}

export const quizLevels: Level[] = [
  {
    id: 1,
    title: "Sikh History",
    description: "Test your knowledge of Sikh history and traditions",
    totalQuestions: 20,
    questions: [
      {
        id: 1,
        question: "Who was the first Guru of Sikhism?",
        options: ["Guru Nanak Dev Ji", "Guru Angad Dev Ji", "Guru Amar Das Ji", "Guru Ram Das Ji"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "In which year was Guru Nanak Dev Ji born?",
        options: ["1469", "1479", "1489", "1499"],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "What is the name of the holy book of Sikhism?",
        options: ["Vedas", "Guru Granth Sahib", "Quran", "Bible"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "How many Sikh Gurus were there in total?",
        options: ["8", "9", "10", "11"],
        correctAnswer: 2
      },
      {
        id: 5,
        question: "Who was the last human Guru of Sikhism?",
        options: ["Guru Tegh Bahadur Ji", "Guru Gobind Singh Ji", "Guru Har Krishan Ji", "Guru Har Rai Ji"],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "What does the word 'Sikh' mean?",
        options: ["Warrior", "Disciple", "Teacher", "Saint"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "Where was Guru Nanak Dev Ji born?",
        options: ["Amritsar", "Lahore", "Talwandi", "Delhi"],
        correctAnswer: 2
      },
      {
        id: 8,
        question: "What are the five Ks in Sikhism called?",
        options: ["Panj Pyare", "Panj Kakkar", "Panj Gurus", "Panj Sahib"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "Who founded the city of Amritsar?",
        options: ["Guru Nanak Dev Ji", "Guru Ram Das Ji", "Guru Arjan Dev Ji", "Guru Hargobind Ji"],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "In which year was the Golden Temple completed?",
        options: ["1601", "1604", "1609", "1612"],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "What is the central teaching of Sikhism?",
        options: ["Meditation only", "One God, equality, service", "Rituals and ceremonies", "Caste system"],
        correctAnswer: 1
      },
      {
        id: 12,
        question: "Who compiled the Guru Granth Sahib?",
        options: ["Guru Nanak Dev Ji", "Guru Arjan Dev Ji", "Guru Gobind Singh Ji", "Guru Tegh Bahadur Ji"],
        correctAnswer: 1
      },
      {
        id: 13,
        question: "What is the Sikh place of worship called?",
        options: ["Temple", "Gurdwara", "Mosque", "Church"],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "What is langar?",
        options: ["Prayer", "Community kitchen", "Religious ceremony", "Holy book"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "Who established the Khalsa?",
        options: ["Guru Nanak Dev Ji", "Guru Gobind Singh Ji", "Guru Tegh Bahadur Ji", "Guru Arjan Dev Ji"],
        correctAnswer: 1
      },
      {
        id: 16,
        question: "In which year was the Khalsa established?",
        options: ["1699", "1700", "1701", "1698"],
        correctAnswer: 0
      },
      {
        id: 17,
        question: "What are the three pillars of Sikhism?",
        options: ["Prayer, fasting, pilgrimage", "Naam Japna, Kirat Karni, Vand Chakna", "Meditation, charity, service", "Study, work, worship"],
        correctAnswer: 1
      },
      {
        id: 18,
        question: "Who was known as the 'Sahibzada'?",
        options: ["Guru's sons", "Guru's disciples", "Temple priests", "Religious scholars"],
        correctAnswer: 0
      },
      {
        id: 19,
        question: "What does 'Waheguru' mean?",
        options: ["Great teacher", "Wonderful Lord", "Holy book", "Sacred place"],
        correctAnswer: 1
      },
      {
        id: 20,
        question: "Which Guru is known as the 'Sports Guru'?",
        options: ["Guru Hargobind Ji", "Guru Har Rai Ji", "Guru Har Krishan Ji", "Guru Tegh Bahadur Ji"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 2,
    title: "Punjab History",
    description: "Explore the rich history of Punjab",
    totalQuestions: 17,
    questions: [
      {
        id: 1,
        question: "What is the meaning of the word 'Punjab'?",
        options: ["Land of rivers", "Land of five waters", "Land of wheat", "Land of warriors"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which five rivers give Punjab its name?",
        options: ["Ganges, Yamuna, Saraswati, Godavari, Narmada", "Sutlej, Beas, Ravi, Chenab, Jhelum", "Indus, Ganges, Brahmaputra, Godavari, Krishna", "Sutlej, Yamuna, Ganges, Saraswati, Indus"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Who was Maharaja Ranjit Singh?",
        options: ["Mughal Emperor", "British Governor", "Sikh Empire ruler", "Afghan ruler"],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "In which year did Maharaja Ranjit Singh establish the Sikh Empire?",
        options: ["1799", "1801", "1805", "1810"],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "What was the capital of Maharaja Ranjit Singh's empire?",
        options: ["Amritsar", "Lahore", "Ludhiana", "Patiala"],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "Which battle is considered the beginning of British rule in Punjab?",
        options: ["Battle of Plassey", "First Anglo-Sikh War", "Second Anglo-Sikh War", "Battle of Panipat"],
        correctAnswer: 2
      },
      {
        id: 7,
        question: "In which year was Punjab partitioned?",
        options: ["1946", "1947", "1948", "1949"],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "Who was the famous Punjabi poet known as 'Shakespeare of Punjab'?",
        options: ["Waris Shah", "Bulleh Shah", "Sultan Bahu", "Shah Hussain"],
        correctAnswer: 0
      },
      {
        id: 9,
        question: "What is the traditional dance of Punjab called?",
        options: ["Bharatanatyam", "Bhangra", "Kathak", "Odissi"],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "Which city is known as the 'Manchester of Punjab'?",
        options: ["Amritsar", "Jalandhar", "Ludhiana", "Chandigarh"],
        correctAnswer: 2
      },
      {
        id: 11,
        question: "What is the main agricultural product of Punjab?",
        options: ["Rice", "Wheat", "Cotton", "Sugarcane"],
        correctAnswer: 1
      },
      {
        id: 12,
        question: "Which festival is most celebrated in Punjab?",
        options: ["Diwali", "Holi", "Baisakhi", "Dussehra"],
        correctAnswer: 2
      },
      {
        id: 13,
        question: "What is the traditional dress of Punjabi men called?",
        options: ["Dhoti-kurta", "Lungi-shirt", "Kurta-pajama", "Sherwani"],
        correctAnswer: 2
      },
      {
        id: 14,
        question: "Which language is primarily spoken in Punjab?",
        options: ["Hindi", "Urdu", "Punjabi", "English"],
        correctAnswer: 2
      },
      {
        id: 15,
        question: "What script is used to write Punjabi?",
        options: ["Devanagari", "Gurmukhi", "Arabic", "Roman"],
        correctAnswer: 1
      },
      {
        id: 16,
        question: "Who designed the city of Chandigarh?",
        options: ["Edwin Lutyens", "Le Corbusier", "Frank Lloyd Wright", "Louis Kahn"],
        correctAnswer: 1
      },
      {
        id: 17,
        question: "What is the favorite food of Punjab?",
        options: ["Makki di Roti & Sarson da Saag", "Chole Bhature", "Butter Chicken", "Jalebi"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 3,
    title: "Guru Nanak Dev Ji Travels",
    description: "Journey through Guru Nanak Dev Ji's four Udasis (travels)",
    totalQuestions: 15,
    questions: [
      {
        id: 1,
        question: "How many Udasis (travels) did Guru Nanak Dev Ji undertake?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Who was Guru Nanak Dev Ji's faithful companion during his travels?",
        options: ["Bhai Lalo", "Mardana", "Bhai Gurdas", "Bala"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which instrument did Mardana play during the travels?",
        options: ["Tabla", "Harmonium", "Rabab", "Flute"],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "In which direction was Guru Nanak Dev Ji's first Udasi?",
        options: ["North", "South", "East", "West"],
        correctAnswer: 2
      },
      {
        id: 5,
        question: "Which holy city did Guru Nanak Dev Ji visit during his travels?",
        options: ["Jerusalem", "Mecca", "Rome", "Athens"],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "What was the famous incident at Haridwar?",
        options: ["Miracle of food", "Throwing water towards fields", "Healing the sick", "Speaking to animals"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "Which country did Guru Nanak visit during his travels?",
        options: ["China", "Tibet", "Sri Lanka", "Burma"],
        correctAnswer: 2
      },
      {
        id: 8,
        question: "What did Guru Nanak Dev Ji do when he reached Mecca?",
        options: ["Prayed facing east", "Slept with feet towards Kaaba", "Offered gold", "Fasted for days"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "Which Sikh center was established by Guru Nanak Dev Ji during his travels?",
        options: ["Kartarpur", "Talwandi", "Sultanpur", "Eminabad"],
        correctAnswer: 0
      },
      {
        id: 10,
        question: "How many years did Guru Nanak Dev Ji spend traveling?",
        options: ["15 years", "20 years", "25 years", "30 years"],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "What was the main purpose of Guru Nanak Dev Ji's travels?",
        options: ["Trade", "Spreading his message", "Pilgrimage", "Adventure"],
        correctAnswer: 1
      },
      {
        id: 12,
        question: "Which river did Guru Nanak Dev Ji cross during his final settlement?",
        options: ["Ganges", "Yamuna", "Ravi", "Sutlej"],
        correctAnswer: 2
      },
      {
        id: 13,
        question: "In which direction was Guru Nanak Dev Ji's fourth and final Udasi?",
        options: ["North", "South", "East", "West"],
        correctAnswer: 0
      },
      {
        id: 14,
        question: "Where did Guru Nanak Dev Ji spend his final years?",
        options: ["Talwandi", "Kartarpur", "Sultanpur", "Eminabad"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "What was the approximate total distance covered during all Udasis?",
        options: ["20,000 km", "25,000 km", "28,000 km", "30,000 km"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 4,
    title: "Sikh War History",
    description: "Learn about Sikh battles and conflicts including Afghan & Pathan wars",
    totalQuestions: 15,
    questions: [
      {
        id: 1,
        question: "Who led the Afghan invasions into India in the 18th century?",
        options: ["Ahmad Shah Durrani", "Nadir Shah", "Babur", "Timur"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "How many times did Ahmad Shah Durrani invade India?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Which Sikh leader is known for fighting against Ahmad Shah Durrani?",
        options: ["Banda Singh Bahadur", "Jassa Singh Ahluwalia", "Maharaja Ranjit Singh", "Hari Singh Nalwa"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "What was the Sikh confederacy system called?",
        options: ["Misls", "Sardars", "Khalsa", "Panth"],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "Who was Banda Singh Bahadur?",
        options: ["Sikh Guru", "Sikh warrior leader", "Afghan general", "Mughal commander"],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "Which battle established Sikh power in Punjab?",
        options: ["Battle of Chappar Chiri", "Battle of Samana", "Battle of Sirhind", "All of the above"],
        correctAnswer: 3
      },
      {
        id: 7,
        question: "Who was known as the 'Lion of Punjab'?",
        options: ["Banda Singh Bahadur", "Maharaja Ranjit Singh", "Hari Singh Nalwa", "Jassa Singh Ahluwalia"],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "Which fort was conquered by Hari Singh Nalwa from the Afghans?",
        options: ["Jamrud", "Peshawar", "Attock", "All of the above"],
        correctAnswer: 3
      },
      {
        id: 9,
        question: "In which year was the First Anglo-Sikh War fought?",
        options: ["1845-46", "1848-49", "1839-42", "1857-58"],
        correctAnswer: 0
      },
      {
        id: 10,
        question: "Who was the Sikh general during the Anglo-Sikh wars?",
        options: ["Sham Singh Attariwala", "Hari Singh Nalwa", "Chattar Singh Attariwala", "All of the above"],
        correctAnswer: 3
      },
      {
        id: 11,
        question: "Which battle ended the Second Anglo-Sikh War?",
        options: ["Battle of Chillianwala", "Battle of Gujrat", "Battle of Ferozeshah", "Battle of Mudki"],
        correctAnswer: 1
      },
      {
        id: 12,
        question: "What was the Khalsa Army known for?",
        options: ["Cavalry", "Artillery", "Infantry", "All military wings"],
        correctAnswer: 3
      },
      {
        id: 13,
        question: "Who betrayed the Sikh army during the Anglo-Sikh wars?",
        options: ["Lal Singh", "Tej Singh", "Both", "Neither"],
        correctAnswer: 2
      },
      {
        id: 14,
        question: "Where did Hari Singh Nalwa die fighting the Pathans?",
        options: ["Jamrud", "Peshawar", "Kabul", "Attock"],
        correctAnswer: 0
      },
      {
        id: 15,
        question: "What happened to Punjab after the Second Anglo-Sikh War?",
        options: ["Remained independent", "Became British territory", "Divided into states", "Given to Mughals"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Chaar Sahibzaade",
    description: "Learn about the four sons of Guru Gobind Singh Ji",
    totalQuestions: 13,
    questions: [
      {
        id: 1,
        question: "How many sons did Guru Gobind Singh Ji have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What are the four sons collectively called?",
        options: ["Chaar Sahibzaade", "Panj Pyare", "Khalsa", "Guru Putra"],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "Who was the eldest son of Guru Gobind Singh Ji?",
        options: ["Sahibzada Jujhar Singh", "Sahibzada Ajit Singh", "Sahibzada Zorawar Singh", "Sahibzada Fateh Singh"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "At what age did Sahibzada Ajit Singh attain martyrdom?",
        options: ["17", "18", "19", "20"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Who was the second son of Guru Gobind Singh Ji?",
        options: ["Sahibzada Ajit Singh", "Sahibzada Jujhar Singh", "Sahibzada Zorawar Singh", "Sahibzada Fateh Singh"],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "At what age did Sahibzada Jujhar Singh become a martyr?",
        options: ["13", "14", "15", "16"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "Who were the two younger sons called?",
        options: ["Chote Sahibzaade", "Bade Sahibzaade", "Guru Putra", "Khalsa Putra"],
        correctAnswer: 0
      },
      {
        id: 8,
        question: "How old was Sahibzada Zorawar Singh when he was martyred?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "How old was Sahibzada Fateh Singh at the time of martyrdom?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2
      },
      {
        id: 10,
        question: "Where were the two elder sons martyred?",
        options: ["Sirhind", "Chamkaur", "Anandpur", "Delhi"],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "Where were the two younger sons martyred?",
        options: ["Chamkaur", "Sirhind", "Anandpur", "Fatehgarh"],
        correctAnswer: 1
      },
      {
        id: 12,
        question: "Who was the Mughal governor who ordered the execution of the younger Sahibzaade?",
        options: ["Wazir Khan", "Aurangzeb", "Sher Khan", "Jalal Khan"],
        correctAnswer: 0
      },
      {
        id: 13,
        question: "What was the main reason for the martyrdom of all four Sahibzaade?",
        options: ["Political reasons", "Refusal to convert to Islam", "War casualties", "Personal revenge"],
        correctAnswer: 1
      }
    ]
  }
];

export type GameProgress = {
  currentLevel: number;
  levelScores: { [key: number]: number };
  levelCompleted: { [key: number]: boolean };
  currentQuestion: number;
};

export const STORAGE_KEY = 'sikhQuizGameProgress';