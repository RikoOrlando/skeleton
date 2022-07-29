import { Suspense, lazy, Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import GlobalProvider from "@/context/global";
import renameRoute from "@/constants/renameRoute";

const ROUTES: any = import.meta.glob("/src/pages/**/index.tsx");
const routes = Object.keys(ROUTES).map((route) => {
  const path: any = route
    .replace(/\/src\/pages|index|\.tsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1");
  const formatedPath = renameRoute[path] || path;
  return { path: formatedPath, component: lazy(ROUTES[route]) };
});

function App() {
  return (
    <div>
      <GlobalProvider>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Suspense fallback={"Loading..."}>
          <Routes>
            {routes.map(({ path, component: Component = Fragment }: any) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
      </GlobalProvider>
    </div>
  );
}

export default App;
