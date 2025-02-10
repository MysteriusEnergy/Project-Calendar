// src/components/MatchesWidget.jsx
import { useState, useEffect } from 'react';

function MatchesWidget() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  // ... mismo código de fetchMatches ...

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-2xl font-bold mb-4">Partidos en Vivo</h2>
      {/* ... resto del código de renderizado de partidos ... */}
    </div>
  );
}

export default MatchesWidget;