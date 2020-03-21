import React from 'react'
import cn from 'classnames'
import styles from './social-links.module.scss'

import {
  TelegramIcon,
  TwitterIcon,
  MediumIcon,
  InstaIcon,
  LinkedInIcon,
  YoutubeIcon,
} from '../../../components/Icons'

export class SocialLinks extends React.Component {
  render() {
    return (
      <div className={cn(styles.social, this.props.className)}>
        <a
          href="https://t.me/harmony_one"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon />
        </a>
        <a
          href="https://medium.com/harmony-one"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MediumIcon />
        </a>
        <a
          href="https://twitter.com/harmonyprotocol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/company/18655748/admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/harmonyprotocol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstaIcon />
        </a>
        <a
          href="https://www.youtube.com/channel/UCDfuhS7xu69IhK5AJSyiF0g"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon />
        </a>
      </div>
    )
  }
}

export default SocialLinks
