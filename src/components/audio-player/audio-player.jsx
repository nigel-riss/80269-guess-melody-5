import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';


class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = createRef();

    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.src = src;

    audio.oncanplaythrough = () => {
      this.setState({
        isLoading: false,
      });
    };

    audio.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    audio.onpause = () => {
      this.setState({
        isPlaying: false,
      });
    };
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
  }

  render() {
    const {
      isLoading,
      isPlaying,
    } = this.state;

    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => {
            this.setState((state) => ({
              isPlaying: !state.isPlaying,
            }));
          }}
        />
        <div className="track__status">
          <audio
            reg={this._audioRef}
          />
        </div>
      </React.Fragment>
    );
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;

    if (this.state.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}


AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool,
  src: PropTypes.string.isRequired,
};


export default AudioPlayer;
