import { Router } from "express";
const fetch = require("node-fetch");

const router = Router();
const images = new Map();

router.get("/:cardName", async (req, res) => {
  let cardName = req.params.cardName;
  console.log(cardName);
  cardName = cardName.replace(" // ", "");

  try {
    const storedImage = images.get(cardName);
    if (storedImage) {
      //Check to see if we have the image stored
      console.log("Retrieving Stored: " + storedImage);
      return res.send(storedImage);
    }

    const apiRes = await fetch(
      "https://api.scryfall.com/cards/named?exact=" + cardName
    );
    if (apiRes.status !== 200) {
      return apiRes.status(apiRes.status);
    }

    const json = await apiRes.json();
    const faces = json.card_faces;
    let image = [];
    if (faces && faces[0].image_uris) {
      //If multiple faces, and it's a flip card
      image.push(faces[0].image_uris.normal);
      image.push(faces[1].image_uris.normal);
    } else {
      image.push(json.image_uris.normal);
    }

    images.set(cardName, image); //Cache the card
    console.log("Retrieving New: " + image);
    return res.send(image);
  } catch (error) {
    console.error(error);
    return res.status(error.status);
  }
});

export default router;
