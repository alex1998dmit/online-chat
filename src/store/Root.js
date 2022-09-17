import AppStore from "./App";
import AuthStore from "./Auth";
import MessageRoomStore from "./MessageRoom";

class RootStore {
    constructor() {
        this.appStore = new AppStore(this);
        this.authStore = new AuthStore(this);
        this.messageRoom = new MessageRoomStore(this);
    }
}

export default RootStore;
