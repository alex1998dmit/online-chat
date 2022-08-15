import { makeAutoObservable } from "mobx";

class AppStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        // '' -> false undefined => false 'dsdsadasdasdas' -> true
        this.isLoggedIn = !!this.getAccessToken();
        makeAutoObservable(this, { rootStore: false })
    }

    updateIsLoggedIn = (isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
    }

    setAccessToken = (accessToken) => {
        localStorage.setItem('access_token', accessToken);
    }

    getAccessToken = () => {
        const token = localStorage.getItem('access_token');
        return token || null;
    }
}

export default AppStore;
