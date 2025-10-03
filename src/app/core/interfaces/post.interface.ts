import { Audit } from './audit.interface';
import { User } from './users.interface';

export interface Post {
  id?: string;
  user: User;
  type: string;
  title: string;
  content: string;
  mediaUrls?: string[];
  privacy: string;
  isCollaborative: string;
  hashtags?: string[];
  comments?: any[];
  likes?: any[];
  reports?: any[];
  isPublic: boolean;
  audit: Audit;
}
