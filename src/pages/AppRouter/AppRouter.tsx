import {Route, Routes} from "react-router-dom";
import {MainPage} from "@/pages";

export const AppRouter = () => {
    const obj = [
        {
            path: "/",
            element: <MainPage/>
        }
    ]
    return (
        <main className="wrapper">
            <Routes>
                {obj.map((item) => (
                    <Route key={item.path} path={item.path} element={item.element}/>
                ))}
            </Routes>
        </main>
    );
};

