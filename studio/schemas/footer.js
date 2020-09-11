export default {
  name: "footer",
  type: "document",
  title: "Footer",
  fields: [
    {
      name: "textBlockOpeningHours",
      type: "array",
      title: "Öppettider",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "textBlockAddress",
      type: "array",
      title: "Adress",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "textBlockContact",
      type: "array",
      title: "Kontaktuppgifter",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "logotype",
      type: "image",
      title: "Bifoga Logotyp",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Beskrivning av bild",
        },
      ],
    },
    {
      name: "facebookUrl",
      type: "url",
      title: "Länk till facebook",
    },
    {
      name: "instagramkUrl",
      type: "url",
      title: "Länk till instagram",
    },
    {
      name: "email",
      type: "string",
      title: "Ange email",
    },
    {
      name: "copyrightText",
      type: "string",
      title: "Copyright Text",
    },
  ],
};
