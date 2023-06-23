import Layouts from '@/components/UI/layouts/Layouts'
import '@/styles/swiper.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
<Layouts>
  <Component {...pageProps} />
</Layouts>
  )
}
