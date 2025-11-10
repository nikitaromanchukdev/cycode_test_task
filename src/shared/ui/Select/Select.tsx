import { PropsWithChildren, ReactNode, useEffect, useId, useRef } from 'react';
import { DropdownButton, DropdownMenu, FormGroup, Label } from '@/shared/ui';

interface SelectProps {
    label?: ReactNode;
    actionText: ReactNode;
    disabled?: boolean;

    setIsOpen: (value: boolean) => void;
    isOpen: boolean;

    name?: string;
}
export const Select: React.FC<PropsWithChildren<SelectProps>> = props => {
    const { actionText, children, disabled, label, isOpen, setIsOpen, name } = props;

    const id = useId();

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <FormGroup ref={containerRef}>
            {label && <Label htmlFor={name ?? id}>{label}</Label>}

            <DropdownButton id={name ?? id} disabled={disabled} onClick={() => setIsOpen(!isOpen)}>
                <span>{actionText}</span>
                <span>{isOpen ? '▲' : '▼'}</span>
            </DropdownButton>

            {isOpen && <DropdownMenu>{children}</DropdownMenu>}
        </FormGroup>
    );
};
