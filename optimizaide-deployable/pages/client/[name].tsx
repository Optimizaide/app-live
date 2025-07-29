import { useRouter } from "next/router";
import { clients } from "../../data";
export default function ClientPage() {
  const { query } = useRouter();
  const client = clients[query.name];
  if (!client) return <div>Client non trouvé</div>;
  return (
    <div style={{ padding: 20 }}>
      <h1>Programme d'entraînement</h1>
      {client.program.map((day, i) => (
        <div key={i}>
          <h2>{day.day}</h2>
          <table border="1" cellPadding="5">
            <thead><tr><th>Exercice</th><th>Séries</th><th>Répétitions</th><th>Repos</th></tr></thead>
            <tbody>
              {day.exercises.map((ex, j) => (
                <tr key={j}><td>{ex.name}</td><td>{ex.sets}</td><td>{ex.reps}</td><td>{ex.rest}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <h1>Diète</h1>
      <ul>{client.diet.map((repas, i) => <li key={i}>{repas}</li>)}</ul>
    </div>
  );
}
