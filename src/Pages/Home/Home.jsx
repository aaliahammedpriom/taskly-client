import { NavLink, Outlet } from 'react-router';
import { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    const { user, isDark } = useContext(AuthContext)
console.log(user.uid)

    return (
        <div data-theme={isDark ? "dark" : "light"}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;