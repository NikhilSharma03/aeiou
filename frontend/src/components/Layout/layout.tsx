import React from 'react';
import { Container, Main } from './layout.style';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

interface Props {
    children?: React.ReactNode;
    toggleTheme?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
}

const Layout: React.FC<Props> = ({ children, toggleTheme }) => {
    return (
        <Container>
            <Navbar toggleTheme={toggleTheme} />
            <Main>{children}</Main>
            <Footer />
        </Container>
    );
};

export default Layout;
