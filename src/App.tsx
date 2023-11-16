import {ConfigProvider, Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import {Header, Sidebar} from "@/components";
import {AppRouter} from "@/pages";
import {classNames, Theme, useTheme} from "@/utils";
import '@/styles/index.scss';

function App() {
    const {toggleTheme, theme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: theme === Theme.DARK ? "#555" : "#0958d9",
                        colorPrimaryText: "#fff",
                        colorText: theme === Theme.DARK ? "#fff" : "#000",
                        colorBgBase: theme === Theme.DARK ? "#101213" : "#fff",
                    }
                }}
            >
                <Layout style={{minHeight: "100vh"}}>
                    <Header/>
                    <Layout>
                        <Sidebar/>
                        <Content>
                            <AppRouter/>
                        </Content>
                    </Layout>
                </Layout>
            </ConfigProvider>
        </div>

    );
}

export default App;
