import { connect } from 'react-redux'
import React from 'react'

const Anime: React.FC = (props: any) => {
    return (
        <div>Anime</div>
    )
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Anime)