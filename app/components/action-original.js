const Action = ({name, isCurrent}) => {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      hoverSound: 
        <Sound
          url='./public/sounds/boop.mp3'
          playStatus={Sound.status.PLAYING}
          playFromPosition={0}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying} 
        />,
      errorSound: 
        <Sound
          url='./public/sounds/woob.mp3'
          playStatus={Sound.status.PLAYING}
          playFromPosition={0}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying} 
        />,
      soundToPlay: ''
    }
  }

  handleClick (e) {
    console.log ("HANDLING CLIck")
    e.preventDefault();
    if (this.props.enable) {
      this.props.handleClick()
    }
    else {
      this.setState ({error: true, soundToPlay: this.state.errorSound})
      setTimeout ( 
        function() { 
          this.setState({error: false, soundToPlay: ''}) 
        }.bind(this), 500 
      )
    }
  }  
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.isCurrent) 
      this.setState({soundToPlay: this.state.hoverSound})
    else
      this.setState({soundToPlay: ''})
  }
  
  handleMouseOver (e) {
    e.preventDefault()
    this.props.handleMouseOver()
  }
  
  handleMouseOut (e) {
    e.preventDefault()
    this.props.handleMouseOut()
  }
    
  render () {
    return (
      <li className={
        this.props.className + 
        (this.props.isCurrent ? ' current' : '') + 
        (this.state.error ? ' shake' : '')
      }>
        <a 
          href="#" 
          onClick={this.handleClick.bind(this)}
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseOut={this.handleMouseOut.bind(this)}
        >
          {this.props.name}
        </a>
        {this.state.soundToPlay}
      </li>
    )
  }
}
