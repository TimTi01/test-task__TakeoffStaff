import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { Contacts } from '../Pages/Contacts'
import { Login } from '../Pages/Login'

export const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Login/>}/>
                <Route path='contacts' element={<Contacts/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
