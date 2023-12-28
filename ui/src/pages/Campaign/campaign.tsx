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
    onApproveRequest,
    onContribute,
    onFinalizeRequest,
    onGetContractByAddress,
} from './../../redux/actions/contract';
import {
    onClearContractError,
    onSetContractError,
    onResetComplete,
} from './../../redux/reducers/contract';
import { useAppDispatch, useAppSelector } from './../../hooks/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorModal from '../../components/Modals/Error/error';
import LoadingModal from '../../components/Modals/Loading/loading';
import SuccessModal from '../../components/Modals/Success/success';
import ContributeModal from '../../components/Modals/Contribute/contribute';
import Web3 from 'web3';
import Tippy from '@tippyjs/react';

const Campaign: React.FC = () => {
    const params = useParams();
    const address = params.address;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [successMsg, setSuccessMsg] = useState<string>('');
    const [contributeAmount, setContributeAmount] = useState<string>('');
    const [showContributeModal, setShowContributeModal] =
        useState<boolean>(false);
    const isWalletConnected = useAppSelector(
        (state) => state.users.isWalletConnected
    );
    const web3 = useAppSelector((state) => state.users.web3);
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
    ) =>
        dispatch(
            onContribute({
                camp: { campaignAddress, userAddress, amount },
                web3,
            })
        );

    const approve = (
        campaignAddress: string,
        userAddress: string,
        requestID: number
    ) =>
        dispatch(
            onApproveRequest({
                camp: { campaignAddress, userAddress, requestID },
                web3,
            })
        );
    const finalize = (
        campaignAddress: string,
        userAddress: string,
        requestID: number
    ) =>
        dispatch(
            onFinalizeRequest({
                camp: { campaignAddress, userAddress, requestID },
                web3,
            })
        );

    useEffect(() => {
        if (!isWalletConnected) {
            navigate('/');
            return;
        }
        if (web3) {
            dispatch(
                onGetContractByAddress({ address: String(address), web3 })
            );
        }
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
        await dispatch(
            onGetContractByAddress({ address: String(address), web3 })
        );
    };

    const approveHandler = async (requestID: number) => {
        if (!userWalletAccount) {
            setError('Please connect to metamask wallet!');
            setContributeAmount('');
            return;
        }
        await approve(String(address), userWalletAccount, requestID);
        setSuccessMsg('Approved Successfully!');
        await dispatch(
            onGetContractByAddress({ address: String(address), web3 })
        );
    };

    const finalizeHandler = async (
        requestID: number,
        approvalsCount: number,
        amount: number
    ) => {
        if (!userWalletAccount) {
            setError('Please connect to metamask wallet!');
            return;
        }
        if (
            userWalletAccount.toLocaleLowerCase() !==
            contractDetails.managerAddress.toLowerCase()
        ) {
            setError('Unauthorized Request!');
            return;
        }
        const tC = +String(contractDetails.totalContributors);
        if (approvalsCount <= Math.floor(tC / 2)) {
            setError('Not enough approvals on the request!');
            return;
        }
        if (amount > +contractDetails.balance) {
            setError('Not enough balance to finalize the request!');
            return;
        }
        await finalize(String(address), userWalletAccount, requestID);
        setSuccessMsg('Finalized Successfully!');
        await dispatch(
            onGetContractByAddress({ address: String(address), web3 })
        );
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
                        userWalletAccount.toLocaleLowerCase() && (
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
                                    <Tippy
                                        content={`${request.requestID}`}
                                        interactive={true}
                                        interactiveBorder={20}
                                    >
                                        <RequestTableData>
                                            {request.requestID}
                                        </RequestTableData>
                                    </Tippy>
                                    <Tippy
                                        content={`${request.requestTitle}`}
                                        interactive={true}
                                        interactiveBorder={20}
                                    >
                                        <RequestTableData>
                                            {request.requestTitle}
                                        </RequestTableData>
                                    </Tippy>
                                    <Tippy
                                        content={`${request.requestDescription}`}
                                        interactive={true}
                                        interactiveBorder={20}
                                    >
                                        <RequestTableData>
                                            {request.requestDescription}
                                        </RequestTableData>
                                    </Tippy>
                                    <Tippy
                                        content={`${Web3.utils.fromWei(
                                            request.transferAmount,
                                            'ether'
                                        )} ETH`}
                                        interactive={true}
                                        interactiveBorder={20}
                                    >
                                        <RequestTableData>
                                            {Web3.utils.fromWei(
                                                request.transferAmount,
                                                'ether'
                                            )}{' '}
                                            ETH
                                        </RequestTableData>
                                    </Tippy>

                                    <Tippy
                                        content={`${request.requestAmountReceiver}`}
                                        interactive={true}
                                        interactiveBorder={20}
                                    >
                                        <RequestTableData>
                                            {request.requestAmountReceiver}
                                        </RequestTableData>
                                    </Tippy>
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
                                        <ApproveButton
                                            onClick={() =>
                                                approveHandler(
                                                    request.requestID
                                                )
                                            }
                                            disabled={
                                                request.isRequestCompleted
                                            }
                                        >
                                            Approve
                                        </ApproveButton>
                                    </RequestTableData>
                                    <RequestTableData>
                                        <FinalizeButton
                                            onClick={() =>
                                                finalizeHandler(
                                                    request.requestID,
                                                    request.approvalsCount,
                                                    request.transferAmount
                                                )
                                            }
                                            disabled={
                                                request.isRequestCompleted
                                            }
                                        >
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
