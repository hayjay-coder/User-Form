import React from 'react';
import { Provider } from 'react-redux';
import Userform from './components/UserForm';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Userform />
    </div>
    </Provider>
  );
}

export default App;
