import React, {Component} from 'react';
import './style.css';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class App extends Component {
    
    render(){
        return(
            <div className="app">
                <Routes />
                <ToastContainer autoClose={3000} />
            </div>
        );
    }
}

export default App;