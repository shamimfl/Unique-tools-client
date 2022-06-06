import React from 'react';

const GoogleSingIn = () => {
    return (
        <div className='w-2/6 flex justify-center'>
            <button className='flex items-center  font-bold justify-between border-2 border-pink-400 text-pink-400 p-3 w-full'>
                <img className='h-6 w-6' src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png" alt="" />
                <small>Sing In with Google</small>
            </button>
        </div>
    );
};

export default GoogleSingIn;