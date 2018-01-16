import './style.scss';

import React,{Component} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component{
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
    this.setState({ paused: this.paused });
  }

  action(inAction){
    const {audio} = this.refs;
    audio[inAction]();
  }

  _onClick = e => {
    const { audio } = this.refs;
    this.paused ? audio.play() : audio.pause();
    this.setState({ paused: this.paused });
  };

  render() {
    const { icon, audio , className, ...props } = this.props;
    const { paused } = this.state;
    return (
      <span onClick={this._onClick} className={classNames('react-rotate-disc', className )} data-rotation={!paused}>
        <audio ref="audio"
              className="react-rotate-disc-audio" src={audio}>
            Your browser not support audio.
        </audio>
        <img className="react-rotate-disc-icon" src={icon} />
      </span>
    )
  }
}
