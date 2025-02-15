// Home.jsx
import { useState } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// import MenuList from "../components/MenuList";
import { Button } from "antd/es/radio";
import S_menulist from "../S_components/S_menulist";
import S_Assignment from "../S_components/S_Assignment";
import Navbar from "../S_components/Navbar"
// Adjust paths for other imports as needed

const { Header, Sider } = Layout;

const S_Assign = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <>
      <div>
        <Navbar />
        <Layout>
          <Sider
            collapsed={collapsed}
            collapsible
            theme={"light"} // Adjust theme if desired
            className="sidebar"
          >
            <S_menulist hoverOpenDelay={0} inlineCollapsed={collapsed} />
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: "#f0f2f5" }}>
              <Button type="text" className="toggle" onClick={toggleCollapse}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
            </Header>
            <main className="main">
              {/* Your main content for the Home page goes here */}
              <S_Assignment />

              <br />
            </main>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default S_Assign;
