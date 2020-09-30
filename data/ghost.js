const GhostContentAPI = require("@tryghost/content-api");

const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "adeca81f053a28f7ce703c15d3",
  version: "v3",
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
