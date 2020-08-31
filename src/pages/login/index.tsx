import React, {FC} from 'react';

import { UserNameForm } from 'modules/user/components';

const LoginPage: FC = (props) => {
    return (
        <div className={ 'h-100 container-fluid' }>
            <div className={ 'd-flex align-items-center justify-content-center h-100' }>
                <div className="d-flex flex-column">
                    <h1 className="text align-self-center p-2">Welcome, enter your name:</h1>
                    <div className="row align-self-center">
                        <UserNameForm { ...props } />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
