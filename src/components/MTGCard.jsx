import React, { useEffect, useState } from "react";
import MTGCardOverlay from "./MTGCardOverlay";
import { OverlayTrigger, Tooltip, Button, Card } from "react-bootstrap";
import errorHandling from "../scripts/errorHandling";
import Flip from '../assets/svgs/Flip';

const MTGCard = ({ removeCard, title, ...props }) => {
  const [firstSide, setFirstSide] = useState(null);
  const [secondSide, setSecondSide] = useState(null);
  const [flipped, setFlipped] = useState(null);

  useEffect(() => {
    getCard();
    //eslint-disable-next-line
  }, [title]);

  const getCard = async () => {
    const res = await fetch(process.env.REACT_APP_API_ENDPOINT + '/images/' + title);
    const status = res.status;
    if (status !== 200) {
      //Delete card if invalid
      errorHandling(res);
      if (removeCard)
        //Only do so if our parent accepts card removal
        removeCard(status);
      return;
    }
    const img = await res.json();
    setFirstSide(img[0]);

    if (img[1]) {//If there's a flip side to the card
      setFlipped(false);
      setSecondSide(img[1]);
    }
  };

  const renderTooltip = (name, flipped) => (
    <Tooltip className="mtg-container">
      <MTGCardOverlay title={name} flipped={flipped} />
    </Tooltip>
  );

  return (
    <Card className={"mtg"}>
      <OverlayTrigger
        placement="auto"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip(title, flipped)}
      >
        {flipped === true ? (
          <img
            className={"mtg"}
            src={secondSide}
            alt={title}
          />
        ) : (
          <img
            className={"mtg"}
            src={firstSide}
            alt={title}
          />
        )}
      </OverlayTrigger>

      {removeCard ? (
        <Button className="delete" variant="danger" onClick={removeCard}>
          X
        </Button>
      ) : null}
      {flipped !== null ? (
        <Button
          className="flipped"
          variant="secondary"
          onClick={() => setFlipped((oldFlipped) => !oldFlipped)}
        >
          <Flip/>
        </Button>
      ) : null}
    </Card>
  );
};

export default MTGCard;
