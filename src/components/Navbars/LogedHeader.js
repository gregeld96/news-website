import Logo from "../../assets/image/logo-horiz.png";
import User6LineIcon from 'remixicon-react/User6LineIcon';
import LogoutBoxRLineIcon from 'remixicon-react/LogoutBoxRLineIcon';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logout } from "../../store/global/actions";

function LoggedHeader(){
    const [urlComplete, setUrlComplete] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.global);


    const navList = [
        {
            title: 'Home',
            internal: true,
            parentUrl: '',
            url: '/'
        },
        {
            title: 'Category',
            internal: true,
            parentUrl: 'activities',
            url: '/categories'
        },
    ];

    useEffect(() => {
        console.log(location.pathname);
        setUrlComplete(location.pathname === '/' ? [""] : location.pathname.split('/'))
    }, [location.pathname])

    return (
        <div className="custom-navbar custom-navbar-header">
            <div>
                <img src={Logo} style={{height: '10vh'}} onClick={() => navigate('/')}/>
            </div>
            <div className="custom-navbar custom-navbar-nav-link">
                {
                    navList.map((nav, index) => {
                        if(nav.internal){
                            return (
                                <p key={index} className={`${location.pathname.split('/')[1] === nav.parentUrl ? 'active' : ''}`} onClick={() => navigate(nav.url)}>{nav.title}</p>
                            )
                        } else {
                            return (
                                <a key={index} href={nav.url} target="_blank" className="link">{nav.title}</a>
                            )
                        }
                    })
                }
            </div>
            <div className="custom-navbar custom-navbar-account-link text-end">
                {
                    urlComplete?.[1] === 'dashboard' ? <div className="header-button" onClick={() => dispatch(logout())} onPointerEnter={() => console.log('masuk')}>
                    <LogoutBoxRLineIcon size={35} style={{color: 'white', paddingRight: '5px'}}/>
                        Logout
                    </div> : <div className="header-button" onClick={() => navigate('/dashboard')} onPointerEnter={() => console.log('masuk')}>
                        <User6LineIcon style={{paddingRight: '5px'}} />
                        {user?.name}
                    </div>
                }
            </div>
        </div>
    )
}

export default LoggedHeader;