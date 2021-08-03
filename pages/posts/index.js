import AllPosts from "../../components/Posts/All-Posts";
import { getAllPosts } from "../../lib/posts-util";
import { Fragment } from "react";
import Head from "next/head";

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default function AllPostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}
