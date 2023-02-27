import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
