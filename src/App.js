import React from 'react'
import { ToastContainer } from 'react-toastify';
import { ContextProvider } from './context';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <ToastContainer />
         <Header />
         <ContextProvider>
          <main className='contain'>
          <Shop />
          </main>
          </ContextProvider>
         <Footer />
    </>
  )
}

export default App;