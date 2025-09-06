import React from 'react';
import closeIcon from "../../../public/Close.svg";

function RationCard({photo, name, kkal, text, money, bgColor }) {
    text
    return (
        <div className='border border-[#DCDFE8] flex flex-col h-[298px] w-[320px] rounded-2xl overflow-hidden'>
            <div className={'h-[132px] flex'} style={{ backgroundColor: bgColor }} >
                <div className='flex flex-col  gap-4 mt-[16px] mb-[20px] ml-[14px]'>
                    <div className='text-white'>
                        <h1 className='text-[16px] font-bold'>{name}</h1>
                        <p className='text-[14px] items-center'>{kkal} Ккал/день</p>
                    </div>
                    <p style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}} className='text-white rounded-xl py-[8px] px-[14px] text-center'>от {money} руб/день</p>
                </div>
                <img className="object-contain ml-auto mt-2" src={photo} alt="" />
            </div>
            <div className='flex-1 text-[14px] flex items-center ml-4'>{text}</div>
            <button className='text-[#6CC100] border-t-1 border-[#DCDFE8] h-[54px] mb-auto'>Выбрать</button>
        </div>
    );
}

export default RationCard;