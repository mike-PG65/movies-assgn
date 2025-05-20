import express from "express";
import cors from   "cors"

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.port || 4000


const movies = [
    {
      id: '1',
      title: 'Inception',
      description: 'A skilled thief is given a chance at redemption if he can successfully perform inception.',
      posterURL: 'https://i.pinimg.com/736x/68/86/7b/68867b2c3884c37f0b570cd77c4f0f2f.jpg',
      rating: 8.8
    },
    {
      id: '2',
      title: 'The Matrix',
      description: 'A hacker discovers reality is a simulation and joins a rebellion against the machines.',
      posterURL: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
      rating: 8.7
    },
    {
      id: '3',
      title: 'Interstellar',
      description: 'A team of explorers travels through a wormhole in space to ensure humanity\'s survival.',
      posterURL: 'https://i.pinimg.com/736x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg',
      rating: 8.6
    },
    {
      id: '4',
      title: 'The Dark Knight',
      description: 'Batman faces off against the Joker, a criminal mastermind spreading chaos in Gotham.',
      posterURL: 'https://i.pinimg.com/736x/88/c8/20/88c8204e1017437290af9db9a02d83f6.jpg',
      rating: 9.0
    },
    {
      id: '5',
      title: 'Parasite',
      description: 'A poor family schemes to infiltrate a wealthy household in this dark social satire.',
      posterURL: 'https://i.pinimg.com/736x/65/26/88/6526882eac7b48aada4b78b022b9c68c.jpg',
      rating: 8.6
    }
  ];
  


app.get('/books', (req, res)=>{
    res.json(movies)

})

app.listen(PORT, ()=>{
    console.log(`App is listening at port ${PORT}`)
})