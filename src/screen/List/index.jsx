import React, { useState, useEffect } from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import * as S from './styles'
import Title from '../../components/Title'
import HomeButton from '../../components/BtnHome'
import api from '../../services/api'
import { Link } from 'react-router-dom'

export default function List(){

    const [list, setList] = useState([])

    const handleGetList =()=>{
        api.get('/aluno')
        .then(response => {
            setList(response.data)
        })
    };


    async function handleDelete(id, avatarName){

        await api.delete(`/aluno/${id}`)
        await api.delete(`/aluno/avatar/${avatarName}`)
    }

    useEffect(()=>{
        handleGetList()
    },[list])

    return(
        <S.Container>
            <HomeButton rota='/'/>
            <Title name='Lista de Alunos'/>
            <S.Table>             
                <thead>
                    <tr>
                        <p>Avatar</p>
                    </tr>
                    <tr>
                        <p>Name</p>
                    </tr>
                    <tr>
                        <p>City</p>
                    </tr>
                    <tr>
                        <p>Actions</p>
                    </tr>
                </thead>

                <S.Tbody>
                    <tbody>
                        {list.map((item, index)=>(
                            <tr key={index}>
                            <td>
                                <S.Avatar>
                                    <img src={item.url} alt=''/>
                                </S.Avatar>
                            </td>
                            <td>
                                <p>{item.name}</p>
                            </td>
                            <td>
                                <p>{item.city}</p>
                            </td>
                            <td>
                                <S.ActionsButton>
                                    <S.Icon onClick={() => handleDelete(item.id, item.avatarName)} color='#ff4700'>
                                        <FaTrashAlt/>                                      
                                    </S.Icon>
                                    <S.Icon color='#04d361'>
                                        <Link to={`/update/aluno/${item.id}`}>
                                            <FaEdit/>
                                        </Link>
                                    </S.Icon>
                                </S.ActionsButton>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </S.Tbody>
            </S.Table>
            
        </S.Container>
    )
}