import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import {blue300} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: '0 auto'
  }
};

class FoodCategoryChip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  handleClick = () => {
    let attemptToSelect = !this.state.selected;
    let shouldIUpdateState = false;
    if (attemptToSelect) {
      shouldIUpdateState = this.props.handleSelect(this.props.category);
    } else {
      shouldIUpdateState = this.props.handleDeselect(this.props.category);
    }
    if (shouldIUpdateState) {
      this.setState({
        selected: !this.state.selected
      });
    }
  }

  render() {
    let properties = {};
    properties.onClick = this.handleClick;
    if (this.state.selected) {
      properties.backgroundColor = blue300;
    }

    return (
      <div style={styles.chip}>
        <Chip {...properties}>
          {this.props.category}
        </Chip>
      </div>
    )
  }
}

export default FoodCategoryChip;