export interface Teacher {
  id: string;
  name: string;
  subjects: string[];
  photo: string;
  qualifications: string[];
  experience: string;
  philosophy: string;
  specializations: string[];
  achievements: string[];
}

export const teachers: Teacher[] = [
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    subjects: ["AP Physics", "Physics", "AP Chemistry"],
    photo: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
    qualifications: [
      "Ph.D. in Physics, MIT",
      "M.S. in Chemical Engineering, Stanford University",
      "B.S. in Physics, University of California Berkeley"
    ],
    experience: "12 years of teaching experience in international schools and online education",
    philosophy: "I believe in making complex scientific concepts accessible through real-world applications and interactive demonstrations. Every student can excel in physics and chemistry when presented with the right approach.",
    specializations: [
      "AP Physics 1, 2, and C",
      "AP Chemistry",
      "SAT Subject Tests in Physics and Chemistry",
      "IGCSE Physics and Chemistry"
    ],
    achievements: [
      "95% of AP students score 4 or 5",
      "Developed innovative virtual lab experiences",
      "Published researcher in physics education"
    ]
  },
  {
    id: "prof-michael-chen",
    name: "Prof. Michael Chen",
    subjects: ["AP Calculus", "Mathematics", "Statistics"],
    photo: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
    qualifications: [
      "Ph.D. in Mathematics, Harvard University",
      "M.S. in Applied Mathematics, Caltech",
      "B.S. in Mathematics, UC Los Angeles"
    ],
    experience: "15 years of experience teaching advanced mathematics at university and high school levels",
    philosophy: "Mathematics is the language of the universe. I help students develop logical thinking and problem-solving skills that extend far beyond the classroom.",
    specializations: [
      "AP Calculus AB and BC",
      "AP Statistics",
      "SAT Math preparation",
      "IGCSE Mathematics"
    ],
    achievements: [
      "Average student improvement of 150+ points on SAT Math",
      "Winner of Excellence in Mathematics Teaching Award",
      "Curriculum developer for AP Calculus programs"
    ]
  },
  {
    id: "ms-emma-williams",
    name: "Ms. Emma Williams",
    subjects: ["English Literature", "AP English", "Writing"],
    photo: "https://images.pexels.com/photos/5212349/pexels-photo-5212349.jpeg?auto=compress&cs=tinysrgb&w=400",
    qualifications: [
      "M.A. in English Literature, Oxford University",
      "B.A. in English Literature, University of Cambridge",
      "TESOL Certification"
    ],
    experience: "10 years of experience in international education and AP English instruction",
    philosophy: "Great literature opens minds and hearts. I guide students to discover the power of critical thinking, effective communication, and creative expression through the written word.",
    specializations: [
      "AP English Literature and Composition",
      "AP English Language and Composition",
      "SAT Reading and Writing",
      "IGCSE English Literature"
    ],
    achievements: [
      "90% of AP English students achieve scores of 4 or 5",
      "Published author of educational materials",
      "Expert in college essay preparation"
    ]
  },
  {
    id: "dr-ahmed-hassan",
    name: "Dr. Ahmed Hassan",
    subjects: ["AP Biology", "Biology", "Environmental Science"],
    photo: "https://images.pexels.com/photos/5212699/pexels-photo-5212699.jpeg?auto=compress&cs=tinysrgb&w=400",
    qualifications: [
      "Ph.D. in Molecular Biology, University of Pennsylvania",
      "M.S. in Biotechnology, Johns Hopkins University",
      "B.S. in Biology, American University of Beirut"
    ],
    experience: "14 years of research and teaching experience in biological sciences",
    philosophy: "Biology is the study of life itself. I inspire students to explore the fascinating world of living organisms and understand their role in the ecosystem.",
    specializations: [
      "AP Biology",
      "IGCSE Biology",
      "Environmental Science",
      "Biotechnology and Genetics"
    ],
    achievements: [
      "Research published in top-tier scientific journals",
      "85% of students achieve top scores in AP Biology",
      "Developed comprehensive virtual biology lab programs"
    ]
  },
  {
    id: "ms-lisa-garcia",
    name: "Ms. Lisa Garcia",
    subjects: ["Social Studies", "AP History", "Geography"],
    photo: "https://images.pexels.com/photos/5212647/pexels-photo-5212647.jpeg?auto=compress&cs=tinysrgb&w=400",
    qualifications: [
      "M.A. in International Relations, Georgetown University",
      "B.A. in History and Political Science, University of California",
      "Certificate in Middle Eastern Studies"
    ],
    experience: "11 years of teaching social studies and preparing students for AP exams",
    philosophy: "Understanding history and geography helps students become informed global citizens. I encourage critical thinking about past events and their impact on our present world.",
    specializations: [
      "AP World History",
      "AP Human Geography",
      "Middle Eastern Studies",
      "International Relations"
    ],
    achievements: [
      "Consistently high AP exam pass rates",
      "Cultural exchange program coordinator",
      "Expert in teaching diverse international curricula"
    ]
  },
  {
    id: "prof-david-kim",
    name: "Prof. David Kim",
    subjects: ["Computer Science", "ICT", "Programming"],
    photo: "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400",
    qualifications: [
      "Ph.D. in Computer Science, Carnegie Mellon University",
      "M.S. in Software Engineering, University of Washington",
      "B.S. in Computer Science, Seoul National University"
    ],
    experience: "9 years of industry experience followed by 8 years in education",
    philosophy: "Technology shapes our future. I prepare students not just to use technology, but to create it and solve real-world problems through computational thinking.",
    specializations: [
      "AP Computer Science A",
      "IGCSE ICT and Computer Science",
      "Python and Java Programming",
      "Web Development and Database Design"
    ],
    achievements: [
      "Former software engineer at major tech companies",
      "Students regularly place in programming competitions",
      "Developed innovative coding bootcamp curricula"
    ]
  }
];