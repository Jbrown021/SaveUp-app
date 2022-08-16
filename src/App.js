import { Stack } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

function App() {
  return <Container>
    <Stack direction='horizontal' gap='2' className='mb-4'>
      <h1 className='me-auto'>Goals</h1>
      <button variant="green">Add A Goal</button>
    </Stack>
  </Container>


  // (
  //   <div className="App">
  //     Hello World
  //   </div>
  // );
}

export default App;
