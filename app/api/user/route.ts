import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const POST = async (req: NextResponse,res: NextResponse) => {
    try {
        const body = await req.json();

        const { name, email, password } = body;

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            }
        })

        return NextResponse.json({ message: "User created successfully" }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal server error" },{status: 500} );
    }
}