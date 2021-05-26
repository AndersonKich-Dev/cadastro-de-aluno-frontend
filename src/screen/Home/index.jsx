import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { FaUserPlus, FaListUl } from 'react-icons/fa'


export default function Home(){


    return(
        <Container>
            <h1>Menu</h1>

            <ul>
                <li>
                    <Link to='/cadastro/aluno'><FaUserPlus/></Link>
                </li>

                <li>
                    <Link to='/list/aluno'><FaListUl/></Link>
                </li>

            </ul>
        </Container>
    )
}