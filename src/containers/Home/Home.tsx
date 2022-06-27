import { FC } from 'react';
import { HomeBackground, H1} from './home.styles';
import Navigation from '../Navigation';
import Footer from '../../components/Footer';

const Home:FC = () => {
    return (
        <>
            <HomeBackground>
                <Navigation background='' />
                <H1>GitHub User Information</H1>
            </HomeBackground>
            <Footer />
        </>
    )      
}

export default Home;