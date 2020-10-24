import React from 'react'

const PhotoList = ({ result }) => {
    const loadTable = result.length ? (
        result.map(load => {
            return(
                <li key={load.id}>
                  <img src={load.urls.small} />
                </li>
            )
        })
    ) : (
        <li>
            <h2>Not Found</h2>
        </li>
    )

    return(
        <ul>
            {loadTable}
        </ul>
    )
}   

export default PhotoList