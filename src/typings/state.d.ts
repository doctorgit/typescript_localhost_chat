declare interface UserMessage {
  text: string;
  uid: string;
  time: AnyObject;
}

declare interface CurrentUser {
    message: string;
    error: Error | null;
    name: string;
    invalidFlag: number;
    isWaitingRequest: boolean;
    online: boolean;
}

declare interface ChatHistory {
    messages: any,
    loading: boolean,
    error: Error | null
}

