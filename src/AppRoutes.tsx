import { Routes, Route } from "react-router-dom";
import HomePage from "./modules/features/home/pages/Home/HomePage";
import DCHeroesPage from "./modules/features/heroes/pages/DCHeroes/DCHeroesPage";
import MarvelHeroesPage from "./modules/features/heroes/pages/MarvelHeroes/MarvelHeroesPage";

export const AppRoutes = () => {
    return (
        <section className="container py-5">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dc-heroes" element={<DCHeroesPage />} />
                <Route path="/marvel-heroes" element={<MarvelHeroesPage />} />
            </Routes>
        </section>
    )
}
