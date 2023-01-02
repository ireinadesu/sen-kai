import React from 'react'
import { connect } from 'react-redux'
import { PlaySquareOutlined, LikeTwoTone, UserOutlined, UserAddOutlined, MoreOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { Menu, Layout, MenuProps, FloatButton, Input, Space } from 'antd'

import { HeaderSliceState, actions } from '@/features/header/headerSlice'
import { AppDispatch } from '@/app/store'
import SHeaderCss from '@/features/header/Header.module.scss'

const { Header } = Layout;
const { Search } = Input;
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
const onSearch = (value: string) => console.log(value);
const SHeader: React.FC = (props: any) => {
    const onClick: MenuProps['onClick'] = (e: { key: any; }) => {
        props.changeUrlToRecommend({ current_url: e.key })
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
            <Space direction="vertical"><Search placeholder="input search text" onSearch={onSearch} enterButton /></Space>

        </Header>
    )
}

SHeader.propTypes = {
    current_url: PropTypes.string
}

const mapStateToProps = (state: HeaderSliceState) => ({ current_url: state.headerReducer.current_url })

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        changeUrlToRecommend: (payload: HeaderSliceState) => {
            dispatch(actions.changeUrlToRecommend(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SHeader)