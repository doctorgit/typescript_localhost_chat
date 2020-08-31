import React from 'react';
import './spinner.css';

const Spinner = () => {
    return (
        <div className={ 'container-fluid h-75' }>
          <div className={ 'row h-100 align-items-center' }>
            <div className={ 'col-1 mx-auto' }>
              loading...
            </div>
          </div>
        </div>
    );
};

export default Spinner;
