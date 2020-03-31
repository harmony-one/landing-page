import React from 'react'
import cn from 'classnames'
import { Player } from 'video-react'
import { isMobileOnly, isTablet } from 'react-device-detect'

import video_desktop from '../../assets/media/video_desktop.webm'
import video_tablet from '../../assets/media/video_tablet.mp4'
import video_mobile from '../../assets/media/video_mobile.mp4'
// import preview from '../../assets/media/preview.png'

import styles from './main.module.scss'
import Header from './components/Header'
import SocialLinks from './components/SocialLinks'

export class MainPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayMenu: false,
    }
  }

  // componentDidMount() {
  //   if (this.player) {
  //     this.player.load()
  //     this.player.play()
  //   }
  // }

  render() {
    let videoFirstSrc = video_desktop
    let videoSecondSrc = video_tablet

    if (isTablet) {
      videoFirstSrc = video_tablet
    }

    if (isMobileOnly) {
      videoFirstSrc = video_mobile
      videoSecondSrc = video_mobile
    }

    return (
      <>
        <div className={styles.backgroundVideo}>
          <div className={styles.base} />
          <Player
            // ref={player => (this.player = player)}
            autoPlay={true}
            muted={true}
            playsInline={true}
            loop={true}
            //poster={preview}
          >
            <source src={videoFirstSrc} />
            <source src={videoSecondSrc} />
          </Player>
        </div>
        <div className={styles.backgroundBlur} />

        <div className={styles.mainContainer}>
          <Header
            className={styles.headerPosition}
            displayMenu={this.state.displayMenu}
            setDisplayMenu={value => this.setState({ displayMenu: value })}
          />

          <div
            className={styles.stakeBlock}
            style={{ display: !this.state.displayMenu ? 'flex' : 'none' }}
          >
            <h2
              className={cn(
                styles.title,
                styles.desktopOnly,
                styles.tabletOnly,
              )}
            >
              To scale trust for billions
              <br />
              and a radically fair economy
            </h2>
            <h2 className={cn(styles.title, styles.mobileOnly)}>
              To scale trust
              <br />
              for billions and a<br />
              radically fair economy
            </h2>

            <a
              href="https://staking.harmony.one/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.stakeNowBlock}>
                <h3>Stake now</h3>
              </div>
            </a>
          </div>

          <SocialLinks className={styles.socialPosition} />
        </div>
      </>
    )
  }
}

export default MainPage
