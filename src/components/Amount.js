import React from 'react'
import "../style.scss"


export default function Amount(props) {
    return (
        <div>
        <h1 className="amount-title">{props.title}</h1>
            <div className="amount">
                {props.count}
            </div>
        </div>
    )
}
