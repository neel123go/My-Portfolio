import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='py-10 flex justify-center items-center'>
            <InfinitySpin color="royalblue" ></InfinitySpin>
        </div>
    );
};

export default Loading;