export default {
  name: "home",
  type: "document",
  title: "Startsida",
  fields: [
    {
      name: "titleHome",
      type: "string",
      title: "Rubrik Startsida",
    },
    {
      name: "sloganHome",
      type: "string",
      title: "Slogan Startsida",
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
      name: "textBlockHero",
      type: "array",
      title: "Kort beskrivning av cafét",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "secondImage",
      type: "image",
      title: "Bild",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Beskrivning av bild",
        },
      ],
    },
    {
      name: "headerCafe",
      type: "string",
      title: "Rubrik Cafémeny",
    },
    {
      name: "textBlockCafe",
      type: "array",
      title: "Kort beskrivning om menyn",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "thirdImage",
      type: "image",
      title: "Bild",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Beskrivning av bild",
        },
      ],
    },
    {
      name: "headerFind",
      type: "string",
      title: "Rubrik Hitta Hit",
    },
    {
      name: "textBlockFind",
      type: "array",
      title: "Kort text till Hitta Hit",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "headerCatering",
      type: "string",
      title: "Rubrik Catering",
    },
    {
      name: "textBlockCatering",
      type: "array",
      title: "Kort text till Catering",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "fourthImage",
      type: "image",
      title: "Bild",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Beskrivning av bild",
        },
      ],
    },
    {
      name: "headerEvent",
      type: "string",
      title: "Rubrik Evenemang",
    },
    {
      name: "textBlockEvent",
      type: "array",
      title: "Kort text till Evenemang",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "headerRent",
      type: "string",
      title: "Rubrik Abonnera",
    },
    {
      name: "textBlockRent",
      type: "array",
      title: "Kort text till abonnering",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
