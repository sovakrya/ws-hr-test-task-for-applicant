import logoCopyright from "./assets/icons/logo-copyright.svg";
import "./assets/styles/Footer.css"

export default function Footer() {
  return (
    <footer className="footer-box">
      <span className="footer-title">2024 © Work Solutions</span>

      <img
        src={logoCopyright}
        alt="Логотип Work Solutions"
        width={66}
        height={48}
        className="footer-logo"
      />
    </footer>
  );
}
