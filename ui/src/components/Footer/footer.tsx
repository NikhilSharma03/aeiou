import React from 'react';
import { Container, Title } from './footer.style';

const Footer: React.FC = () => {
    return (
        <Container>
            <Title>
                &copy; AEI<span>OU</span>
            </Title>
        </Container>
    );
};

export default Footer;
