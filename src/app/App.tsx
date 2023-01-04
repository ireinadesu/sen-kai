import React from 'react'

import { FloatButton, Layout } from 'antd'
import { UserOutlined, UserAddOutlined, MoreOutlined } from '@ant-design/icons'
import Header from '@/containers/Header'
import { Outlet } from "react-router-dom"
import Search from '@/containers/Search'

const { Footer, Content } = Layout;

const App: React.FC = () => (
  <>
    <Layout className="layout">
      <Header />
      <Content>
        <Search />
        <Outlet />
      </Content>
      <Footer>
        <FloatButton.Group trigger="click" type="primary" style={{ right: 24 }} icon={<UserOutlined />} shape='square' >
          <FloatButton description='登录' icon={<UserOutlined />} shape='square' />
          <FloatButton description='注册' icon={<UserAddOutlined />} shape='square' />
          <FloatButton description='更多' icon={<MoreOutlined />} shape='square' />
        </FloatButton.Group>
      </Footer>
    </Layout>
  </>
);

export default App;