import { HomeBackground, H1} from './home.styles';
import Navigation from '../Navigation';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <HomeBackground>
                <Navigation />
                <H1>GitHub User Information</H1>
            </HomeBackground>
            <Footer position="relative"/>
        </>
    )      
}

export default Home;