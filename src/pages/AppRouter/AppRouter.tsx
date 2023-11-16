import {Route, Routes} from "react-router-dom";
import {AllDangers, DangerPage, MainPage} from "@/pages";

export const AppRouter = () => {
    const obj = [
        {
            path: "/",
            element: <MainPage/>
        },
        {
            path: "/dangers",
            element: <AllDangers/>
        },
        {
            path: "/danger/:id",
            element: <DangerPage/>
        },
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

