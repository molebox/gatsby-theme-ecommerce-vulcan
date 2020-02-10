export default {
    name: 'privacy',
    title: 'Privacy',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
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
            title: 'Privacy Policy',
            name: 'privacyPolicy',
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
    ]
}