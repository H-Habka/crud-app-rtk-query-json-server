import {Routes, Route} from 'react-router-dom'
import {ContactView,Create,Edit,Home} from './pages'

function App() {
  return (
    <div className='w-screen h-screen bg-blue-100'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/contact/:id' element={<ContactView />} />
      </Routes>
    </div>
  );
}

export default App;
