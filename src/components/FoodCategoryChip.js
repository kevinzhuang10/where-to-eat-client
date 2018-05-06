import React, { Component } from 'react';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4
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
    console.log(this.props);
    this.props.handleSelect(this.props.category);
  }

  render() {
    return (
      <div style={styles.chip}>
        <Chip onClick={this.handleClick}>
          {this.props.category}
        </Chip>
      </div>
    )
  }
}

export default FoodCategoryChip;