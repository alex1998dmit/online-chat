import { makeAutoObservable } from "mobx";

class AuthStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.email = '';
        this.password = '';
        makeAutoObservable(this, { rootStore: false })
    }

    signIn = async () => {
        // mock
        if (this.email === 'admin@gmail.com' && 
            this.password.length > 6 
        ) {
            this.rootStore.appStore.setAccessToken('test_token_web');
            this.rootStore.appStore.updateIsLoggedIn(true);
        } else {
            throw new Error('wrong password');
        }
    }
}

export default AuthStore;
