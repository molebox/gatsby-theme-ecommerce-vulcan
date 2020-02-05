export default {
    name: 'size',
    title: 'Size',
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
          }

    ]
}