'use client';

import Link from 'next/link';
import usePosts from '@/hooks/usePosts';

function PostList() {
    const { isLoading, posts, error } = usePosts();

    if (isLoading) {
        return 'Loading ...';
    }

    if (!posts) {
        return '게시글이 없습니다.';
    }

    if (error) {
        return '우헤헤 버그 터짐 ㅋ ㅅㄱ';
    }

    return (
        <ul className='divide-y'>
            {posts.map((post) => {
                return (
                    <Link
                        key={post.id}
                        href={`/posts/${post.id}`}>
                        <li className='p-2 flex items-center justify-between hober:bg-gray-50'>
                            <div className='space-y-1'>
                                <h1 className='text-md leading-none font-semibold'>
                                    {post.title}
                                </h1>
                                <span className='text-sm text-gray-500'>
                                    {post.createdAt}
                                </span>
                            </div>
                            <span className='text-sm text-gray-700'>
                                {post.user.name}
                            </span>
                        </li>
                    </Link>
                );
            })}
        </ul>
    )
}

export default PostList;