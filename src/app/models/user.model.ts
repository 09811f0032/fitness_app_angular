import { MemberShip } from "./membership.model";

export class User {
  uid: any;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: string;
  membership: MemberShip;  
  address: string;
  club_id: any;
}