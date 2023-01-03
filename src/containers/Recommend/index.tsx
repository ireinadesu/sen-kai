import { connect } from 'react-redux'
import React from 'react'

export const Recommend: React.FC = (props: any) => {
    return (
        <div>Recommend</div>
    )
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)