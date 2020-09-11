export default {
  name: "rent",
  type: "document",
  title: "Abonnera",
  fields: [
    {
      name: "titleRent",
      type: "string",
      title: "Rubrik Abonnera",
    },
    {
      name: "textBlockRent",
      type: "array",
      title: "Beskrivning av Abonnera",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "firstImage",
      type: "image",
      title: "Om Oss Bild",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Beskrivning av bild",
        },
      ],
    },
    {
      name: "titleRequest",
      type: "string",
      title: "Rubrik Förfrågan",
    },
    {
      name: "textBlockRequest",
      type: "array",
      title: "Beskrivning av Förfrågan",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "secondImage",
      type: "image",
      title: "Bakgrund Bild",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Beskrivning av bild",
        },
      ],
    },
    {
      name: "thirdImage",
      type: "image",
      title: "Bakgrund Bild",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Beskrivning av bild",
        },
      ],
    },
    {
      name: "fourthImage",
      type: "image",
      title: "Bakgrund Bild",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Beskrivning av bild",
        },
      ],
    },
    {
      name: "titleCatering",
      type: "string",
      title: "Rubrik Boka Catering",
    },
    {
      name: "textBlockCatering",
      type: "array",
      title: "Beskrivning av Boka Catering",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
