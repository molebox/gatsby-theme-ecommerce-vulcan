
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
      name: 'isRoot',
      title: 'Is Root category',
      type: 'boolean',
      description: 'Is this category the at the root level? For example Mens and Womens categories would be at the root level as they dont have any parent categories.'
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
      name: 'childrenCategories',
      title: 'Children categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}]
        }
      ]
    }
  ]
}
