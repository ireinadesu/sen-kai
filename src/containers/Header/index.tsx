import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { PlaySquareOutlined, LikeTwoTone } from '@ant-design/icons'
import { Layout, MenuProps, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

import { AppDispatch, RootState } from '@/app/store'
import { routerSliceState } from '@/types/routerSliceState'
import { actions } from '@/features/router/routerSlice'

const SHeader: React.FC = (props: any) => {
    const router = useNavigate()
    const location = useLocation()

    useEffect(() => {
        props.changeUrl({ currentUrl: location.pathname.slice(1) })
    }, [props,location.pathname])

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
        }
    ]

    const onClick: MenuProps['onClick'] = (e: { key: any; }) => {
        props.changeUrl({ currentUrl: e.key })
        router(e.key, { replace: true })
    }

    return (
        <Layout.Header style={{ background: '#ffffff', borderBottom: ' 1px solid rgba(5, 5, 5, 0.06)' }}>
            <div className="logo" />
            <div >
                <Menu onClick={onClick} selectedKeys={[location.pathname.slice(1)]} mode="horizontal" items={items} />
            </div>
        </Layout.Header >
    )
}

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        changeUrl: (payload: routerSliceState) => {
            dispatch(actions.changeUrl(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SHeader)