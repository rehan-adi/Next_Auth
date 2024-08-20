import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

export const GET = async (req: NextRequest) => {
    try {
        const token = req.cookies.get('token')?.value || '';

        if (!token) {
            return NextResponse.json(
                { success: false, message: 'Token is missing' },
                { status: 401 }
            );
        }

        let userId: string;
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
            userId = decoded.userId;
        } catch (error) {
            return NextResponse.json(
                { success: false, message: 'Invalid token' },
                { status: 401 }
            );
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return NextResponse.json(
                { success: false, message: 'User not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, user },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error getting the profile:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to get profile details' },
            { status: 500 }
        );
    }
};
