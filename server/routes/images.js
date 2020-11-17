import { Router } from 'express';
 
const router = Router();
 
router.get('/', (req, res) => {
  return res.send("BASIC IMAGES REQUEST");
});
 
router.get('/:cardName', (req, res) => {
  return res.send("SPECIFIC IMAGE REQUEST");
});
 
export default router;