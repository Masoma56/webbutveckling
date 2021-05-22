import { Routing } from './routes/Routing'
import { NavigationBar } from './components/NavigationBar/NavigationBar'
import './shared/global/Global.css'

import './App.css';

function App() {
  return (
    <Routing>
      <NavigationBar />
    </Routing>
  );
}

export default App;
