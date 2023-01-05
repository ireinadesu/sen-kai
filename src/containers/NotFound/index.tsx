import { Button, Result } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NotFount: React.FC = (props) => {
    const router = useNavigate()
    return (
        <Result
            status="404"
            title="404"
            subTitle="抱歉,您访问的页面不存在"
            extra={<Button onClick={() => { router('/', { replace: true }) }} type="primary">返回首页</Button>}
        />
    )
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NotFount)