import Logo from "../../assets/image/logo-horiz.png";
import User6LineIcon from 'remixicon-react/User6LineIcon';
import { useLocation, useNavigate } from "react-router-dom";

function Header(){
    const location = useLocation();
    const navigate = useNavigate();


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
                <div className="header-button" onClick={() => navigate('/forms/product')} onPointerEnter={() => console.log('masuk')}>
                    <User6LineIcon style={{paddingRight: '5px'}} />
                    Login / Sign Up
                </div>
            </div>
        </div>
    )
}

export default Header;