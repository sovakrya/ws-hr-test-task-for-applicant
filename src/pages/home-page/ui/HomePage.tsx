import { useParams } from "react-router-dom";
import logoColored from "./assets/icons/logo-colored.svg";
import logoCopyright from "./assets/icons/logo-copyright.svg"
import { getUuid, Link } from "../api/testTaskApi";
import { useEffect, useState } from "react";
import "./assets/styles/HomePage.css";

export default function HomePage() {
  const [link, setLink] = useState<Link>();

  const { uuid } = useParams();

  function getUuidFromFetch() {
    getUuid(uuid!).then((res) => {
      setLink(res);
      console.log(link);
    });
  }

  useEffect(() => {
    getUuidFromFetch();
  }, []);

  return (
    <main className="main-box">
      <header>
        <img src={logoColored} alt="Логотип компании" width={132} height={96} />
      </header>

      <div className="content-wrapper">
        <h1 className="content-title">Тестовое задание</h1>
        <div className="content-box">
          <div className="task-box">{link?.task.taskText}</div>

          <div className="comment-box">
            <p> На выполнение задания дается 40 минут. </p>
            <p>
              Не забудьте включить запись экрана. По окончании решения выложите
              запись в облако и отправьте ссылку на нее ответным письмом
            </p>
            <p>
              На перезагружайте страницу – ссылка на задание является
              одноразовой.
            </p>
          </div>
        </div>
      </div>

      <footer  className="footer-box">
        <span>2024 © Work Solutions</span>

  
        <img src={logoCopyright} alt="Логотип компании" width={66} height={48} className="footer-logo"/>

      </footer >
    </main>
  );
}
