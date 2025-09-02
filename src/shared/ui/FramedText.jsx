import React from 'react';
import LogoIcon from "../../../public/Logo.svg";

function FramedText({text, textTwoStr, icon = false}) {
    return (
        <div className='bg-[#F4FAEB] w-full rounded-[10px] inline-flex items-start justify-start gap-1.5 p-3'>
            <img className='' src={icon} alt="" />
            <div className="inline">
                <p className='text-[13px]'>{text}</p>
                <p className='text-[13px]'>{textTwoStr}</p>
            </div>
        </div>
    );
}

export default FramedText;