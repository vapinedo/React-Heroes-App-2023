import DCHeroesPage from "./pages/DCHeroes/DCHeroesPage";
import MarvelHeroesPage from "./pages/MarvelHeroes/MarvelHeroesPage";

export const heroesRoutes = [
  {
    name: 'DC Heroes',
    path: '/dc-heroes',
    element: <DCHeroesPage />,
  },
  {
    name: 'Marvel Heroes',
    path: '/marvel-heroes',
    element: <MarvelHeroesPage />,
  }
];
