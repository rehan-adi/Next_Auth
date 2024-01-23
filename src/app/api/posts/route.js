import { NextResponse } from "next/server"
import connect from "@/app/DataBase/db"
import Post from "@/app/model/Post";

export const GET  = async (request) => {

    try {
        
        await connect();

        const posts = await Post.find();
        return new NextResponse(posts, {status: 500})

    } catch (error) {
        
        return new NextResponse("DataBase Error", {status: 500})
    }

}