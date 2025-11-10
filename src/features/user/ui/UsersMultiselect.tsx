import { ReactNode, useMemo, useState } from 'react';
import {
    Checkbox,
    DropdownItem,
    EmptyState,
    ItemLabel,
    Select,
    SelectedCount,
    SearchInput,
    SearchMatchHighlight,
} from '@/shared/ui';
import { User } from '@/entities/user/model';
import { UserEmail, UserName } from '@/entities/user/ui';
import { getUserEmail, getUserFullName, getUserKey } from '@/entities/user/lib';

interface UsersMultiselectProps {
    disabled: boolean;
    data: User[] | [];

    value: Array<User['id']>;
    onSelect: (user: User) => void;

    searchQuery: string;
    setSearchQuery: (query: string) => void;

    customActionText: ReactNode;
}
export const UsersMultiselect: React.FC<UsersMultiselectProps> = props => {
    const { customActionText, data, disabled, onSelect, searchQuery, setSearchQuery, value } =
        props;

    const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false);

    const selectedUsersQuantity =
        value.length > 0
            ? `${value.length} user${value.length > 1 ? 's' : ''} selected`
            : 'Select users';

    const filteredData = useMemo(() => {
        return data.filter(
            user =>
                getUserFullName(user).toLowerCase().includes(searchQuery.toLowerCase()) ||
                getUserEmail(user).toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [data, searchQuery]);

    return (
        <Select
            isOpen={userDropdownOpen}
            setIsOpen={setUserDropdownOpen}
            disabled={disabled}
            label={
                <>
                    Users
                    {value.length > 0 && <SelectedCount>({value.length} selected)</SelectedCount>}
                </>
            }
            actionText={customActionText || selectedUsersQuantity}
        >
            <SearchInput
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onClick={e => e.stopPropagation()}
            />

            {filteredData.map(user => (
                <DropdownItem key={getUserKey(user)} onClick={() => onSelect(user)}>
                    <Checkbox
                        type="checkbox"
                        checked={value.includes(getUserKey(user))}
                        onChange={() => {}}
                    />

                    <ItemLabel>
                        <UserName>
                            <SearchMatchHighlight searched={searchQuery}>
                                {getUserFullName(user)}
                            </SearchMatchHighlight>
                        </UserName>

                        <UserEmail>
                            <SearchMatchHighlight searched={searchQuery}>
                                {getUserEmail(user)}
                            </SearchMatchHighlight>
                        </UserEmail>
                    </ItemLabel>
                </DropdownItem>
            ))}

            {filteredData.length === 0 && <EmptyState>No users found</EmptyState>}
        </Select>
    );
};
