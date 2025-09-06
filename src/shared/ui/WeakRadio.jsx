import React, {useState} from 'react';

function WeakRadio() {
    const [value, setValue] = useState(1);

    function changeHandler(event) {
        setValue(event.target.value);
    }

    return (
            <div className="inline-flex space-x-[4px] p-5">
                <label htmlFor="driving" className="relative cursor-pointer">
                    <input
                        className="opacity-0 absolute peer"
                        type="radio" name="radio" id="driving" value="1" checked={value === '1'} onChange={changeHandler}
                    />
                    <span className="flex items-center justify-center w-[42px] text-[11px]  h-[50px] p-3 transition-all rounded-2xl text-[#6B707B] peer-checked:bg-[#6CC100] peer-checked:text-blue-100 peer-focus:text-white border border-[#EBEDF2]">ПН</span>
                </label>

                <label htmlFor="cycling" className="relative cursor-pointer">
                    <input
                        className="opacity-0 absolute peer"
                        type="radio" name="radio" id="cycling" value="2" checked={value === '2'} onChange={changeHandler}
                    />
                    <span className="flex items-center justify-center w-[42px] text-[11px] h-[50px]  p-3 transition-all rounded-2xl text-[#6B707B] peer-checked:bg-[#6CC100] peer-checked:text-blue-100 peer-focus:text-white border border-[#EBEDF2]">ВТ</span>
                </label>

                <label htmlFor="three" className="relative cursor-pointer">
                    <input
                        className="opacity-0 absolute peer"
                        type="radio" name="radio" id="three" value="3" checked={value === '3'} onChange={changeHandler}
                    />
                    <span className="flex items-center justify-center w-[42px] text-[11px]  h-[50px] p-3 transition-all rounded-2xl text-[#6B707B] peer-checked:bg-[#6CC100] peer-checked:text-blue-100 peer-focus:text-white border border-[#EBEDF2]">СР</span>
                </label>

                <label htmlFor="four" className="relative cursor-pointer">
                    <input
                        className="opacity-0 absolute peer"
                        type="radio" name="radio" id="four" value="4" checked={value === '4'} onChange={changeHandler}
                    />
                    <span className="flex items-center justify-center w-[42px] text-[11px] h-[50px]  p-3 transition-all rounded-2xl text-[#6B707B] peer-checked:bg-[#6CC100] peer-checked:text-blue-100 peer-focus:text-white border border-[#EBEDF2]">ЧТ</span>
                </label>

                <label htmlFor="five" className="relative cursor-pointer">
                    <input
                        className="opacity-0 absolute peer"
                        type="radio" name="radio" id="five" value="5" checked={value === '5'} onChange={changeHandler}
                    />
                    <span className="flex items-center justify-center w-[42px] text-[11px]  h-[50px] p-3 transition-all rounded-2xl text-[#6B707B] peer-checked:bg-[#6CC100] peer-checked:text-blue-100 peer-focus:text-white border border-[#EBEDF2]">ПТ</span>
                </label>

                <label htmlFor="six" className="relative cursor-pointer">
                    <input
                        className="opacity-0 absolute peer"
                        type="radio" name="radio" id="six" value="6" checked={value === '6'} onChange={changeHandler}
                    />
                    <span className="flex items-center justify-center w-[42px] text-[11px] h-[50px]  p-3 transition-all rounded-2xl text-[#6B707B] peer-checked:bg-[#6CC100] peer-checked:text-blue-100 peer-focus:text-white border border-[#EBEDF2]">СБ</span>
                </label>

                <label htmlFor="seven" className="relative cursor-pointer">
                    <input
                        className="opacity-0 absolute peer"
                        type="radio" name="radio" id="seven" value="7" checked={value === '7'} onChange={changeHandler}
                    />
                    <span className="flex items-center justify-center w-[42px] text-[11px]  h-[50px] p-3 transition-all rounded-2xl text-[#6B707B] peer-checked:bg-[#6CC100] peer-checked:text-blue-100 peer-focus:text-white border border-[#EBEDF2]">ВС</span>
                </label>
            </div>
    );
}

export default WeakRadio;