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
import {
    DropdownItem,
    EmptyState,
    ItemLabel,
    SearchInput,
    SelectedCount,
    UserEmail,
} from '@/shared/ui/Dropdown.styles';
import { Checkbox, RadioButton } from '@/shared/ui/Input.styles';
import { Select } from '@/shared/ui/Select';

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

    const [orgDropdownOpen, setOrgDropdownOpen] = useState<boolean>(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false);

    const [userSearchQuery, setUserSearchQuery] = useState<string>('');

    const handleOrgSelect = (orgId: number) => {
        setSelectedOrgId(orgId);
        setSelectedUserIds([]);
        setOrgDropdownOpen(false);
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

    const selectedOrg = selectedOrgId ? organizations.find(o => o.id === selectedOrgId) : null;
    const availableUsers = selectedOrgId ? usersByOrg[selectedOrgId] : [];
    const filteredUsers = availableUsers!.filter(
        user =>
            user.name.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(userSearchQuery.toLowerCase())
    );

    const isFormValid = selectedOrgId !== null && selectedUserIds.length > 0;

    const selectedUsersQuantity =
        selectedUserIds.length > 0
            ? `${selectedUserIds.length} user${selectedUserIds.length > 1 ? 's' : ''} selected`
            : 'Select users';
    const usersActionText = selectedOrgId ? selectedUsersQuantity : 'Select an organization first';

    return (
        <ModalOverlay $isOpen={isOpen} onClick={onClose}>
            <ModalContent $isOpen={isOpen} onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>Subscribe to Our Newsletter</ModalTitle>

                    <CloseButton onClick={onClose}>×</CloseButton>
                </ModalHeader>

                <FormContainer>
                    <Select
                        isOpen={orgDropdownOpen}
                        setIsOpen={setOrgDropdownOpen}
                        label="Organization"
                        actionText={
                            <span>{selectedOrg ? selectedOrg.name : 'Select an organization'}</span>
                        }
                    >
                        {organizations.map(org => (
                            <DropdownItem key={org.id} onClick={() => handleOrgSelect(org.id)}>
                                <RadioButton type="radio" checked={selectedOrgId === org.id} />

                                <ItemLabel>{org.name}</ItemLabel>
                            </DropdownItem>
                        ))}
                    </Select>

                    <Select
                        isOpen={userDropdownOpen}
                        setIsOpen={setUserDropdownOpen}
                        disabled={!selectedOrgId}
                        label={
                            <>
                                Users
                                {selectedUserIds.length > 0 && (
                                    <SelectedCount>
                                        ({selectedUserIds.length} selected)
                                    </SelectedCount>
                                )}
                            </>
                        }
                        actionText={usersActionText}
                    >
                        <SearchInput
                            type="text"
                            placeholder="Search users..."
                            value={userSearchQuery}
                            onChange={e => setUserSearchQuery(e.target.value)}
                            onClick={e => e.stopPropagation()}
                        />

                        {filteredUsers.map(user => (
                            <DropdownItem key={user.id} onClick={() => handleUserToggle(user.id)}>
                                <Checkbox
                                    type="checkbox"
                                    checked={selectedUserIds.includes(user.id)}
                                />

                                <ItemLabel>
                                    {user.name}
                                    <UserEmail>{user.email}</UserEmail>
                                </ItemLabel>
                            </DropdownItem>
                        ))}

                        {filteredUsers.length === 0 && <EmptyState>No users found</EmptyState>}
                    </Select>

                    <SubmitButton onClick={handleSubmit} disabled={!isFormValid}>
                        Subscribe Now
                    </SubmitButton>
                </FormContainer>
            </ModalContent>
        </ModalOverlay>
    );
};
