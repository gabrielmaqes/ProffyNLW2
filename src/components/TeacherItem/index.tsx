import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/51518022?s=460&u=324948eaf4a02fd93c59bacd0d99e0657702e433&v=4" alt="Gabriel Aguiar"  />
                <div>
                    <strong>Gabriel Aguiar</strong>
                    <span>Machine Learning</span>
                </div>
            </header>

            <p>
                Entusiasta das mais avançadas tecnologias de machine learning
                <br/><br/>
                Apaixonado por ensinar modelos de aprendizado de máquina a diferenciar cachorrinhos de gatos maquiavélicos
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 90,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;