import React from 'react';
import FontAwesome from 'react-fontawesome';
import numeral from 'numeral';
import artPlaceholder from '../../../../resources/media/art_placeholder.png';

import ContextPopup from '../../ContextPopup';

import styles from './styles.scss';

class PopularTracks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.popular_tracks_container}>
        <div className={styles.header}>
          Popular tracks:
        </div>
        {
          this.props.tracks.track.slice(0, 5).map((track, index)=> {
            return (
              <ContextPopup
                key={index}
                trigger={
                  <div className={styles.track_row}>
                    <img src={track.image[0]['#text'] || artPlaceholder} />
                    <div className={styles.popular_track_name}>
                      {track.name}
                    </div>
                    <div className={styles.playcount}>
                      {numeral(track.playcount).format('0,0')}
                    </div>
                  </div>
                }
                artist={this.props.artist.name}
                title={track.name}
                thumb={track.image[0]['#text'] || artPlaceholder}
              >
                <a href='#'
                  onClick={() => this.props.addToQueue(this.props.musicSources, {
                    artist: this.props.artist.name,
                    name: track.name,
                    thumbnail: track.image[0]['#text'] || artPlaceholder
                  })}
                  className={styles.add_button}
                >
                  <FontAwesome name="plus" /> Add to queue
                </a>
                <a href='#' className={styles.add_button}><FontAwesome name="play" /> Play now</a>
              </ContextPopup>
            )
          })
        }
      </div>
    );

  }
}

export default PopularTracks;
