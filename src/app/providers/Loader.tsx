import { memo, use, useEffect } from 'react';
import { useStore } from '@/shared/providers';
import { User } from '@/entities/user/model';
import { Organization } from '@/entities/organization/model';
import { sleep } from '@/shared/lib';

const fetchData = async () => {
    const res = await fetch('https://jsonkeeper.com/b/XSMF');

    if (!res.ok) throw new Error('Failed to fetch');

    await sleep(1000); // tiny delay to prevent the loading overlay from flickering

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
