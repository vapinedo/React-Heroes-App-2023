import { Routes, Route } from "react-router-dom";
import Navbar from "./modules/shared/components/Navbar/Navbar";
import { loadRoutes } from "./modules/shared/helpers/loadRoutes";
import HomePage from "./modules/features/home/pages/Home/HomePage";
import { heroesRoutes } from "./modules/features/heroes/HeroesRoutes";

export const AppRoutes = () => {
    return (
        <section className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                {loadRoutes(heroesRoutes)}
            </Routes>
        </section>
    )
}
