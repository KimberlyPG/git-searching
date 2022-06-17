import { Link } from "react-router-dom";
// import { ReactComponent as GitLogo } from '../../assets/github-logo.png';
const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <img src="../../assets/github-logo.png" alt="" />
            <Link to='/'><img src="../../assets/github-logo.png" alt="" /></Link>
            <Link to='/search'>SEARCH</Link>
        </div>
        )
}

export default Home;