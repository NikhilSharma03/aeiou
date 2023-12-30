import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

import Metamask from '../Modals/Metamask/metamask';

import { IoMdCreate } from 'react-icons/io';
import { MdCampaign } from 'react-icons/md';
import { FaHome, FaWallet } from 'react-icons/fa';

import { useAppDispatch, useAppSelector } from './../../hooks/hooks';

import { formatAddress } from '../../utils/formatAddress';

import { onConnectWallet } from './../../redux/actions/user';
import { onClearUserError } from './../../redux/reducers/user';
import ErrorModal from '../Modals/Error/error';

interface Props {
    toggleSideDrawer: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const Navbar: React.FC<Props> = ({ toggleSideDrawer }) => {
    const [changeNavbarColor, setChangeNavbarColor] = useState(false);

    const isWalletConnected: boolean = useAppSelector(
        (state) => state.users.isWalletConnected
    );
    const userWalletAccount: string = useAppSelector(
        (state) => state.users.userWalletAccount
    );
    const error: string = useAppSelector((state) => state.users.error);

    const dispatch = useAppDispatch();
    const connectWallet = () => dispatch(onConnectWallet());
    const clearUserError = () => dispatch(onClearUserError());

    const navbarScrollHandler = () => {
        if (window.scrollY >= 100) {
            setChangeNavbarColor(true);
        } else {
            setChangeNavbarColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', navbarScrollHandler);

        return () => window.removeEventListener('scroll', navbarScrollHandler);
    }, []);

    return (
        <>
            {error === 'Please Install Metamask' && (
                <Metamask showModal={!!error} closeModal={clearUserError} />
            )}
            {error !== 'Please Install Metamask' && (
                <ErrorModal
                    content={error}
                    showModal={!!error}
                    closeModal={clearUserError}
                />
            )}
            <Container changeNavbarColor={changeNavbarColor}>
                <Title>
                    <Link to="/">
                        AEI<span>OU</span>
                    </Link>
                </Title>
                {isWalletConnected && (
                    <NavMain>
                        <Nav>
                            <NavItems>
                                <NavItem to="/">
                                    <FaHome size={25} color="#ccc" /> Home
                                </NavItem>
                            </NavItems>
                            <NavItems>
                                <NavItem to="/campaigns">
                                    <MdCampaign size={25} color="#ccc" />{' '}
                                    Campaigns
                                </NavItem>
                            </NavItems>
                            <NavItems>
                                <NavItem to="/campaigns/new">
                                    <IoMdCreate size={25} color="#ccc" /> New
                                    Campaign
                                </NavItem>
                            </NavItems>
                        </Nav>
                    </NavMain>
                )}
                <SideBarMenu onClick={toggleSideDrawer}>
                    <div></div>
                    <div></div>
                    <div></div>
                </SideBarMenu>
                <UserAuthBtn onClick={connectWallet}>
                    {isWalletConnected ? (
                        <div>
                            <FaWallet size={15} color="#ccc" />{' '}
                            <span>{formatAddress(userWalletAccount)}</span>
                        </div>
                    ) : (
                        'Connect Wallet'
                    )}
                </UserAuthBtn>
            </Container>
        </>
    );
};

export default Navbar;
