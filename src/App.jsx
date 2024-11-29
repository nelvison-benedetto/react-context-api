import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './pages/DefaultLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BooksPage from './pages/BooksPage'
import ContactsPage from './pages/ContactsPage'
import SingleMangaPage from './pages/SingleMangaPage'
import NotFoundPage from './pages/NotFoundPage'
import GlobalContext from './contexts/GlobalContext'

function App() {
  const api_url_baseGlobal = 'http://localhost:3001';

  return (
    <>
      <GlobalContext.Provider value={{api_url_baseGlobal}}>   {/* {{ke:value}} are the same */}
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout/>}>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/books' element={<BooksPage/>}/>
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/contacts' element={<ContactsPage/>}/>
              <Route path='/manga/:id' element={<SingleMangaPage/>}/> 
              <Route path='*' element={<NotFoundPage/>}/>    
              {/* //CreateMangaPage  */}
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
