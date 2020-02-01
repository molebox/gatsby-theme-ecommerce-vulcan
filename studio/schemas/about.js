export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'About Us Title',
            type: 'string',
            description: 'The title of the page',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'The slug for the page',
            options: {
              source: 'title',
              maxLength: 96
            }
          },
          {
            title: 'About Us',
            name: 'aboutUs',
            type: 'array',
            of: [
                    {
                        type: 'block'
                    },
                    {
                        type: 'image'
                    }
                ]
        },
          {
            name: 'images',
            title: 'Image',
            type: 'image',
            description: 'The image for the page',
          },
    ]
}