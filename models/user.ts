import { Timestamp, DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export interface UserProfile {
  uid: string;  
  email: string;
  username: string;
  profilePictureUrl?: string;  
  bio?: string;
  createdAt: Timestamp;  
  lastLoginAt: Timestamp;  
  isAdmin?: boolean;  
}

