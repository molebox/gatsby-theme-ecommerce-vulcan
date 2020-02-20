const { createFilePath } = require("gatsby-source-filesystem");
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const productTemplate = require.resolve(
    './src/templates/product.js'
  );
  const categoryTemplate = require.resolve(
    './src/templates/category.js'
  );

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
            isRoot
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

      allSanityCategory(filter: {slug: {current: {ne: null}}}) {
        nodes {
          title
          slug {
            current
          }
          isRoot
          description
          id
          categoryImage {
            asset {
              fluid {
                src
              }
            }
          }
          products {
            title
            slug {
              current
            }
            blurb {
              en
            }
            defaultProductVariant {
              price
              onSalePrice
              taxable
              title
              thumbnails {
                asset {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
  }
    
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const products = result.data.allSanityProduct.nodes || [];
    const categories = result.data.allSanityCategory.nodes || [];

    products.forEach((product, index) => {
      const previous =
        index === product.length - 1 ? null : products[index + 1]
      const next = index === 0 ? null : products[index - 1]
    const path = `/products/${product.slug.current}`

      createPage({
        path,
        component: productTemplate,
        context: {
        slug: product.slug.current,
        id: product.id,
        previous,
        next,
        },
      })
    })

    categories.forEach((cat) => {
      console.log({cat})
    const categoriesPath = `/category/${cat.slug.current}`

      createPage({
        path: categoriesPath,
        component: categoryTemplate,
        context: {
        slug: cat.slug.current,
        id: cat.id,
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