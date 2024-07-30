import * as stylex from "@stylexjs/stylex";

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  // Link,
  Outlet,
} from "react-router-dom";

import Navbar from "./commons/navbar";
import Home from "./pages/home";

// import Sidebar from "./commons/sidebar";

const styles = stylex.create({
  content: {
    // marginTop: "var(--navbar-size)",
    paddingTop: "var(--navbar-size)",
    boxSizing: "border-box",
    display: "flex",
    flex: 1,
    // marginLeft: "var(--sidebar-size)",
    height: "100%",
  },

  sidebar_spacing: {
    paddingLeft: "var(--sidebar-size)",
    width: "calc(100% - var(--sidebar-size))",
  },
});

function Layout() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <div {...stylex.props(styles.content)}>
        <Outlet />
      </div>
    </>
  );
}

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home />
          }
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
