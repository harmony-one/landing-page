import React from 'react'
import cn from 'classnames'
import styles from './header.module.scss'

export class Header extends React.Component {
  render() {
    return (
      <div className={cn(styles.header, this.props.className)}>
        <div className={cn(styles.logo)} />
        <div className={styles.menu}>
          <a href="https://harmony.one/team">Team</a>
          <a href="https://harmony.one/docs">Docs</a>
          <a href="https://harmony.one/story">
            Story
          </a>
          <a href="https://harmony.one/day-one">Day ONE</a>
        </div>
      </div>
    )
  }
}

export default Header
