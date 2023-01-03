import React from 'react'
import { connect } from 'react-redux'
import { PlaySquareOutlined, LikeTwoTone, UserOutlined, UserAddOutlined, MoreOutlined } from '@ant-design/icons'

import { Menu, Layout, MenuProps, FloatButton } from 'antd'

import { routerSliceState, actions } from '@/features/router/routerSlice'
import { AppDispatch, RootState } from '@/app/store'
import SHeaderCss from './Header.module.scss'
import Search from '@/components/Search/Search'

const { Header } = Layout;

const items: MenuProps['items'] = [
    {
        label: '推荐',
        key: '/recommend',
        icon: <LikeTwoTone />,
    },
    {
        label: '动漫',
        key: '/anime',
        icon: <PlaySquareOutlined />,
    },
    {
        label: '剧场版',
        key: '/palgantong',
        icon: <PlaySquareOutlined />,
    },
    {
        label: '经典番剧',
        key: '/classicDrama',
        icon: <PlaySquareOutlined />,
    }
];

const SHeader: React.FC = (props: any) => {
    const onClick: MenuProps['onClick'] = (e: { key: any; }) => {
        props.changeUrl({ current_url: e.key })
    }

    return (
        <Header className={SHeaderCss['s-header']}>
            <FloatButton.Group
                trigger="click"
                type="primary"
                style={{ right: 24 }}
                icon={<UserOutlined />}
                shape='square'
            >
                <FloatButton description='登录' icon={<UserOutlined />} shape='square' />
                <FloatButton description='注册' icon={<UserAddOutlined />} shape='square' />
                {/* <FloatButton description='退出' icon={<LogoutOutlined />} shape='square' /> */}
                <FloatButton description='更多' icon={<MoreOutlined />} shape='square' />
            </FloatButton.Group>
            <Menu onClick={onClick} selectedKeys={[props.current_url]} mode="horizontal" items={items} />
            <Search />
        </Header>
    )
}

const mapStateToProps = (state: RootState) => ({ current_url: state.router.current_url })

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        changeUrl: (payload: routerSliceState) => {
            dispatch(actions.changeUrl(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SHeader)