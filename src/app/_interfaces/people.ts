interface Participant {
  id: number;
  name: string;
  tablesVisited: number[];
  interactions: number[];
}

interface Moderator {
  id: number;
  name: string;
  topic: string;
}