import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import GlobalError from "./components/GlobalError";
import PageNotFound from "./components/PageNotFound";
import BrokenPage from "./pages/BrokenPage";
import { Suspense, lazy } from "react";
import Loading from "./components/common/Loading";

// lazy loading the componet using render-then-fetch approach
const Contacts = lazy(() => import("./pages/Contacts"));
const ChartsAndMaps = lazy(() => import("./pages/ChartsAndMaps"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <GlobalError />, // it will handle all the global errors
    children: [
      {
        path: "/",
        id: "contacts",
        element: (
          <Suspense fallback={<Loading />}>
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: "charts",
        id: "chartsAndMaps",
        element: (
          <Suspense fallback={<Loading />}>
            <ChartsAndMaps />
          </Suspense>
        ),
      },
      {
        path: "error-page",
        id: "errorPage",
        element: <BrokenPage />,
      },
      {
        path: "*",
        element: <PageNotFound />, // this will hanlde 404 errors
      },
    ],
  },
]);

// directly returning the Provider to get advantage of runtime HMR (module replacement)
export const Routes: React.FC = () => {
  return <RouterProvider router={routes} />;
};
