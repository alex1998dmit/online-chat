import SignInPage from "../components/pages/SignIn";
import SignUpPage from "../components/pages/SignUp/SignUp";
import WelconePage from "../components/pages/Welcome";

const routes = [
    {
        path: '/groups',
        type: 'loggedIn',
        component: () => <div>hello</div>
    },
    {
        path: '/signin',
        type: 'free',
        component: <SignInPage />
    },
    {
        path: '/signup',
        type: 'free',
        component: <SignUpPage />
    },
    {
        path: '/',
        type: 'all',
        component: <WelconePage />
    },
];

export default routes;
