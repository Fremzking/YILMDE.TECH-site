import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CodeDemo() {
  const codes = {
    agent: `vision de contribuer à un développement durable en proposant des produits ou services respectueux de l’environnement et de la santé des consommateurs. Son objectif est de créer une activité économique responsable, basée sur des matières premières naturelles, des procédés écologiques et une gestion efficace des ressources. Il cherche à réduire l’impact environnemental de son entreprise tout en répondant aux besoins croissants du marché en produits sains, biologiques et de qualité.`,
    tools: `Pour influencer mon entourage sur l’écologie à travers la consommation de mon produit 🌱, je dois adopter une stratégie basée sur la communication et la valeur ajoutée Enfin, en mettant en avant l’impact positif du produit sur la protection de l’environnement et le développement durable 🌍, je peux encourager les autres à adopter le même comportement, créant ainsi un effet d’entraînement qui renforce une conscience écologique collective.`,
    search: `Notre entreprise s’engage à rester ouverte à toutes les suggestions et à encourager la participation de chacun 🤝. Nous considérons que chaque idée, surtout lorsqu’elle vise à protéger l’environnement 🌍, est une opportunité d’amélioration et d’innovation ♻️. Toute proposition écologique est donc la bienvenue, car elle contribue à renforcer notre engagement en faveur du développement durable et à construire ensemble un avenir plus responsable et respectueux de la nature 🌿.`
  };

  const [active, setActive] = useState("agent");

  return (
    <div className="container">
      <div className="cards">
        <div className={`card ${active === 'agent' ? 'active' : ''}`} onClick={() => setActive("agent")}>🌍</div>
        <div className={`card ${active === 'tools' ? 'active' : ''}`} onClick={() => setActive("tools")}>🌱</div>
        <div className={`card ${active === 'search' ? 'active' : ''}`} onClick={() => setActive("search")}>♻️</div>
      </div>

      <div className="code-box">
        <AnimatePresence mode="wait">
          <motion.pre
            key={active}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            {codes[active]}
          </motion.pre>
        </AnimatePresence>
      </div>
    </div>
  );
}