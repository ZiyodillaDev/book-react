import { Outlet, Route, Routes } from "react-router-dom"
import { CategoryBooks } from "../../components/CategoriesBooks/CategoriesBooks"
import { CategoryBooks1, CategoryBooks2, CategoryBooks3, CategoryBooks4 } from "../../components/CategoryBooks/CategoryBooks"
import { Header } from "../../components/Header/Header"
import HeroCarousel from "../../components/Hero/Hero"
import { Navigate } from "react-router-dom"

export const Books = () => {
  return (
    <>
      <Header />
      <HeroCarousel />
      <Outlet />

      <Routes>
        <Route path="/" element={<CategoryBooks />} >
 <Route   index element={ <Navigate to='temuriy' /> } />
          <Route path="temuriy" element={<CategoryBooks1 />} />
          <Route path="jadid" element={ <CategoryBooks2 /> } />
          <Route path="sovet" element={<CategoryBooks3 /> } />
          <Route path="mustaqillik" element={<CategoryBooks4 />} />
        </Route>

      </Routes>
    </>
  )
}


