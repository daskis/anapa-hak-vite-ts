import './App.css';
import {Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {Sidebar} from "@/components";
import {AppRouter} from "@/pages";

function App() {


    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header style={{background: "#eee"}}>
                <div>124</div>
            </Header>
            <Layout>
                <Sidebar/>
                <Content>
                    <AppRouter/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
