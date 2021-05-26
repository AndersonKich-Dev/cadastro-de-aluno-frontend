import React from 'react'
import { Container } from './styles'

export default function Title( { name } ){

    return(
        <Container>
            <h1>{name}</h1>
        </Container>
    )
}