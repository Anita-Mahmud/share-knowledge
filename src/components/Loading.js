import React from 'react';
import ReactLoading from 'react-loading';
const Loading = ({spokes}) => {
    return (
        <div className='flex justify-center items-center my-32'>
            <ReactLoading type={spokes} color='#A5F1E9' height={100} width={100} className="text-blue-900"/>
        </div>
    );
};

export default Loading;