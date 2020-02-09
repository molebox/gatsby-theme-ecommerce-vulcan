export default {
    title: 'Home Page Images',
    name: 'homePage',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'images',
        title: 'Home Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true
            }
          }
        ]
      },
    ]
  }
  