import React from 'react'

const Container = (props) => {
    return (
        <div className='flex flex-col h-screen'>
           {props.children}
        </div>
    )
}

export default Container