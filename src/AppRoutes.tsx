import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <LoginGuard>
                        <LoginPage />
                    </LoginGuard>
                } />

                <Route path="/*" element={
                    <HeroesGuard>
                        <HeoresRouting />
                    </HeroesGuard>
                } />
            </Routes>
        </BrowserRouter>
    )
}
