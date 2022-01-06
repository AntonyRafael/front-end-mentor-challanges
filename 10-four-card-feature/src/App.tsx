import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import IconSupervisor from "./assets/images/icon-supervisor.svg";
import IconTeam from "./assets/images/icon-team-builder.svg";
import IconKarma from "./assets/images/icon-karma.svg";
import IconCalculator from "./assets/images/icon-calculator.svg";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Reliabble, efficient delivery</h1>
        <h1>Powered by Technology</h1>

        <p>
          Our Artificial intelligence tools use millions of project data points
          to ensure that tour project is successful
        </p>
      </div>

      <div className="cards">
        <div className="supervisor">
          <Card
            title="Supervisor"
            description="Monitors activity to identify project roadblocks"
            icon={IconSupervisor}
            iconAlt="Supervisor Icon"
            borderColor="var(--cyan)"
          />
        </div>

        <div className="two-cards">
          <Card
            title="Team Builder"
            description="Teams our talent network to create the optional team for your project"
            icon={IconTeam}
            iconAlt="Team Builder Icon"
            borderColor="var(--red)"
          />

          <Card
            title="Karma"
            description="Regularly evaluates our talent to ensure quality"
            icon={IconKarma}
            iconAlt="Karma Icon"
            borderColor="var(--orange)"
          />
        </div>
        <div className="calculator">
          <Card
            title="Calculator"
            description="Uses data from post projects to provide better delivery estimates"
            icon={IconCalculator}
            iconAlt="Team Builder Icon"
            borderColor="var(--blue)"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
