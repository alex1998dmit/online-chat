import { makeAutoObservable } from "mobx";

class AuthStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.passwordConfirm = '';
        makeAutoObservable(this, { rootStore: false })
    }

    updateFormValue = (key, value) => {
        console.log(key, this[key], value)
        if (typeof this[key] !== 'undefined') {
            this[key] = value;
        } else {
            throw new Error('Not valid form input');
        }
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

    get isPasswordEquals() {
        return (this.password === this.passwordConfirm);
    }

    get isPasswordNotCorrect() {
        if (!this.password) {
            return  'Must be filled';
        } else if (this.password.length < 6) {
            return  'Too short password';
        }
        return false;
    }

    get isConfirmPasswordNotCorrect() {
        if (!this.passwordConfirm) {
            return  'Must be filled';
        } else if (this.password.length < 6) {
            return  'Too short password';
        } else if (!this.isPasswordEquals) {
            return 'Password must be equals'
        }
        return false;
    }

    get isFirstNameNotValid() {
        if (!this.firstName) {
            return  'Must be filled';
        } else if (this.firstName.length < 3) {
            return 'Lenght must be more that 3 symbols'
        }
        return false;
    }

    get isLastNameNotValid() {
        if (!this.lastName) {
            return  'Must be filled';
        } else if (this.lastName.length < 3) {
            return 'Lenght must be more that 3 symbols'
        }
        return false;
    }

    get isEmailNotValid() {
        if (!this.email) {
            return  'Must be filled';
        } else if (!String(this.email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ))
        {
            return 'Not valid email'
        }
        return false;
    }
}

export default AuthStore;
