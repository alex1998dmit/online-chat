import AppStore from "./App";
import AuthStore from "./Auth";
import { observer } from "mobx-react-lite"

class RootStore {
    constructor() {
        this.appStore = new AppStore(this);
        this.authStore = new AuthStore(this);
    }
}

export default RootStore;
