import React from 'react';
import { useNavigate } from 'react-router-dom';


interface passandoProps {
    name: string,
    age: number,
    visuable: boolean
}

function Home(){
    const navigate = useNavigate();

    return (
        <div className='w-auto h-60 bg-gray-400 flex  justify-center items-center m-3 rounded-full text-sm justify-center '>
            <h1 className='font-semibold text-4xl underline decoration-4 text-cyan-900 hover:text-cyan-200' onClick={() => navigate("/login")}>HOME</h1>
        </div>
    );

}

export default Home;
