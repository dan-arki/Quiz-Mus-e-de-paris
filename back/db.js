const db = [
  {
    id: 1,
    name: "Gustave Courbet",
    peintures: [
      {
        id: 1,
        fk_id: 1,
        title: "Portrait de Jules Vallès (1832-1885), écrivain.",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/CAR/lpdp_25745-1.jpg?itok=Qrqw80MA",
      },
      {
        id: 2,
        fk_id: 1,
        title: "Portrait de femme",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_82935-14.jpg?itok=Q4ciNVQv",
      },
      {
        id: 3,
        fk_id: 1,
        title: "Portrait de Monsieur Corbinaud",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_25759-2.jpg?itok=cwnKHmWq",
      },
      {
        id: 4,
        fk_id: 1,
        title: "Grappe de raisins",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_88075-6.jpg?itok=j0Htx44M",
      },
    ],
  },
  {
    id: 2,
    name: "Élisabeth Vigée Le Brun",
    peintures: [
      {
        id: 5,
        fk_id: 2,
        title: "Portrait d'une danseuse",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/COG/25917-19.jpg?itok=_2LrS1Xd",
      },
      {
        id: 6,
        fk_id: 2,
        title:
          "Portrait de Marie-Louise-Adélaïde-Jacquette de Robien, vicomtesse de Mirabeau",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/COG/25917-20.jpg?itok=YLWhV4Vr",
      },
      {
        id: 7,
        fk_id: 2,
        title: "Autoportrait de Madame Vigée-Lebrun (1755-1842).",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/CAR/lpdp_33933-6.jpg?itok=PS62G2Pr",
      },
      {
        id: 8,
        fk_id: 2,
        title: "Portrait de la duchesse d'Orléans",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/COG/35804-1.jpg?itok=pXX5ESfS",
      },
    ],
  },
  {
    id: 3,

    name: "Paul Cézanne",
    peintures: [
      {
        id: 9,
        fk_id: 3,
        title: "Rochers et branches à Bibémus",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_72167-1.jpg?itok=V4AS1Q3M",
      },
      {
        id: 10,
        fk_id: 3,
        title: "Les quatre saisons - L'hiver",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_24769-9.jpg?itok=Xb3mTdd4",
      },
      {
        id: 11,
        fk_id: 3,
        title: "Les quatre saisons - L'automne",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_24769-10.jpg?itok=nDCeXx0N",
      },
      {
        id: 12,
        fk_id: 3,
        title: "Les quatre saisons - L'été",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_24769-11.jpg?itok=E2iAjbl1",
      },
    ],
  },
  {
    id: 4,
    name: "Mary Cassat",
    peintures: [
      {
        id: 13,
        fk_id: 4,
        title: "La musique (music party)",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_48739-2.jpg?itok=xqwsMCVY",
      },
      {
        id: 14,
        fk_id: 4,
        title: "Le bain",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_26313-17.jpg?itok=elP5-sDx",
      },
      {
        id: 15,
        fk_id: 4,
        title: "Portrait d'homme",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/48739-1.jpg?itok=T2EMZTYJ",
      },
      {
        id: 16,
        fk_id: 4,
        title: "Automne, portrait de Lydia Cassatt",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_33870-1.jpg?itok=qpJlcUbx",
      },
    ],
  },
  {
    id: 5,
    name: "Rembrandt",
    peintures: [
      {
        id: 17,
        fk_id: 5,
        title: "La Ronde de nuit, d'après Rembrandt",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_50135-3.jpg?itok=VoeLz7-C",
      },
      {
        id: 18,
        fk_id: 5,
        title: "Le Tambour, tête d'homme d'après Rembrandt",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_50135-4.jpg?itok=PeqDOseF",
      },
      {
        id: 19,
        fk_id: 5,
        title: "Etude d'homme [Les Syndics], copie d'après Rembrandt",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_50135-2.jpg?itok=pNQI2iFB",
      },
      {
        id: 20,
        fk_id: 5,
        title: "Les syndics des drapiers, copie d'après Rembrandt",
        vignetteUrl:
          "https://apicollections.parismusees.paris.fr/sites/default/files/styles/thumbnail/collections/atoms/images/PPA/lpdp_50135-1.jpg?itok=yaU60Wrz",
      },
    ],
  },
];

export default db;
