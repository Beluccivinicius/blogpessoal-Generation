import React from 'react';

interface passandoProps {
    name: string,
    age: number,
    visuable: boolean
}

function Home(props: passandoProps){

    let visuable = props.visuable
    return (
        <> 
            {visuable == true ? 
            (<>
            <h1>{props.name}</h1>
            <p >{props.age}</p>
            <p>{props.visuable}</p>
            </>)
            :
            (<h1>não pode ver, curioso!!!</h1>)
    }
        </>
    );
}

export default Home;
