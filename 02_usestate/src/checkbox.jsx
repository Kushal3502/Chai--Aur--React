import React, { useState } from 'react'

function CheckBox() {
    let [checked, isChecked] = useState(false)

    const handleClick = (e) => {
        isChecked(e.target.checked)
    }

    return (
        <>
            <h1>CheckBox</h1>
            <label>
                <input type='checkbox' checked={checked} onClick={handleClick} />
                <p>I {checked ? 'like' : "don't like"} it</p>
            </label>
        </>
    )
}

export default CheckBox