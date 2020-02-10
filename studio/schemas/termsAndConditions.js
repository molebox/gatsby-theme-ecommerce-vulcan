export default {
    name: 'termsAndConditions',
    title: 'Terms',
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
            title: 'Terms And Conditions',
            name: 'termsConditions',
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