const { createFilePath } = require("gatsby-source-filesystem");
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const productTemplate = require.resolve(
    './src/templates/product.js'
  )

  return graphql(`
  {
    allSanityProduct(filter: { slug: { current: { ne: null } } }) {
        nodes {
          _rawBody(resolveReferences: { maxDepth: 10 })
          id
          title
            slug {
                current
            }
          categories {
            title
          }
          defaultProductVariant {
            sku
            price
            onSalePrice
            taxable
            title
            mainImage {
              asset {
                fluid {
                  src
                }
              }
            }
            thumbnails {
              asset {
                fluid {
                  src
                }
              }
            }
            fits {
              title
            }
            size {
              title
            }
          }
          blurb {
            en
          }
        }
      }
  }
    
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const products = result.data.allSanityProduct.nodes || [];

    products.forEach((product, index) => {
    //     console.log({product})
    //   const previous =
    //     index === product.length - 1 ? null : products[index + 1]
    //   const next = index === 0 ? null : products[index - 1]
        console.log({product})
    const path = `/${product.slug.current}`

      createPage({
        path,
        component: productTemplate,
        context: {
        slug: product.slug.current,
        id: product.id
        //   previous,
        //   next,
        },
      })
    })
  })
}

 // Here we're adding extra stuff to the "node" (like the slug)
//  exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions
//     if (node.internal.type === 'SitePage') {
//       const value = createFilePath({ node, getNode })
//       createNodeField({
//         node,
//         name: 'slug',
//         value: value
//       })
//     }
//   }