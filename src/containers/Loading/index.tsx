import { connect, useSelector } from 'react-redux'
import { Spin } from 'antd'
import React from 'react'

const Loading: React.FC = (props: any) => {
    const loading = useSelector((state) => state)
    return (
        <div>
            <Spin tip="正在加载中..." />
        </div>
    )
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)