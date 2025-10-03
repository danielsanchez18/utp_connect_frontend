import { Audit } from "./audit.interface";
import { User } from "./users.interface";

export interface Role {

  id: number;
  name: string;
  users?: User[];
  audit: Audit;

}