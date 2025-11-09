import { User } from '@/entities/user/types';

const users: User[] = [
    {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@techcorp.com',
        orgId: 1,
    },
    {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@techcorp.com',
        orgId: 1,
    },
    {
        id: 103,
        name: 'Charlie Brown',
        email: 'charlie@techcorp.com',
        orgId: 1,
    },
    {
        id: 104,
        name: 'Diana Prince',
        email: 'diana@techcorp.com',
        orgId: 1,
    },
    {
        id: 201,
        name: 'Eve Davis',
        email: 'eve@digital.com',
        orgId: 2,
    },
    {
        id: 202,
        name: 'Frank Miller',
        email: 'frank@digital.com',
        orgId: 2,
    },
    {
        id: 203,
        name: 'Grace Lee',
        email: 'grace@digital.com',
        orgId: 2,
    },
    {
        id: 301,
        name: 'Henry Wilson',
        email: 'henry@cloud.com',
        orgId: 3,
    },
    {
        id: 302,
        name: 'Ivy Chen',
        email: 'ivy@cloud.com',
        orgId: 3,
    },
    {
        id: 303,
        name: 'Jack Taylor',
        email: 'jack@cloud.com',
        orgId: 4,
    },
    {
        id: 304,
        name: 'Kate Moore',
        email: 'kate@cloud.com',
        orgId: 4,
    },
    {
        id: 305,
        name: 'Leo Martinez',
        email: 'leo@cloud.com',
        orgId: 4,
    },
    {
        id: 401,
        name: 'Mia Anderson',
        email: 'mia@data.com',
        orgId: 4,
    },
    {
        id: 402,
        name: 'Noah Thomas',
        email: 'noah@data.com',
        orgId: 4,
    },
];

// temp
const usersByOrgs = Object.groupBy(users, ({ orgId }) => orgId);

export const queryUsersGroupedByOrg = () => usersByOrgs;
