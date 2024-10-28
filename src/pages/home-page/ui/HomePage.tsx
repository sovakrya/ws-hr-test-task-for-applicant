import { useParams } from "react-router-dom";
import logoColored from "./assets/icons/logo-colored.svg"

export default function HomePage() {
  const {uuid} = useParams()

  return (
    <main className="main-box">
      <header>
        <img src={logoColored} alt="Логотип компании" width={132} height={96} />
      </header>

      <div>
        
      </div>
    </main>
  );
}
