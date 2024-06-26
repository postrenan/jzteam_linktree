<template>
  <main>
    <div id="container">
      <div id="profile">
        <img
          src="../assets/img.png"
          alt="Foto logo da GrandTur passeio, um circulo com um onibus na cor "
        />
        <h1 id="title">@julioo_zalamena</h1>
        <q>Treinador | Atleta de Fisiculturismo</q>
      </div>

      <ul>
        <li>
          <a target="_blank">Mais informações</a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=5596338952&text=Olá! Quero fazer parte do JZTeam!" target="_blank">Consultoria online</a>
        </li>
      </ul>

      <div id="social-links">
        <a href="https://www.instagram.com/julioo_zalamena/" target="_blank">
          <i class="icon ion-logo-instagram"></i>
        </a>
      </div>

      <footer>
        <p><a href="https://github.com/postrenan/" target="_blank">Renan Bick © {{year}} . Todos os direitos reservados.</a></p>
      </footer>
    </div>
  </main>
</template>

<script>
  export default{
    data() {
      return{
        year: new Date().getFullYear(),
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
  --bg: rgb(245, 208, 113);
  --stroke-color: rgba(255, 255, 255, 0.5);
  --surface-color: rgb(255, 255, 255);
  --surface-color-hover: rgba(0, 0, 0, 0.02);
  --highlight-color: rgba(255, 255, 255, 0.2);
}


body {
  background: var(--bg) no-repeat top center/cover;
  min-height: 100vh;
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
  box-shadow: 2px 2px 5px black;
  border-radius: 8px;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  text-decoration: none;
  font-weight: 500;

  transition: background 0.2s;
}

ul li a:hover {
  background: var(--surface-color-hover);
  border: 1.5px solid var(--text-color);
}

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
  margin-top: 150px;
  padding: 24px 0;
  text-align: center;
  font-size: 14px;
}

@media (max-width: 700px) {
h1{
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: normal;
}

#container {
  width: 100%;
  max-width: 588px;
  margin: 10px auto 0px;
  padding: 0 24px;
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