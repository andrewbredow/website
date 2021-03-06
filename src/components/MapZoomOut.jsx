import React from 'react'
import { StyleSheet } from 'react-look'
import theme from '../theme'

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    padding: '5px 5px 0px 5px',
    margin: 10,
    borderRadius: 5,
    bottom: 0,
    left: 0,
    cursor: 'pointer',
    backgroundColor: theme.colors.blue
  },
  icon: {
    display: 'inline-block',
    width: 32,
    height: 32,
    fill: 'white'
  }
})

const ICON_SVG_PATH = [
  'M6.426', '10.668l-3.547-3.547-2.879', '2.879v-10h10l-2.879', '2.879', '3.547', '3.547-4.242',
  '4.242zm11.148', '2.664l3.547', '3.547', '2.879-2.879v10h-10l2.879-2.879-3.547-3.547',
  '4.242-4.242zm-6.906', '4.242l-3.547', '3.547', '2.879', '2.879h-10v-10l2.879', '2.879',
  '3.547-3.547', '4.242',
  '4.242zm2.664-11.148l3.547-3.547-2.879-2.879h10v10l-2.879-2.879-3.547', '3.547-4.242-4.242z'
].join(' ')

export default function MapZoomOut(props) {
  return (
    <div className={styles.buttonContainer} onClick={() => props.onClick()}>
      <svg className={styles.icon} viewBox='0 0 24 24'><path d={ICON_SVG_PATH} /></svg>
    </div>
  )
}
MapZoomOut.propTypes = {
  onClick: React.PropTypes.func.isRequired
}
