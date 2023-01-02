import React from 'react'
import { connect } from 'react-redux'
import { PlaySquareOutlined, LikeTwoTone, UserOutlined, UserAddOutlined, MoreOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { Menu, Layout, MenuProps, FloatButton } from 'antd'

import { HeaderSliceState, actions } from '@/features/header/headerSlice'
import { AppDispatch, RootState } from '@/app/store'
import SHeaderCss from '@/features/header/Header.module.scss'
import Search from '@/features/search/Search'

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

SHeader.propTypes = {
    current_url: PropTypes.string
}

const mapStateToProps = (state: RootState) => ({ current_url: state.headerReducer.current_url })

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        changeUrl: (payload: HeaderSliceState) => {
            dispatch(actions.changeUrl(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SHeader)