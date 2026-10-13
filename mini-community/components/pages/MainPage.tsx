import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import PostList from '@/components/lists/PostList';

async function MainPage() {
    return (
        <>
            <section className='mt-4'>
                <PostList/>
            </section>

            <Link
                href="/post-write"
                className={buttonVariants({ size: 'sm', className: 'w-full mt-4'})}
            >
                Write Post
            </Link>
        </>
    )
}

export default MainPage;