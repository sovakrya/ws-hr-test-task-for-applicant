import { useParams } from "react-router-dom";
import {
  getTaskSettings,
  getUuid,
  Link,
  Settings,
  updateValidity,
} from "../api/testTaskApi";
import { useEffect, useState } from "react";
import "./assets/styles/HomePage.css";
import "./assets/styles/TestTask.css";
import Header from "./Header";
import Footer from "./Footer";

export default function HomePage() {
  const [link, setLink] = useState<Link | null>(null);
  const [settings, setSettings] = useState<Settings | null>(null);

  const { uuid } = useParams();

  function getUuidFromFetch() {
   getUuid(uuid!).then((res) => {
    console.log(res)
    const temp = res

    updateValidity(res!)
    setLink(temp!)
    })

 
  }

  function getTaskSettingsFromFetch() {
    getTaskSettings().then((res) => {
      setSettings(res.data);

    });
  }

  useEffect(() => {
    getUuidFromFetch();
    getTaskSettingsFromFetch();
  }, []);

  return (
    <main className="main-box">
      <Header />

      <div className="task-content-wrapper">
        <div className="task-content-box">
          {!settings ? (
            <h1 className="content-title">Тестовое задание</h1>
          ) : (
            <h1>{settings.title}</h1>
          )}

          <div className="task-text-box">
            <span className="task-text">{link?.task.taskText}</span>
          </div>
        </div>

        {!settings ? (
          <div className="warning-box">
            <p>На выполнение задания дается 40 минут.</p>
            <p>
              Не забудьте включить запись экрана. По окончании решения выложите
              запись в облако и отправьте ссылку на нее ответным письмом
            </p>
            <p>
              На перезагружайте страницу – ссылка на задание является
              одноразовой.
            </p>
          </div>
        ) : (
          <div>{settings.comment} </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
