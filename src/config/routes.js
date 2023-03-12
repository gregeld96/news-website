import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../components/Loading/loadable';

// Layout
const BlankLayout = Loadable(lazy(() => import('../components/Layouts/BlankLayout')));
const HeaderLayout = Loadable(lazy(() => import('../components/Layouts/HeaderLayout')));
const SidebarLayout = Loadable(lazy(() => import('../components/Layouts/SidebarLayout')));

// AUTHS
const Login = Loadable(lazy(() => import('../modules/auth/Login')));
const Register = Loadable(lazy(() => import('../modules/auth/Register')));

// MAIN
const Home = Loadable(lazy(() => import('../modules/main/Home')));

// Dashboard
const ArticleForm = Loadable(lazy(() => import('../modules/dashboard/Article/form')));
const ArticleUserPage = Loadable(lazy(() => import('../modules/dashboard/Article')));
const CategoriesPage = Loadable(lazy(() => import('../modules/main/Category')));




const appRoute = [
    {
        path: 'auths',
        element: <BlankLayout / > ,
        children: [
            {
                path: 'login',
                element: < Login / >
            },
            {
                path: 'register',
                element: < Register / >
            }
        ],
    },
    {
        path: '/',
        element: <HeaderLayout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        element: <CategoriesPage />
                        
                    },
                ]
            }
        ]
    },
    {
        path: 'dashboard',
        element: <SidebarLayout />,
        children: [
            {
                path: 'articles',
                children: [
                    {
                        path: '',
                        element: <ArticleUserPage />
                        
                    },
                    {
                        path: 'create',
                        element: <ArticleForm />
                        
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to = "/auths/login" / >
    },
]

export default appRoute;