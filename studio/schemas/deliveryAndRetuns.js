export default {
    name: 'deliveryAndReturns',
    title: 'Devivery Returns',
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
            title: 'Devivery And Returns',
            name: 'deliveryReturns',
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