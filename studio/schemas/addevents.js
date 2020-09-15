export default {
  name: 'addEvents',
  type: 'document',
  title: 'Lägg till evenemang',
  fields: [
    {
      name: 'eventTitle',
      type: 'string',
      title: 'Rubrik Evenemang',
    },
    {
      name: 'textBlockHero',
      type: 'array',
      title: 'Beskrivning av evenemang',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email för kontakt',
    },
  ],
};
