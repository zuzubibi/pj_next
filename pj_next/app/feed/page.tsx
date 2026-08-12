'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function FeedPage() {
    const [posts, setPosts] = useState<MyNextApp.Post[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const data = await fetch('/api/posts').then((res) => res.json());
            setPosts(data);
        }

        fetchPosts();
    }, []);
    console.log("무야호", posts);

    return (
        <div className='box page'>
            <h4>Page</h4>
            <ul style={{ listStylePosition: 'inside' }}>
                {posts.map((post, idx) => {
                    const postId = idx + 1;
                    return (
                        <li key={idx}>
                            <Link href={`/posts/${postId}`}>{ post.title }</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FeedPage;