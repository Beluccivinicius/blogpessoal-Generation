import React from 'react';


interface passandoProps {
    name: string,
    age: number,
    visuable: boolean
}

function Home(props: passandoProps){

    let visuable = props.visuable
    return (
        <div className='w-auto flex bg-slate-200 flex-col justify-center items-center gap-8' > 
            {visuable == true ? 
            (<>
            <h1 className="text-3xl font-bold underline font-mono text-slate-500">{props.name}</h1>
            <p className='text-slate-900 font-bold text-2xl'>idade: {props.age}</p>
            <p>{props.visuable}</p>
            </>)
            :
            (<h1 className='text-5xl text-red-600 bg-cyan-950 p-8 rounded-3xl'>não pode ver, curioso!!!</h1>)
    }
        </div>
    );
}

export default Home;
