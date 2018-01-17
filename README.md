# react-rotate-audio
> A rotate audio icon for react.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    audio: PropTypes.string,
  };

  static defaultProps = {
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-rotate-audio --save
// import : import ReactRotateAudio from 'react-rotate-audio'

class App extends React.Component{
  state = {
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-rotate-audio">
        <ReactRotateAudio
          ref='rc'
          audio='http://118.118.218.6/mp3.9ku.com/mp3/416/415641.mp3'
          icon={require('./assets/music-icon.png')}
           />
    </div>
    );
  }
}

```
