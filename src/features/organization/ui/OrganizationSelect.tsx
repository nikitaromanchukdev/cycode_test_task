import { Organization } from '@/entities/organization/types';
import { DropdownItem, ItemLabel } from '@/shared/ui/Dropdown.styles';
import { RadioButton } from '@/shared/ui/Input.styles';
import { Select } from '@/shared/ui/Select';
import { useCallback, useState } from 'react';

interface OrganizationSelectProps {
    data: Organization[];

    value: Organization['id'] | null;

    onSelect: (orgId: Organization['id']) => void;
}
export const OrganizationSelect: React.FC<OrganizationSelectProps> = props => {
    const { data, onSelect, value } = props;

    const [orgDropdownOpen, setOrgDropdownOpen] = useState<boolean>(false);
    const selectedOrg = value ? data.find(o => o.id === value) : null;

    const _onSelect = useCallback(
        (orgId: number) => {
            onSelect(orgId);
            setOrgDropdownOpen(false);
        },
        [onSelect]
    );

    return (
        <Select
            isOpen={orgDropdownOpen}
            setIsOpen={setOrgDropdownOpen}
            label="Organization"
            actionText={<span>{selectedOrg ? selectedOrg.name : 'Select an organization'}</span>}
        >
            {data.map(org => (
                <DropdownItem key={org.id} onClick={() => _onSelect(org.id)}>
                    <RadioButton type="radio" checked={value === org.id} />

                    <ItemLabel>{org.name}</ItemLabel>
                </DropdownItem>
            ))}
        </Select>
    );
};
