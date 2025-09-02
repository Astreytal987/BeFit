import React from 'react';

function ButtonContinue({text, icon, className}) {
    return (
        <button className={'text-white bg-[#6CC100] rounded-[14px] p-3 ' + className}>{icon ? <div className='inline-flex gap-2'>
            <span>{text}</span>
            <img className='' src={icon} alt="" />
        </div> : text}</button>
    );
}

export default ButtonContinue;