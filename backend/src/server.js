require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  try {
    return res.status(200).json({
      mensagem: 'Server ready, waiting action !!!',
    });
  } catch (error) {
    return res.status(400).json({
      mensagem: error,
    });
  }
});

app.listen(port, () => console.log(`Api rodando na porta ${port}`));
