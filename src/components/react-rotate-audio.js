import './style.scss';

import React,{Component} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    audio: PropTypes.string,
  };

  static defaultProps = {
  };
  /*===properties end===*/

  state = {
    paused: false
  };

  get paused(){
    const { audio } = this.refs;
    return audio ? audio.paused : false;
  }

  componentDidMount(){
    this.sync();
  }

  action(inAction){
    const {audio} = this.refs;
    audio[inAction]();
  }

  sync(){
    this.setState({ paused: this.paused });
  }

  _onClick = e => {
    const action = this.paused ? 'play' : 'pause';
    this.action( action );
    this.sync();
  };

  render() {
    const { icon, audio , className, ...props } = this.props;
    const { paused } = this.state;
    return (
      <button onClick={ this._onClick } className={ classNames('react-rotate-audio', className ) } data-rotation={!paused}>
        <audio
          ref="audio"
          className="react-rotate-audio-audio" src={audio}>
          Your browser not support audio.
        </audio>
        <img className="react-rotate-audio-icon" src={icon} />
      </button>
    )
  }
}
