
export default {
  name: 'category',
  title: 'Category',
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
      name: 'parentCategory',
      title: 'Parent Category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'baseCategory'}
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
