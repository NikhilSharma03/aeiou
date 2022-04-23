import React from 'react';
import {
    Container,
    Nav,
    NavItem,
    NavItems,
    NavMain,
    Title,
    UserAuthBtn,
} from './navbar.style';
import { IoMdCreate } from 'react-icons/io';
import { MdCampaign } from 'react-icons/md';
import { FaHome, FaUserAlt } from 'react-icons/fa';

interface Props {
    toggleTheme: React.MouseEventHandler<HTMLHeadingElement> | undefined;
}

const Navbar: React.FC<Props> = ({ toggleTheme }) => {
    return (
        <Container>
            <Title onClick={toggleTheme}>
                AEI<span>OU</span>
            </Title>
            <NavMain>
                <Nav>
                    <NavItems>
                        <NavItem to="/">
                            <FaHome size={25} color="#ccc" /> Home
                        </NavItem>
                    </NavItems>
                    <NavItems>
                        <NavItem to="/campaigns">
                            <MdCampaign size={25} color="#ccc" /> Campaigns
                        </NavItem>
                    </NavItems>
                    <NavItems>
                        <NavItem to="/new-campaign">
                            <IoMdCreate size={25} color="#ccc" /> New Campaign
                        </NavItem>
                    </NavItems>
                </Nav>
                <UserAuthBtn to="/login">
                    <FaUserAlt size={20} color="#ccc" /> Login
                </UserAuthBtn>
            </NavMain>
        </Container>
    );
};

export default Navbar;
