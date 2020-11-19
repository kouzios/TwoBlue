import { Router } from 'express';
const atomic = require('../cards/AtomicCards.json');
//Convert object keys to lowercase for consistent card pulling
const data = atomic.data;
const alteredData = {}; //Used to store data with lowercase keys
for (const [key, value] of Object.entries(data)) {
  alteredData[key.toLowerCase()] = value;
}

const router = Router();
 
router.get('/', (req, res) => {
  return res.send("Basic CARDS request");
});
 
router.get('/:cardName', (req, res) => {
  const cardName = req.params.cardName;
  console.log(cardName);
  const card = alteredData[cardName];
  console.log(card);
  return res.send(card);
});
 
export default router;