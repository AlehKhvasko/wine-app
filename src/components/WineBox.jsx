import React from 'react'

export default function WineBox(props) {
    return (
        <div>
            <h5>#{props.id}</h5>
            <h5>{props.name}</h5>
            <h5>{props.year}</h5>
            <h5>{props.click}</h5>
        </div>
    )
}
