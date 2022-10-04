import React, { useState } from 'react'

function Incomplet(props) {

    const [compolet, setComplet] = useState([])

    // let dataprops = (props.data)

    // const handlebox = (id) => {
    //     props.data.map((todo) => {
    //         if (todo.id === id) {
    //             return { ...todo, status: !todo.status }
    //         } else {
    //             return todo
    //         }
    //     })
    // }

    // const handlebox = (id) => {
    //     setComplet(
    //         compolet.map(todo=>{
    //         if(todo.id === id){
    //             return { ...todo , status : !todo.status}
    //         }else{
    //             return todo
    //         }
    //     }))
    // }

    const incomplet = () => {
        setComplet(props.data)
    }


    return (
        <>
            <div >
                {
                    // compolet.filter(todo => !todo.status).map((todo)=>{
                    //     return (
                    //         <div>
                    //             <input type='checkbox' checked={todo.status} />
                    //             <h5>{todo}</h5>
                    //         </div>
                    //     )
                    // })


                    compolet.map((item, i) => {
                        return (
                            <div key={i}>
                                <div>{}</div>
                            </div>
                        )
                    })



                    // props.data.filter(todo => !todo.status).map((todo) => {
                    //     return (
                    //         <div>
                    //             <input type='checkbox' checked={todo.status} onChange={() => handlebox(todo.id)} />
                    //             <h5>{todo.name}</h5>
                    //         </div>
                    //     )
                    // })
                }
            </div>
            <button onClick={incomplet}>Incomplet</button>
        </>
    )
}

export default Incomplet