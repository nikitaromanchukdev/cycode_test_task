import styled from "styled-components";

type LogoProps = {
    src: string;
    alt: string;
};
export const Logo = (props: LogoProps) => {
    return (
        <LogoRoot>
            <LogoImage {...props} />
        </LogoRoot>
    );
};

const LogoRoot = styled.picture`
    width: 40px;
    height: 40px;
`;

const LogoImage = styled.img`
    width: 100%;
    height: 100%;

    object-fit: fill;
`;
