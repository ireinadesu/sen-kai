import { connect } from 'react-redux'
import React from 'react'

const ClassicDrama: React.FC = (props: any) => {
    return (
        <div>ClassicDrama</div>
    )
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ClassicDrama)