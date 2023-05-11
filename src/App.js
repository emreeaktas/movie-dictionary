import { Route, Routes, Outlet } from "react-router-dom";
import "./scss/app.scss";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category">
          <Route path=":category" element={<Category />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}
function Layout() {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default App;
