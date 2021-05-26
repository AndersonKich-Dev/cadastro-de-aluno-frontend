import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container } from './styles'

export default function ButtonHome({ rota }){

    return(
        <Container>
            <Link to={rota}>
                    <FaHome/>
                </Link>             
        </Container>
    )
}