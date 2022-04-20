import React from 'react';
import {
    Container,
    FooterUL,
    FooterItem,
    FooterItems,
    FooterMain,
    Title,
} from './footer.style';
import { IoMdCreate } from 'react-icons/io';
import { MdCampaign } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <Container>
            <Title>
                AEI<span>OU</span>
            </Title>
            <FooterMain>
                <FooterUL>
                    <FooterItems>
                        <FooterItem to="/">
                            <FaHome size={25} color="#ccc" /> Home
                        </FooterItem>
                    </FooterItems>
                    <FooterItems>
                        <FooterItem to="/campaigns">
                            <MdCampaign size={25} color="#ccc" /> Campaigns
                        </FooterItem>
                    </FooterItems>
                    <FooterItems>
                        <FooterItem to="/new-campaign">
                            <IoMdCreate size={25} color="#ccc" /> New Campaign
                        </FooterItem>
                    </FooterItems>
                </FooterUL>
            </FooterMain>
        </Container>
    );
};

export default Footer;
