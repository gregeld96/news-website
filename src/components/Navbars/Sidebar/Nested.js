
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon';
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function NestedSide({side}) {
    const [show, setShow] = useState(false);
    const location = useLocation();
    const [url, setUrl] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setShow(false);

        let url = location.pathname.split('/')
        setUrl(url);

        if((url[2] === side?.href?.split(new RegExp('/', "g"))[2]) && (url.length > 2)){
            setShow(true);
        }
    }, [location.pathname])

    return (
        <div> 
            <div className={`sidebar__parent text-end`} onClick={() => setShow(!show)}>
                <div style={{display: "flex", alignItems: 'center'}}>
                    {side.icon}
                    <p className="title">{side.title}</p>
                </div>
                {
                    show ? <ArrowDownSLineIcon /> : <ArrowLeftSLineIcon />
                }
            </div>
            {
                show ? <div>
                    {
                        side.children.map((child) => {
                            return (
                                <div onClick={() => navigate(`${side.href}${child.href}`)} className={`${url[3] === child?.href?.replace('/', "") ? "sidebar__children-active" : ""} sidebar__children`}>
                                    <p className="title">{child.title}</p>
                                </div>
                            )
                        })
                    }
                </div> : null
            }
        </div>
    )
}

export default NestedSide;