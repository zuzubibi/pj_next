import { NextRequest } from "next/server";
import { preparedPostsQuery } from "@/database/preparedQueries/post";

interface RequestPayload {
    params: Promise<{ postId: string }>;
}

export async function GET(req: NextRequest, payload: RequestPayload) {
    const { postId } = await payload.params;

    try {
        const [post] = await preparedPostsQuery.execute({
            postId,
        });

        if (!post) {
            throw new Error('No post');
        }

        return Response.json(post, {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return Response.json('An error occurred', {
            status: 400,
        });
    }
}