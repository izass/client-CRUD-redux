import Reacr, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Landing from './pages/Landing'
import NewClient from './pages/NewClient'

function App() {
  const [currentPage, setCurrentPage] = useState(true)

  function renderCurrentPage() {
    if (currentPage) {
      return <Landing />
    } else {
      return <NewClient />
    }
  }

  function togglePage() {
    setCurrentPage(!currentPage)
  }

  return (
    <div>
      <Button onClick={togglePage}>toggle page</Button>
      {renderCurrentPage()}
    </div>
  );
}

export default App;
