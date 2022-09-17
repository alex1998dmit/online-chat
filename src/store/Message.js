const { makeAutoObservable } = require("mobx");

class MessageStore {
    constructor({ id, message, userId }, rootStore) {
        this.id = id;
        this.message = message;
        this.editMessage = this.message;
        this.userId = userId;
        this.rootStore = rootStore;
        this.isEditing = false;
        makeAutoObservable(this, { rootStore: false })
    }

    get side() {
        return this.rootStore.authStore.userId === this.userId ? 'me' : 'friend';
    }

    startEditing = () => {
        this.isEditing = true;
    }

    saveEditing = () => {
        this.message = this.editMessage;
        this.isEditing = false;
    }

    changeEditMessage = (e) => {
        this.editMessage = e.target.value;
    }
}

export default MessageStore;
