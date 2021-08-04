import React from 'react'
import { useSelector } from 'react-redux'
const Temp = () => {
    const { data } = useSelector(state => state.template)
    // const data = '<div>Hello</div>'
    return (
        <html dangerouslySetInnerHTML={{ __html: data }} />
    )
}

export default Temp
