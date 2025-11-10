import { Organization } from '../../organization/types';

export interface User {
    id: string;

    firstName: string;
    lastName: string;

    email: string;

    organizationId: Organization['id'];
}
