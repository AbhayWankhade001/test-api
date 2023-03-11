import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('this is abhay  World!')
});

router.get('/api/get', (req, res) => {
    res.send('Hello World!');
  });

router.post('/api/data', (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(201).json({
    message: 'Data received!',
    data: data
  });
});

export default router;
