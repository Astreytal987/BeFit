import React from 'react';
import closeIcon from "../../../public/Close.svg"
import LogoIcon from "../../../public/Logo.svg"
import CarIcon from "../../../public/Car.svg"
import RightIcon from "../../../public/Right.svg"
import HeartIcon from "../../../public/Heart.svg"
import HandIcon from "../../../public/Hand.svg"
import FramedText from "../../shared/ui/FramedText.jsx";
import ButtonContinue from "../../shared/ui/ButtonContinue.jsx";

function WelcomeCarousel(props) {
    return (
        <div className='bg-gray-950 flex justify-center items-center h-screen w-screen'>
            <div>
                <img className="ml-auto mb-4" src={closeIcon} alt="" />
                <div className="bg-white rounded-2xl flex flex-col p-[20px] justify-center w-[270px]">
                    <div className='inline-flex gap-3'>
                        <img src={LogoIcon} alt="" />
                        <p className='text-xs'>сервис доставки <br/> здорового питания</p>
                    </div>
                    <div className="flex flex-col gap-3 mt-5 mp-5">
                        <FramedText text='Рационы с доставкой' textTwoStr="на каждый день" icon={CarIcon}/>
                        <FramedText text='Индивидуальный подход:' textTwoStr="8 программ под ваши цели" icon={HeartIcon}/>
                        <FramedText text='Без готовки, без химии —' textTwoStr="только польза" icon={HandIcon}/>
                    </div>
                    <ButtonContinue className='mt-5' text="Начать выбор" icon={RightIcon}/>
                </div>
            </div>
        </div>
    );
}

export default WelcomeCarousel;