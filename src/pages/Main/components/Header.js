import React from 'react'
import cn from 'classnames'
import styles from './header.module.scss'
import { CloseIcon, MenuIcon } from '../../../components/Icons'

export class Header extends React.Component {
  render() {
    const { displayMenu, setDisplayMenu } = this.props

    const stop = evt => evt.stopPropagation()

    return (
      <div className={cn(styles.header, this.props.className)}>
        <div className={cn(styles.logo)} />

        <div
          className={cn(
            styles.menuButton,
            !displayMenu ? styles.displayMenu : styles.hideMenu
          )}
          onClick={() => setDisplayMenu(true)}
        >
          <MenuIcon />
        </div>

        <div
          className={cn(
            styles.menuButton,
            displayMenu ? styles.displayMenu : styles.hideMenu
          )}
          onClick={() => setDisplayMenu(false)}
        >
          <CloseIcon />
        </div>

        <div
          className={cn(styles.menu, displayMenu ? styles.mobileMenu : '')}
          onClick={() => setDisplayMenu(false)}
        >
          <a href="https://harmony.one/story" onClick={stop}>
            Story
          </a>
          <a href="https://harmony.one/docs" onClick={stop}>
            Docs
          </a>
          <a href="https://harmony.one/code" onClick={stop}>
            Code
          </a>
          <a href="https://harmony.one/team" onClick={stop}>
            Team
          </a>
          {/*<a href="https://harmony.one/day-one">Day ONE</a>*/}
        </div>
      </div>
    )
  }
}

export default Header
