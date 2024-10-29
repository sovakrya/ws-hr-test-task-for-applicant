import { useParams } from "react-router-dom";
import { getUuid, Link } from "../api/testTaskApi";
import { useEffect, useState } from "react";
import "./assets/styles/HomePage.css";
import "./assets/styles/TestTask.css"
import Header from "./Header";
import Footer from "./Footer";

export default function HomePage() {
  const [link, setLink] = useState<Link>();

  const { uuid } = useParams();

  function getUuidFromFetch() {
    getUuid(uuid!).then((res) => {
      setLink(res);
    });
  }

  useEffect(() => {
    getUuidFromFetch();
  }, []);

  return (
    <main className="main-box">
      <Header />

      <div className="task-content-wrapper">

        <div className="task-content-box">
        <h1 className="content-title">Тестовое задание</h1>

        <div className="task-text-box">
          <span className="task-text">{link?.task.taskText}</span>
        </div>

        </div>

        <div className="warning-box">
          <p>На выполнение задания дается 40 минут.</p>
          <p>
            Не забудьте включить запись экрана. По окончании решения выложите
            запись в облако и отправьте ссылку на нее ответным письмом
          </p>
          <p>
            На перезагружайте страницу – ссылка на задание является одноразовой.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
