import React from 'react'

const searchList = ({ query, photo, handleClick }) => {
    const loadTable = query.length ? (
        query.filter( title => title .includes(photo)).map((load, index) => (
            <tr key={index}>
                  <td><a onClick={() => handleClick(0, load)}>{load}</a></td>
                  <td width="20px"><a onClick={() => handleClick(1, index)}>x</a></td>
            </tr>
          ))
    ) : (
        <tr>
              <td colSpan="2">No Saved</td>
        </tr>
    )

    return(
        <table>
            <tbody>
                {loadTable}
            </tbody>
        </table>
    )
}

export default searchList