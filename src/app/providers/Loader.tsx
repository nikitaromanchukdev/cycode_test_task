import { memo, use, useEffect } from 'react';
import { useStore } from './store/useStore';
import { User } from '@/entities/user/types';
import { Organization } from '@/entities/organization/types';

const fetchData = async () => {
    const res = await fetch('https://jsonkeeper.com/b/XSMF');

    if (!res.ok) throw new Error('Failed to fetch');

    await new Promise(resolve => {
        setTimeout(resolve, 1000);
    });

    return res.json() as Promise<{ users: User[]; organizations: Organization[] }>;
};

const res = fetchData().catch(err => err);

export const Loader = memo(() => {
    const result = use(res);
    const { setOrganizations, setUsers } = useStore();

    useEffect(() => {
        const isError = result instanceof Error;
        if (!isError) {
            const { organizations, users } = result;

            setUsers(users);
            setOrganizations(organizations);
        }
    }, []);

    return null;
});
