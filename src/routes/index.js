import ChatPage from "../components/pages/Chat";
import SignInPage from "../components/pages/SignIn";
import SignUpPage from "../components/pages/SignUp/SignUp";
import WelconePage from "../components/pages/Welcome";

const routes = [
    {
        path: '/groups',
        type: 'loggedIn',
        component: () => <div>groups</div>
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
        path: '/chat/:id',
        type: 'free',
        component: <ChatPage />
    },
    {
        path: '/',
        type: 'all',
        component: <WelconePage />
    },
];

export default routes;
