import React from 'react'
import cn from 'classnames'
import styles from './header.module.scss'
import { CloseIcon, MenuIcon } from '../../../components/Icons'

export class Header extends React.Component {
  render() {
    const { displayMenu, setDisplayMenu } = this.props

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

        <div className={cn(styles.menu, displayMenu ? styles.mobileMenu : '')}>
          <a href="https://harmony.one/team">Team</a>
          <a href="https://harmony.one/docs">Docs</a>
          <a href="https://harmony.one/story">Story</a>
          {/*<a href="https://harmony.one/day-one">Day ONE</a>*/}
        </div>
      </div>
    )
  }
}

export default Header
