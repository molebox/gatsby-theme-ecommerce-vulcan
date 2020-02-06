export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Weight in grams',
      name: 'grams',
      type: 'number'
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number'
    },
    {
      title: 'On Sale Price',
      name: 'onSalePrice',
      type: 'number'
    },
    {
      title: 'Sizes',
      name: 'size',
      type: 'array',
      description: 'The size of the product',
      of: [
        {
          type: 'reference',
          to: {type: 'size'}
        }
      ]
    },
    {
      title: 'Fits',
      name: 'fits',
      type: 'array',
      description: 'The fit of the product',
      of: [
        {
          type: 'reference',
          to: {type: 'fit'}
        }
      ]
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string'
    },
    {
      title: 'Taxable',
      name: 'taxable',
      type: 'boolean'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'thumbnails',
      title: 'Thumbnails',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      title: 'Bar code',
      name: 'barcode',
      type: 'barcode'
    }
  ]
}
