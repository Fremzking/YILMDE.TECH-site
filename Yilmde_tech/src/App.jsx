import CodeDemo from "./components/CodeDemo";
import "./App.css"; // Importe les styles

function App() {
  return (
    <div className="main-layout">
      {/* Background Node Graph SVG */}
      <div className="background-node-graph">
        <svg className="network-svg" viewBox="0 0 1000 600">
          {/* Définitions des filtres et dégradés pour le Blob central */}
          <defs>
            <filter id="grainyNoise" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
              <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="2" result="light">
                <feDistantLight azimuth="225" elevation="45" />
              </feDiffuseLighting>
              <feBlend in="SourceGraphic" in2="light" mode="multiply" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <radialGradient id="blobGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#222" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </radialGradient>
          </defs>

          {/* Le blob central animé */}
          <circle cx="500" cy="300" r="80" className="node-graph-central-blob" />

          {/* Les chemins et cercles des "nodes" */}
          {/* Exemple 1 */}
          <path d="M500 300 C 600 300, 680 200, 750 180" className="node-graph-path" />
          <circle cx="750" cy="180" r="4" className="node-graph-circle" />
          {/* Exemple 2 */}
          <path d="M500 300 C 400 300, 320 400, 250 420" className="node-graph-path" />
          <circle cx="250" cy="420" r="4" className="node-graph-circle" />
          {/* Exemple 3 */}
          <path d="M500 300 C 550 400, 650 450, 700 480" className="node-graph-path" />
          <circle cx="700" cy="480" r="4" className="node-graph-circle" />
          {/* Exemple 4 */}
          <path d="M500 300 C 350 250, 280 150, 200 100" className="node-graph-path" />
          <circle cx="200" cy="100" r="4" className="node-graph-circle" />
          {/* Exemple 5 */}
          <path d="M500 300 C 450 150, 500 100, 600 80" className="node-graph-path" />
          <circle cx="600" cy="80" r="4" className="node-graph-circle" />
          {/* Exemple 6 */}
          <path d="M500 300 C 700 350, 800 280, 850 300" className="node-graph-path" />
          <circle cx="850" cy="300" r="4" className="node-graph-circle" />

          {/* Ajoute d'autres chemins et cercles ici pour une densité comme Mastra */}

        </svg>
      </div>

      {/* Contenu principal de l'application */}
      <nav className="navbar">
        <div className="logo">YILMDE_TECH</div>
        <div className="nav-links">
          <a href="#">Produit</a>
          <a href="#">Ressources</a>
          <a href="#">Prix</a>
          <a href="#">Docs</a>
        </div>
        <div className="nav-auth">
          <button className="btn-connexion">Connexion</button>
          <button className="btn-inscription">S'inscrire</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p class = "event">
             s'incrcre : <span class ="loading">sign in</span>
          </p>
          <span class="gradient-text">Nous contacter</span>

          <h1>
            <h1>CONTRIBUER <br />
              AVEC NOUS</h1>
          </h1>

          <p className="tagline"> 
            Nous selectionnons pour vous une large gamme <br />
             de produits qui embellirons votre quotidien. <br />
             Dans un environment sain, vous contribuer à <br />
             préserver la planète, ça n'a jamais été aussi <br />
             simple que ça.
          </p>
          <div className="hero-cta">
            <div className="command-box">
               Yilmde@gmail.com <span className="icon">↗</span>
            </div>
            <a href="#" className="quickstart-link">Quickstart &gt;</a>
          </div>
        </div>
        {/* L'image de droite avec les logos n'est pas incluse car elle est statique */}
        {/* Tu peux ajouter une div ou img ici si tu as une image pour ça */}
        {/* <div className="hero-image"></div> */}
      </section>

      <CodeDemo />
    </div>
  );
}

export default App;