import React, {useState} from 'react'
import './App.css';
import Main from './components/main'
import store from './redux/store';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

function App(props) {

  const [flag, setFlag] = useState(true);
  const { flagCon } = props

  return (
    <>
        <Provider store={store}>
        <Main/>
      </Provider>

    
    </>
  );
}
export default connect(
  (state) => {
    return {
    }
  }
)(App);
