import { chatManager } from "../db/DAOs/mongoDAOs/chatManagerMongo.js";

class ChatService {
  async finAllMessages() {
    try {
      const response = await chatManager.getAllMessages();
      return response;
    } catch (error) {
      return error;
    }
  }

  async addMessage(objMessage) {
    try {
      const response = await chatManager.addMessage(objMessage);
      return response;
    } catch (error) {
      return error;
    }
  }

  async deleteMessage(id) {
    try {
      const response = await chatManager.deleteMessage(id);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export const chatService = new ChatService();
