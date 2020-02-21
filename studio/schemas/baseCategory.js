export default {
    name: 'baseCategory',
    title: 'Base Category',
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
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        title: 'Category Image',
        name: 'categoryImage',
        type: 'image',
        options: {
          hotspot: true
        },
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {type: 'category'}
          }
        ]
      },
      {
        name: 'products',
        title: 'Category Products',
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
  