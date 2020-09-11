export default {
  name: "findUs",
  type: "document",
  title: "Hitta hit",
  fields: [
    {
      name: "titleFindUs",
      type: "string",
      title: "Rubrik Hitta Hit",
    },
    {
      name: "textBlockHero",
      type: "array",
      title: "Beskrivning av Hitta Hit",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "imageHero",
      type: "image",
      title: "Hero Bild",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Beskrivning av bild",
        },
      ],
    },
    {
      name: "titlePublicTransport",
      type: "string",
      title: "Rubrik Lokaltrafik",
    },
    {
      name: "textBlockPublicTransport",
      type: "array",
      title: "Beskrivning av Lokaltrafik",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "titleBike",
      type: "string",
      title: "Rubrik Cykel / Gång",
    },
    {
      name: "textBlockBike",
      type: "array",
      title: "Beskrivning av Cykel / Gång",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "titleParking",
      type: "string",
      title: "Rubrik Parkering",
    },
    {
      name: "textBlockParking",
      type: "array",
      title: "Beskrivning av Parkering",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "locationUrl",
      type: "url",
      title: "Länk till google maps",
    },
    {
      name: "titleWelcome",
      type: "string",
      title: "Rubrik Välkommen",
    },
  ],
};
