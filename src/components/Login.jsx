import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
const Login = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:3001/users/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res)
        console.log(res.data)
        //store token in local storage
        localStorage.setItem("token", res.data.accessToken)
        //redirect to home page
        window.location.href = "/home"
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Container>
        <Row className="text-center text-muted my-3">
          <Col>
            <h5>please enter your login details</h5>
          </Col>
        </Row>
      </Container>
      <div className="form">
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Login
          </Button>
        </Form>
      </div>
    </>
  )
}
export default Login
