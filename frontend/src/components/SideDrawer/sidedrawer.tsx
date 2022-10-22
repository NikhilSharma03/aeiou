import React from 'react';
import {
    Backdrop,
    Container,
    Nav,
    NavItem,
    NavItems,
    NavMain,
    UserAuthBtn,
} from './sidedrawer.style';
import { IoMdCreate } from 'react-icons/io';
import { MdCampaign } from 'react-icons/md';
import { FaHome, FaUserAlt } from 'react-icons/fa';
import { onConnectWallet } from './../../redux/actions/user';
import { useAppDispatch, useAppSelector } from './../../hooks/hooks';

interface Props {
    showSD: boolean;
    toggleSD: any;
}

const SideDrawer: React.FC<Props> = ({ showSD, toggleSD }) => {
    const dispatch = useAppDispatch();
    const connectWallet = () => dispatch(onConnectWallet());
    const isWalletConnected: boolean = useAppSelector(
        (state) => state.users.isWalletConnected
    );
    const userWalletAccount: string = useAppSelector(
        (state) => state.users.userWalletAccount
    );

    return (
        <>
            {showSD && <Backdrop />}
            <Container
                style={{
                    transform: showSD ? 'translateX(0)' : 'translateX(-100%)',
                }}
            >
                <NavMain>
                    <Nav onClick={toggleSD}>
                        <NavItems>
                            <NavItem to="/">
                                <FaHome size={25} color="#ccc" /> Home
                            </NavItem>
                        </NavItems>
                        {isWalletConnected && (
                            <NavItems>
                                <NavItem to="/campaigns">
                                    <MdCampaign size={25} color="#ccc" />{' '}
                                    Campaigns
                                </NavItem>
                            </NavItems>
                        )}
                        {isWalletConnected && (
                            <NavItems>
                                <NavItem to="/campaigns/new">
                                    <IoMdCreate size={25} color="#ccc" /> New
                                    Campaign
                                </NavItem>
                            </NavItems>
                        )}
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
        </>
    );
};

export default SideDrawer;
