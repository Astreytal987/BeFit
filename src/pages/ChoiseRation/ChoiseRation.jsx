import React from 'react';
import RationCard from "../../shared/ui/RationCard.jsx";
import WomanGreen from "../../../public/womanGreen.png"
import womanBlue from "../../../public/womanBlue.png"
import womanPink from "../../../public/womanPink.png"
import familyRed from "../../../public/familyRed.png"
import manBlue from "../../../public/manBlue.png"

function ChoiseRation() {
    return (
        <div className='bg-white flex flex-col gap-4 justify-center items-center'>
            <h1 className='w-[320px] text-xl font-bold'>Выберите свой рацион</h1>
            <div className='flex flex-col gap-4 '>
                <RationCard photo={WomanGreen} bgColor='#6CC100' name="Light" kkal='1000 - 1200' money='600'
                            text='Программа позволяют бороться с лишним весом. Залог успеха простой — минимум жиров и углеводов, максимум белков и клетчатки! И никаких вредных перекусов.' />
                <RationCard photo={womanBlue} bgColor='#001970' name="Light Premium" kkal='1000 - 1200' money='600'
                            text='Программа позволяют бороться с лишним весом. Залог успеха простой — минимум жиров и углеводов, максимум белков и клетчатки! И никаких вредных перекусов.' />
                <RationCard photo={womanPink} bgColor='#FF6889' name="Normal" kkal='1300 - 1500' money='600'
                            text='Программа для тех, кто ведет активный образ жизни, занимается спортом и при этом хочет быть в форме.' />
                <RationCard photo={womanBlue} bgColor='#001970' name="Normal Premium" kkal='2100 - 2200' money='600'
                            text='Программа — основа для тех, кто соблюдает активный образ жизни, занимается спортом и всегда хочет быть в форме. ' />
                <RationCard photo={familyRed} bgColor='#FF4F4F' name="Strong" kkal='1300 - 1500' money='600'
                            text='Питание для поддержания и набора мышечной массы с доставкой.' />
                <RationCard photo={manBlue} bgColor='#00196E' name="Strong Premium" kkal='2000 - 2200' money='600'
                            text='Питание для поддержания и набора мышечной массы с доставкой.' />

            </div>
        </div>
    );
}

export default ChoiseRation;