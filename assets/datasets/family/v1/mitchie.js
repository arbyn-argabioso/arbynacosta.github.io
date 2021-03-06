let MITCHIE_BASE_ID = 1000;
let MITCHIE_MALE_AVATAR = 'img/male_avatar.gif';
let MITCHIE_FEMALE_AVATAR = 'img/female_avatar.gif';

let MITCHIE_DOUBTFUL_NODES = 6

let mitchieTree = [
  new primitives.famdiagram.ItemConfig({
    id: 20180220,
    parents: [1, 2],
    spouses: null,
    lastname: 'Adanza',
    firstname: 'Mitchie',
    nickname: null,
    middlename: 'Ajesta',
    life: "12 Dec 1994 - Living",
    importance: 0,
    image: "img/mitchie.gif",
  }),

  new primitives.famdiagram.ItemConfig({
    id: 1,
    parents: [3, 4],
    spouses: [2],
    lastname: 'Adanza',
    firstname: 'Darne',
    nickname: null,
    middlename: 'Elican',
    life: "22 Jun 1964 - Living",
    importance: 1,
    image: "img/tito_darne.gif",
  }),

  new primitives.famdiagram.ItemConfig({
    id: 2,
    parents: [5, 6],
    spouses: [1],
    lastname: 'Ajesta',
    firstname: 'Mylen',
    nickname: null,
    middlename: 'Vergara',
    life: "14 Apr 1974 - Living",
    importance: 1,
    image: "img/tita_mylen.gif",
  }),

  new primitives.famdiagram.ItemConfig({
    id: 3,
    parents: [7, 8],
    spouses: [4],
    lastname: 'Adanza',
    firstname: 'Nestor',
    nickname: null,
    middlename: 'Ladera',
    life: "- 28 Sep 2018",
    importance: 2,
    image: MITCHIE_MALE_AVATAR,
  }),

  new primitives.famdiagram.ItemConfig({
    id: 4,
    parents: [9, 10],
    spouses: [3],
    lastname: 'Elican',
    firstname: 'Rufa',
    nickname: null,
    middlename: 'Acerto',
    life: "- 2 Apr 2015",
    importance: 2,
    image: MITCHIE_FEMALE_AVATAR,
  }),

  new primitives.famdiagram.ItemConfig({
    id: 5,
    parents: [11, 12],
    spouses: [6],
    lastname: 'Ajesta',
    firstname: 'Napoleon',
    nickname: null,
    middlename: 'Crispolon',
    life: null,
    importance: 2,
    image: MITCHIE_MALE_AVATAR,
  }),

  new primitives.famdiagram.ItemConfig({
    id: 6,
    parents: [13, 14],
    spouses: [5],
    lastname: 'Vergara',
    firstname: 'Celma "Mamang"',
    nickname: null,
    middlename: 'Borja',
    life: 'Living',
    importance: 2,
    image: 'img/mamang.gif',
  }),

  new primitives.famdiagram.ItemConfig({
    id: 7,
    parents: null,
    spouses: [8],
    lastname: 'Adanza',
    firstname: 'Filomino',
    nickname: null,
    middlename: null,
    life: null,
    importance: 3,
    image: MITCHIE_MALE_AVATAR,
  }),

  new primitives.famdiagram.ItemConfig({
    id: 8,
    parents: null,
    spouses: [7],
    lastname: 'Ladera',
    firstname: 'Consuelo',
    nickname: null,
    middlename: null,
    life: null,
    importance: 3,
    image: MITCHIE_FEMALE_AVATAR,
  }),

  new primitives.famdiagram.ItemConfig({
    id: 9,
    parents: null,
    spouses: [10],
    lastname: 'Elican',
    firstname: 'Cecilio',
    nickname: null,
    middlename: null,
    life: null,
    importance: 3,
    image: MITCHIE_MALE_AVATAR,
  }),

  new primitives.famdiagram.ItemConfig({
    id: 10,
    parents: null,
    spouses: [9],
    lastname: 'Acerto',
    firstname: 'Jovita',
    nickname: null,
    middlename: null,
    life: null,
    importance: 3,
    image: MITCHIE_FEMALE_AVATAR,
  }),

  new primitives.famdiagram.ItemConfig({
    id: 11,
    parents: null,
    spouses: [12],
    lastname: 'Ajesta',
    firstname: 'Emmanuel',
    nickname: null,
    middlename: null,
    life: null,
    importance: 3,
    image: MITCHIE_MALE_AVATAR,
  }),

  new primitives.famdiagram.ItemConfig({
    id: 12,
    parents: null,
    spouses: [11],
    lastname: 'Crispolon',
    firstname: 'Ursula',
    nickname: null,
    middlename: null,
    life: null,
    importance: 3,
    image: MITCHIE_FEMALE_AVATAR,
  }),

  new primitives.famdiagram.ItemConfig({
    id: 13,
    parents: null,
    spouses: [14],
    lastname: 'Vergara',
    firstname: 'Benigno',
    nickname: null,
    middlename: 'Aquino',
    life: null,
    importance: 3,
    image: MITCHIE_MALE_AVATAR,
  }),

  new primitives.famdiagram.ItemConfig({
    id: 14,
    parents: null,
    spouses: [13],
    lastname: 'Borja',
    firstname: 'Enoria',
    nickname: null,
    middlename: null,
    life: null,
    importance: 3,
    image: MITCHIE_FEMALE_AVATAR,
  }),

  new primitives.famdiagram.ItemConfig({
    id: 15,
    parents: [5, 6],
    spouses: null,
    lastname: 'Ajesta',
    firstname: 'Cecil',
    nickname: null,
    middlename: 'Vergara',
    life: 'Living',
    importance: null,
    image: MITCHIE_FEMALE_AVATAR
  }),

  new primitives.famdiagram.ItemConfig({
    id: 16,
    parents: [5, 6],
    spouses: null,
    lastname: 'Ajesta',
    firstname: 'Beng',
    nickname: null,
    middlename: 'Vergara',
    life: 'Living',
    importance: null,
    image: MITCHIE_FEMALE_AVATAR
  }),

  new primitives.famdiagram.ItemConfig({
    id: 17,
    parents: [1, 2],
    spouses: null,
    lastname: 'Adanza',
    firstname: 'DM',
    nickname: 'Pangs',
    middlename: 'Ajesta',
    life: 'Living',
    importance: null,
    image: MITCHIE_MALE_AVATAR
  }),

  new primitives.famdiagram.ItemConfig({
    id: 18,
    parents: [5, 6],
    spouses: null,
    lastname: 'Ajesta',
    firstname: 'Rodel',
    nickname: 'Bong',
    middlename: null,
    life: 'Living',
    importance: null,
    image: null,
    middlename: 'Vergara',
    life: null,
    importance: null,
    image: MITCHIE_MALE_AVATAR
  }),

  new primitives.famdiagram.ItemConfig({
    id: 19,
    parents: [25],
    spouses: [22],
    lastname: 'Ajesta',
    firstname: 'Richie',
    nickname: null,
    middlename: 'Aguilar',
    life: 'Living',
    importance: null,
    image: MITCHIE_MALE_AVATAR
  }),

  new primitives.famdiagram.ItemConfig({
    id: 20,
    parents: [3, 4],
    spouses: null,
    lastname: 'Adanza',
    firstname: 'Gemma',
    nickname: null,
    middlename: 'Elican',
    life: 'Living',
    importance: null,
    image: MITCHIE_FEMALE_AVATAR
  }),

  new primitives.famdiagram.ItemConfig({
    id: 21,
    parents: [3, 4],
    spouses: null,
    lastname: 'Adanza',
    firstname: 'Corazon',
    nickname: null,
    middlename: 'Elican',
    life: 'Living',
    importance: null,
    image: MITCHIE_FEMALE_AVATAR
  }),

  new primitives.famdiagram.ItemConfig({
    id: 21,
    parents: [3, 4],
    spouses: null,
    lastname: 'Adanza',
    firstname: 'Corazon',
    nickname: null,
    middlename: 'Elican',
    life: 'Living',
    importance: null,
    image: MITCHIE_FEMALE_AVATAR
  }),

  new primitives.famdiagram.ItemConfig({
    id: 22,
    parents: null,
    spouses: [19],
    lastname: 'Macalos',
    firstname: 'Mavel Irinco',
    nickname: null,
    middlename: null,
    life: 'Living',
    importance: null,
    image: MITCHIE_FEMALE_AVATAR
  }),

  new primitives.famdiagram.ItemConfig({
    id: 23,
    parents: [25],
    spouses: null,
    lastname: 'Ajesta',
    firstname: 'Rachelle',
    nickname: null,
    middlename: 'Aguilar',
    life: 'Living',
    importance: null,
    image: MITCHIE_FEMALE_AVATAR
  }),

  new primitives.famdiagram.ItemConfig({
    id: 24,
    parents: [22, 19],
    spouses: null,
    lastname: 'Ajesta',
    firstname: 'Sean Nyzel',
    nickname: null,
    middlename: 'Macalos',
    life: 'Living',
    importance: null,
    image: MITCHIE_MALE_AVATAR
  }),

  new primitives.famdiagram.ItemConfig({
    id: 26,
    parents: [22, 19],
    spouses: null,
    lastname: 'Ajesta',
    firstname: 'Shaneah Nicole',
    nickname: null,
    middlename: 'Macalos',
    life: 'Living',
    importance: null,
    image: MITCHIE_FEMALE_AVATAR
  }),

  new primitives.famdiagram.ItemConfig({
    id: 25,
    parents: [5, 6],
    spouses: null,
    lastname: 'Ajesta',
    firstname: 'Roly',
    nickname: null,
    middlename: 'Vergara',
    life: 'Living',
    importance: null,
    image: MITCHIE_MALE_AVATAR
  }),

];


