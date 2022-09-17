import { makeAutoObservable } from "mobx";
import MessageStore from "./Message";
import _ from 'lodash';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

class MessageRoomStore {

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.messages = [];
        makeAutoObservable(this, {
            rootStore: false,
        })
    }

    sendMessage = async (data) => {
        console.log(data)
        try {
            // success input
            const newMessage = {
                id: _.uniqueId(),
                message: data.message,
                userId: 1
            }
            this.messages = [
                ...this.messages,
                new MessageStore({ id: newMessage.id, message: newMessage.message, userId: newMessage.userId }, this.rootStore)
            ]
        } catch (error) {
            
        }
    }

    fetchMessages = async (chatId) => {
        const messages = Array(40).fill(1).map((msg, index) => (
            {
                id: _.uniqueId(),
                message: lorem.generateSentences(_.random(1, 5)),
                userId: index % 2 === 0 ? 1 : 2
            }
        ))
        this.messages = messages.map(({ id, message, userId }) => new MessageStore({ id, message, userId }, this.rootStore))
    }
}

export default MessageRoomStore;
