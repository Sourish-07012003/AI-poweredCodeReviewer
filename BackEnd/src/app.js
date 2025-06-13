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

// ✅ FIX: CORS set to your actual frontend domain
app.use(cors({
  origin: "https://ai-powered-code-reviewer-mf59.vercel.app"
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/ai', aiRoutes);

module.exports = app;
