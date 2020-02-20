/* ========================================================================
 *
 * data.js
 * Arbyn Acosta (C) 2020
 *
 * Defines the raw data used by the family tree.
 *
 * ===================================================================== */

/** Constants and Enums **/

var RAW_DATA = [
  {
    id: 0,
    parents: [3, 2],
    siblings: [4, 5, 8],
    spouses: [1],
    name: {
      last: 'Argabioso',
      first: 'Arbyn',
      middle: 'Acosta',
      nick: [
        'Bino',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1995,
      month: 4,
      day: 19,
      place: 'Chinese General Hospital and Medical Center',
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
      'Software Engineer II, FactSet',
      'Front-End Web Developer, HeartSmart',
      'R-TAP System Development Intern, Hiraya Water',
      'Student Assistant, University of the East',
      'Bachelor of Science in Electronics Engineering',
    ],
    gender: 1,
    image: {
      id: 0,
    },
  },


  {
    id: 1,
    parents: [40, 41],
    siblings: [118],
    spouses: [0],
    name: {
      last: 'Adanza',
      first: 'Mitchie',
      middle: 'Ajesta',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1994,
      month: 12,
      day: 16,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
      'Executive Assistant, Ontario',
      'Software Development Intern, Hiraya Water',
      'Bachelor of Science in Electronics Engineering',
    ],
    gender: 0,
    image: {
      id: 1,
    },
    importance: null,
  },

  {
    id: 2,
    parents: [10, 11],
    siblings: [75, 76],
    spouses: [6],
    name: {
      last: 'Acosta',
      first: 'Corazon',
      middle: 'Maramba',
      nick: [
        'Babycor',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1971,
      month: 3,
      day: 10,
    },
    death: {
      year: 2018,
      month: 5,
      day: 25,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
      'Bachelor of Science in Accountancy',
    ],
    gender: 0,
    image: {
      id: 2,
    },
  },

  {
    id: 3,
    parents: [7, 9],
    siblings: [14, 16],
    spouses: [17],
    name: {
      last: 'Argabioso',
      first: 'Rolando',
      middle: 'Saplala',
      nick: [
        'Roland',
        'Olan',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: 'CPA',
      }
    },
    birth: {
      year: 1966,
      month: 10,
      day: 9,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
      'Regional Intelligence Head, Asia Pacific',
      'Assistant Director (Director III), NBI',
      'Bachelor of Science in Accountancy',
    ],
    gender: 1,
    image: {
      id: 3,
    },
  },

  {
    id: 4,
    parents: [2, 6],
    siblings: [0, 5],
    spouses: [],
    name: {
      last: 'Ignacio',
      first: 'Ira Mae',
      middle: 'Acosta',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 2004,
      month: 8,
      day: 5,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 4,
    },
  },

  {
    id: 5,
    parents: [2, 6],
    siblings: [0, 4],
    spouses: [],
    name: {
      last: 'Ignacio',
      first: 'Joshua Caleb',
      middle: 'Acosta',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 2008,
      month: 8,
      day: 1,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: 5,
    },
  },

  {
    id: 6,
    parents: [54, 53],
    siblings: [116, 117],
    spouses: [2],
    name: {
      last: 'Ignacio',
      first: 'Larry',
      middle: 'Calilong',
      nick: [
        'Bugoy',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1971,
      month: 5,
      day: 10,
      place: 'Manila, Metro Manila, Philippines',
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 2328,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
      'Bachelor of Science in Accountancy',
    ],
    gender: 1,
    image: {
      id: 6,
    },
  },

  {
    id: 54,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Ignacio',
      first: 'Lorenzo',
      middle: 'Ventura',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 53,
    parents: [55, 56],
    siblings: [],
    spouses: [],
    name: {
      last: 'Calilong',
      first: 'Teresita',
      middle: 'Go',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 44,
    },
  },

  {
    id: 55,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Go',
      first: 'Nenita',
      middle: 'Ramoz',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 56,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Calilong',
      first: 'Juanito',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 7,
    parents: [200, 49],
    siblings: [21, 52, 27],
    spouses: [9],
    name: {
      last: 'Saplala',
      first: 'Lydia',
      middle: 'Perez',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    marriage: {
      9: {
        source: 'Philippines Marriages, 1723-1957',
        place: 'Majayjay, Laguna, Philippines',
        year: 1963,
        month: 1,
        day: 23,
      },
    },
    birth: {
      year: 1944,
      month: 11,
      day: 24,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 7,
    },
  },

  {
    id: 8,
    parents: [3, 17],
    siblings: [0],
    spouses: [],
    name: {
      last: 'Argabioso',
      first: 'Riand Nikole',
      middle: 'Martin',
      nick: [
        'Rain',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 2003,
      month: 11,
      day: 7,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 8,
    },
  },

  {
    id: 9,
    parents: [46, 47],
    siblings: [],
    spouses: [7],
    name: {
      last: 'Argabioso',
      first: 'Marcial',
      middle: 'Mia',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    marriage: {
      7: {
        source: 'Philippines Marriages, 1723-1957',
        place: 'Majayjay, Laguna, Philippines',
        year: 1963,
        month: 1,
        day: 23,
      },
    },
    birth: {
      year: 1932,
      month: 9,
      day: 13,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,

    },
    achievements: [
      'Worker, Bataan Nuclear Power Plant',
      'Insurance Agent',
    ],
    gender: 1,
    image: {
      id: 9,
    },
  },

  {
    id: 10,
    parents: [73, 74],
    siblings: [77, 78, 79, 80, 81, 82, 89, 83],
    spouses: [11],
    name: {
      last: 'Maramba',
      first: 'Catalina',
      middle: 'Dumantay',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1943,
      month: 1,
      day: 28,
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 1168,
    },
    death: {
      year: 1974,
      month: 8,
      day: 10,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 10,
    },
  },

  {
    id: 11,
    parents: [12, 13],
    siblings: [59, 60, 61],
    spouses: [10],
    name: {
      last: 'Acosta',
      first: 'Manuel',
      middle: 'San Agustin',
      nick: [
        'Boy',
      ],
      prefix: null,
      suffix: {
        family: 'Jr',
        professional: null,
      }
    },
    birth: {
      year: 1948,
      month: 7,
      day: 6,
      place: 'Manila, Metro Manila, Philippines',
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 261,
    },
    death: {
      year: 1979,
      month: 6,
      day: 7,
      place: 'Los Angeles, California, United States',
      source: 'California Death Index, 1940-1997',
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: 11,
    },
  },

  {
    id: 12,
    parents: [84, 85],
    siblings: [],
    spouses: [13],
    name: {
      last: 'San Agustin',
      first: 'Natividad',
      middle: 'Villacorta',
      nick: [
        'Nati',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    marriage: {
      13: {
        source: 'Philippines Marriages, 1723-1957',
        place: 'Tondo, Manila, Philippines',
        year: 1951,
        month: 3,
        day: 5,
      },
    },
    birth: {
      year: 1924,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
      place: 'United States',
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 12,
    },
  },

  {
    id: 13,
    parents: [44, 65000],
    siblings: [109],
    spouses: [12],
    name: {
      last: 'Acosta',
      first: 'Manuel',
      middle: 'Bongco',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: 'Sr',
        professional: null,
      }
    },
    marriage: {
      12: {
        source: 'Philippines Marriages, 1723-1957',
        place: 'Tondo, Manila, Philippines',
        year: 1951,
        month: 3,
        day: 5,
      },
    },
    birth: {
      year: 1913,
      month: 11,
      day: 10,
      place: 'Manila, Metro Manila, Philippines',
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 261,
    },
    death: {
      year: 1994,
      month: 11,
      day: 15,
      place: 'Los Angeles, California, United States',
      source: 'California Death Index, 1940-1997',
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: 13,
    },
  },

  {
    id: 14,
    parents: [7, 9],
    siblings: [3, 16],
    spouses: [24],
    name: {
      last: 'Argabioso',
      first: 'Danilo',
      middle: 'Saplala',
      nick: [
        'Dada',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
      'Project Manager, Finisar Corporation',
      'Senior R&D Engineer, Finisar Corporation',
    ],
    gender: 1,
    image: {
      id: 14,
    },
  },

  {
    id: 15,
    parents: [166, 172],
    siblings: [],
    spouses: [16],
    name: {
      last: 'Cruz',
      first: 'Dulce',
      middle: 'Urgel',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: 9,
      day: 7,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 15,
    },
  },

  {
    id: 16,
    parents: [7, 9],
    siblings: [3, 14],
    spouses: [15],
    name: {
      last: 'Argabioso',
      first: 'Antonio',
      middle: 'Saplala',
      nick: [
        'Tony',
      ],
      prefix: 'Atty.',
      suffix: {
        family: null,
        professional: 'CPA',
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
      'Vice President, Large Accounts Division, SSS',
      'Concurrent Officer-in-Charge, Account Management Group, SSS',
      'Bachelor of Science in Accountancy',
    ],
    gender: 1,
    image: {
      id: 16,
    },
  },

  {
    id: 17,
    parents: [29],
    siblings: [],
    spouses: [3],
    name: {
      last: 'Martin',
      first: 'Nierene',
      middle: 'Nieves',
      nick: [
        'Yen',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1975,
      month: 8,
      day: 29,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
      'Vice President, Large Accounts Division, SSS',
      'Concurrent Officer-in-Charge, Account Management Group, SSS',
      'Bachelor of Science in Accountancy',
    ],
    gender: 0,
    image: {
      id: 17,
    },
  },

  {
    id: 44,
    parents: [],
    siblings: [],
    spouses: [65000],
    name: {
      last: 'Acosta',
      first: 'Ligorio',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1871,
      month: null,
      day: null,
    },
    death: {
      year: 1948,
      month: 7,
      day: 7,
      source: 'Philippines Deaths and Burials, 1726-1957',
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 65000,
    parents: [],
    siblings: [],
    spouses: [44],
    name: {
      last: 'Bongco',
      first: 'Maximiana',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 47,
    parents: [],
    siblings: [],
    spouses: [46],
    name: {
      last: 'Argabioso',
      first: 'Eusebio',
      middle: 'L',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1895,
      month: null,
      day: null,
      place: 'Majayjay, Laguna, Philippines',
      source: 'Philippines Deaths and Burials, 1726-1957',
    },
    death: {
      year: 1972,
      month: 10,
      day: 27,
      place: 'Majayjay, Laguna, Philippines',
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 46,
    parents: [],
    siblings: [],
    spouses: [47],
    name: {
      last: 'Mia',
      first: 'Francisca',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 200,
    parents: [],
    siblings: [],
    spouses: [49],
    name: {
      last: 'Saplala',
      first: 'Fernando',
      middle: null,
      nick: [
        'Dedong',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 49,
    parents: [50, 70],
    siblings: [66],
    spouses: [200],
    name: {
      last: 'Perez',
      first: 'Lucina',
      middle: 'Gutierrez',
      nick: [
        'Lucing'
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 50,
    parents: [],
    siblings: [],
    spouses: [70],
    name: {
      last: 'Perez',
      first: 'Victor',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 66,
    parents: [50, 70],
    siblings: [49],
    spouses: [],
    name: {
      last: 'Perez',
      first: 'Petra',
      middle: 'Gutierrez',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1917,
      month: 10,
      day: 19,
      place: 'Manila, Metro Manila, Philippines',
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 8285,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 18,
    parents: [15, 16],
    siblings: [19, 20],
    spouses: [],
    name: {
      last: 'Argabioso',
      first: 'Michael',
      middle: 'Cruz',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: 18,
    },
  },

  {
    id: 19,
    parents: [15, 16],
    siblings: [18, 20],
    spouses: [],
    name: {
      last: 'Argabioso',
      first: 'Lotus',
      middle: 'Cruz',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: 11,
      day: 21,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 19,
    },
  },

  {
    id: 20,
    parents: [15, 16],
    siblings: [18, 19],
    spouses: [],
    name: {
      last: 'Argabioso',
      first: 'Mark',
      middle: 'Cruz',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: 11,
      day: 21,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: 20,
    },
  },

  {
    id: 21,
    parents: [200, 49],
    siblings: [7, 52, 27],
    spouses: [],
    name: {
      last: 'Saplala',
      first: 'Celia',
      middle: 'Perez',
      nick: [
        'A',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 21,
    },
  },

  {
    id: 22,
    parents: [21],
    siblings: [],
    spouses: [],
    name: {
      last: 'Franco',
      first: 'Ferdie',
      middle: 'Saplala',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1977,
      month: 4,
      day: 3,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: 22,
    },
  },

  {
    id: 23,
    parents: [52],
    siblings: [101, 138],
    spouses: [26],
    name: {
      last: 'Saplala',
      first: 'Barbara',
      middle: null,
      nick: [
        'Bamba',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 23,
    },
  },

  {
    id: 52,
    parents: [200, 49],
    siblings: [7, 21, 27],
    spouses: [],
    name: {
      last: 'Saplala',
      first: 'Claro',
      middle: 'Perez',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: 'Sr',
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 24,
    parents: [],
    siblings: [],
    spouses: [14],
    name: {
      last: 'Gallardo',
      first: 'Melosina',
      middle: null,
      nick: [
        'Melo',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 24,
    },
  },

  {
    id: 27,
    parents: [200, 49],
    siblings: [7, 21, 52],
    spouses: [],
    name: {
      last: 'Saplala',
      first: 'Bonifacio',
      middle: 'Perez',
      nick: [
        'Boning'
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1939,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: 27,
    },
  },

  {
    id: 25,
    parents: [27, 63],
    siblings: [],
    spouses: [28],
    name: {
      last: 'Saplala',
      first: 'Ronaldo',
      middle: 'Dalagan',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1977,
      month: 5,
      day: 13,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: 25,
    },
  },

  {
    id: 29,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Nieves',
      first: 'Bheng Dianela',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 29,
    },
  },

  {
    id: 59,
    parents: [12, 13],
    siblings: [11, 60, 61],
    spouses: [154],
    name: {
      last: 'Acosta',
      first: 'Amelia',
      middle: 'San Agustin',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1947,
      month: 6,
      day: 12,
      place: 'Manila, Metro Manila, Philippines',
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 403,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 60,
    parents: [12, 13],
    siblings: [11, 59, 61],
    spouses: [86],
    name: {
      last: 'Acosta',
      first: 'Benjamin',
      middle: 'San Agustin',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: 'Sr',
        professional: null,
      }
    },
    birth: {
      year: 1945,
      month: 6,
      day: 17,
      place: 'Manila, Metro Manila, Philippines',
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 331,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 61,
    parents: [12, 13],
    siblings: [11, 59, 60],
    spouses: [],
    name: {
      last: 'Acosta',
      first: 'Victoria',
      middle: 'San Agustin',
      nick: [
        'Vicky',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1945,
      month: 6,
      day: 17,
      place: 'Manila, Metro Manila, Philippines',
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 331,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 63,
    parents: [65, 64],
    siblings: [],
    spouses: [27],
    name: {
      last: 'Dalagan',
      first: 'Maura',
      middle: 'Fabriz',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1941,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 64,
    parents: [],
    siblings: [],
    spouses: [65],
    name: {
      last: 'Dalagan',
      first: 'Rosindo',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 65,
    parents: [],
    siblings: [],
    spouses: [64],
    name: {
      last: 'Fabriz',
      first: 'Salome',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 70,
    parents: [],
    siblings: [],
    spouses: [50],
    name: {
      last: 'Gutierrez',
      first: 'Genoveba',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 73,
    parents: [],
    siblings: [],
    spouses: [74],
    name: {
      last: 'Maramba',
      first: 'Satero',
      middle: 'R',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: 'Sr',
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 74,
    parents: [],
    siblings: [],
    spouses: [73],
    name: {
      last: 'Dumantay',
      first: 'Crisencia',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 75,
    parents: [10, 11],
    siblings: [2, 76],
    spouses: [],
    name: {
      last: 'Acosta',
      first: 'Manuel',
      middle: 'Maramba',
      nick: [
        'Manolo',
      ],
      prefix: null,
      suffix: {
        family: 'III',
        professional: null,
      }
    },
    birth: {
      year: 1966,
      month: 11,
      day: 7,
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 321,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 76,
    parents: [10, 11],
    siblings: [2, 75],
    spouses: [],
    name: {
      last: 'Acosta',
      first: 'Susan',
      middle: 'Maramba',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 77,
    parents: [73, 74],
    siblings: [10, 78, 79, 80, 81, 82, 89, 83],
    spouses: [113],
    name: {
      last: 'Maramba',
      first: 'Isabel',
      middle: 'Dumantay',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    marriage: {
      113: {
        source: 'Philippines Marriages, 1723-1957',
        place: 'Manila, Metro Manila, Philippines',
        year: 1952,
        month: 12,
        day: 21,
      },
    },
    birth: {
      year: 1930,
      month: 11,
      day: 19,
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 515,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 78,
    parents: [73, 74],
    siblings: [10, 77, 79, 80, 81, 82, 89, 83],
    spouses: [],
    name: {
      last: 'Maramba',
      first: 'Carmelita',
      middle: 'Dumantay',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1940,
      month: 4,
      day: 28,
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 986,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 79,
    parents: [73, 74],
    siblings: [10, 77, 78, 80, 81, 82, 89, 83],
    spouses: [],
    name: {
      last: 'Maramba',
      first: 'Teofilo',
      middle: 'Dumantay',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1937,
      month: 2,
      day: 28,
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 1047,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 80,
    parents: [73, 74],
    siblings: [10, 77, 78, 79, 81, 82, 89, 83],
    spouses: [],
    name: {
      last: 'Maramba',
      first: 'Satero',
      middle: 'Dumantay',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: 'Jr',
        professional: null,
      }
    },
    birth: {
      year: 1938,
      month: 6,
      day: 26,
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 1498,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 81,
    parents: [73, 74],
    siblings: [10, 77, 78, 79, 80, 82, 89, 83],
    spouses: [110],
    name: {
      last: 'Maramba',
      first: 'Aurora',
      middle: 'Dumantay',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    marriage: {
      110: {
        source: 'Philippines Marriages, 1723-1957',
        place: 'Manila, Metro Manila, Philippines',
        year: 1953,
        month: 2,
        day: 8,
      },
    },
    birth: {
      year: 1928,
      month: 4,
      day: 20,
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 1102,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 82,
    parents: [73, 74],
    siblings: [10, 77, 78, 79, 80, 81, 89, 83],
    spouses: [],
    name: {
      last: 'Maramba',
      first: 'Rodolfo',
      middle: 'Dumantay',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1946,
      month: 12,
      day: 27,
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 1124,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 89,
    parents: [73, 74],
    siblings: [10, 77, 78, 79, 80, 81, 82, 83],
    spouses: [],
    name: {
      last: 'Maramba',
      first: 'Franklin',
      middle: 'Dumantay',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1942,
      month: 1,
      day: 30,
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 1096,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 83,
    parents: [73, 74],
    siblings: [10, 77, 78, 79, 80, 81, 82, 89],
    spouses: [],
    name: {
      last: 'Maramba',
      first: 'Carmencita',
      middle: 'Dumantay',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1952,
      month: 8,
      day: 28,
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 2888,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 84,
    parents: [],
    siblings: [],
    spouses: [85],
    name: {
      last: 'Villacorta',
      first: 'Nena',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 85,
    parents: [],
    siblings: [],
    spouses: [84],
    name: {
      last: 'San Agustin',
      first: 'Vicente',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 33,
    parents: [14, 24],
    siblings: [34],
    spouses: [],
    name: {
      last: 'Argabioso',
      first: 'Danae',
      middle: 'Gallardo',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: 'OD',
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 33,
    },
  },

  {
    id: 34,
    parents: [14, 24],
    siblings: [33],
    spouses: [],
    name: {
      last: 'Argabioso',
      first: 'Danielle',
      middle: 'Gallardo',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: 'CPA',
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 34,
    },
  },

  {
    id: 86,
    parents: [87, 88],
    siblings: [],
    spouses: [],
    name: {
      last: 'Villacorta',
      first: 'Aida',
      middle: 'Del Castillo',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1950,
      month: 7,
      day: 10,
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 3155,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 87,
    parents: [],
    siblings: [],
    spouses: [88],
    name: {
      last: 'Villacorta',
      first: 'Ricardo',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 88,
    parents: [],
    siblings: [],
    spouses: [87],
    name: {
      last: 'Del Castillo',
      first: 'Leonora',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 26,
    parents: [],
    siblings: [],
    spouses: [23],
    name: {
      last: 'Manalo',
      first: 'Ian',
      middle: 'O',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: 26,
    },
  },

  {
    id: 90,
    parents: [60, 86],
    siblings: [91],
    spouses: [96],
    name: {
      last: 'Acosta',
      first: 'Darwin',
      middle: 'Villacorta',
      nick: [
        'Dak',
      ],
      prefix: null,
      suffix: {
        family: 'Sr',
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 91,
    parents: [60, 86],
    siblings: [90],
    spouses: [],
    name: {
      last: 'Acosta',
      first: 'Benjamin',
      middle: 'Villacorta',
      nick: [
        'Jun',
      ],
      prefix: null,
      suffix: {
        family: 'Jr',
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 92,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Diamse',
      first: 'Rodelia',
      middle: 'Constantino',
      nick: [
        'Del',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: 1995,
      month: 4,
      day: 20,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 93,
    parents: [91, 92],
    siblings: [94, 95, 156],
    spouses: [158],
    name: {
      last: 'Acosta',
      first: 'Benjamin',
      middle: 'Diamse',
      nick: [
        'Jay-R',
      ],
      prefix: null,
      suffix: {
        family: 'III',
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 94,
    parents: [91, 92],
    siblings: [93, 95, 156],
    spouses: [159],
    name: {
      last: 'Acosta',
      first: 'Judel',
      middle: 'Diamse',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 95,
    parents: [91, 92],
    siblings: [93, 94, 156],
    spouses: [150],
    name: {
      last: 'Diamse',
      first: 'Jheng Jheng',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: true,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 96,
    parents: [],
    siblings: [],
    spouses: [90],
    name: {
      last: 'Costuya',
      first: 'Analyn',
      middle: null,
      nick: [
        'Joan',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 97,
    parents: [96, 90],
    siblings: [98, 38, 100],
    spouses: [],
    name: {
      last: 'Acosta',
      first: 'Kristine',
      middle: 'Costuya',
      nick: [
        'Tin Tin',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 98,
    parents: [96, 90],
    siblings: [97, 38, 100],
    spouses: [],
    name: {
      last: 'Acosta',
      first: 'Rowena',
      middle: 'Costuya',
      nick: [
        'Wewe',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 38,
    parents: [96, 90],
    siblings: [97, 98, 100],
    spouses: [39],
    name: {
      last: 'Acosta',
      first: 'Kim',
      middle: 'Costuya',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 38,
    },
  },

  {
    id: 100,
    parents: [96, 90],
    siblings: [97, 98, 38],
    spouses: [],
    name: {
      last: 'Acosta',
      first: 'Darwin',
      middle: 'Costuya',
      nick: [
        'Awing',
      ],
      prefix: null,
      suffix: {
        family: 'Jr',
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 101,
    parents: [52],
    siblings: [23, 138],
    spouses: [102],
    name: {
      last: 'Saplala',
      first: 'Claro',
      middle: null,
      nick: [
        'Bong',
      ],
      prefix: null,
      suffix: {
        family: 'Jr',
        professional: null,
      }
    },
    birth: {
      year: 1974,
      month: 4,
      day: 1,
      source: 'Facebook',
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 102,
    parents: [],
    siblings: [],
    spouses: [101],
    name: {
      last: 'Tiozon',
      first: 'Jennylyn',
      middle: null,
      nick: [
        'Jenny',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1974,
      month: 3,
      day: 17,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 103,
    parents: [101, 102],
    siblings: [104, 105, 106, 107],
    spouses: [],
    name: {
      last: 'Saplala',
      first: 'Claro',
      middle: 'Tiozon',
      nick: [
        'Ron-Ron'
      ],
      prefix: null,
      suffix: {
        family: 'III',
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 104,
    parents: [101, 102],
    siblings: [103, 105, 106, 107],
    spouses: [],
    name: {
      last: 'Saplala',
      first: 'Cyrill Aouie',
      middle: 'Tiozon',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 105,
    parents: [101, 102],
    siblings: [103, 104, 106, 107],
    spouses: [37],
    name: {
      last: 'Saplala',
      first: 'Fernando',
      middle: 'Tiozon',
      nick: [
        'Erap'
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 106,
    parents: [101, 102],
    siblings: [103, 104, 105, 107],
    spouses: [],
    name: {
      last: 'Saplala',
      first: 'Ceejay',
      middle: 'Tiozon',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 107,
    parents: [101, 102],
    siblings: [103, 104, 105, 106],
    spouses: [],
    name: {
      last: 'Saplala',
      first: 'Tyron',
      middle: 'Tiozon',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 28,
    parents: [],
    siblings: [],
    spouses: [25],
    name: {
      last: 'De Jesus',
      first: 'Maria',
      middle: 'Khanela',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1977,
      month: 6,
      day: 9,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 28,
    },
  },

  {
    id: 109,
    parents: [44, 65000],
    siblings: [13],
    spouses: [],
    name: {
      last: 'Acosta',
      first: 'Isabel',
      middle: 'Bongco',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1911,
      month: 5,
      day: 17,
    },
    death: {
      year: 1984,
      month: 10,
      day: 3,
      place: 'Los Angeles, California, United States',
      source: 'California Death Index, 1940-1997',
      cemetary: 'Forest Lawn Memorial Park (Covina Hills)',
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 110,
    parents: [111, 112],
    siblings: [],
    spouses: [81],
    name: {
      last: 'Mati',
      first: 'Jesus',
      middle: 'Quilop',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    marriage: {
      81: {
        source: 'Philippines Marriages, 1723-1957',
        place: 'Manila, Metro Manila, Philippines',
        year: 1953,
        month: 2,
        day: 8,
      },
    },
    birth: {
      year: 1930,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 111,
    parents: [],
    siblings: [],
    spouses: [112],
    name: {
      last: 'Mati',
      first: 'Gervacio',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 112,
    parents: [],
    siblings: [],
    spouses: [111],
    name: {
      last: 'Quilop',
      first: 'Rosario',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 113,
    parents: [114, 115],
    siblings: [],
    spouses: [77],
    name: {
      last: 'Ignacio',
      first: 'Rodolfo',
      middle: 'Maradang',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    marriage: {
      113: {
        source: 'Philippines Marriages, 1723-1957',
        place: 'Manila, Metro Manila, Philippines',
        year: 1952,
        month: 12,
        day: 21,
      },
    },
    birth: {
      year: 1928,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 114,
    parents: [],
    siblings: [],
    spouses: [115],
    name: {
      last: 'Ignacio',
      first: 'Isableo',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 115,
    parents: [],
    siblings: [],
    spouses: [114],
    name: {
      last: 'Maradang',
      first: 'Consejo',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 116,
    parents: [54, 53],
    siblings: [6, 117],
    spouses: [],
    name: {
      last: 'Ignacio',
      first: 'Lawrence',
      middle: 'Calilong',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1972,
      month: 8,
      day: 29,
      place: 'Manila, Metro Manila, Philippines',
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 5025,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 117,
    parents: [54, 53],
    siblings: [6, 116],
    spouses: [],
    name: {
      last: 'Ignacio',
      first: 'Christopher',
      middle: 'Calilong',
      nick: [
        'Chris',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1975,
      month: 5,
      day: 2,
      place: 'Manila, Metro Manila, Philippines',
      source: 'Philippines, Manila, Civil Registration, 1899-1984',
      source_id: 2,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 40,
    parents: [119, 120],
    siblings: [],
    spouses: [],
    name: {
      last: 'Adanza',
      first: 'Darne',
      middle: 'Elican',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1964,
      month: 6,
      day: 22,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: 40,
    },
  },

  {
    id: 41,
    parents: [121, 43],
    siblings: [],
    spouses: [],
    name: {
      last: 'Ajesta',
      first: 'Mylen',
      middle: 'Vergara',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1974,
      month: 4,
      day: 14,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 41,
    },
  },

  {
    id: 118,
    parents: [40, 41],
    siblings: [1],
    spouses: [],
    name: {
      last: 'Adanza',
      first: 'DM',
      middle: 'Ajesta',
      nick: [
        'Pangs',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 2004,
      month: 11,
      day: 18,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: 45,
    },
  },

  {
    id: 119,
    parents: [128, 129],
    siblings: [],
    spouses: [],
    name: {
      last: 'Adanza',
      first: 'Nestor',
      middle: 'Ladera',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: 2018,
      month: 9,
      day: 28,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 120,
    parents: [126, 127],
    siblings: [],
    spouses: [],
    name: {
      last: 'Elican',
      first: 'Rufa',
      middle: 'Acerto',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: 2015,
      month: 4,
      day: 2,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 121,
    parents: [124, 125],
    siblings: [],
    spouses: [],
    name: {
      last: 'Ajesta',
      first: 'Napoleon',
      middle: 'Crispolon',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 43,
    parents: [122, 123],
    siblings: [],
    spouses: [],
    name: {
      last: 'Vergara',
      first: 'Celma',
      middle: 'Borja',
      nick: [
        'Mamang'
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: 2020,
      month: 2,
      day: 16,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 43,
    },
  },

  {
    id: 122,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Vergara',
      first: 'Benigno',
      middle: 'Aquino',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 123,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Borja',
      first: 'Enoria',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 125,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Crispolon',
      first: 'Ursula',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 124,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Ajesta',
      first: 'Emmanuel',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 126,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Elican',
      first: 'Cecilio',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 127,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Acerto',
      first: 'Jovita',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 128,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Adanza',
      first: 'Filomino',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 129,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Ladera',
      first: 'Consuelo',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 31,
    parents: [25, 28],
    siblings: [32],
    spouses: [],
    name: {
      last: 'Saplala',
      first: 'Alma',
      middle: 'De Jesus',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: 4,
      day: 11,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 31,
    },
  },

  {
    id: 32,
    parents: [25, 28],
    siblings: [31],
    spouses: [],
    name: {
      last: 'Saplala',
      first: 'Maria',
      middle: 'De Jesus',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: 3,
      day: 19,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 32,
    },
  },

  {
    id: 138,
    parents: [52],
    siblings: [23, 101],
    spouses: [],
    name: {
      last: 'Saplala',
      first: 'Cynthia',
      middle: null,
      nick: [
        'Chi-Chi',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 139,
    parents: [23, 26],
    siblings: [140, 141],
    spouses: [],
    name: {
      last: 'Manalo',
      first: 'Jwayne',
      middle: 'Saplala',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 140,
    parents: [23, 26],
    siblings: [139, 141],
    spouses: [],
    name: {
      last: 'Manalo',
      first: 'Irvin Jeo',
      middle: 'Saplala',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 141,
    parents: [23, 26],
    siblings: [139, 140],
    spouses: [],
    name: {
      last: 'Manalo',
      first: 'Jykie',
      middle: 'Saplala',
      nick: [
        'Jyke'
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 142,
    parents: [138],
    siblings: [],
    spouses: [],
    name: {
      last: 'Maravilla',
      first: 'Danica',
      middle: 'Saplala',
      nick: [
        'Nicky'
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 143,
    parents: [144],
    siblings: [],
    spouses: [],
    name: {
      last: 'Hanopol',
      first: 'Neri',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 144,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Hanopol',
      first: 'Mike',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1946,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 145,
    parents: [76, 143],
    siblings: [],
    spouses: [146],
    name: {
      last: 'Hanopol',
      first: 'Franz Nersus',
      middle: 'Acosta',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 146,
    parents: [],
    siblings: [],
    spouses: [145],
    name: {
      last: 'Guillermo',
      first: 'Karen',
      middle: 'Filomeno',
      nick: [
        'Kaye',
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 147,
    parents: [145, 146],
    siblings: [1200, 149],
    spouses: [],
    name: {
      last: 'Hanopol',
      first: 'Franzis Karl',
      middle: 'Guillermo',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 2007,
      month: 11,
      day: 24,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 148,
    parents: [145, 146],
    siblings: [147, 149],
    spouses: [],
    name: {
      last: 'Hanopol',
      first: 'Lanz',
      middle: 'Guillermo',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 149,
    parents: [145, 146],
    siblings: [147, 148],
    spouses: [],
    name: {
      last: 'Hanopol',
      first: 'Ezekiel',
      middle: 'Guillermo',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 150,
    parents: [],
    siblings: [],
    spouses: [95],
    name: {
      last: 'Fernandez',
      first: 'Mhack Mac',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 151,
    parents: [95],
    siblings: [152, 153, 157],
    spouses: [],
    name: {
      last: null,
      first: 'Raiver Kyle',
      middle: 'Diamse',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 152,
    parents: [95, 150],
    siblings: [151, 153, 157],
    spouses: [],
    name: {
      last: 'Fernandez',
      first: 'Rhianna Keith',
      middle: 'Diamse',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 153,
    parents: [95, 150],
    siblings: [151, 152, 157],
    spouses: [],
    name: {
      last: 'Fernandez',
      first: 'Krishna',
      middle: 'Diamse',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 154,
    parents: [],
    siblings: [],
    spouses: [59],
    name: {
      last: 'Quiboloy',
      first: 'Dante',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 155,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Rosete',
      first: 'Raquel',
      middle: 'D',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 156,
    parents: [91, 155],
    siblings: [93, 94, 95],
    spouses: [],
    name: {
      last: 'Acosta',
      first: 'Mark',
      middle: 'Rosete',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 157,
    parents: [95, 150],
    siblings: [151, 152, 153],
    spouses: [],
    name: {
      last: 'Fernandez',
      first: null,
      middle: 'Diamse',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 158,
    parents: [],
    siblings: [],
    spouses: [93],
    name: {
      last: 'Mendiola',
      first: 'Janina',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 159,
    parents: [],
    siblings: [],
    spouses: [94],
    name: {
      last: 'Culas',
      first: 'Jonalyn',
      middle: 'Robidillo',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 39,
    parents: [],
    siblings: [],
    spouses: [38],
    name: {
      last: 'Delrosario',
      first: 'RJ Cedrick',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: 1995,
      month: 1,
      day: 20,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: 39,
    },
  },

  {
    id: 30,
    parents: [38, 39],
    siblings: [],
    spouses: [],
    name: {
      last: 'Delrosario',
      first: 'Kaycee Clark',
      middle: 'Acosta',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: 30,
    },
  },

  {
    id: 162,
    parents: [141],
    siblings: [163],
    spouses: [],
    name: {
      last: null,
      first: 'Jam',
      middle: 'Manalo',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 163,
    parents: [141],
    siblings: [162],
    spouses: [],
    name: {
      last: null,
      first: null,
      middle: 'Manalo',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 37,
    parents: [],
    siblings: [],
    spouses: [105],
    name: {
      last: 'Carriedo',
      first: 'Caseymars',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: 37,
    },
  },

  {
    id: 165,
    parents: [37, 105],
    siblings: [],
    spouses: [],
    name: {
      last: 'Saplala',
      first: 'Cayden',
      middle: 'Carriedo',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 166,
    parents: [167],
    siblings: [168],
    spouses: [172],
    name: {
      last: 'Cruz',
      first: 'Edgardo',
      middle: 'Aguilar',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 167,
    parents: [171],
    siblings: [],
    spouses: [],
    name: {
      last: 'Cruz',
      first: 'Remigio',
      middle: 'Ramos',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: 'Jr',
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 168,
    parents: [167],
    siblings: [166],
    spouses: [],
    name: {
      last: 'Cruz',
      first: 'Herminio',
      middle: 'A',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 169,
    parents: [168],
    siblings: [],
    spouses: [170],
    name: {
      last: 'Cruz',
      first: 'John',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 170,
    parents: [],
    siblings: [],
    spouses: [169],
    name: {
      last: 'Pelagio',
      first: 'Carol',
      middle: 'Alviza',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 171,
    parents: [],
    siblings: [],
    spouses: [],
    name: {
      last: 'Cruz',
      first: 'Remigio',
      middle: null,
      nick: [
      ],
      prefix: null,
      suffix: {
        family: 'Sr',
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: true,
    },
    achievements: [
    ],
    gender: 1,
    image: {
      id: null,
    },
  },

  {
    id: 172,
    parents: [],
    siblings: [],
    spouses: [166],
    name: {
      last: 'Urgel',
      first: 'Teodorica',
      middle: 'Lequesta',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

  {
    id: 173,
    parents: [169, 170],
    siblings: [],
    spouses: [],
    name: {
      last: 'Cruz',
      first: 'Yohana',
      middle: 'Pelagio',
      nick: [
      ],
      prefix: null,
      suffix: {
        family: null,
        professional: null,
      }
    },
    birth: {
      year: null,
      month: null,
      day: null,
    },
    death: {
      year: null,
      month: null,
      day: null,
    },
    status: {
      adopted: false,
      dead: false,
    },
    achievements: [
    ],
    gender: 0,
    image: {
      id: null,
    },
  },

];
