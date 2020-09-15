export default {
  name: "eventPage",
  type: "document",
  title: "Evenemang",
  fields: [
    {
      name: "titleEvent",
      type: "string",
      title: "Rubrik Evenemang",
    },
    {
      name: "textBlockEvent",
      type: "array",
      title: "Beskrivning av evenemang",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "firstImage",
      type: "image",
      title: "Evenemang Bild",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Beskrivning av bild",
        },
      ],
    },
    {
      name: "textBlockBooking",
      type: "array",
      title: "Beskrivning av Boka Plats",
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
      name: "titleForm",
      type: "string",
      title: "Rubrik Formulär",
    },
    {
      name: "textBlockForm",
      type: "array",
      title: "Beskrivning av Formulär",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
