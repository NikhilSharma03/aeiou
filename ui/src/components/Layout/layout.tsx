import React, { useState } from 'react';
import { Container, Main } from './layout.style';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import SideDrawer from '../SideDrawer/sidedrawer';

interface Props {
    children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    const [showSD, setShowSD] = useState(false);

    return (
        <Container>
            <SideDrawer
                showSD={showSD}
                toggleSD={() => setShowSD((prev) => !prev)}
            />
            <Navbar toggleSideDrawer={() => setShowSD((prev) => !prev)} />
            <Main>{children}</Main>
            <Footer />
        </Container>
    );
};

export default Layout;
