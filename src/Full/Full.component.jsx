import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Score from "../Live/Score.component";
import { Accordion, Card, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Full.style.css";
import Fade from "react-reveal/Fade";

function Full() {
  let location = useLocation();

  const [id, setId] = useState(null);
  const [full, setFull] = useState([]);

  useEffect(() => {
    if (location.data) {
      setId(location.data);
      localStorage.setItem("my_id", location.data);
    } else {
      const data = localStorage.getItem("my_id");
      if (data) {
        setId(data);
      }
    }
  }, []);

  useEffect(() => {
    async function f_full_score() {
      const full_url = `https://api.cricapi.com/v1/match_scorecard?apikey=cb7febb3-a903-4b14-b116-cd8065ca4f63&offset=0&id=${id}`;
      await fetch(full_url)
        .then((res) => res.json())
        .then((fdata) => setFull(fdata))
        .catch((e) => console.log(e));
    }
    if (id) {
      f_full_score();
    }
  }, [id]);

  return (
    <div>
      <div>
        <Score unique_id={location.data} />
      </div>
      <Accordion defaultActiveKey="0">
        <Card>
          <div className="bgg">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <div>
                <b>
                  1st INNING: (
                  {`R:${full?.data?.scorecard[0]?.totals?.R || "-"}, O:${
                    full?.data?.scorecard[0]?.totals?.O || "-"
                  }`}
                  )
                </b>
              </div>
            </Accordion.Toggle>
          </div>
          <Fade delay={400}>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Table variant="dark" responsive>
                  <tr>
                    <th>Batsman</th>
                    <th>Status</th>

                    <th>Balls</th>
                    <th>Runs</th>
                  </tr>
                  {full?.data?.scorecard[0]?.batting?.map((scene) => (
                    <tr>
                      <td>{scene.batsman.name}</td>
                      <td>
                        {scene["dismissal-text"] === "not out"
                          ? "Batting"
                          : scene["dismissal-text"]}
                      </td>

                      <td>{scene.b}</td>
                      <td>
                        <b>{scene.r}</b>
                      </td>
                    </tr>
                  ))}
                </Table>
                <Table variant="dark" responsive>
                  <tr>
                    <th>Bowler</th>
                    <th>Economy</th>
                    <th>Overs</th>
                    <th>Runs</th>
                    <th>Wickets</th>
                  </tr>
                  {full?.data?.scorecard[0]?.bowling?.map((scene) => (
                    <tr>
                      <td>{scene.bowler.name}</td>
                      <td>{scene.eco}</td>

                      <td>
                        <b>{scene.o}</b>
                      </td>
                      <td>
                        <b>{scene.r}</b>
                      </td>
                      <td>
                        <b>{scene.w}</b>
                      </td>
                    </tr>
                  ))}
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Fade>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <div>
              <b>
                2nd Inning: (
                {`R:${full?.data?.scorecard[1]?.totals?.R || "-"}, O:${
                  full?.data?.scorecard[1]?.totals?.O || "-"
                }`}
                )
              </b>
            </div>
          </Accordion.Toggle>
          <Fade delay={400}>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Table variant="dark" responsive>
                  <tr>
                    <th>Batsman</th>
                    <th>Status</th>

                    <th>Balls</th>
                    <th>Runs</th>
                  </tr>
                  {full?.data?.scorecard[1]?.batting?.map((scene) => (
                    <tr>
                      <td>{scene.batsman.name}</td>
                      <td>
                        {scene["dismissal-text"] === "not out"
                          ? "Batting"
                          : scene["dismissal-text"]}
                      </td>

                      <td>{scene.b}</td>
                      <td>
                        <b>{scene.r}</b>
                      </td>
                    </tr>
                  ))}
                </Table>
                <Table variant="dark" responsive>
                  <tr>
                    <th>Bowler</th>
                    <th>Economy</th>
                    <th>Overs</th>
                    <th>Runs</th>
                    <th>Wickets</th>
                  </tr>
                  {full?.data?.scorecard[1]?.bowling?.map((scene) => (
                    <tr>
                      <td>{scene.bowler.name}</td>
                      <td>{scene.eco}</td>

                      <td>
                        <b>{scene.o}</b>
                      </td>
                      <td>
                        <b>{scene.r}</b>
                      </td>
                      <td>
                        <b>{scene.w}</b>
                      </td>
                    </tr>
                  ))}
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Fade>
        </Card>
      </Accordion>
    </div>
  );
}

export default Full;
