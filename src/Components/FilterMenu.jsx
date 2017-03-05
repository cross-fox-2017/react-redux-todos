import React from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showAll, showCompleted, showActive, clearComplete, completeAll } from '../Actions'

export class FilterMenu extends React.Component {
  state = { activeItem: 'SHOW_ALL' }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    switch (name) {
      case 'SHOW_ALL':
        this.props.showAll()
        break;
      case 'SHOW_COMPLETED':
        this.props.showCompleted()
        break;
      case 'SHOW_ACTIVE':
        this.props.showActive()
        break;
      // case 'COMPLETE_ALL':
      //
      //   break;
      // case 'CLEAR_COMPLETE':
      //
      //   break;
      default:

    }
  }
  render() {
    const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item
          name='SHOW_ALL'
          active={activeItem === 'SHOW_ALL'}
          content='All'
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='SHOW_COMPLETED'
          active={activeItem === 'SHOW_COMPLETED'}
          content='Completed'
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='SHOW_ACTIVE'
          active={activeItem === 'SHOW_ACTIVE'}
          content='Active'
          onClick={this.handleItemClick}
        />
      {/*<Menu.Menu position='right'>
          <Menu.Item
            name='CLEAR_COMPLETE'
            active={activeItem === 'CLEAR_COMPLETE'}
            content='Clear Complete'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='COMPLETE_ALL'
            active={activeItem === 'COMPLETE_ALL'}
            content='Complete All'
            onClick={this.handleItemClick}
          />
        </Menu.Menu>*/}
      </Menu>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({showAll, showCompleted, showActive, clearComplete, completeAll}, dispatch)
}

export default connect(null, mapDispatchToProps)(FilterMenu)
