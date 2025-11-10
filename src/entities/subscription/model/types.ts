import { Organization } from '../../organization/types';
import { User } from '../../user/model/types';

export interface Subscription {
    organizationId: Organization['id'];
    organizationName: string;

    userIds: Array<User['id']>;
    userNames: string[];
}
