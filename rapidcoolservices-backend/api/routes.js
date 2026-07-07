import express from 'express';
const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ status: "Success", message: "API is working!" });
});

export default router;
