import { useCallback, useState } from 'react';
import { Select } from '@/shared/ui';
import { Organization } from '@/entities/organization/model';
import { getOrgKey } from '@/entities/organization/lib';
import { DropdownItem, ItemLabel, RadioButton } from '@/shared/ui';

interface OrganizationSelectProps {
    data: Organization[];

    value: Organization['id'] | null;

    onSelect: (orgId: Organization['id']) => void;
}
export const OrganizationSelect: React.FC<OrganizationSelectProps> = props => {
    const { data, onSelect, value } = props;

    const [orgDropdownOpen, setOrgDropdownOpen] = useState<boolean>(false);
    const selectedOrg = value ? data.find(org => getOrgKey(org) === value) : null;

    const _onSelect = useCallback(
        (orgId: Organization['id']) => {
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
                <DropdownItem key={getOrgKey(org)} onClick={() => _onSelect(getOrgKey(org))}>
                    <RadioButton type="radio" checked={value === getOrgKey(org)} />

                    <ItemLabel>{org.name}</ItemLabel>
                </DropdownItem>
            ))}
        </Select>
    );
};
