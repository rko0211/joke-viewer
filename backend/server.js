import express from 'express';

const app = express();
// Serve from this dist folder
app.use(express.static('dist'))

// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });
// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
  //  array of object
  const joke = [
    {
      "id": 1,
      "title": "A joke",
      "content": "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t."
    },
    {
      "id": 2,
      "title": "Another joke",
      "content": "If doctors were like software engineers, they would say things like “Have you tried killing yourself and being reborn?"
    },
    {
      "id": 3,
      "title": "Another joke",
      "content": "I would love to change the world, but they won’t give me the source code."
    },
    {
      "id": 4,
      "title": "Fourth joke",
      "content": "There are 10 types of people in the world: those who understand binary, and those who don’t."
    },
    {
      "id": 5,
      "title": "Another 5th joke joke",
      "content": "Debugging is like being the detective in a crime drama where you are also the murderer."
    }
  ]
  res.send(joke);
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
  // Call back function used there so it is asynchronous in nature
  console.log(`Server at http://localhost${port}`);
}
);