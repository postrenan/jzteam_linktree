<template>
  <main>
    <div id="container">
      <div id="profile">
        <img
          src="../assets/WhiteLogo.jpg"
          alt="Foto logo da GrandTur passeio, um circulo com um onibus na cor "
        />
        <h1>Grandtour passeios</h1>
        <q>Nosso compromisso é com seu sonho</q>
      </div>

      <ul>
        <li>
          <a href="mailto:grandtourpasseios@gmail.com?subject={ Seu nome } Interrese em viagem/pacote &cc=&body=Olá me chamo { seu nome } e gostaria de saber mais sobre os pacotes para { destino }" target="_blank">Contato via e-mail</a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=555597060042&text=Olá, gostaria de saber mais sobre os pacotes de viagem" target="_blank">Contato via WhatsApp Agudo</a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=555596992684&text=Olá, gostaria de saber mais sobre os pacotes de viagem" target="_blank">Contato via WhatsApp Santa Maria</a>
        </li>
      </ul>

      <div id="social-links">
  
        <a href="https://www.instagram.com/grandtour_passeios/" target="_blank">
          <i class="icon ion-logo-instagram"></i>
        </a>
        <a href="mailto:grandturpasseios@gmail.com?subject={ Seu nome } Interrese em viagem/pacote &cc=&body=Olá me chamo { seu nome } e gostaria de saber mais sobre os pacotes para { destino }" target="_blank">
          <i class="icon ion-md-mail"></i>
        </a>
      
      </div>

      <footer>
        <p>Grandtour © 2023. Todos os direitos reservados.</p>
      </footer>
    </div>
  </main>
</template>

<script>
  export default{
    components: {},
    data() {
      return{

      }
    }
  }
</script>


<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --text-color:rgb(36,83,116);
  --bg: rgb(230,164,5);
  --stroke-color: rgba(255, 255, 255, 0.5);
  --surface-color: rgba(255, 255, 255, 0.05);
  --surface-color-hover: rgba(0, 0, 0, 0.02);
  --highlight-color: rgba(255, 255, 255, 0.2);
}


body {
  background: var(--bg) no-repeat top center/cover;
  height: 100vh;
}

body * {
  font-family: "Inter", sans-serif;
  color: var(--text-color);
}

#container {
  width: 100%;
  max-width: 588px;
  margin: 10px auto 0px;
  padding: 0 24px;
}

/* profile */
#profile {
  text-align: center;
  padding: 24px;
}

#profile img {
  width: 112px;
  border-radius: 100%;
  border: 2px solid ;
}

#profile p {
  font-weight: 500;
  line-height: 24px;
  margin-top: 8px;
}

/* links */
ul {
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px 0;
}

ul li a {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px 24px;

  background: var(--surface-color);
  border: 1px solid var(--stroke-color);
  border-radius: 8px;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  text-decoration: none;
  font-weight: 500;

  transition: background 0.2s;
}

/* pseudo-selector */
ul li a:hover {
  background: var(--surface-color-hover);
  border: 1.5px solid var(--text-color);
}

/* social links */
#social-links {
  display: flex;
  justify-content: center;

  padding: 24px 0;

  font-size: 24px;
}

#social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  transition: background 0.2s;
  border-radius: 50%;
}

#social-links a:hover {
  background: var(--highlight-color);
}

footer {
  padding: 24px 0;
  text-align: center;
  font-size: 14px;
}

/* media queries */
@media (min-width: 700px) {
  :root {
    --bg-url: url(./assets/bg-desktop.jpg);
  }

}

/* animation */
@keyframes slide-in {
  from {
    left: 0;
  }
  to {
    left: 50%;
  }
}

@keyframes slide-back {
  from {
    left: 50%;
  }
  to {
    left: 0;
  }
}
</style>