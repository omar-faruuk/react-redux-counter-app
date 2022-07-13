import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './PostsSlice';

const PostsViewer = () => {
    const postsData = useSelector(state => state.posts)
    const {isLoading, posts, error} = postsData;
    const dispacth = useDispatch()
    useEffect(()=>{
       dispacth(fetchPosts())     
    },[])
    return (
        <section>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {
                posts.map(post => <article key={post.id}>
                   <h2>{post.title}</h2>
                   <p>{post.body}</p>
                </article>)
            }
        </section>
    );
};

export default PostsViewer;