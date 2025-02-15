// Home.jsx
import { useState } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import PMenuList from "../PComponents/PMenulist";
import { Button } from "antd/es/radio";
import PNavbar from "../PComponents/PNavbar";
// Adjust paths for other imports as needed

const { Header, Sider } = Layout;

const PBilling = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <>
      <div>
        <PNavbar />
        <Layout>
          <Sider
            collapsed={collapsed}
            collapsible
            theme={"light"} // Adjust theme if desired
            className="sidebar"
          >
            <PMenuList hoverOpenDelay={0} inlineCollapsed={collapsed} />
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: "#f0f2f5" }}>
              <Button type="text" className="toggle" onClick={toggleCollapse}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
            </Header>
            <main className="main">
              {/* Your main content for the Home page goes here */}
              <h1>Welcome to the Parent Home Page!</h1>

              <br />
            </main>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default PBilling;
