import { User } from '@/entities/user/types';
import { SearchInput } from '@/features/shared/Search/ui/Search.styles';
import { SearchMatchHighlight } from '@/features/shared/Search/ui/SearchMatchHighlight';
import {
    DropdownItem,
    EmptyState,
    ItemLabel,
    SelectedCount,
    UserEmail,
    UserName,
} from '@/shared/ui/Dropdown.styles';
import { Checkbox } from '@/shared/ui/Input.styles';
import { Select } from '@/shared/ui/Select';
import { ReactNode, useMemo, useState } from 'react';

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
                user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(searchQuery.toLowerCase())
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
                <DropdownItem key={user.id} onClick={() => onSelect(user)}>
                    <Checkbox type="checkbox" checked={value.includes(user.id)} />

                    <ItemLabel>
                        <UserName>
                            <SearchMatchHighlight searched={searchQuery}>
                                {user.name}
                            </SearchMatchHighlight>
                        </UserName>

                        <UserEmail>
                            <SearchMatchHighlight searched={searchQuery}>
                                {user.email}
                            </SearchMatchHighlight>
                        </UserEmail>
                    </ItemLabel>
                </DropdownItem>
            ))}

            {filteredData.length === 0 && <EmptyState>No users found</EmptyState>}
        </Select>
    );
};
