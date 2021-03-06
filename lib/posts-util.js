import fs from "fs";
import path from "path";

import matter from "gray-matter";

const PostDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles(){
  return fs.readdirSync(PostDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");

  const filePath = path.join(PostDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPost = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPost;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPost = allPosts.filter((post) => post.isFeatured);

  return featuredPost;
}
