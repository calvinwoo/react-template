import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner/Banner';

class Index extends Component {
  render() {
    return (
      <div>
        <Banner
          status='success'
          title='Disaster :('
          subtitle='Someone took the last bag of Cheetos!'
          handleClick={callback}
        />
      </div>
    );
  }
};

const callback = () => {
  console.log('Callback executed!');
};

ReactDOM.render(<Index />, document.getElementById('content'));
