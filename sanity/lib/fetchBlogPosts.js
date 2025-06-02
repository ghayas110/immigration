import { client } from "./client";


export async function fetchBlogPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        asset->{
          url
        },
        alt
      }
    }
  `;
  return await client.fetch(query);
}
export async function fetchBlogPost(title) {
  const query = `
    *[_type == "blogPost" && title match $title]{
      _id,
      title,
      slug,
      mainImage{asset->{url}, alt},
      publishedAt,
      excerpt,
      "author": author->name
    }
  `;
  // The match operator is case-insensitive and supports wildcards
  const params = { title: `*${title}*` };
  return await client.fetch(query, params);
}