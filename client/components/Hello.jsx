import React from 'react' 

function HelloTemplate (props) {
    return (
        <div className='hello-template another-css-class'>
            <div>I am the parent, {props.name}</div>
            <ChildComponent
                firstname='Cam'
                lastname='Nepe'
                parent={props}
                colors={props.colors} />
        </div>
    )
}

export default