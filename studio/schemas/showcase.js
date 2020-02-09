export default {
    title: 'Showcase',
    name: 'showcase',
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
        name: 'products',
        title: 'Showcase Products',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {type: 'product'}
          }
        ]
      },
    ]
  }
  