import { PrimaryButton } from '@/shared/ui/Button.styles';
import styled, { keyframes } from 'styled-components';

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: ${props => (props.$isOpen ? 1 : 0)};
    pointer-events: ${props => (props.$isOpen ? 'auto' : 'none')};
    transition: opacity 0.3s ease;
`;

export const scaleIn = keyframes`
  from {
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const scaleOut = keyframes`
  from {
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    transform: translate(-50%, -50%) scale(0);
  }
`;

export const ModalContent = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 50%;
    left: 50%;

    padding: 2rem;

    max-height: 600px;
    max-width: 600px;
    height: 50vh;
    width: 50vw;

    display: flex;
    flex-direction: column;

    background: ${({ theme }) => theme.colors.background.secondary};

    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: ${({ theme }) => theme.utils.spacing(3)};

    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

    animation: ${props => (props.$isOpen ? scaleIn : scaleOut)} 0.3s ease forwards;
`;

export const ModalHeader = styled.div`
    margin-bottom: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ModalTitle = styled.h2`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const CloseButton = styled.button`
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: none;

    border: none;

    color: ${({ theme }) => theme.colors.text.tertiary};
    font-size: 2rem;

    cursor: pointer;

    border-radius: 8px;
    transition: all 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.background.hover};
        color: ${({ theme }) => theme.colors.text.primary};
    }
`;

export const FormContainer = styled.div`
    overflow-y: auto;

    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const SubmitButton = styled(PrimaryButton)`
    margin-top: auto;

    padding: ${({ theme }) => theme.utils.spacing(3)};

    &:hover {
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
`;
