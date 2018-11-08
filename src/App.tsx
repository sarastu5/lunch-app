import * as React from 'react';
import LunchList from './LunchList';
import Header from './Header';

class App extends React.Component {
  render() {
    const title = "Lounasta jee jee"
    return (
      <div>
        <Header title={title}/>
        <LunchList />
      </div>
    );
  }
}

export default App;
