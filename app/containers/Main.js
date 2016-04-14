import React from 'react'

const styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89',
    color: '#fff',
    padding: 5
  }
}

const Main = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <p style={{margin: 0}}>
          React Calendar
        </p>
      </div>
      {props.children}
    </div>
  )
}

export default Main
