import React, { useState, useEffect } from 'react'
import { useHistory, } from 'react-router-dom'
import { FaCamera } from 'react-icons/fa'
import Title from '../../components/Title'
import HomeButton from '../../components/BtnHome'
import * as S from './styles'
import api from '../../services/api'


export default function Cadastro(props){
    const [update, setUpdate] = useState(false)
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [fileInfo, setFileInfo] = useState({})
    const [id, setId] = useState('')
    const [aluno, setAluno] = useState({})
    const [url, setUrl] = useState('')

    const history = useHistory();
   
    async function handleRegister(e){
        e.preventDefault();

        try {
            if(!url){
                const data = {
                    name,
                    city    
                }
            
                api.post('/aluno', data)
                .then(_ =>{
                    history.push('/');              
                })
            }
            else{
                const data = new FormData();
        
                data.append('file', fileInfo.file, `${fileInfo.file.name}`)
    
                api.post('/upload', data)
                .then(response =>{
    
                    const data = {
                        avatarName: response.data.name,
                        url: response.data.url,
                        name,
                        city    
                    }
                
                    api.post('/aluno', data)
                    .then(_ =>{
                        history.push('/');              
                    })
                
                })
                .catch(error =>{
                    console.log(error)
                })
            }
        }catch(error){
            alert('Falha ao fazer cadastro.')
        }

        
        
        
    }   

    async function handleUpdate(e){
        e.preventDefault();

        try{
            if(aluno.url !== url){

                const data = new FormData();
        
                data.append('file', fileInfo.file, `${fileInfo.file.name}`)
    
                api.post('/upload', data)
                .then(response =>{
    
                    const data = {
                        avatarName: response.data.name,
                        url: response.data.url,
                        name,
                        city    
                    }
    
                     api.put(`/aluno/${id}`, data)
                     api.delete(`/aluno/avatar/${aluno.avatarName}`)
                     history.push('/list/aluno');     
                })
    
            }else{
                const data = {
                    name,
                    city
                }
                api.put(`/aluno/${id}`, data)
                history.push('/list/aluno');
            }
        }catch(error){
            alert('Falha ao atualizar o cadastro.')
        }
        
    }   


    const configFile = (file)=>{
       const uploadFile = {
          file,
          preview: URL.createObjectURL(file),
          name: file.name,
        }

        setUrl(uploadFile.preview)

        setFileInfo(uploadFile)       
    }

    useEffect(()=>{
        const id = props.match.params.id
        if(id){
            setUpdate(true)
            setId(id)
        api.get(`/aluno/${id}`)
            .then(response=>{
                setName(response.data[0].name)
                setCity(response.data[0].city)
                setUrl(response.data[0].url)
                setAluno(response.data[0])
            })
        }

    },[])


    return(
        <S.Container onSubmit={!update ? handleRegister : handleUpdate}>
            <Title name={!update ? 'cadastro' : 'Update'}/>
            <HomeButton rota={!update ? '/' : '/list/aluno'}/>
                       
            <S.Avatar htmlFor='photo'>
                {!url ?  <FaCamera /> : <img src={url} alt=''/>}             
                <input type='file' id='photo' onChange={e => configFile(e.target.files[0])}/>               
            </S.Avatar>

            <S.Field>
                <label>Name</label>
                <input required type='text' value={name} onChange={e => setName(e.target.value)}/>
            </S.Field>

            <S.Field>
                <label>City</label>
                <input required type='text' value={city} onChange={e => setCity(e.target.value)}/>
            </S.Field>
            
            
            <S.Button type='submit' value='Enviar'/>
        </S.Container>
    )
}