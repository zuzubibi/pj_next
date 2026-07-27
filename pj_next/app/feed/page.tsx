import Link from 'next/link';

function FeedPage() {
    return (
        <div className='box page'>
            <h4>Page</h4>
            <ul style={{ listStylePosition: 'inside' }}>
                {[...new Array(10)].map((item, idx) => {
                    const postId = idx + 1;
                    return (
                        <li key={idx}>
                            <Link href={`/posts/${postId}`}>
                                {`Post item ${postId}`}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FeedPage;