import type { Metadata } from 'next'
import { REM } from 'next/font/google'
import { type ReactNode } from 'react'
import Image from 'next/image'
import NextTopLoader from 'nextjs-toploader'
import dynamic from 'next/dynamic'
import { Toaster } from 'sonner'

import '@/assets/css/style.css'

const AppProvidersWrapper = dynamic(
  () => import('@/components/AppsProviderWrapper')
)
const BackToTop = dynamic(() => import('@/components/BackToTop'))

const rem = REM({
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  adjustFontFallback: false,
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'University Business School - Educating Leaders Who Make a Difference',
    template: '%s | University Business School',
  },
  description:
    'University Business School combines bold ideas, powerful pedagogy, and collaborative cohort-based learning to deliver unparalleled management education and foster lifelong learning networks.',
}

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style>{splashScreenStyles}</style>
      </head>

      <body className={rem.className}>
        <div id="splash-screen">
          <Image
            alt="Logo"
            width={80}
            height={80}
            src={'/assets/images/logo_primary.png'}
            style={{ height: '10%', width: 'auto' }}
          />
        </div>
        <NextTopLoader color="#ea580c" showSpinner={false} />
        <div id="__next_splash">
          <AppProvidersWrapper>
            {children}
            <BackToTop />
            <Toaster richColors />
          </AppProvidersWrapper>
        </div>
      </body>
    </html>
  )
}
