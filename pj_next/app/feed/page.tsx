import { Suspense } from "react";
import PostList from '@/components/PostList';
import { readPostsAction } from "@/lib/actions/posts";

function FeedPage() {
    // const [posts, set`Posts] = useState<MyNextApp.Post[]>([]);
    const postsPromise = readPostsAction();

    return (
        <div className='box page'>
            <h4>Page</h4>
            <Suspense fallback={<div>Loading...</div>}>
                <PostList postsPromise={postsPromise}></PostList>
            </Suspense>
        </div>
    );
}

export default FeedPage;