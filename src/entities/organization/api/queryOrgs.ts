import { Organization } from '@/entities/organization/types/organization';

const organizations: Organization[] = [
    { id: 1, name: 'TechCorp Solutions' },
    { id: 2, name: 'Digital Innovations Inc.' },
    { id: 3, name: 'Cloud Systems Ltd.' },
    { id: 4, name: 'Data Analytics Co.' },
];

export const queryOrgs = () => {
    return organizations;
};
