import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/assets/styles/globals.css';

import AppToolbar from '@/components/layout/app/toolbar';
import AppBody from '@/components/layout/app/body';
// import AppFooter from '@/components/layout/app/footer';

const ppNeueMontreal = localFont({
  src: [
    { path: '../assets/fonts/PP_Neue_Montreal/PPNeueMontreal-Bold.otf', weight: '700' },
    { path: '../assets/fonts/PP_Neue_Montreal/PPNeueMontreal-Book.otf', weight: '300' },
    { path: '../assets/fonts/PP_Neue_Montreal/PPNeueMontreal-Italic.otf', weight: '400', style: 'italic' },
    { path: '../assets/fonts/PP_Neue_Montreal/PPNeueMontreal-Medium.otf', weight: '500' },
    { path: '../assets/fonts/PP_Neue_Montreal/PPNeueMontreal-SemiBolditalic.otf', weight: '600', style: 'italic' },
    { path: '../assets/fonts/PP_Neue_Montreal/PPNeueMontreal-Thin.otf', weight: '100' },
  ],
  variable: '--font-pp-neue-montreal'
});

const zagmaMono = localFont({
  src: [
    { path: '../assets/fonts/Zagma_Mono/F37ZagmaMonoTrial-Bold.otf', weight: '700' },
    { path: '../assets/fonts/Zagma_Mono/F37ZagmaMonoTrial-BoldItalic.otf', weight: '700', style: 'italic' },
    { path: '../assets/fonts/Zagma_Mono/F37ZagmaMonoTrial-Book.otf', weight: '300' },
    { path: '../assets/fonts/Zagma_Mono/F37ZagmaMonoTrial-BookItalic.otf', weight: '300', style: 'italic' },
    { path: '../assets/fonts/Zagma_Mono/F37ZagmaMonoTrial-Light.otf', weight: '200' },
    { path: '../assets/fonts/Zagma_Mono/F37ZagmaMonoTrial-LightItalic.otf', weight: '200', style: 'italic' },
    { path: '../assets/fonts/Zagma_Mono/F37ZagmaMonoTrial-Regular.otf', weight: '400' },
    { path: '../assets/fonts/Zagma_Mono/F37ZagmaMonoTrial-RegularItalic.otf', weight: '400', style: 'italic' },
  ],
  variable: '--font-zagma-mono'
});

export const metadata: Metadata = {
  title: 'QOVES - Start Your Glow Up Without Surgery',
  description: 'QOVES - Start Your Glow Up Without Surgery',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${ppNeueMontreal.variable} ${zagmaMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AppToolbar />
        <AppBody>{children}</AppBody>
        {/* <AppFooter /> */}
      </body>
    </html>
  );
}
