import { Fragment } from "react";
import Head from "next/head";
import FeaturedPosts from "../components/Home-Page/Featured-Posts";
import Hero from "../components/Home-Page/Hero";
import { getFeaturedPosts } from "../lib/posts-util";

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Max' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}
