import React, { useState } from 'react'

function Form() {
    let [name, setName] = useState('Kushal')
    let [age, setAge] = useState(20)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const increaseAge = () => {
        setAge(++age)
    }

    const decreaseAge = () => {
        if (age == 0) return
        setAge(--age)
    }

    const reset = () => {
        setName('Kushal')
        setAge(20)
    }

    return (
        <>
            <h1>Form</h1>
            <label>Name : </label>
            <input type='text' value={name} onChange={updateName} />
            <button onClick={increaseAge}>Increse Age</button>
            <button onClick={decreaseAge}>Decrese Age</button>
            <button onClick={reset}>Reset</button>
            <p>Hello {name}, your age is {age}</p>
        </>
    )
}

export default Form