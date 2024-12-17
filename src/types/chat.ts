export interface Message {
    id: string;
    type: 'user' | 'bot';
    content: string;
  }
  
  export interface ChatState {
    messages: Message[];
    isInitialized: boolean;
  }
  
  export interface NavigationIntent {
    patterns: RegExp[];
    path: string;
    response: string;
  }