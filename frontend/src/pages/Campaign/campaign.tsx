import React, { useEffect } from 'react';
import {} from './campaign.style';
import { onGetContractByAddress } from './../../redux/actions/contract';
import { onClearContractError } from './../../redux/reducers/contract';
import { useAppDispatch, useAppSelector } from './../../hooks/hooks';
import { useParams } from 'react-router-dom';
import ErrorModal from '../../components/Modals/Error/error';
import LoadingModal from '../../components/Modals/Loading/loading';

const Campaign: React.FC = () => {
    const params = useParams();
    const address = params.address;
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
        </React.Fragment>
    );
};

export default Campaign;
