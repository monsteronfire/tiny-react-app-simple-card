import React from 'react';
import Image from './Image';
import Title from './Title';
import Description from './Description';

class SimpleCard extends React.Component {
  render() {
    return (
      <div className='simple-card'>
        <Image url={this.props.item.url}/>
        <div className='info-wrapper'>
          <Title title={this.props.item.title} />
          <Description description={this.props.item.description} />
        </div>
      </div>
    )
  }
}

export default SimpleCard;
