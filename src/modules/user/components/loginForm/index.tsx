import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSaveUserNameRequest } from '../../actions';
import { onUserNameChanged } from '../../actions/action-creators';
import { getInvalidFlagSelector, getUserNameSelector } from '../../selectors';
import { withChatStoreService } from 'components/hoc';

const UserNameForm: FC<any> = ({ chatStoreService, history }) => {
    const dispatch = useDispatch();

    const name = useSelector(getUserNameSelector);
    const invalidFlag = useSelector(getInvalidFlagSelector);

    const onChange = useCallback((evt) => {
        dispatch(onUserNameChanged(evt.target.value, chatStoreService))
    }, [dispatch, chatStoreService]);

    const onClick = useCallback(() => {
        dispatch(onSaveUserNameRequest(chatStoreService))
            .then(() => history.push({ pathname: 'chat' }));
    }, [dispatch, chatStoreService]);

    return (
        <div className={ 'form-inline' }>
            <div className={ 'form-group row h-100' }>
                <div className={ 'col-xs-10 col-sm-7 col-md-7 col-lg-7 col-xl-7' }>
                    <input
                        className={ 'form-control p-2' + (invalidFlag & 0x1 ? ' is-invalid' : 'is-valid') }
                        type="text"
                        value={ name }
                        onChange={ onChange }
                        required
                    />
                </div>
                <div className={ 'col-xs-10 col-sm-5 col-md-5 col-lg-5 col-xl-5 mt-10' }>
                    <button
                        className="btn btn-success"
                        type="button"
                        name="button"
                        disabled={ !name || !!(invalidFlag & 0x1) }
                        onClick={ onClick }
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default withChatStoreService()(UserNameForm);
