import Valorant from './pages/valorant';
import TicTac from './pages/tictac';
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';

function App(){
    return (
        <BrowserRouter>
            <div className='App'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/pages/tictac">TicTacToe</Link>
                        </li>
                        <li>
                            <Link to="/pages/valorant">Valorant</Link>
                        </li>
                    </ul>
                </nav>
                <div className='content'>
                    <Routes>
                        <Route path="/" element = {<Home />}></Route>
                        <Route path="/pages/tictac" element = {<TicTac />}></Route>
                        <Route path="/pages/valorant" element = {<Valorant />}></Route>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;