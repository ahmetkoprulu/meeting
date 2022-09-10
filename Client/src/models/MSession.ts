export interface MSession {
  _id: string;
  userId: string;
  expires: Date;
  isClosed: boolean;
  isPersistent: boolean;
  cookie: string;
  createdAt: Date;
  updatedAt: Date;
}
