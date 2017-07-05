import React from 'react';
import SimpleCard from './SimpleCard';

const item = {
  url: 'app/images/profile-picture.jpg',
  title: 'Hello World',
  description: 'lorem ipsum',
};

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <SimpleCard item={item} />
      </div>
    )
  }
}

export default App;
