// const express = require('express');
// const aiRoutes = require('./routes/ai.routes')
// const  cors = require('cors')


// const app = express()

// app.use(cors())

// app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

// app.use('/ai',aiRoutes)

// module.exports = app;



const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

// ✅ Allow only your frontend origin
app.use(cors({
  origin: 'https://color-betting-game-13tk.vercel.app'
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/ai', aiRoutes);

module.exports = app;
