import type { Metadata } from 'next';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import LogoSliceIntro from '@/components/LogoSliceIntro';

// Authentic Typography
const brandonGrotesque = localFont({
  src: [
    {
      path: '../public/fonts/BrandonGrotesque-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/BrandonGrotesque-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/BrandonGrotesque-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-brandon',
  display: 'swap',
});

const granjonLT = localFont({
  src: [
    {
      path: '../public/fonts/GranjonLT.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-granjon',
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sensationinfracon.com'),
  title: {
    default: 'Properties for investment in India | Sensation Infracon',
    template: '%s | Sensation Infracon',
  },
  description:
    'Premium and high-yield properties for investment in India, with top-class amenities.',
  keywords: [
    'Sensation Infracon',
    'Real estate investment India',
    'Hyderabad villa plots',
    'Joint development real estate',
    'Serviced living India',
    'Digital detox resorts',
    'Plotted developments',
  ],
  authors: [{ name: 'Sensation Infracon Pvt. Ltd.' }],
  creator: 'Sensation Infracon Pvt. Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sensationinfracon.com',
    siteName: 'Sensation Infracon',
    title: 'Properties for investment in India | Sensation Infracon',
    description:
      'Premium and high-yield properties for investment in India, with top-class amenities.',
    images: [
      {
        url: '/images/logo.webp',
        width: 1024,
        height: 512,
        alt: 'Sensation Infracon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Properties for investment in India | Sensation Infracon',
    description:
      'Premium and high-yield properties for investment in India, with top-class amenities.',
    images: ['/images/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sensation Infracon Pvt. Ltd.',
    alternateName: ['Sensation Group', 'Sensation Capital'],
    url: 'https://sensationinfracon.com',
    logo: 'https://sensationinfracon.com/images/logo.webp',
    telephone: '+91 98853 33333',
    email: 'kk@sensationgroup.in',
    sameAs: ['https://sensationecrp.com/'],
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Door No. 8-2-616/1, 2nd and 4th Floor, Saha Building, Road No. 11, Near Hotel Minerva Grand, Banjara Hills',
      addressLocality: 'Hyderabad',
      postalCode: '500034',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
  };

  return (
    <html
      lang="en"
      className={`${brandonGrotesque.variable} ${granjonLT.variable} ${bricolage.variable} ${instrument.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-paper text-text antialiased selection:bg-brass selection:text-paper">
        <LogoSliceIntro />
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-grow focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
