import React from 'react'
import { connect } from 'react-redux'
import { PlaySquareOutlined, LikeTwoTone, UserOutlined, UserAddOutlined, MoreOutlined } from '@ant-design/icons'
import { Menu, Layout, MenuProps, FloatButton } from 'antd'

import { actions } from '@/features/router/routerSlice'
import { AppDispatch, RootState } from '@/app/store'
import Search from '@/containers/Search'
import { routerSliceState } from '@/types/routerSliceState'
import SHeaderCss from './Header.module.scss'
import { router } from '@/router'


const SHeader: React.FC = (props: any) => {
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

    const onClick: MenuProps['onClick'] = (e: { key: any; }) => {
        props.changeUrl({ currentUrl: e.key })
        router(e.key)
    }

    return (
        <Layout.Header className={SHeaderCss['s-header']}>
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
            <Menu onClick={onClick} selectedKeys={[props.currentUrl]} mode="horizontal" items={items} />
            <Search />
        </Layout.Header>
    )
}

const mapStateToProps = (state: RootState) => ({ currentUrl: state.router.currentUrl })

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        changeUrl: (payload: routerSliceState) => {
            dispatch(actions.changeUrl(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SHeader)