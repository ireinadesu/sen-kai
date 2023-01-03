import React from 'react';

import { Layout } from 'antd';

import Header from '@/containers/Header'
import { Outlet } from "react-router-dom";

const { Footer, Content } = Layout;

const App: React.FC = () => (
  <>
    <Layout>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
);

export default App;