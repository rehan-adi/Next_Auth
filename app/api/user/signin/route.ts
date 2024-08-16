import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { signinValidation } from '@/validations/auth.validation';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const parsedData = signinValidation.parse(body);

        const { email, password } = parsedData;

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return NextResponse.json(
                {
                    message: 'User not found , please signup and try again'
                },
                { status: 400 }
            );
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            return NextResponse.json(
                {
                    message: 'Invalid credentials, please try again'
                },
                { status: 401 }
            );
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
            expiresIn: '1d'
        });

        return NextResponse.json(
            {
                success: true,
                data: { token },
                user: { id: user.id, email: user.email },
                message: 'Logged in successfully'
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error(error);
        if (error.name === 'ZodError') {
            return NextResponse.json(
                { error: 'Validation failed', details: error.errors },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
};
