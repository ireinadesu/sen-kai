import React, { useState } from 'react'
import { connect } from 'react-redux'
import { PlaySquareOutlined, LikeTwoTone } from '@ant-design/icons'
import PropTypes from 'prop-types'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'

import { changeUrlToRecommend } from '@/features/header/headerSlice'

const items: MenuProps['items'] = [
    {
        label: '推荐',
        key: 'recommend',
        icon: <LikeTwoTone />,
    },
    {
        label: '动漫',
        key: 'anime',
        icon: <PlaySquareOutlined />,
    },
    {
        label: '剧场版',
        key: 'palgantong',
        icon: <PlaySquareOutlined />,
    },
    {
        label: '经典番剧',
        key: 'classicDrama',
        icon: <PlaySquareOutlined />,
    },
];
const SHeader: React.FC = (props) => {

    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e: { key: any; }) => {
        // console.log('click ', e)
        console.log(props);
        setCurrent(e.key)
    }

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
}

SHeader.propTypes = {
    current_url: PropTypes.string
}

const mapStateToProps = (state: { current_url: string }) => ({
    current_url: state.current_url
})

const mapDispatchToProps = {
    changeUrlToRecommend
}

export default connect(mapStateToProps, mapDispatchToProps)(SHeader)