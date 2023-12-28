import React from 'react';
import {
    Container,
    BannerContainer,
    BannerImage,
    Banner,
    Main,
    Content,
    ContentHead,
    ContentPara,
    WorksContainer,
    WorksHead,
    WorksHeadContainer,
    WorksBoxContainer,
    WorksBox,
    WorksBoxIconContainer,
    WorksBoxTitle,
    WorksBoxDesc,
} from './home.style';
import bannerImage from './../../assets/images/banner.png';
import { AiFillBulb } from 'react-icons/ai';
import { MdCampaign } from 'react-icons/md';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { BiShareAlt } from 'react-icons/bi';

const Layout: React.FC = () => {
    return (
        <Container>
            <Main>
                <Content>
                    <ContentHead>
                        Crowdfunding <span>Platform</span>
                    </ContentHead>
                    <ContentPara>
                        Powered by Ethereum <span> Blockchain</span>
                    </ContentPara>
                </Content>
                <BannerContainer>
                    <Banner>
                        <BannerImage src={bannerImage} />
                    </Banner>
                </BannerContainer>
            </Main>
            <WorksContainer>
                <WorksHeadContainer>
                    <WorksHead>
                        <AiFillBulb /> HOW IT <span> WORKS</span>
                    </WorksHead>
                </WorksHeadContainer>
                <WorksBoxContainer>
                    <WorksBox>
                        <WorksBoxIconContainer>
                            <MdCampaign />
                        </WorksBoxIconContainer>
                        <WorksBoxTitle>Create a Campaign</WorksBoxTitle>
                        <WorksBoxDesc>
                            Got an Idea? Great. It’ll take only 2 minutes. Just
                            enter a few details about the funds and you are good
                            to go.
                        </WorksBoxDesc>
                    </WorksBox>
                    <WorksBox>
                        <WorksBoxIconContainer>
                            <BiShareAlt />
                        </WorksBoxIconContainer>
                        <WorksBoxTitle>Share your Campaign</WorksBoxTitle>
                        <WorksBoxDesc>
                            All you need to do is share the Campaign with your
                            friends, family and others. In no time, support will
                            start pouring in.
                        </WorksBoxDesc>
                    </WorksBox>
                    <WorksBox>
                        <WorksBoxIconContainer>
                            <FaMoneyCheckAlt />
                        </WorksBoxIconContainer>
                        <WorksBoxTitle>
                            Request and Withdraw Funds
                        </WorksBoxTitle>
                        <WorksBoxDesc>
                            The funds raised can be withdrawn directly to the
                            recipient when 50% of the contributors approve of
                            the Withdrawal Request.
                        </WorksBoxDesc>
                    </WorksBox>
                </WorksBoxContainer>
            </WorksContainer>
        </Container>
    );
};

export default Layout;
