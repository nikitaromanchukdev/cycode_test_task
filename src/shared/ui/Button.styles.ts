import styled from 'styled-components';

export const ActionButton = styled.button`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const SubscribeButton = styled.button`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 1.5rem 3rem;
    border-radius: 50px;
    font-size: 1.3rem;
    font-weight: 600;
    cursor: pointer;
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(102, 126, 234, 0.6);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const SubmitButton = styled.button`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease;
    margin-top: auto;

    &:hover {
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
`;
