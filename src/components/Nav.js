import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/UserSlice';
import { auth, provider } from '../firebase';

const Nav = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserName);
    const photo = useSelector(selectUserPhoto);
    const navigate = useNavigate();
    const [show, handleShow] = useState(false); 


    function handleChange() {
        auth.signInWithPopup(provider).then((result) => {
            setUser(result.user);
            navigate("/movie-page");
        }).catch((err) => alert(err.message));
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    const handleSignOut = () => {
        auth.signOut().then(() => {
            dispatch(setSignOutState());
            navigate("/");
        }).catch(err => alert(err.message));
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    return (
    <nav className={show && "nav"}>
        <a href='/'><img src='/Images/logo.png' alt='' /></a>
        <div>
            {user ? 
                    <div className='profile'><img className='user' src={photo} alt='user' /><span onClick={handleSignOut}>Sign Out</span></div> 
                : 
                    <button onClick={handleChange} >Sign In</button>
            }
        </div>
        
    </nav>
    )
}

export default Nav
