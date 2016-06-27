import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

const propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
};

const defaultProps = {
  status: 'success'
};

export default class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {isPartyTime: false};
  }

  render() {
    return (
      <div className={classNames('banner', this.props.status, {pulse: this.state.isPartyTime})}>
        <div className='title'>{this.props.title}</div>
        <div className='subtitle'>{this.props.subtitle}</div>

        <button
          className='btn btn-default'
          onClick={() => this.setState({isPartyTime: true})}
        >
          Call 911?
        </button>
      </div>
    );
  }
};

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;
