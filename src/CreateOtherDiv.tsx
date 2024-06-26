import { useEffect, useState } from "react"

function CreateOtherDiv() {

    let [Count, setCount] = useState(0)

    useEffect(() => {
        alert('para de clicar burro!!!')
    }, [Count > 2])

    return(
        <div>
        <button onClick={() => {
            setCount(Count + 1)
        }}> {Count} </button>
        </div>
    )
}

export default CreateOtherDiv