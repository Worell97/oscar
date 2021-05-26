import React, {useState, useEffect} from 'react';
import {Container, Row, Column} from '../../components/grid';
import ProfilePictureAsset from '../../assets/Perfil.jpg';
import {CentralizedContent, ProfilePicture, Resume} from './styles';
import Section from '../../components/section';

function Contact(){
    return(
        <Section HeaderText='Professional experience' customstyle="background-color: var(--black);">
           <ul>
               <li>
                   <section>
                        <h3>02/2018 – 04/2019 – Rhede Sistemas.</h3>
                        <p>Cargo: Desenvolvedor Delphi/Pascal Jr.</p>
                        Principais atividades: Desenvolvimento do projeto i9v3, criação de scripts em
                        pascal para manipulação do banco de dados e geração de relatórios.
                    </section>
                </li>
               <li>
                   <section>
                        <h3>10/2019 – 12/2020– Eco Centauro Sistemas Inteligentes.</h3>
                        <p>Cargo: Desenvolvedor Delphi Jr.</p>
                        Principais atividades: Desenvolvimento do projeto Eco, aplicando correções e
                        novas soluções ao sistema no setor financeiro.
                    </section>
                </li>
               <li>
                   <section>
                        <h3>12/2020 – Atual– Sysmo Sistemas.</h3>
                        <p>Cargo: Desenvolvedor Delphi Pleno.</p>
                        Principais atividades: Desenvolvimento do projeto S1, aplicando correções e
                        novas soluções ao sistema no setor de logistica.
                    </section>
                </li>
           </ul>
        </Section>
    );
}

export default Contact;