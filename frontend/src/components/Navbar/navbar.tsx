import React from 'react';
import {
    Container,
    Nav,
    NavItem,
    NavItems,
    NavMain,
    SideBarMenu,
    Title,
    UserAuthBtn,
} from './navbar.style';
import { IoMdCreate } from 'react-icons/io';
import { MdCampaign } from 'react-icons/md';
import { FaHome, FaUserAlt } from 'react-icons/fa';
import { onConnectWallet } from './../../redux/actions/user';
import { useAppDispatch, useAppSelector } from './../../hooks/hooks';

const Navbar: React.FC = () => {
    const dispatch = useAppDispatch();
    const connectWallet = () => dispatch(onConnectWallet());
    const isWalletConnected: boolean = useAppSelector(
        (state) => state.users.isWalletConnected
    );
    const userWalletAccount: string = useAppSelector(
        (state) => state.users.userWalletAccount
    );

    return (
        <Container>
            <Title>
                AEI<span>OU</span>
            </Title>
            <NavMain>
                <SideBarMenu>
                    <div></div>
                    <div></div>
                    <div></div>
                </SideBarMenu>
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
                        <NavItem to="/campaigns/new">
                            <IoMdCreate size={25} color="#ccc" /> New Campaign
                        </NavItem>
                    </NavItems>
                </Nav>
                <UserAuthBtn onClick={connectWallet}>
                    {isWalletConnected ? (
                        <div>
                            <FaUserAlt size={15} color="#ccc" />{' '}
                            <span>{userWalletAccount}</span>
                        </div>
                    ) : (
                        'Connect Wallet'
                    )}
                </UserAuthBtn>
            </NavMain>
        </Container>
    );
};

export default Navbar;
