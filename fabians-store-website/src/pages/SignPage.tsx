import React from 'react'

function SignPage(){
    return (
        <div>
            <h1>Página de Cadastro</h1>

            <p>Digite seu nome</p>
            <input placeholder="Digite seu nome"/>

            <p>Digite seu email</p>
            <input 
            placeholder="Digite seu email aqui"
            />

            <p>Confirme seu email</p>
            <input 
            placeholder="Confirme seu email"
            />

            <p>Digite sua senha</p>
            <input 
            placeholder="Digite sua senha aqui"
            />

            <p>Confirme sua senha</p>
            <input 
            placeholder="Confirme sua senha aqui"
            />


        </div>
    )
}