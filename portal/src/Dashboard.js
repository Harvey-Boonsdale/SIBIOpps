import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./App.css";
import OpportunityCard from "./OpportunityCard";

function Dashboard(props) {
  useEffect(() => {
    props.listOpportunities();
  }, []);

  const makeOpportunities = () => {
    return props.opportunities.map((opportunity) => {
      return (
        <Row className="col-md-10 col-lg-8">
          <Col className="cardCol">
            <OpportunityCard
              postToDisplay={opportunity}
              client={props.client}
              listOpportunities={props.listOpportunities}
            />
          </Col>
        </Row>
      );
    });
  };

  //print opportunity card

  return (
    <div className="cardContainer">
      <Row className="cards">{makeOpportunities()}</Row>
    </div>
  );
}

export default Dashboard;
