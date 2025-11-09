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
    width: 50vw;
    max-width: 600px;
    height: 50vh;
    max-height: 600px;
    background: #18181b;
    border: 1px solid #27272a;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    animation: ${props => (props.$isOpen ? scaleIn : scaleOut)} 0.3s ease forwards;
    display: flex;
    flex-direction: column;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;

export const ModalTitle = styled.h2`
    font-size: 1.8rem;
    color: #fafafa;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 2rem;
    color: #71717a;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:hover {
        background: #27272a;
        color: #fafafa;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1;
    overflow-y: auto;
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
