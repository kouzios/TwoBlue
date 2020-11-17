import { Router } from 'express';
 
const router = Router();
 
router.get('/', (req, res) => {
  return res.send("Basic CARDS request");
});
 
router.get('/:cardName', (req, res) => {
  return res.send("SPECIFIC CARDS REQUEST");
});
 
export default router;