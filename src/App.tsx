import { BrowserRouter, Route} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext'
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
    <BrowserRouter>      
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" exact component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
