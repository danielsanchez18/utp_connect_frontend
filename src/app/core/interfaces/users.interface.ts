import { Audit } from "./audit.interface";
import { Role } from "./role.interface";

export interface User {

  id?: string;
  name: string;
  lastName: string;
  faculty?: string;
  cycle?: number;
  email: string;
  password?: string;
  role?: string;
  phone?: string;
  profilePicture?: string;
  urlWebsite?: string;
  presentation?: string;
  skills?: string[];
  interests?: string[];
  roles: Role[];
  enabled: boolean;
  audit: Audit;

}
