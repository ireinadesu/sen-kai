import { connect } from 'react-redux'
import React from 'react'

const Palgantong: React.FC = (props: any) => {
    return (
        <div>Palgantong</div>
    )
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Palgantong)