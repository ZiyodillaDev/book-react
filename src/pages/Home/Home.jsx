import React from 'react'
import { Header } from '../../components/Header/Header'
import HeroCarousel from '../../components/Hero/Hero'
import { CategoriesPoet } from '../../components/CategoriesPoet/CategoriesPoet'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Temuriy } from '../../components/Temuriy/Temuriy'
import { Jadid } from '../../components/Jadid/Jadid'
import { Sovet } from '../../components/Sovet/Sovet'
import { Mustaqillik } from '../../components/Mustaqillik/Mustaqillik'
import { Search } from '../../components/Search/Search'
export const Home = () => {
  return (
    <>
      <Header />
      <HeroCarousel />
      <Routes>
      <Route path='/*' element={<CategoriesPoet />} >

      
      <Route index element={<Temuriy />} />
        <Route path="jadid" element={ <Jadid />} />
        <Route path="sovet" element={<Sovet />} />
        <Route path="mustaqillik" element={<Mustaqillik />} />
        
      </Route>
      </Routes>
    </>
  )
}
