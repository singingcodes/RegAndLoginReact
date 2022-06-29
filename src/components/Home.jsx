import { Jumbotron, Container, Button } from "react-bootstrap"
const Home = () => {
  return (
    <div>
      <Jumbotron fluid className="jumbotron-class my-3">
        <Container>
          <h1>Welcome </h1>
          <p>This is the best place to visit for exciting news</p>
          <Button>Contact Us Today</Button>
        </Container>
      </Jumbotron>
    </div>
  )
}
export default Home
