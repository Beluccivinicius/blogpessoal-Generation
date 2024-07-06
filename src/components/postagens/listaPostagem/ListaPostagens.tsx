import React, { useContext, useEffect, useState } from 'react'
import CardPostagem from '../cardPostagem/CardPostagem'
import { AuthContext } from '../../../context/AuthContext'
import Postagem from '../../../models/Postagem'
import { buscar } from '../../../services/Service'
import { useNavigate } from 'react-router-dom'
import { Dna } from 'react-loader-spinner'

function ListaPostagens() {
  const [postagem, setPostagem] = useState<Postagem[]>([])
  const {usuario, handleLogout} = useContext(AuthContext)
  const navigate = useNavigate()

  const buscarPostagens = async () => {
    try {
      await buscar("/postagens", setPostagem, {
        headers:{
          Authorization: usuario.token
        }
      })
    } catch (error:any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
    }
  }
}

  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarPostagens()
  },[]);

  return (
    <>
    {postagem.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
    <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {postagem.map((postagem) => (
          <CardPostagem key={postagem.id} dados={postagem} />
        ))}
    </div>
  </>
  )
}

export default ListaPostagens