import React, { useState } from 'react'
import All from './All'
import Complet from './Complet'
import Incomplet from './Incomplet'

function TodoItem() {

    const [value, setValue] = useState([])
    const [todo, setTodo] = useState("")


    const itemChange = ( e ) => {
        setValue(e.target.value)
    }

    const addTodo = () => {
        if (value !== "") {
            setTodo([
                ...todo,
                { name: value, status: false, id: Date.now() }
            ]);
            setValue("");
        }
    }

    return (
        <>
            <div>
                <input type='text' id='' name='' value={value} onChange={itemChange} />
                <button onClick={addTodo}>Add</button>
            </div>

            <div>
                <div>
                    <All />
                </div>

                <div>
                    <Complet />
                </div>

                <div>
                    <Incomplet data={value}/>
                </div>
            </div>
        </>
    )
}

export default TodoItem