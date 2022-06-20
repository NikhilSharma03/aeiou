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
import {
    onContribute,
    onGetContractByAddress,
} from './../../redux/actions/contract';
import {
    onClearContractError,
    onSetContractError,
    onResetComplete,
} from './../../redux/reducers/contract';
import { useAppDispatch, useAppSelector } from './../../hooks/hooks';
import { useParams } from 'react-router-dom';
import ErrorModal from '../../components/Modals/Error/error';
import LoadingModal from '../../components/Modals/Loading/loading';
import SuccessModal from '../../components/Modals/Success/success';
import ContributeModal from '../../components/Modals/Contribute/contribute';
import Web3 from 'web3';

const Campaign: React.FC = () => {
    const params = useParams();
    const address = params.address;
    const dispatch = useAppDispatch();
    const [successMsg, setSuccessMsg] = useState<string>('');
    const [contributeAmount, setContributeAmount] = useState<string>('');
    const [showContributeModal, setShowContributeModal] =
        useState<boolean>(false);
    const isWalletConnected = useAppSelector(
        (state) => state.users.isWalletConnected
    );
    const userWalletAccount = useAppSelector(
        (state) => state.users.userWalletAccount
    );
    const contractDetails = useAppSelector(
        (state) => state.contracts.singleContract
    );
    const loading = useAppSelector((state) => state.contracts.loading);
    const error = useAppSelector((state) => state.contracts.error);
    const completed = useAppSelector((state) => state.contracts.completed);

    const clearError = () => dispatch(onClearContractError());
    const setError = (msg: string) => dispatch(onSetContractError(msg));
    const resetComplete = () => dispatch(onResetComplete());
    const contributeToContract = (
        campaignAddress: string,
        userAddress: string,
        amount: string
    ) => dispatch(onContribute({ campaignAddress, userAddress, amount }));

    console.log(contractDetails, loading, error);

    useEffect(() => {
        dispatch(onGetContractByAddress(String(address)));
    }, []);

    const contributeHandler = async () => {
        setShowContributeModal(false);

        if (!userWalletAccount) {
            setError('Please connect to metamask wallet!');
            setContributeAmount('');
            return;
        }

        let contriAmt: string;
        try {
            contriAmt = Web3.utils.toWei(String(contributeAmount), 'ether');
        } catch (err) {
            setError('Please enter number in contribute amount input!');
            setContributeAmount('');
            return;
        }
        const minAmt: number = +String(contractDetails.minimumAmount);
        if (+contriAmt < minAmt) {
            setError('Please enter amount equal or more than minimum value!');
            setContributeAmount('');
            return;
        }

        await contributeToContract(
            String(address),
            userWalletAccount,
            contriAmt
        );
        setSuccessMsg('Contributed Successfully!');
        setContributeAmount('');
    };

    return (
        <React.Fragment>
            <ErrorModal
                content={error}
                showModal={!!error}
                closeModal={clearError}
            />
            <SuccessModal
                content={successMsg}
                showModal={completed}
                closeModal={resetComplete}
            />
            <ContributeModal
                contributeAmount={contributeAmount}
                setContributeAmount={setContributeAmount}
                showModal={showContributeModal}
                onContribute={contributeHandler}
                minimumAmount={String(contractDetails.minimumAmount)}
                closeModal={() => setShowContributeModal(false)}
            />
            <LoadingModal showModal={loading} />
            <Container>
                <BannerImgContainer>
                    <BannerImg src={contractDetails.imgSource} alt="banner" />
                </BannerImgContainer>
                <BannerMain>
                    <BannerTitle>{contractDetails.title}</BannerTitle>
                    <BannerContributeButton
                        onClick={() => setShowContributeModal(true)}
                        disabled={contractDetails.contributors?.includes(
                            userWalletAccount
                        )}
                    >
                        {contractDetails.contributors?.includes(
                            userWalletAccount
                        )
                            ? 'Contributed'
                            : 'Contribute'}
                    </BannerContributeButton>
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
                    {contractDetails.managerAddress.toLowerCase() ===
                        userWalletAccount && (
                        <ContractRequestCreateButton
                            to={`/requests/${address}/new`}
                        >
                            Create Request
                        </ContractRequestCreateButton>
                    )}
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
                                <RequestTableRow key={request.requestID}>
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
