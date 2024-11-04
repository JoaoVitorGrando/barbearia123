// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'; // Importa o Carousel do react-bootstrap
import Header from './Header'; // Importa o cabeçalho
import '../styles/home.css'; // Importa o CSS específico

// Importa as imagens
import corte1 from '../assets/corte1.jpg';
import corte2 from '../assets/corte2.jpg';
import corte3 from '../assets/corte3.jpg';
import backgroundImg from '../assets/barbearia.jpg'; // Importa a imagem de fundo

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <h1>Bem-vindo à Barbearia!</h1>
            <p></p>
            
            <div className="carousel-container">
                <Carousel className="home-carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={corte1} // Use a imagem importada
                            alt="Corte de Cabelo 1"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <h3>Corte Clássico</h3>
                            <p>O corte clássico que nunca sai de moda.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={corte2} // Use a imagem importada
                            alt="Corte de Cabelo 2"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <h3>Corte Moderno</h3>
                            <p>O corte moderno que está em alta.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={corte3} // Use a imagem importada
                            alt="Corte de Cabelo 3"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <h3>Corte Estilizado</h3>
                            <p>O corte estilizado que mostra sua personalidade.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;
