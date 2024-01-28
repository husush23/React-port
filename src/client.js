import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "pb7tjxto",
  useCdn: true,
  dataset: "production",
  apiVersion: "2023-01-28",
});

export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]');
  return posts;
}

// export async function createPost(post: Post) {
//     const result = client.create(post)
//     return result
//   }

//   export async function updateDocumentTitle(_id, title) {
//     const result = client.patch(_id).set({title})
//     return result
//   }

export default client;
