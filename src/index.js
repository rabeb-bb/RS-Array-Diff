const RSDiff = (arr1, arr2) => {
  // compare function
  const isSame = (a, b) => a.msgid === b.msgid;
  //extract differences
  const Diff = (one, two, compareFunction) =>
    two.filter((item2) => !one.some((item1) => compareFunction(item2, item1)));

  const Similar = (one, two, compareFunction) =>
    two.filter((item2) => one.some((item1) => compareFunction(item2, item1)));

  const added = Diff(arr1, arr2, isSame);
  const deleted = Diff(arr2, arr1, isSame);
  const similar = Similar(arr2, arr1, isSame);

  return {
    added: added,
    deleted: deleted,
    similar: similar,
  };
};

module.exports = RSDiff;

// const arr1 = [
//   {
//     msgid: "TODO List",
//     msgctxt: null,
//     references: ["/app/modules/views"],
//     msgid_plural: null,
//     msgstr: ["TODO List"],
//     comments: [],
//     extractedComments: ["Please don't change the name of the application"],
//     flags: {},
//     obsolete: false,
//     nplurals: 2,
//   },
//   {
//     msgid: "Just one user online",
//     msgctxt: null,
//     references: ["/app/modules/views"],
//     msgid_plural: "There are %d users online",
//     msgstr: ["Un seul utilisateur en ligne", "Il y a %d utilisateurs en ligne"],
//     comments: [],
//     extractedComments: [],
//     flags: {},
//     obsolete: false,
//     nplurals: 2,
//   },
// ];
// const arr2 = [
//   {
//     msgid: "TODO List",
//     msgctxt: null,
//     references: ["/app/modules/views"],
//     msgid_plural: null,
//     msgstr: ["TODO List"],
//     comments: [],
//     extractedComments: ["Please don't change the name of the application"],
//     flags: {},
//     obsolete: false,
//     nplurals: 2,
//   },
//   {
//     msgid: "Enter your credentials below to login",
//     msgctxt: null,
//     references: ["/app/modules/views"],
//     msgid_plural: null,
//     msgstr: ["Entrez vos identifiants ci-dessous pour vous connecter"],
//     comments: [],
//     extractedComments: [],
//     flags: {},
//     obsolete: false,
//     nplurals: 2,
//   },
//   {
//     msgid: "Password",
//     msgctxt: null,
//     references: ["/app/modules/views"],
//     msgid_plural: null,
//     msgstr: ["Mot de passe"],
//     comments: [],
//     extractedComments: [],
//     flags: {},
//     obsolete: false,
//     nplurals: 2,
//   },
// ];

// const result = RSDiff(arr1, arr2);
// console.log(result);
