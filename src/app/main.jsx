import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './styles/reset.css';
import './styles/tailwind.css';
import WelcomeCarousel from "../pages/WelcomeCarousel/WelcomeCarousel.jsx";
import ChoiseRation from "../pages/ChoiseRation/ChoiseRation.jsx";
import Main from "../pages/Main/Main.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<ChoiseRation/>*/}
        {/*<WelcomeCarousel/>*/}
        <Main/>
    </StrictMode>,
);