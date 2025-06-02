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
