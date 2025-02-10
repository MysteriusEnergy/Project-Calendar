import React, { useEffect } from "react";

function TasksPage() {
  useEffect(() => {
    // Cargar el script del widget
    const script = document.createElement("script");
    script.src = "https://widgets.api-sports.io/2.0.3/widgets.js";
    script.type = "module";
    document.body.appendChild(script);

    // Limpieza al desmontar
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  

  return (
    <div className="min-h-screen">
      <div className="my-4">
        
        {/* Widget de API-Football */}
        <div
          id="wg-api-football-games"
          data-host="v3.football.api-sports.io"
          data-key={import.meta.env.VITE_API_FOOTBALL_KEY}
          data-date=""
          data-league=""
          data-season=""
          data-theme=""
          data-refresh="15"
          data-show-toolbar="true"
          data-show-errors="false"
          data-show-logos="true"
          data-modal-game="true"
          data-modal-standings="true"
          data-modal-show-logos="true"
        ></div>
      </div>
    </div>
  );
}

export default TasksPage;