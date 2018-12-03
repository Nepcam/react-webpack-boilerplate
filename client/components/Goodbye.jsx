import React from 'react'

function GoodbyeTemplate (props)
    return (
        <div className='goodbye-template another-css-class'>
            <div>Goodbye, {props.name}</div>
            <ChildComponent 
                firstname='Cam'
                lastname='Nepe'
                parent={props}
                colors={props.colors} />
        </div>
    )

export default Goodbye