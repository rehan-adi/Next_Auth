import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { signupValidation } from '@/validations/auth.validation';
import { resend } from '@/lib/resend';
import { randomBytes } from 'crypto';
import { verificationEmailTemplate } from '@/emails/verificationEmail';

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const parsedData = signupValidation.parse(body);

        const { name, email, password } = parsedData;

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json(
                { error: 'User already exists' },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const verificationToken = randomBytes(32).toString('hex');
        const verificationExpiry = new Date(Date.now() + 1000 * 60 * 60 * 24);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                verificationToken,
                verificationExpiry
            }
        });

        const verificationUrl = `http://localhost:3000/verify-email?token=${verificationToken}`;

        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Verify Your Email Address',
            html: verificationEmailTemplate(verificationUrl, name)
        });

        return NextResponse.json(
            {
                success: true,
                data: { id: user.id, name: user.name, email: user.email },
                message: 'User created successfully. Please check your email to verify your account.'
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Error during signup:', error);
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
