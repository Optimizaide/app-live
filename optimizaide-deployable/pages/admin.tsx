import { useState } from "react";
export default function Admin() {
  const [code, setCode] = useState("");
  if (code !== "1234") {
    return (
      <div style={{ padding: 20 }}>
        <h1>Connexion admin</h1>
        <input value={code} onChange={e => setCode(e.target.value)} placeholder="Code d'accès" />
      </div>
    );
  }
  return (
    <div style={{ padding: 20 }}>
      <h1>Bienvenue dans l'espace admin</h1>
      <p>Les modifications se feront ici dans la prochaine version.</p>
    </div>
  );
}
