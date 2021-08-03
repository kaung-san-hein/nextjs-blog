import ReactMarkdown from "react-markdown";
import classes from "./Post-Content.module.css";
import PostHeader from "./Post-Header";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        components={{
          p: ({ node, children }) => {
            if (node.children[0].tagName === "img") {
              const image = node.children[0];
              return (
                <div className={classes.image}>
                  <Image
                    src={`/images/posts/${post.slug}/${image.properties.src}`}
                    alt={image.properties.alt}
                    width={600}
                    height={300}
                  />
                </div>
              );
            }
            // Return default child if it's not an image
            return <p>{children}</p>;
          },
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={atomDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
