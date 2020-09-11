export default {
  name: "about",
  type: "document",
  title: "Om Oss",
  fields: [
    {
      name: "titleAbout",
      type: "string",
      title: "Rubrik Om oss",
    },
    {
      name: "textBlockAbout",
      type: "array",
      title: "Beskrivning av Om oss",
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
      name: "titleBackground",
      type: "string",
      title: "Rubrik Bakgrund",
    },
    {
      name: "textBlockBackground",
      type: "array",
      title: "Beskrivning av Bakgrund",
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
      name: "titleEvent",
      type: "string",
      title: "Rubrik Evenemang",
    },
    {
      name: "textBlockEvent",
      type: "array",
      title: "Beskrivning av Evenemang",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "titleWelcome",
      type: "string",
      title: "Rubrik Välkommen",
    },
    {
      name: "textBlockWelcome",
      type: "array",
      title: "Beskrivning av Välkommen",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
