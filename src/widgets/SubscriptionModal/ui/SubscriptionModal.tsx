import { useCallback, useState } from 'react';
import { useStore, useSelector } from '@/shared/providers';
import { Organization } from '@/entities/organization/model';
import { User } from '@/entities/user/model';
import { getUserKey, getUserOrgId } from '@/entities/user/lib';
import { OrganizationSelect } from '@/features/organization/ui';
import { UsersMultiselect } from '@/features/user/ui';
import {
    CloseButton,
    FormContainer,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
    SubmitButton,
} from './SubscriptionModal.styles';

interface SubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (orgId: Organization['id'], userIds: Array<User['id']>) => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = props => {
    const { isOpen, onClose, onSubmit } = props;
    const { organizations } = useStore();

    const usersByOrg = useSelector(
        useCallback(store => Object.groupBy(store.users, getUserOrgId), [])
    );

    const [selectedOrgId, setSelectedOrgId] = useState<Organization['id'] | null>(null);
    const [selectedUserIds, setSelectedUserIds] = useState<Array<User['id']>>([]);

    const [userSearchQuery, setUserSearchQuery] = useState<string>('');

    const onOrgSelect = (orgId: Organization['id']) => {
        setSelectedOrgId(orgId);
        setSelectedUserIds([]);
    };

    const handleUserToggle = (userId: User['id']) => {
        setSelectedUserIds(prev =>
            prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
        );
    };

    const handleSubmit = () => {
        if (selectedOrgId && selectedUserIds.length > 0) {
            onSubmit(selectedOrgId, selectedUserIds);
            setSelectedOrgId(null);
            setSelectedUserIds([]);
            setUserSearchQuery('');
        }
    };

    const availableUsers = selectedOrgId ? usersByOrg[selectedOrgId]! : [];

    const isFormValid = selectedOrgId !== null && selectedUserIds.length > 0;

    return (
        <ModalOverlay $isOpen={isOpen} onClick={onClose}>
            <ModalContent $isOpen={isOpen} onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>Subscribe to Our Newsletter</ModalTitle>

                    <CloseButton onClick={onClose}>×</CloseButton>
                </ModalHeader>

                <FormContainer>
                    <OrganizationSelect
                        value={selectedOrgId}
                        data={organizations}
                        onSelect={onOrgSelect}
                    />

                    <UsersMultiselect
                        customActionText={!selectedOrgId && 'Select an organization first'}
                        data={availableUsers}
                        disabled={!selectedOrgId}
                        value={selectedUserIds}
                        onSelect={user => handleUserToggle(getUserKey(user))}
                        searchQuery={userSearchQuery}
                        setSearchQuery={setUserSearchQuery}
                    />

                    <SubmitButton onClick={handleSubmit} disabled={!isFormValid}>
                        Subscribe Now
                    </SubmitButton>
                </FormContainer>
            </ModalContent>
        </ModalOverlay>
    );
};
