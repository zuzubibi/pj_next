// Next.js의 app Router에서 레이아웃을 담당하는 컴포넌트.
import React from 'react';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    )
}