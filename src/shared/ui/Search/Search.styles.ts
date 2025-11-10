import { Input } from '@/shared/ui';
import styled from 'styled-components';

export const SearchInput = styled(Input)`
    width: 100%;

    border: none;
    border-radius: 0%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};

    font-size: 0.9rem; // TODO: implement sizes
`;

export const HighlightText = styled.mark`
    background: ${({ theme }) => theme.colors.brand.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
    padding: 0 2px;
    border-radius: 2px;
    font-weight: 500;
`;
