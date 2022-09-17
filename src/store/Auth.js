import { makeAutoObservable } from "mobx";

class AuthStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.passwordConfirm = '';
        // TODO поправить в будущем
        this.userId = 1;
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

    signUp = async () => {
        if (this.password && this.email && this.firstName && this.lastName) {
            this.rootStore.appStore.setAccessToken('access_token');
            this.rootStore.appStore.updateIsLoggedIn(true);
        } else {
            throw new Error('not valid params');
        }
    }   
}

export default AuthStore;
