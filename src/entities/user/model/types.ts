import { Organization } from '../../organization/model/types';

export interface User {
    id: string;

    firstName: string;
    lastName: string;

    email: string;

    organizationId: Organization['id'];
}
