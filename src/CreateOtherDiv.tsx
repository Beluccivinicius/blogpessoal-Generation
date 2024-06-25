import { useEffect, useState } from "react"

function CreateOtherDiv() {

    let [Count, setCount] = useState(0)

    useEffect(() => {
        alert('para de clicar burro!!!')
    }, [Count > 2])

    return(
        <>
        <button onClick={() => {
            setCount(Count + 1)
        }}> {Count} </button>
        </>
    )
}

export default CreateOtherDiv