mitchieTree = addBaseIdToTree(mitchieTree, MITCHIE_BASE_ID);







// let gedcomx = {
//   persons: [],
//   relationships: [],
// };
// for (let i = 0, imax = RAW_DATA.length; i < imax; i++) {
//   item = RAW_DATA[i];

//   let newId = 'p_' + (99973000000 + item.id);
//   let newGender = item.gender == 0 ? 'http://gedcomx.org/Female' : 'http://gedcomx.org/Male';

//   let fullname = item.name.first + ' ' + item.name.last;
//   let birthDateFormal = '+' + item.birth.year + '-' + ('0' + item.birth.month).slice(-2) + '-' + ('0' + item.birth.day).slice(-2);

//   item.newId = newId;

//   person = {
//     id: newId,

//     extracted: true,
//     principal: false,

//     gender: {
//       type: newGender,
//     },

//     names: [
//       {
//         type: null,
//         nameForms: [
//           {
//             fullText: fullname,
//             parts: [
//               {
//                 type: "http://gedcomx.org/Given",
//                 value: item.name.first,
//               },
//               {
//                 type: "http://gedcomx.org/Surname",
//                 value: item.name.last,
//               },
//             ],
//           },
//         ],
//       },
//     ],

//     facts: [
//       {
//         type: 'http://gedcomx.org/Birth',
//         primary: false,
//         date: {
//           formal: birthDateFormal,
//         },
//         place: {
//           original: item.birth.place || null,
//         },
//       },
//     ],
//   }
//   gedcomx.persons.push(person);
// }
// for (let i = 0, imax = RAW_DATA.length; i < imax; i++) {
//   item = RAW_DATA[i];

//   for (let j = 0, jmax = item.parents.length; j < jmax; j++) {
//     if (item.parents[j] == undefined) {
//       continue;
//     }
//     parent = Utils.findNode(item.parents[j], RAW_DATA);
//     relationship = {
//       type: "http://gedcomx.org/ParentChild",
//       person1: {
//         resourceId: parent.newId,
//         resource: '#' + parent.newId,
//       },
//       person2: {
//         resourceId: item.newId,
//         resource: '#' + item.newId,
//       }
//     }

//     gedcomx.relationships.push(relationship);
//   }
// }

// console.log(JSON.stringify(gedcomx));

