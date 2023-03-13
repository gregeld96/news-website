import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NotificationLineIcon from 'remixicon-react/NotificationLineIcon';
import User6LineIcon from 'remixicon-react/User6LineIcon';
import AddCircleLineIcon from 'remixicon-react/AddCircleLineIcon';
import ListCheckIcon from 'remixicon-react/ListCheckIcon';
import RecordCircleLineIcon from 'remixicon-react/RecordCircleLineIcon';
import StackLineIcon from 'remixicon-react/StackLineIcon';
import MainSide from "../Navbars/Sidebar/Main";
import NestedSide from "../Navbars/Sidebar/Nested";
import { useDispatch, useSelector } from "react-redux";
import { initiateGlobal } from "../../store/global/actions";
import LoggedHeader from "../Navbars/LogedHeader";

const SidebarLayout = () => {
    const [urlComplete, setUrlComplete] = useState([]);
    const { url, user, finishInitiate } = useSelector(state => state.global);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(initiateGlobal(location.pathname));
    }, []);

    useEffect(() => {
        if(finishInitiate){
            user ? navigate(url) : navigate('/')
        }
    }, [finishInitiate])

    useEffect(() => {
        if(finishInitiate){
            user ? navigate(url) : navigate('/')
        }
    }, [user])

    useEffect(() => {
        setUrlComplete(location.pathname === '/' ? [""] : location.pathname.split('/'))
    }, [location.pathname])


    const data = user?.role === 'member' ? [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: <User6LineIcon />,
            id: 1,
            collapsible: false,
        },
        {
            title: "Article",
            href: "/dashboard/articles",
            id: 2,
            collapsible: true,
            icon: <StackLineIcon />,
            children: [
                {
                    title: "List",
                    href: "/",
                    icon: <ListCheckIcon />,
                },
                {
                    title: "Create",
                    href: "/create",
                    icon: <AddCircleLineIcon />,
                },
            ],
        },
    ] : user?.role === 'admin' ? [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: <User6LineIcon />,
            id: 1,
            collapsible: false,
        },
        {
            title: "Article",
            href: "/dashboard/articles",
            collapsible: true,
            id: 2,
            icon: <StackLineIcon />,
            children: [
                {
                    title: "List",
                    href: "/",
                    icon: <ListCheckIcon />,
                },
                {
                    title: "Create",
                    href: "/create",
                    icon: <AddCircleLineIcon />,
                },
            ],
        },
        {
            title: "Category",
            href: "/dashboard/Categories",
            collapsible: true,
            id: 3,
            icon: <StackLineIcon />,
            children: [
                {
                    title: "List",
                    href: "/",
                    icon: <ListCheckIcon />,
                },
                {
                    title: "Create",
                    href: "/create",
                    icon: <AddCircleLineIcon />,
                },
            ],
        },
    ] : [];

    return (
        <>
            <LoggedHeader />
            <div className="layout">
                <div className="content">
                    <div className="sidebar">
                        <div className="sidebar__body">
                            {
                                data.map((side) => {
                                    if(side.collapsible){ 
                                        return (
                                            <NestedSide side={side} />
                                        )
                                    }
                                    return (
                                        <MainSide side={side} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="content__body">
                    <Outlet />
                </div>
            </div>
        </>
    )
};

export default SidebarLayout;