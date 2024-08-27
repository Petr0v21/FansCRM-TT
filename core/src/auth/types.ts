import { Request } from 'express';

export type JwtPayloadType = {
  userId: number;
  login: string;
};

export type RequestContextType = Request & {
  user: JwtPayloadType;
};
