
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage'
import Layout from '../pages/layout/Layout.tsx'

import HomePage from '../pages/HomePage';
// import DashboardPage from '../pages/DashboardPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: (<HomePage />)
            },
            {
                path: "/home",
                element: (<HomePage />)
            },
        ],
    },
]);

const RouterConfig = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default RouterConfig;