import React from 'react'
import { connect } from 'react-redux'
import { PlaySquareOutlined, LikeTwoTone } from '@ant-design/icons'
import PropTypes from 'prop-types'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'

import { HeaderSliceState, actions } from '@/features/header/headerSlice'
import { AppDispatch } from '@/app/store'

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
const SHeader: React.FC = (props: any) => {
    console.log(props);

    const onClick: MenuProps['onClick'] = (e: { key: any; }) => {
        props.changeUrlToRecommend({ current_url: e.key })
    }

    return <Menu onClick={onClick} selectedKeys={[props.current_url]} mode="horizontal" items={items} />
}

SHeader.propTypes = {
    current_url: PropTypes.string
}

const mapStateToProps = (state: HeaderSliceState) => ({ current_url: state.headerReducer.current_url })

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        changeUrlToRecommend: (str: HeaderSliceState) => {
            dispatch(actions.changeUrlToRecommend(str))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SHeader)
