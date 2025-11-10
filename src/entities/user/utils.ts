import { User } from './types';

export const getUserKey = (user: User) => user.id;

export const getUserOrgId = (user: User) => user.organizationId;

export const getUserFullName = (user: User) => `${user.firstName} ${user.lastName}`;

export const getUserEmail = (user: User) =>
    `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@${getUserOrgId(user)}.com`;
