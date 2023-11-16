import {Button, ConfigProvider, Menu, MenuProps} from "antd";
import {FormOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {useState} from "react";
import Sider from "antd/es/layout/Sider";
import {useTheme} from "@/utils";
import cls from "./Sidebar.module.scss"
import {Link} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {theme} = useTheme()

    function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group',): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const items = [
        getItem(<Link to={"/"}>Главная</Link>, '1', <FormOutlined/>),
        getItem(<Link to={"/dangers"}>События</Link>, "2", <FormOutlined/>),
        // getItem('Option 2', '2', <FormOutlined/>),
        // getItem('Option 3', '3', <FormOutlined/>),
    ];

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Sider theme={theme} collapsed={collapsed}>
            <div style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "1px 0"
            }}>

                <Menu
                    className={cls.sidebar}
                    style={{height: "100%"}}
                    inlineCollapsed={collapsed}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
                <Button
                    onClick={toggleCollapsed}>
                    {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>
            </div>
        </Sider>
    );
};

