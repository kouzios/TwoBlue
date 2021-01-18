import React, { useState, useEffect } from "react";
import { Row, Button } from "react-bootstrap";
import regeneratorRuntime from "regenerator-runtime"; //Used to allow async functions

import CustomPanel from "../components/CustomPanel";
import MTGCard from "../components/MTGCard";
import PersonPlus from '../assets/svgs/PersonPlus';

const defaultBoard = new Set();
const defaultGraveyard = new Set();

const Game = ({ setView, ...props }) => {
  const [board, setBoard] = useState(defaultBoard);
  const [graveyard, setGraveyard] = useState(defaultGraveyard);
  const [displayBoard, setDisplayBoard] = useState(null);
  const [displayGraveyard, setDisplayGraveyard] = useState(true);
  const [enabledGraveyard, setEnabledGraveyard] = useState(null);

  useEffect(() => {
    if (!window.localStorage.getItem("board"))
      window.localStorage.setItem("board", JSON.stringify([]));
    if (!window.localStorage.getItem("graveyard"))
      window.localStorage.setItem("graveyard", JSON.stringify([]));
    if(!window.localStorage.getItem("save-graveyard"))
      window.localStorage.setItem("save-graveyard", true);
    const savedBoard = JSON.parse(window.localStorage.getItem("board"));
    const savedGraveyard = JSON.parse(window.localStorage.getItem("graveyard"));
    const doSaveGraveyard = window.localStorage.getItem("save-graveyard");
    console.log(doSaveGraveyard)
    setBoard(new Set(savedBoard));
    setGraveyard(new Set(savedGraveyard));
    setEnabledGraveyard(doSaveGraveyard === "true");
  }, []);

  useEffect(() => {
    let clone = [...board];
    window.localStorage.setItem("board", JSON.stringify(clone));
    const location = "board";
    clone = clone.map((card, index) => (
      <MTGCard
        removeCard={(status) => removeCard(location, card, status)}
        key={location + card + index}
        title={card}
      />
    ));
    setDisplayBoard(clone);
    //eslint-disable-next-line
  }, [board]);

  useEffect(() => {
    let clone = [...graveyard];
    window.localStorage.setItem("graveyard", JSON.stringify(clone));
    const location = "graveyard";
    clone = clone.map((card, index) => (
      <MTGCard
        removeCard={(status) => removeCard(location, card, status)}
        key={location + card + index}
        title={card}
      />
    ));
    setDisplayGraveyard(clone);
    //eslint-disable-next-line
  }, [graveyard]);

  //When the enable/disable graveyard check is hit, update the localstorage
  const updateEnabledGraveyard = (checked) => {
    setEnabledGraveyard(checked);
    window.localStorage.setItem("save-graveyard", checked);
  }

  const removeCard = (location, cardName, optionalStatus) => {
    //If we have a status code (from adding, getting a status code, then removing as a result) then handle
    if (optionalStatus && typeof optionalStatus === "number") {//TODO: Add more cases
      switch (optionalStatus) {
        case 404:
          alert("Error, card does not exist in Scryfall's database");
          break;
        default:
          alert(optionalStatus + " error: From TwoBlue's server");
          break;
      }
    }
    if (location === "board") {
      let clone = new Set([...board]);
      clone.delete(cardName);
      setBoard(clone);
    } else if (location === "graveyard") {
      let clone = new Set([...graveyard]);
      clone.delete(cardName);
      setGraveyard(cardName);
    } else {
      alert("Failed to remove card");
    }
  };

  //Adds a card to their respective location (board or graveyard)
  const addCard = async (location) => {
    let cardName = prompt(
      "What card would you like to add to " +
        location.toUpperCase() +
        "? (Refer dual sided cards by their front)"
    );

    if (cardName) {
      //Convert to lowercase, no special characters to ensure consistency for the Set preventing duplicates
      cardName = cardName.trim();
      const condensedCardName = cardName.toLowerCase().replace(/[^\w\s]/gi, "");
      if (location === "board") {
        setBoard(new Set([...board, condensedCardName]));
      } else if (location === "graveyard") {
        setGraveyard(new Set([...graveyard, condensedCardName]));
      } else {
        alert("Invalid card insert location");
      }
    }
  };

  const hardReset = () => {
    setBoard(defaultBoard);
    setGraveyard(defaultGraveyard);
  };

  const gameState = () => {
    if (enabledGraveyard === true) {
      return (
        <Row className="ml-2 mr-2 justify-content-around">
          <CustomPanel addable addCard={addCard} md={6} title="board">
            {displayBoard}
          </CustomPanel>

          <CustomPanel addable addCard={addCard} md={6} title="graveyard">
            {displayGraveyard}
          </CustomPanel>
        </Row>
      );
    } else {
      return (
        <Row className="ml-2 mr-2 justify-content-around">
          <CustomPanel addable addCard={addCard} md={12} title="board">
            {displayBoard}
          </CustomPanel>
        </Row>
      );
    }
  };

  const createLink = () => {
    return "TODO";
  }

  return (
    <div id="game">
      <Row className="justify-content-center align-items-center">
        <CustomPanel md={6} title="Control Panel">
          <Button onClick={hardReset}>Hard Reset</Button>
          <label>
            Graveyard:
            <input
              name="enabledGraveyard"
              type="checkbox"
              checked={enabledGraveyard}
              onChange={(e) => updateEnabledGraveyard(e.target.checked)}
              className="ml-2"
            />
          </label>
          <div className="clickable"  onClick={()=>alert("Link created is: " + createLink())}>
            <PersonPlus/>
          </div>
        </CustomPanel>
      </Row>
      {gameState()}
    </div>
  );
};

export default Game;
