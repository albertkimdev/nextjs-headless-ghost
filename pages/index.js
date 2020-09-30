import React from "react";
import { getPosts } from "../data/ghost";

const Index = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <a href={post.slug}>{post.slug}</a>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  let posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Index;
