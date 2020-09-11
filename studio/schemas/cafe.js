export default {
  name: "cafe",
  type: "document",
  title: "Café",
  fields: [
    {
      name: "titleCafe",
      type: "string",
      title: "Rubrik Café",
    },
    {
      name: "textBlockHero",
      type: "array",
      title: "Beskrivning av Café",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "firstImage",
      type: "image",
      title: "Bifoga Bild",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Beskrivning av bild",
        },
      ],
    },
    {
      name: "titleMenu",
      type: "string",
      title: "Rubrik Meny",
    },
    {
      name: "textBlockMenu",
      type: "array",
      title: "Beskrivning av Meny",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "secondImage",
      type: "image",
      title: "Bifoga Bild",
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
      title: "Bifoga Bild",
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
      title: "Bifoga Bild",
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
