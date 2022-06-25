import React from 'react';
import { Container, Main } from './layout.style';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

interface Props {
    children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Container>
            <Navbar />
            <Main>{children}</Main>
            <Footer />
        </Container>
    );
};

export default Layout;
