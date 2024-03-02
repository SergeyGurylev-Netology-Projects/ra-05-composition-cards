import './App.css'
import { Card } from './components/Card.tsx';

function App() {

  return (
    <>
      <Card
          image_url={"https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"}
          title={"Card title"}
          text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
          button={"Go somewhere"}
      />
      <Card
          title={"Special title treatment"}
          text={"With supporting text bellow as a natural lead-in to additional context"}
          button={"Go somewhere"}
      />
    </>
  )
}

export default App
