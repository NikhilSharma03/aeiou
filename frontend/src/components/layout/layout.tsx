import React from 'react';
import { Container, Main } from './layout.style';
import Navbar from './../navbar/navbar';

interface Props {
    children?: React.ReactNode;
    toggleTheme?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
}

const Layout: React.FC<Props> = ({ children, toggleTheme }) => {
    return (
        <Container>
            <Navbar toggleTheme={toggleTheme} />
            <Main>{children}</Main>
        </Container>
    );
};

export default Layout;
