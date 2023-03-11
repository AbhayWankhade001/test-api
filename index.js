import express from 'express';
import cors from 'cors';
import router from './route.js';

const app = express();

// Enable CORS for all requests
app.use(cors());

// Mount the router on the /api path
app.use('/api', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
