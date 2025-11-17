import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abhishek Rajput - Full Stack Developer | MERN & Next.js Specialist',
  description: 'Professional portfolio of Abhishek Rajput, a passionate Full Stack Developer specializing in MERN stack and Next.js. View my projects, skills, and get in touch for web development services.',
  keywords: 'Full Stack Developer, MERN Stack, Next.js, React, Node.js, MongoDB, Web Development, JavaScript, TypeScript, Portfolio',
  authors: [{ name: 'Abhishek Rajput' }],
  creator: 'Abhishek Rajput',
  publisher: 'Abhishek Rajput',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johnsmith-portfolio.com',
    title: 'Abhishek Rajput - Full Stack Developer | MERN & Next.js Specialist',
    description: 'Professional portfolio showcasing modern web development projects and expertise in MERN stack and Next.js.',
    siteName: 'Abhishek Rajput Portfolio',
    images: [
      {
        url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Abhishek Rajput - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Rajput - Full Stack Developer | MERN & Next.js Specialist',
    description: 'Professional portfolio showcasing modern web development projects and expertise in MERN stack and Next.js.',
    images: ['https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    creator: '@johnsmith',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}