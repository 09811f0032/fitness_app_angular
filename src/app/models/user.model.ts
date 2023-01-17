import { MemberShip } from "./membership.model";

export class User {
  user_id: any;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  membership: MemberShip;  
  address: string;
  club_id: any;
}