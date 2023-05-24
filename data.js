var TREE_DATA = [
  { key: 'TEMP-000',                                                                                                                         gender: '',  birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                height: 0, width: 0 },
    { key: 'GQX8-CQP',               child: 'TEMP-000', firstName: 'Arbyn',              middleName: 'Acosta',      lastName: 'Argabioso',   gender: 'M', birthDate: '1995-04-19', deathDate: null,               living: true,  hasDNA: true,  hasImage: true,   birthPlace: 'Santa Cruz, Manila, PHL',           deathPlace: null,                                marker: 'software' },
      { key: 'GQJK-L51',             child: 'GQX8-CQP', firstName: 'Rolando',            middleName: 'Saplala',     lastName: 'Argabioso',   gender: 'M', birthDate: '1965-10-09', deathDate: null,               living: true,  hasDNA: true,  hasImage: true,   birthPlace: 'Poblacion, Caloocan, PHL',          deathPlace: null,                                marker: 'government' },
        { key: 'GQJK-LCT',           child: 'GQJK-L51', firstName: 'Marcial',            middleName: 'Mia',         lastName: 'Argabioso',   gender: 'M', birthDate: '1932-10-14', deathDate: '2020-02-27',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Majayjay, Laguna, PHL',             deathPlace: 'Quezon City, PHL',                  },
          { key: 'GHBZ-TM4',         child: 'GQJK-LCT', firstName: 'Eusebio',            middleName: 'Lopecillo',   lastName: 'Argabioso',   gender: 'M', birthDate: 'about 1895', deathDate: '1972-10-27',       living: false, hasDNA: false, hasImage: false,  birthPlace: 'Majayjay, Laguna, PHL',             deathPlace: 'Majayjay, Laguna, PHL',             marker: 'farming' },
            { key: 'GHB8-RCH',       child: 'GHBZ-TM4', firstName: 'Estebana',           middleName: '',            lastName: 'Lopecillo',   gender: 'F', birthDate: 'about 1861', deathDate: '1951-08-30',       living: false, hasDNA: false, hasImage: false,  birthPlace: 'Majayjay, Laguna, PHL',             deathPlace: 'Majayjay, Laguna, PHL',             },
          { key: 'GHBZ-P5Q',         child: 'GQJK-LCT', firstName: 'Francisca',          middleName: '',            lastName: 'Mia',         gender: 'F', birthDate: null,         deathDate: 'after 1936-10-14', living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
        { key: 'GHBZ-YVX',           child: 'GQJK-L51', firstName: 'Lydia',              middleName: 'Perez',       lastName: 'Saplala',     gender: 'F', birthDate: '1944-11-24', deathDate: null,               living: true,  hasDNA: true,  hasImage: true,   birthPlace: 'Lubao, Pampanga, PHL',              deathPlace: null,                                marker: 'retail' },
          { key: 'GHB8-7T6',         child: 'GHBZ-YVX', firstName: 'Fernando',           middleName: 'Sison',       lastName: 'Saplala',     gender: 'M', birthDate: '1916-05-30', deathDate: '1993-05-03',       living: false, hasDNA: false, hasImage: true,   birthPlace: null,                                deathPlace: 'Caloocan, PHL',                     marker: 'military' },
            { key: 'GNNH-JLM',       child: 'GHB8-7T6', firstName: 'Estanislao',         middleName: '',            lastName: 'Saplala',     gender: 'M', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
            { key: 'GJJX-1SG',       child: 'GHB8-7T6', firstName: 'Adela',              middleName: '',            lastName: 'Sison',       gender: 'F', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
          { key: 'GHB8-GZL',         child: 'GHBZ-YVX', firstName: 'Lucina',             middleName: 'Gutierrez',   lastName: 'Perez',       gender: 'F', birthDate: '1919-11-16', deathDate: '1986-10-02',       living: false, hasDNA: false, hasImage: true,   birthPlace: null,                                deathPlace: 'Dinalupihan, Bataan, PHL',          },
            { key: 'GHB8-M8D',       child: 'GHB8-GZL', firstName: 'Victor',             middleName: '',            lastName: 'Perez',       gender: 'M', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
            { key: 'GHB8-M86',       child: 'GHB8-GZL', firstName: 'Genoveba',           middleName: '',            lastName: 'Gutierrez',   gender: 'F', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
      { key: 'GQJK-G8W',             child: 'GQX8-CQP', firstName: 'Corazon',            middleName: 'Maramba',     lastName: 'Acosta',      gender: 'F', birthDate: '1971-03-10', deathDate: '2018-05-25',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Sampaloc, Manila, PHL',             deathPlace: 'Santa Cruz, Laguna, PHL',           marker: 'housewife' },
        { key: 'GHBD-7M4',           child: 'GQJK-G8W', firstName: 'Manuel',             middleName: 'San Agustin', lastName: 'Acosta Jr.',  gender: 'M', birthDate: '1948-07-06', deathDate: '1979-06-07',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Manila, PHL',                       deathPlace: 'Pasadena, Los Angeles, CA, USA',    marker: 'seaman' },
          { key: 'GHBD-9L6',         child: 'GHBD-7M4', firstName: 'Manuel',             middleName: 'Bongco',      lastName: 'Acosta Sr.',  gender: 'M', birthDate: '1913-11-10', deathDate: '1994-11-20',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Orani, Bataan, PHL',                deathPlace: 'San Dimas, Los Angeles, CA, USA',   marker: 'police' },
            { key: 'GHB8-SQN',       child: 'GHBD-9L6', firstName: 'Ligorio',            middleName: '',            lastName: 'Acosta',      gender: 'M', birthDate: 'about 1871', deathDate: '1948-07-07',       living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: 'Manila, PHL',                       },
            { key: 'GHB8-5K8',       child: 'GHBD-9L6', firstName: 'Maximiana',          middleName: 'Cahanding',   lastName: 'Bongco',      gender: 'F', birthDate: null,         deathDate: 'after 1913-11-10', living: false, hasDNA: false, hasImage: false,  birthPlace: 'Orani, Bataan, PHL',                deathPlace: null,                                },
              { key: 'G4MF-WD8',     child: 'GHB8-5K8', firstName: 'Fabian',             middleName: '',            lastName: 'Bongco',      gender: 'M', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: 'Orani, Bataan, PHL',                deathPlace: null,                                },
              { key: 'G4MF-S3R',     child: 'GHB8-5K8', firstName: 'Lucina',             middleName: '',            lastName: 'Cahanding',   gender: 'F', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: 'Orani, Bataan, PHL',                deathPlace: null,                                },
          { key: 'GHB8-DXY',         child: 'GHBD-7M4', firstName: 'Natividad',          middleName: 'Villacorta',  lastName: 'San Agustin', gender: 'F', birthDate: '1925-12-21', deathDate: '2008-10-09',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Ermita, Manila, PHL',               deathPlace: 'San Dimas, Los Angeles, CA, USA',   },
            { key: 'GHB8-LCC',       child: 'GHB8-DXY', firstName: 'Vicente',            middleName: '',            lastName: 'San Agustin', gender: 'M', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
            { key: 'GHB8-H7K',       child: 'GHB8-DXY', firstName: 'Nena',               middleName: '',            lastName: 'Villacorta',  gender: 'F', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
        { key: 'GHB8-J1B',           child: 'GQJK-G8W', firstName: 'Catalina',           middleName: 'Dumantay',    lastName: 'Maramba',     gender: 'F', birthDate: '1943-01-28', deathDate: '1974-08-10',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Santa Barbara, Pangasinan, PHL',    deathPlace: 'Sangandaan, Caloocan, PHL',         },
          { key: 'GHB8-GB6',         child: 'GHB8-J1B', firstName: 'Sotero',             middleName: 'Reyes',       lastName: 'Maramba Sr.', gender: 'M', birthDate: '1910-04-22', deathDate: '1969-12-12',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Santa Barbara, Pangasinan, PHL',    deathPlace: 'Sangandaan, Caloocan, PHL',         marker: 'police' },
            { key: 'LLQS-641',       child: 'GHB8-GB6', firstName: 'Miguel',             middleName: 'Bautista',    lastName: 'Maramba',     gender: 'M', birthDate: '1858',       deathDate: 'after 1909-06-22', living: false, hasDNA: false, hasImage: false,  birthPlace: 'Santa Barbara, Pangasinan, PHL',    deathPlace: 'Santa Barbara, Pangasinan, PHL',    marker: 'government' },
              { key: 'LLQS-6YC',     child: 'LLQS-641', firstName: 'Guillermo',          middleName: 'Bautista',    lastName: 'Maramba',     gender: 'M', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
              { key: 'L281-614',     child: 'LLQS-641', firstName: 'Maria',              middleName: 'Garcia',      lastName: 'Bautista',    gender: 'F', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
                { key: 'GC7T-H59',   child: 'L281-614', firstName: 'Agustin',            middleName: '',            lastName: 'Bautista',    gender: 'M', birthDate: '1812-05-29', deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: 'Santa Barbara, Pangasinan, PHL',    deathPlace: 'Santa Barbara, Pangasinan, PHL',    marker: 'government' },
                  { key: 'L66T-WY8', child: 'GC7T-H59', firstName: 'Juan',               middleName: '',            lastName: 'Bautista',    gender: 'M', birthDate: 'about 1783', deathDate: 'after 1811-07-29', living: false, hasDNA: false, hasImage: false,  birthPlace: 'Santa Barbara, Pangasinan, PHL',    deathPlace: null,                                },
                  { key: 'L6HC-MMX', child: 'GC7T-H59', firstName: 'Maria',              middleName: '',            lastName: 'Quinto',      gender: 'F', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
                { key: 'GC7T-1PK',   child: 'L281-614', firstName: 'Felipe',             middleName: '',            lastName: 'Garcia',      gender: 'F', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
            { key: 'LLQS-6F1',       child: 'GHB8-GB6', firstName: 'Mercedes',           middleName: 'Novilla',     lastName: 'Reyes',       gender: 'F', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
              { key: 'G7C3-B6P',     child: 'LLQS-6F1', firstName: 'Gregorio',           middleName: '',            lastName: 'Reyes',       gender: 'M', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
              { key: 'G7C3-J9S',     child: 'LLQS-6F1', firstName: 'Leocadia',           middleName: '',            lastName: 'Novilla',     gender: 'F', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
          { key: 'GHBD-9LY',         child: 'GHB8-J1B', firstName: 'Crescencia',         middleName: '',            lastName: 'Dumantay',    gender: 'F', birthDate: '1918-04-19', deathDate: '1990-04-16',       living: false, hasDNA: false, hasImage: true,   birthPlace: null,                                deathPlace: 'Sangandaan, Caloocan, PHL',         },
            { key: 'TEMP-001',       child: 'GHBD-9LY', firstName: 'Unknown',            middleName: '',            lastName: 'name',        gender: 'F', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: true,   birthPlace: null,                                deathPlace: null,                                },
    { key: 'GHB5-TWN',               child: 'TEMP-000', firstName: 'Mitchie',            middleName: 'Ajesta',      lastName: 'Adanza',      gender: 'F', birthDate: '1994-12-16', deathDate: null,               living: true,  hasDNA: true,  hasImage: true,   birthPlace: 'Santa Cruz, Manila, PHL',           deathPlace: null,                                },
      { key: 'GHB5-XTZ',             child: 'GHB5-TWN', firstName: 'Darne',              middleName: 'Elican',      lastName: 'Adanza',      gender: 'M', birthDate: '1964-06-22', deathDate: null,               living: true,  hasDNA: false, hasImage: true,   birthPlace: 'Balingasag, Misamis Oriental, PHL', deathPlace: null,                                marker: 'manufacturing' },
        { key: 'GH12-SVQ',           child: 'GHB5-XTZ', firstName: 'Nestor',             middleName: 'Ladera',      lastName: 'Adanza',      gender: 'M', birthDate: '1938-02-26', deathDate: '2018-09-29',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Balingasag, Misamis Oriental, PHL', deathPlace: 'Balingasag, Misamis Oriental, PHL', marker: 'farming' },
          { key: 'GH12-DRN',         child: 'GH12-SVQ', firstName: 'Felomino',           middleName: 'R',           lastName: 'Adanza',      gender: 'M', birthDate: 'about 1901', deathDate: '1990-11-03',       living: false, hasDNA: false, hasImage: false,  birthPlace: 'Dumaguete, Negros Oriental, PHL',   deathPlace: 'Balingasag, Misamis Oriental, PHL', marker: 'farming' },
          { key: 'GH12-3GN',         child: 'GH12-SVQ', firstName: 'Consuelo',           middleName: '',            lastName: 'Ladera',      gender: 'F', birthDate: null,         deathDate: 'after 1990-11-03', living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
        { key: 'GH12-9F6',           child: 'GHB5-XTZ', firstName: 'Rufa',               middleName: 'Acerto',      lastName: 'Elican',      gender: 'F', birthDate: '1939-11-28', deathDate: '2015-04-02',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Balingasag, Misamis Oriental, PHL', deathPlace: 'Balingasag, Misamis Oriental, PHL', marker: 'farming' },
          { key: 'GH12-9JZ',         child: 'GH12-9F6', firstName: 'Cecilio',            middleName: '',            lastName: 'Elican',      gender: 'M', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                marker: 'military' },
          { key: 'GH12-35H',         child: 'GH12-9F6', firstName: 'Jovita',             middleName: '',            lastName: 'Acerto',      gender: 'F', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
      { key: 'GHBR-FK3',             child: 'GHB5-TWN', firstName: 'Mylen',              middleName: 'Vergara',     lastName: 'Ajesta',      gender: 'F', birthDate: '1974-04-13', deathDate: null,               living: true,  hasDNA: false, hasImage: true,   birthPlace: 'Sinamongan, Pilar, Capiz, PHL',     deathPlace: null,                                marker: 'beautician' },
        { key: 'GH12-Z3C',           child: 'GHBR-FK3', firstName: 'Napoleon Crispolon', middleName: 'Badoles',     lastName: 'Ajesta',      gender: 'M', birthDate: null,         deathDate: 'after 1980-02-26', living: false, hasDNA: false, hasImage: false,  birthPlace: 'Binaobawan, Pilar, Capiz, PHL',     deathPlace: null,                                },
          { key: 'GH12-XX4',         child: 'GH12-Z3C', firstName: 'Manuel',             middleName: 'Bermúdez',    lastName: 'Ajesta',      gender: 'M', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: 'Pilar, Capiz, PHL',                 deathPlace: null,                                },
            { key: 'GKBR-M9Y',       child: 'GH12-XX4', firstName: 'Eustaquio',          middleName: '',            lastName: 'Ajesta',      gender: 'M', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
            { key: 'GKBR-7P7',       child: 'GH12-XX4', firstName: 'Florencia',          middleName: '',            lastName: 'Bermúdez',    gender: 'F', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
          { key: 'GH12-HQN',         child: 'GH12-Z3C', firstName: 'Ursula',             middleName: 'Villanes',    lastName: 'Badoles',     gender: 'F', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
            { key: 'GKBT-9GD',       child: 'GH12-HQN', firstName: 'Pedro Benjamin',     middleName: '',            lastName: 'Badoles',     gender: 'M', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
            { key: 'K2GJ-YY3',       child: 'GH12-HQN', firstName: 'Leoncia',            middleName: '',            lastName: 'Villanes',    gender: 'F', birthDate: 'about 1852', deathDate: '1922-01-08',       living: false, hasDNA: false, hasImage: false,  birthPlace: 'Panay, Capiz, PHL',                 deathPlace: 'Panay, Capiz, PHL',                 },
        { key: 'GH12-W17',           child: 'GHBR-FK3', firstName: 'Celma',              middleName: 'Borja',       lastName: 'Vergara',     gender: 'F', birthDate: '1941-07-08', deathDate: '2020-02-16',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Dulangan, Pilar, Capiz, PHL',       deathPlace: 'Santa Maria, Bulacan, PHL',         marker: 'farming' },
          { key: 'GH12-6YL',         child: 'GH12-W17', firstName: 'Benigno',            middleName: '',            lastName: 'Vergara',     gender: 'M', birthDate: null,         deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
          { key: 'GH12-DD8',         child: 'GH12-W17', firstName: 'Enoria',             middleName: '',            lastName: 'Borja',       gender: 'F', birthDate: null,         deathDate: 'after 1997-12-16', living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                },
];

// Add "parent" from "child" value since GoJS works that way
for (var i = TREE_DATA.length - 1; i >= 0; i--) {
  TREE_DATA[i]["parent"] = TREE_DATA[i]["child"];
}

for (const [i, person] of Object.entries(TREE_DATA)) {
  if (person.firstName == undefined) {
    continue;
  }
  let middleInitialsArray  = person.middleName.trim().split(' ');
  let middleInitialsString = '';

  if (middleInitialsArray[0] != '') {
    for (let i = 0; i < middleInitialsArray.length; i++) {
      middleInitialsString += middleInitialsArray[i][0] + '. '
    }
  }

  // Add "fullName" to each person
  TREE_DATA[i]['fullName'] = person.firstName + " " + middleInitialsString + person.lastName;
}

// Create a map of child to parents.
let childToParents = {};
TREE_DATA.forEach(node => {
  if (node.child) {
    if (childToParents[node.child]) {
      childToParents[node.child].push(node.key);
    } else {
      childToParents[node.child] = [node.key];
    }
  }
});

// Add partner to each node.
TREE_DATA.forEach(node => {
  node.partner = null; // Default value
  if (node.child && childToParents[node.child].length > 1) {
    node.partner = childToParents[node.child].find(parentKey => parentKey !== node.key);
  }
});

// const TREE_DATA = TREE_DATA;
/*
  Grumaduate si Nanay ng May 30, 1994 ng BS Accounting sa UE Caloocan
  Grumaduate si Nanay ng March 22, 1990 ng Highschool
*/