export default {
  name: "catering",
  type: "document",
  title: "Catering",
  fields: [
    {
      name: "titleCatering",
      type: "string",
      title: "Rubrik Catering",
    },
    {
      name: "textBlockCatering",
      type: "array",
      title: "Beskrivning av Catering",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "firstImage",
      type: "image",
      title: "Catering Bild",
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
      name: "requestEmail",
      type: "string",
      title: "Emailadress förfrågan",
    },
    {
      name: "secondImage",
      type: "image",
      title: "Catering Bild",
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
      title: "Catering Bild",
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
      title: "Catering Bild",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Beskrivning av bild",
        },
      ],
    },
    {
      name: "titleRent",
      type: "string",
      title: "Rubrik Abonnera",
    },
    {
      name: "textBlockRent",
      type: "array",
      title: "Beskrivning av Catering",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
