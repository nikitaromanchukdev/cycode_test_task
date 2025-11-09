import { queryOrgs } from '@/entities/organization/api';
import { queryUsersGroupedByOrg } from '@/entities/user/api';
import { useEffect, useRef, useState } from 'react';
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
    DropdownButton,
    DropdownItem,
    DropdownMenu,
    EmptyState,
    ItemLabel,
    SearchInput,
    SelectedCount,
    UserEmail,
} from '@/shared/ui/Dropdown.styles';
import { Checkbox, RadioButton } from '@/shared/ui/Input.styles';
import { FormGroup, Label } from '@/shared/ui/Form.styles';

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

    const orgDropdownRef = useRef<HTMLDivElement>(null);
    const userDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (orgDropdownRef.current && !orgDropdownRef.current.contains(event.target as Node)) {
                setOrgDropdownOpen(false);
            }
            if (
                userDropdownRef.current &&
                !userDropdownRef.current.contains(event.target as Node)
            ) {
                setUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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

    return (
        <ModalOverlay $isOpen={isOpen} onClick={onClose}>
            <ModalContent $isOpen={isOpen} onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>Subscribe to Our Newsletter</ModalTitle>

                    <CloseButton onClick={onClose}>×</CloseButton>
                </ModalHeader>

                <FormContainer>
                    <FormGroup ref={orgDropdownRef}>
                        <Label>Organization</Label>

                        <DropdownButton onClick={() => setOrgDropdownOpen(!orgDropdownOpen)}>
                            <span>{selectedOrg ? selectedOrg.name : 'Select an organization'}</span>
                            <span>{orgDropdownOpen ? '▲' : '▼'}</span>
                        </DropdownButton>

                        {orgDropdownOpen && (
                            <DropdownMenu>
                                {organizations.map(org => (
                                    <DropdownItem
                                        key={org.id}
                                        onClick={() => handleOrgSelect(org.id)}
                                    >
                                        <RadioButton
                                            type="radio"
                                            checked={selectedOrgId === org.id}
                                            onChange={() => {}}
                                        />

                                        <ItemLabel>{org.name}</ItemLabel>
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        )}
                    </FormGroup>

                    <FormGroup ref={userDropdownRef}>
                        <Label>
                            Users
                            {selectedUserIds.length > 0 && (
                                <SelectedCount>({selectedUserIds.length} selected)</SelectedCount>
                            )}
                        </Label>
                        <DropdownButton
                            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                            disabled={!selectedOrgId}
                        >
                            <span>
                                {!selectedOrgId
                                    ? 'Select an organization first'
                                    : selectedUserIds.length > 0
                                      ? `${selectedUserIds.length} user${selectedUserIds.length > 1 ? 's' : ''} selected`
                                      : 'Select users'}
                            </span>
                            <span>{userDropdownOpen ? '▲' : '▼'}</span> {/* TODO: rotate instead */}
                        </DropdownButton>

                        {userDropdownOpen && selectedOrgId && (
                            <DropdownMenu>
                                <SearchInput
                                    type="text"
                                    placeholder="Search users..."
                                    value={userSearchQuery}
                                    onChange={e => setUserSearchQuery(e.target.value)}
                                    onClick={e => e.stopPropagation()}
                                />
                                {filteredUsers.map(user => (
                                    <DropdownItem
                                        key={user.id}
                                        onClick={() => handleUserToggle(user.id)}
                                    >
                                        <Checkbox
                                            type="checkbox"
                                            checked={selectedUserIds.includes(user.id)}
                                            onChange={() => {}}
                                        />

                                        <ItemLabel>
                                            {user.name}
                                            <UserEmail>{user.email}</UserEmail>
                                        </ItemLabel>
                                    </DropdownItem>
                                ))}
                                {filteredUsers.length === 0 && (
                                    <EmptyState>No users found</EmptyState>
                                )}
                            </DropdownMenu>
                        )}
                    </FormGroup>

                    <SubmitButton onClick={handleSubmit} disabled={!isFormValid}>
                        Subscribe Now
                    </SubmitButton>
                </FormContainer>
            </ModalContent>
        </ModalOverlay>
    );
};
