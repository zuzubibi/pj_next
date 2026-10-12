'use client';

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signUp } from "@/lib/apiManager";
import { cn } from '@/lib/utils';

const SignUpPage = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');

    const handleClickSignUp = useCallback(async () => {
        if (!email || !password || !passwordConfirm || !name) {
            alert('Please enter all information.');
        }

        try {
            const response = await signUp(email, password, name);

            if (response.ok) {
                router.replace('/sign-up');
            }
        } catch (error) {
            console.log(error);
        }
    }, [email, password, passwordConfirm, name, router]);

    return (
        <div>
            <p className="text-2xl font-bold text-center">
                Sign Up
            </p>

            <div className="mt-8 space-y-4">
                <Input
                    type='email'
                    placeholder="Email"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <Input
                    type="password"
                    placeholder="Password Confirm"
                    value={passwordConfirm}
                    onChange={(event) => {
                        setPasswordConfirm(event.target.value);
                    }}
                />
                <Input
                    type='text'
                    placeholder="Name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <Button
                    className='w-full'
                    onClick={handleClickSignUp}>
                    Sign Up
                </Button>
                <Link
                    href='/sign-in'
                    className={ cn(buttonVariants({ variant: 'outline'}), 'w-full')}
                >
                    Sign In
                </Link>
                <Link
                    href='/'
                    className={ cn(buttonVariants({ variant: 'link'}), 'w-full')}
                >
                    Back to home
                </Link>
            </div>
        </div>
    );
}

export default SignUpPage;