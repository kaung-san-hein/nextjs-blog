import PostsGrid from '../Posts/Posts-Grid'
import classes from './Featured-Posts.module.css'

function FeaturedPosts({posts}){
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    );
}

export default FeaturedPosts;