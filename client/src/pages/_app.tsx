import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import { theme } from "../../utils/theme"
import createEmotionCache from 'utils/createEmotionCache'
import { CacheProvider } from "@emotion/react"
import Layout from "../components/layout"

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: any) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}
