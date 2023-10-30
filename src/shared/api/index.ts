import { IUser } from '../domain/types';

export type IRequestUsersParams = {
  name: string;
};

export const requestUsers = async (params: IRequestUsersParams) => {
  const baseUrl = 'http://127.0.0.1:3000';

  const res = await fetch(`${baseUrl}/?term=${params.name}`);

  const response = await res.json();

  if (res.ok) {
    return response as IUser[];
  }

  throw new Error('Something went wrong');
};
