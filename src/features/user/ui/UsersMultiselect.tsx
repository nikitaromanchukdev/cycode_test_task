import { ReactNode, useMemo, useState } from 'react';
import {
    Checkbox,
    DropdownItem,
    EmptyState,
    ItemLabel,
    Select,
    SelectedCount,
    SearchMatchHighlight,
} from '@/shared/ui';
import { User } from '@/entities/user/model';
import { UserEmail, UserName } from '@/entities/user/ui';
import { getUserEmail, getUserFullName, getUserKey } from '@/entities/user/lib';
import { VirtualizedList } from '@/shared/ui/VirtualizedList/VirtualizedList';
import { useDebounceValue } from '@/shared/lib/hooks/useDebounceValue';
import { UserSearch } from './UserMultiselect.styles';

const LIST_ITEM_HEIGHT = 60;
const SEARCH_BAR_HEIGHT = 42;
const DROPDOWN_MAX_HEIGHT = 250;

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

    const debouncedSearchQuery = useDebounceValue(searchQuery);

    const filteredData = useMemo(() => {
        return data.filter(
            user =>
                getUserFullName(user).toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
                getUserEmail(user).toLowerCase().includes(debouncedSearchQuery.toLowerCase())
        );
    }, [data, debouncedSearchQuery]);

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
            <UserSearch
                name="user-search"
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onClick={e => e.stopPropagation()}
            />

            <VirtualizedList
                itemHeight={LIST_ITEM_HEIGHT}
                data={filteredData}
                containerHeight={Math.min(
                    filteredData.length * LIST_ITEM_HEIGHT,
                    DROPDOWN_MAX_HEIGHT - SEARCH_BAR_HEIGHT
                )}
                renderItem={user => (
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
                )}
            />

            {filteredData.length === 0 && <EmptyState>No users found</EmptyState>}
        </Select>
    );
};
