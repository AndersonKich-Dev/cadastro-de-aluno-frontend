import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'


export default function Home(){


    return(
        <Container>
            <h1>Menu</h1>

            <ul>
                <li>
                    <Link to='/cadastro'>Cadastrar Aluno</Link>
                </li>

                <li>
                    <p>Listar Alunos</p>
                </li>

            </ul>
        </Container>
    )
}