import React from 'react';

function DishItem({photo, text, kkal, order}) {
    return (
        <div className="bg-white w-[153px] h-[238px] rounded-[12px] m-auto overflow-hidden">
            <img className="h-1/2" src={photo} alt=''/>
            <div className="m-3">
                <p className="text-[12px] h-[70px] font-normal">{text}</p>
                <div
                    className="pt-[8px] text-[9px] flex gap-[8px] flex-row justify-between border-t border-[#ebedf2] text-[#a8acb5]">
                    <p>{order}</p>
                    <p>{kkal} Ккал</p>
                </div>
            </div>
        </div>
    );
}

export default DishItem;