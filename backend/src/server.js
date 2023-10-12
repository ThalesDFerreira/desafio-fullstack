require('dotenv').config();
const express = require('express');
const cors = require('cors');
const status = require('http-status');
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  try {
    return res.status(status.OK).json({
      message: 'Server ready, waiting action !!!',
    });
  } catch (error) {
    return res.status(status.BAD_REQUEST).json({
      message: error,
    });
  }
});

app.listen(port, () => console.log(`Api rodando na porta ${port}`));
