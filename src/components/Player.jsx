import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faCirclePlay, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Player = ({duration, randomIdFromArtist, randomId2FromArtist}) => {
    return (
        <div className="player">
            <div className="player__controllers">
                <Link to={`/song/${randomIdFromArtist}`}>
                    <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
                </Link>

                <FontAwesomeIcon className="player__icon player__icon--play" icon={faCirclePlay} />
                
                <Link to={`/song/${randomId2FromArtist}`}>
                    <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
                </Link>
            </div>
            <div className="player__progress">
                <p>00:00</p>
                <div className="player__bar">
                    <div className="player__bar-progress">
                        
                    </div>
                </div>

                <p>{duration}</p>
            </div>
        </div>
    );
}
Player.propTypes = {
    duration: PropTypes.string.isRequired,
    randomIdFromArtist: PropTypes.string.isRequired,
    randomId2FromArtist: PropTypes.string.isRequired,
};

export default Player;

