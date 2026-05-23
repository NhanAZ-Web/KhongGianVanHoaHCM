export interface PersonName {
  name: string;
  context: string;
}

export interface PersonProfile {
  id: string;
  primaryName: string;
  birth: { date: string; place: string };
  death: { date: string; place: string };
  names: PersonName[];
  roles: string[];
  legacyTitles: string[];
}

export interface TimelineEvent {
  date: string;
  title: string;
  summary?: string;
}

export interface TimelinePeriod {
  periodId: string;
  periodTitle: string;
  events: TimelineEvent[];
}

export interface LifeCareerItem {
  id: string;
  title: string;
  description: string;
  period: string;
  imagePath: string;
}

export interface ThoughtTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export interface Work {
  id: string;
  title: string;
  year?: number;
  type: 'van-kien' | 'chinh-luan' | 'tho' | 'bao-chi' | 'khac';
  typeLabel: string;
  summary: string;
  focusPoints?: string[];
  sourceNote?: string;
  hasContent: boolean;
  content?: string;
}

export interface Song {
  order: number;
  title: string;
  creator: string;
  performer: string;
  poemBy?: string;
  context?: string;
  theme?: string;
  youtubeId?: string;
}

export interface Monument {
  id: string;
  country: string;
  region: 'chau-a' | 'chau-au' | 'chau-my' | 'chau-phi';
  regionLabel: string;
  city?: string;
  year?: string;
  imagePath: string;
  note: string;
  culturalNote?: string;
}

export interface Story {
  id: string;
  title: string;
  summary: string;
  topics: string[];
  lesson: string;
  reflectionQuestion: string;
  fullContent: string;
}

export interface SourceItem {
  id: string;
  title: string;
  url?: string;
  type: 'primary' | 'secondary' | 'original';
  description: string;
}

export interface SongQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}
