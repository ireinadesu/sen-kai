import React from 'react';

import { Layout } from 'antd';

import SHeader from '@/features/header/Header'

const { Footer, Content } = Layout;

const App: React.FC = () => (
  <>
    <Layout>
      <SHeader />
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
);

export default App;
