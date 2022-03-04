import React from 'react'

class SubheadingComponent extends React.Component {
  constructor(props) {
    super(props)

    const bgColor = 'black' 

    const txtColor = "white"

    this.state = {
      bgColor,
      txtColor,
    }
  }

  render() {
    const styles = {
      container: {
        padding: 20,
        fontfamily: 'Open Sans',
        fontSize: '12px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        backgroundColor: this.state.bgColor,
        color: this.state.txtColor,
        textAlign: 'left',
      },
      containerRounded: {
        padding: 20,
        borderRadius: '13px 13px 0px 0px',
        fontfamily: 'Open Sans',
        fontSize: '12px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        backgroundColor: this.state.bgColor,
        color: this.state.txtColor,
        textAlign: 'left',
      },
    }

    const containerStyle =
      this.props.type === 'rounded' ? styles.containerRounded : styles.container

    return <div style={containerStyle}>{this.props.title}</div>
  }
}
export default SubheadingComponent
