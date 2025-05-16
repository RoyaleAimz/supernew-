// pages/_app.js

import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PaymentBar from '../components/PaymentBar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Component {...pageProps} />
      </main>
      <Footer />
      <PaymentBar />
    </div>
  )
}

export default MyApp
