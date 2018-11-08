import * as React from 'react';
import LunchList from './LunchList';
import Header from './Header';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <LunchList />
      </div>
    );
  }
}

export default App;
