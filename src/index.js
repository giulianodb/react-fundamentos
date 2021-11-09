import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'


//Vai obter a tag principal do index.html
const el = document.getElementById('root')

//Injetar o ola react no elemento root
ReactDOM.render(
    <App/> ,
    
    el)
