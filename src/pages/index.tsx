//Landmark Navigation para mostrar as landmarkes (divisões do site)
import Image from 'next/image'
import LogoImage from '../assets/logo.svg'
import GitLogo from '../assets/gitLogo.svg'
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import * as Dialog from "@radix-ui/react-dialog";


export default function Home() {
  // const [ isModalOpen, setIsModalOpen ] = useState(false);
  // const modalRef = useRef(null);

  // // Função para renderizar o modal
  // function handleModalOpen(){
  //   setIsModalOpen(true);
  // }  

  // // Função para focar o modal quando for aberto 
  // useEffect(() => {
  //   if(isModalOpen){
  //     modalRef?.current?.focus();
  //   }
  // }, [isModalOpen]);

  return (
    <>
      <Head>
        <title>Desenvolvendo uma web acessível | Blog da Rocketseat</title>
      </Head>

      <header className={styles.header}>
        <Image src={LogoImage} width={286 / 2} alt='Rocketseat'></Image>
        <nav className={styles.nav}>
          {/* Uma outra forma de resolver o problema da leitura do svg sem ser o aria-label é
            passar um title como filho para o svg ou utilizar o alt se o arquivo vir de uma imagem */}
          <a href="https://github.com/MarcosAlmeidaFreitas" aria-label='GitHub'>
            <Image src={GitLogo} color='#8257e5' alt='Blog da Rocketseat'></Image>
          </a>
        </nav>
      </header>

      <main>
        <article className={styles.content}>
          <header>
            <h1>Desenvolvendo uma web acessível</h1>
            <h2>Protocolos e diretrizes orientam o desenvolvimento de tecnologias acessíveis, mas é preciso olhar para além de tudo.</h2>
          </header>
          <p>Acessibilidade se tornou uma tendência no ecossistema tecnológico mundial, diversas empresas passaram a adotar critérios de desenvolvimento acessível em seus projetos - por uma questão prática ou por exigências legais -, no entanto, ainda faltam recursos e consciência do que de fato é inclusivo na internet para pessoas com deficiências.</p>
          <p>Para abordar esse tema, é preciso ter uma perspectiva cultural sobre o assunto, não encará-lo apenas na ótica técnica ou prática. Acessibilidade passou a ser vista como um desafio (ou tendência) para o ecossistema tech e não como filosofia natural daquilo que condiz com os princípios básicos da web: acessível para os humanos. Tal afirmação está na W3C.</p>
          <h3>O que é acessibilidade, afinal?</h3>
        </article>

        <div className={styles.center}>
          {/* foi instalado o Dialog do radix-ui  */}
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className={styles.button} aria-controls='dialog1'>Termos de Uso</button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className={styles.overlay}/>
              <Dialog.Content className={styles.modal}>
                <Dialog.Title>Termos de uso</Dialog.Title>
                <Dialog.Description>Esses são os termos de Uso</Dialog.Description>
                <Dialog.Close asChild>
                  <button className={styles.closeModalButton}>Fechar</button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

        </div>
      </main>

      <footer className={styles.footer} aria-label='rodapé'>
        <a href="https://app.rocketseat.com.br">Entre para a Rocketseat</a>
      </footer>

      {/*       
      {isModalOpen && (
        // table index -1 é para que a estrutura do modal não seja focada, fazendo com que a navegação fique presa dentro do modal
        //ref = quer dizer que ele vai pegar a referencia para poder focar no modal
        <div ref={modalRef} id='modal1' className={styles.modal} role='dialog' aria-labelledby='modal1Title' aria-describedby='modal1Description' tabIndex={-1}>
        <h2 id='modal1Title'>Termos de uso</h2>
        <p id='modal1Description'>Estes são os termos de uso</p>
      </div>
      )} */}


    </>
  );
}
