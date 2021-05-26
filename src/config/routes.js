import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../screen/Home'
import Cadastro from '../screen/Cadastro'
import ListAlunos from '../screen/List'


export default function Routes(){


    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/cadastro/aluno' component={Cadastro}/>
                <Route path='/update/aluno/:id' component={Cadastro}/>
                <Route path='/list/aluno' component={ListAlunos}/>
            </Switch>
        </BrowserRouter>
    )
}


