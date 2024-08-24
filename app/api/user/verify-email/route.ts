import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { resend } from '@/lib/resend';
import WelcomeEmailTemplate from '@/emails/WelcomeEmailTemplate';

export const POST = async (req: NextRequest) => {
    try {
        const { verifycode } = await req.json();

        if (!verifycode) {
            return NextResponse.json(
                { message: 'Verification code is missing' },
                { status: 400 }
            );
        }

        const user = await prisma.user.findFirst({
            where: {
                verificationToken: verifycode,
                verificationExpiry: { gt: new Date() }
            }
        });

        if (!user) {
            return NextResponse.json(
                { message: 'Invalid or expired Verification code' },
                { status: 400 }
            );
        }

        await prisma.user.update({
            where: { id: user.id },
            data: {
                isVerified: true,
                verificationToken: null,
                verificationExpiry: null
            }
        });

        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: user.email,
            subject: 'Welcome to Acme',
            react: WelcomeEmailTemplate({ name: user.name })
        });

        return NextResponse.json(
            { success: true, message: 'Email verified successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error verifying email:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
};
