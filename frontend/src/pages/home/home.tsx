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
} from './home.style';
import bannerImage from './../../assets/images/banner.png';

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
        </Container>
    );
};

export default Layout;
