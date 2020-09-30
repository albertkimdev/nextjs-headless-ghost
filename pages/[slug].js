import React from "react";
import { getPosts, getSinglePost } from "../data/ghost";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div>
      <p>{post.title}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const post = await getSinglePost(slug);

  return {
    props: {
      post,
    },
  };
};

export default Post;
