import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MainSide({side}) {
    const location = useLocation();
    const [url, setUrl] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
       let url = location.pathname.split('/')
       setUrl(url);
    }, [location.pathname])

    return (
        <div onClick={() => navigate(`${side.href}`)} className={`${url[1] === (url.length < 3 && side?.href?.replace('/', "")) ? "sidebar__main-active" : ""} sidebar__main text-end`}>
            {side.icon}
            <p className="title">{side.title}</p>
        </div>
    )
}

export default MainSide;