import React from 'react'

export default function Alert(props) {
    return (
        <div style={{ height: '20px', marginBottom: '6vh' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong>:{props.alert.msg}
            </div >}
        </div>
    )
}
