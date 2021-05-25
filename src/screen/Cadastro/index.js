import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FaCamera } from 'react-icons/fa'
import * as S from './styles'
import api from '../../services/api'


export default function Cadastro(){
    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [fileInfo, setFileInfo] = useState({})

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        let alunoId = ''

        const data={
            name,
            city,
          }

        await api.post('/aluno', data)
        .then(response =>{
            alunoId = response.data.id        
            const data = new FormData();

            data.append('file', fileInfo.file, `${fileInfo.file.name}`)

            api.post('/upload', data)
            .then(response =>{
                const data = {
                    name: response.data.name,
                    url: response.data.url,
                    alunoId
                }
           
                api.post('/aluno/avatar', data)
                history.push('/');
            })
        })
    }


    const configFile = (file)=>{
       const uploadFile = {
          file,
          preview: URL.createObjectURL(file),
          name: file.name,
        }
        
        setAvatar(uploadFile.preview)
        setFileInfo(uploadFile)       
    }


    return(
        <S.Container onSubmit={handleRegister}>
            <S.Title>Aluno</S.Title>
            <S.Avatar htmlFor='photo'>
                {!avatar ?  <FaCamera /> : <img src={avatar} alt=''/>}             
                <input type='file' id='photo' onChange={e => configFile(e.target.files[0])}/>               
            </S.Avatar>

            <S.Field>
                <label>Name</label>
                <input type='text' value={name} onChange={e => setName(e.target.value)}/>
            </S.Field>

            <S.Field>
                <label>City</label>
                <input type='text' value={city} onChange={e => setCity(e.target.value)}/>
            </S.Field>
            
            
            <S.Button type='submit' value='Enviar'/>
        </S.Container>
    )
}