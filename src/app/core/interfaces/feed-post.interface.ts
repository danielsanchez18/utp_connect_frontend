export interface FeedPost {
  id: string;
  user: {
    id: string;
    name: string;
    lastName: string;
    profilePicture?: string | null;
    role?: string;
  };
  title: string;
  content: string;
  hashtags: string[];
  createdAt: string; // ISO date string
  type: string; // Ej: "proyecto", "idea"
  isCollaborative: boolean | string;
  team?: {
    members: {
      name: string;
      initial: string;
      profilePicture?: string | null;
    }[];
    count: number;
    names: string;
  };
  document?: {
    name: string;
    url: string;
  };
  likes: number;
  likedByCurrentUser: boolean;
  comments: number;
}

