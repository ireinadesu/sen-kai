import { AutoComplete, Button, Input, Space } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DeleteOutlined } from '@ant-design/icons'

import SearchCss from '@/features/search/Search.module.scss'
import { actions, SearchSliceState } from './searchSlice'
import { AppDispatch, RootState } from '@/app/store'

const Search = (props: any) => {


    const options = [
        {
            label: (<div>搜索记录</div>),
            options: props.history.map((h: SearchSliceState) => {
                return ({
                    value: h.title,
                    label: (
                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                            {h.title}
                            <span>
                                <Button onClick={(event) => { props.delete(h); event.stopPropagation() }} ghost={true} type="primary" shape="circle" icon={<DeleteOutlined />} />
                            </span>
                        </div>
                    ),
                })
            }),
        }
    ]

    const onSearch = (value: string) => console.log(value);

    return (
        <Space>
            <AutoComplete popupClassName="certain-category-search-dropdown" style={{ width: 250 }} options={options}>
                <Input.Search className={SearchCss['search']} placeholder="今天看点什么好呢..." onSearch={onSearch} enterButton />
            </AutoComplete>
        </Space>
    )
}

Search.propTypes = {

}

const mapStateToProps = (state: RootState) => ({
    history: state.searchReducer
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        insert: (payload: SearchSliceState) => {
            dispatch(actions.insert(payload))
        },
        delete: (payload: SearchSliceState) => {
            dispatch(actions.delete(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)