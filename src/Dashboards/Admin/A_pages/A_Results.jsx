// Home.jsx
import { useState } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import A_menulist from "../A_componets/A_menulist";
import { Button } from "antd/es/radio";

// Adjust paths for other imports as needed

const { Header, Sider } = Layout;

const A_Results = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        theme={"light"} // Adjust theme if desired
        className="sidebar"
      >
        <A_menulist hoverOpenDelay={0} inlineCollapsed={collapsed} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: "#f0f2f5" }}>
          <Button type="text" className="toggle" onClick={toggleCollapse}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Header>
        <main className="main">
          {/* Your main content for the Home page goes here */}

          <div className="post_Results">
            <h1>Post_Results</h1>
            <form>
              <label htmlFor="post_academic_calender">Post_Results:</label>
              <br />
              <textarea
                id="post_Results"
                name="Post_Results"
                rows="10"
                cols="80"
              ></textarea>
              <br />
              <br />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-green-700 w-10"
              >
                Post
              </button>
            </form>
          </div>
          <br />
        </main>
      </Layout>
    </Layout>
  );
};

export default A_Results;
