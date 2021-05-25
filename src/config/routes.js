import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../screen/Home'
import Cadastro from '../screen/Cadastro'


export default function Routes(){


    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/cadastro' component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    )
}