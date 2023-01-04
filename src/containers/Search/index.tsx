import { AutoComplete, Button, Input, Space } from 'antd'
import { connect } from 'react-redux'
import { DeleteOutlined } from '@ant-design/icons'

import { actions } from '../../features/history/historySlice'
import { AppDispatch, RootState } from '@/app/store'
import { historySliceState } from '@/types/historySliceState'

const Search = (props: any) => {

    const options = [
        {
            label: (<div>搜索记录</div>),
            options: props.history.map((h: historySliceState) => {
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

    const onSearch = (value: string) => {

    };

    return (
        <Space>
            <AutoComplete popupClassName="certain-category-search-dropdown" options={options}>
                <Input.Search placeholder="今天看点什么好呢..." onSearch={onSearch} enterButton />
            </AutoComplete>
        </Space>
    )
}

const mapStateToProps = (state: RootState) => ({
    history: state.history
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        insert: (payload: historySliceState) => {
            dispatch(actions.insert(payload))
        },
        delete: (payload: historySliceState) => {
            dispatch(actions.delete(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)