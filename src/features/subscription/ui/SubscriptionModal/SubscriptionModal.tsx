import { queryOrgs } from '@/entities/organization/api';
import { queryUsersGroupedByOrg } from '@/entities/user/api';
import { useState } from 'react';
import {
    CloseButton,
    FormContainer,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
    SubmitButton,
} from './SubscriptionModal.styles';
import { OrganizationSelect } from '@/features/organization/ui/OrganizationSelect';
import { UsersMultiselect } from '@/features/user/ui/UsersMultiselect';

const organizations = queryOrgs();
const usersByOrg = queryUsersGroupedByOrg();

interface SubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (orgId: number, userIds: number[]) => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = props => {
    const { isOpen, onClose, onSubmit } = props;

    const [selectedOrgId, setSelectedOrgId] = useState<number | null>(null);
    const [selectedUserIds, setSelectedUserIds] = useState<number[]>([]);

    const [userSearchQuery, setUserSearchQuery] = useState<string>('');

    const onOrgSelect = (orgId: number) => {
        setSelectedOrgId(orgId);
        setSelectedUserIds([]);
    };

    const handleUserToggle = (userId: number) => {
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
                        onSelect={user => handleUserToggle(user.id)}
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
