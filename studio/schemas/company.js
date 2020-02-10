export default {
    name: 'company',
    title: 'Company Information',
    type: 'document',
    fields: [
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'companyName',
              maxLength: 96
            }
        },
        {
            name: 'facebook',
            title: 'Facebook',
            type: 'string',
            description: 'Facebook page link',
          },
          {
            name: 'instagram',
            title: 'Instagram',
            type: 'string',
            description: 'Instagram link',
          },
          {
            name: 'pinterest',
            title: 'Pinterest',
            type: 'string',
            description: 'Pinterest page link',
          },

    ]
}