import { Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/Navbar/Navbar";
import { loadRoutes } from "./shared/helpers/loadRoutes";
import HomePage from "./features/home/pages/Home/HomePage";
import { heroesRoutes } from "./features/heroes/HeroesRoutes";

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
