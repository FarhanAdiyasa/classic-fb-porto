export interface BookData {
  id: string;
  title: string;
  color: string;
  textColor?: string;
  content: {
    heading: string;
    body: string;
    tags?: string[];
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum ViewState {
  IDLE = 'IDLE',
  READING = 'READING',
  CHATTING = 'CHATTING',
  PROJECTS = 'PROJECTS'
}

export interface ProjectData {
  id: string;
  title: string;
  tech: string[];
  description: string;
  color: string;
  links?: {
    github?: string;
    demo?: string;
  };
}