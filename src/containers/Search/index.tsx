import { AutoComplete, Button, Drawer, Input, Space } from 'antd'
import { connect } from 'react-redux'
import { DeleteOutlined } from '@ant-design/icons'

import { actions } from '../../features/history/historySlice'
import { AppDispatch, RootState } from '@/app/store'
import { historySliceState } from '@/types/historySliceState'

import { useNavigate } from 'react-router-dom'

const Search = (props: any) => {

    const router = useNavigate()
    const onClose = () => {
        router(-1)
    }

    const options = [
        {
            label: (<div>搜索记录</div>),
            options: props.history.map((h: historySliceState) => {
                return ({
                    value: h.title,
                    label: (
                        <div key={h.id} style={{ display: 'flex', justifyContent: 'space-between', }}>
                            {h.title}
                            <span>
                                <Button key={h.id} onClick={(event) => { props.delete(h); event.stopPropagation() }} ghost={true} type="primary" shape="circle" icon={<DeleteOutlined />} />
                            </span>
                        </div>
                    ),
                })
            }),
        }
    ]

    const onSearch = (value: string) => {
        props.insert({ id: null, title: value })
    }

    return (
        <Drawer title='搜索' placement={'left'} closable={true} onClose={onClose} open={true} key={'left search'} >
            <Space>
                <AutoComplete popupClassName="certain-category-search-dropdown" options={options}>
                    <Input.Search placeholder="今天看点什么好呢..." onSearch={onSearch} enterButton />
                </AutoComplete>
            </Space>
        </Drawer>
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