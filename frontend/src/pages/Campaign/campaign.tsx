import React, { useEffect, useState } from 'react';
import {
    ApproveButton,
    BannerContributeButton,
    BannerDesc,
    BannerImg,
    BannerImgContainer,
    BannerMain,
    BannerTitle,
    Container,
    ContractDetailsText,
    ContractRequestContainer,
    ContractRequestCreateButton,
    FinalizeButton,
    RequestTable,
    RequestTableBody,
    RequestTableContainer,
    RequestTableData,
    RequestTableHead,
    RequestTableHeader,
    RequestTableRow,
} from './campaign.style';
import { onGetContractByAddress } from './../../redux/actions/contract';
import { onClearContractError } from './../../redux/reducers/contract';
import { useAppDispatch, useAppSelector } from './../../hooks/hooks';
import { useParams } from 'react-router-dom';
import ErrorModal from '../../components/Modals/Error/error';
import LoadingModal from '../../components/Modals/Loading/loading';
import Web3 from 'web3';

const Campaign: React.FC = () => {
    const params = useParams();
    const address = params.address;
    const [isTargetCompleted, setIsTargetCompleted] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const isWalletConnected = useAppSelector(
        (state) => state.users.isWalletConnected
    );
    const contractDetails = useAppSelector(
        (state) => state.contracts.singleContract
    );
    const loading = useAppSelector((state) => state.contracts.loading);
    const error = useAppSelector((state) => state.contracts.error);
    const clearError = () => dispatch(onClearContractError());

    console.log(contractDetails, loading, error);

    useEffect(() => {
        dispatch(onGetContractByAddress(String(address)));
    }, []);

    return (
        <React.Fragment>
            <ErrorModal
                content={error}
                showModal={!!error}
                closeModal={clearError}
            />
            <LoadingModal showModal={loading} />
            <Container>
                <BannerImgContainer>
                    <BannerImg src={contractDetails.imgSource} alt="banner" />
                </BannerImgContainer>
                <BannerMain>
                    <BannerTitle>{contractDetails.title}</BannerTitle>
                    <BannerContributeButton>Contribute</BannerContributeButton>
                </BannerMain>
                <BannerDesc>{contractDetails.description}</BannerDesc>
                <ContractDetailsText>
                    <label>Contract Address</label>
                    <span>{contractDetails.contractAddress}</span>
                </ContractDetailsText>
                <ContractDetailsText>
                    <label>Balance</label>
                    <span>
                        {contractDetails.balance &&
                            Web3.utils.fromWei(
                                contractDetails.balance,
                                'ether'
                            )}{' '}
                        ETH
                    </span>
                </ContractDetailsText>
                <ContractDetailsText>
                    <label>Target</label>
                    <span>
                        {contractDetails.targetAmount &&
                            Web3.utils.fromWei(
                                String(contractDetails.targetAmount),
                                'ether'
                            )}{' '}
                        ETH
                    </span>
                </ContractDetailsText>
                <ContractDetailsText>
                    <label>Manager</label>
                    <span>{contractDetails.managerAddress}</span>
                </ContractDetailsText>
                <ContractDetailsText>
                    <label>Minimum Contribution Amount</label>
                    <span>
                        {Web3.utils.fromWei(
                            String(contractDetails.minimumAmount),
                            'ether'
                        )}{' '}
                        ETH
                    </span>
                </ContractDetailsText>
                <ContractDetailsText>
                    <label>Total Contributors</label>
                    <span>{contractDetails.totalContributors}</span>
                </ContractDetailsText>
                <ContractRequestContainer>
                    <ContractDetailsText>
                        <label>
                            Requests (<b> {contractDetails.totalRequest} </b>)
                        </label>
                    </ContractDetailsText>
                    <ContractRequestCreateButton
                        to={`/requests/${address}/new`}
                    >
                        Create Request
                    </ContractRequestCreateButton>
                </ContractRequestContainer>
                <RequestTableContainer>
                    <RequestTable>
                        <RequestTableHead>
                            <RequestTableRow>
                                <RequestTableHeader>ID</RequestTableHeader>
                                <RequestTableHeader>Title</RequestTableHeader>
                                <RequestTableHeader>
                                    Description
                                </RequestTableHeader>
                                <RequestTableHeader>
                                    Transfer Amount
                                </RequestTableHeader>
                                <RequestTableHeader>
                                    Receiver
                                </RequestTableHeader>
                                <RequestTableHeader>
                                    Approvals
                                </RequestTableHeader>
                                <RequestTableHeader>
                                    Completed
                                </RequestTableHeader>
                                <RequestTableHeader>Approve</RequestTableHeader>
                                <RequestTableHeader>
                                    Finalize
                                </RequestTableHeader>
                            </RequestTableRow>
                        </RequestTableHead>
                        <RequestTableBody>
                            {contractDetails.requests?.map((request) => (
                                <RequestTableRow>
                                    <RequestTableData>
                                        {request.requestID}
                                    </RequestTableData>
                                    <RequestTableData>
                                        {request.requestTitle}
                                    </RequestTableData>
                                    <RequestTableData>
                                        {request.requestDescription}
                                    </RequestTableData>
                                    <RequestTableData>
                                        {Web3.utils.fromWei(
                                            request.transferAmount,
                                            'ether'
                                        )}{' '}
                                        ETH
                                    </RequestTableData>
                                    <RequestTableData>
                                        {request.requestAmountReceiver}
                                    </RequestTableData>
                                    <RequestTableData>
                                        {request.approvalsCount}/
                                        {contractDetails.totalContributors}
                                    </RequestTableData>
                                    <RequestTableData>
                                        {request.isRequestCompleted
                                            ? 'Yes'
                                            : 'No'}
                                    </RequestTableData>
                                    <RequestTableData>
                                        <ApproveButton>Approve</ApproveButton>
                                    </RequestTableData>
                                    <RequestTableData>
                                        <FinalizeButton>
                                            Finalize
                                        </FinalizeButton>
                                    </RequestTableData>
                                </RequestTableRow>
                            ))}
                        </RequestTableBody>
                    </RequestTable>
                </RequestTableContainer>
            </Container>
        </React.Fragment>
    );
};

export default Campaign;
