import React from 'react';
import ArrowIcon from '../../../public/Right.svg'
import womanGreen from '../../../public/womanGreen.png'
import dishIcon from '../../../public/dish.svg'
import WeakRadio from "../../shared/ui/WeakRadio.jsx";
import DishItem from "../../shared/ui/DishItem.jsx";

import RightIcon from "../../../public/Right.svg"

import Dish1photo from "../../../public/dish1.png"
import Dish2photo from "../../../public/dish2.png"
import Dish3photo from "../../../public/dish3.png"
import Dish4photo from "../../../public/dish4.png"
import Dish5photo from "../../../public/dish5.png"
import ButtonContinue from "../../shared/ui/ButtonContinue.jsx";

function Main() {

    return (
        <div className='bg-[#6CC100] h-full max-w-[360px] w-screen border-r-4'>
            <div className='h-11'>
                <img className='w-6 h-6 ml-4 relative top-2' src={ArrowIcon} style={{transform: 'rotate(180deg)'}} alt="" />
            </div>
            <div>
                <div className='h-[200px] inline-flex relative'>
                    <div className='text-white p-9 flex flex-col gap-[6px] mb-[60px]'>
                        <h1 className='text-[16px] font-bold'>Light</h1>
                        <p className='text-[14px] items-center'>1000 - 1200 Ккал/день</p>
                        <p className='inline-flex gap-[6px]'><img className='' src={dishIcon} alt="" /> 5 блюд/день</p>
                        <p style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}} className='text-white rounded-xl py-[8px] px-[14px] mt-[8px]  text-center'>от 1341 Р/день</p>
                    </div>
                    <img className='absolute h-[193px] w-[235px] bottom-0 left-40' src={womanGreen} alt="" />
                </div>
                <div className='bg-white h-full rounded-t-[20px]'>
                    <WeakRadio/>
                    <div className="flex divide-x divide-gray-300">
                        <div className='px-[22px]'>
                            <p className='font-bold text-[16px]'>1164</p>
                            <p className='text-[14px] text-[#A8ACB5]'>Ккал</p>
                        </div>
                        <div className='px-[22px]'>
                            <p className='font-bold text-[16px]'>1164</p>
                            <p className='text-[14px] text-[#A8ACB5]'>Белки</p>
                        </div>
                        <div className='px-[22px]'>
                            <p className='font-bold text-[16px]'>1164</p>
                            <p className='text-[14px] text-[#A8ACB5]'>Жиры</p>
                        </div>
                        <div className='px-[22px]'>
                            <p className='font-bold text-[16px]'>1164</p>
                            <p className='text-[14px] text-[#A8ACB5]'>Углеводы</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <DishItem photo={Dish1photo} kkal='210' order='1-й завтрак' text='Омлет со стручковой фасолью и моцареллой'/>
                        <DishItem photo={Dish2photo} kkal='134' order='2-й завтрак' text='Йогурт с вишневым конфитюром и
семенами подсолнечника'/>
                        <DishItem photo={Dish3photo} kkal='406' order='Обед' text='Говядина в сырном соусе с чечевицей'/>
                        <DishItem photo={Dish4photo} kkal='186' order='Полдник' text='Свекла с черносливом и грецким орехом'/>
                        <DishItem photo={Dish5photo} kkal='229' order='Ужин' text='Куриное филе со слайсами кукурузы на
гриле'/>
                    </div>
                    <div className='mt-2 h-full p-5 shad rounded-t-[20px]
    shadow-[12px_0px_17px_rgba(0,0,0,0.03),_5px_0px_22px_rgba(0,0,0,0.03),_7px_0px_8px_rgba(0,0,0,0.04)] '>
                        <ButtonContinue className=' w-full' text='Продолжить' icon={RightIcon}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;