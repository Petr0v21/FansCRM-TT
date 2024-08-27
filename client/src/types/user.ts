export type User = {
  login: string;
  phone: string;
  password?: string;
};

export type FullUser = User & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};
