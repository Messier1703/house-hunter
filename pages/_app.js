import Layouts from '@/components/Layouts/Layouts'
import '@/styles/secondSwiper.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
<Layouts>
  <Component {...pageProps} />
</Layouts>
  )
}
