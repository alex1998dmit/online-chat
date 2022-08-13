import SignInPage from "../components/pages/SignIn";
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
        path: '/',
        type: 'all',
        component: <WelconePage />
    },
];

export default routes;
