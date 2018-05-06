import React, { Component } from 'react';
import axios from 'axios';
import FoodCategoryChips from './FoodCategoryChips';
import RaisedButton from 'material-ui/RaisedButton';
import queryString from 'query-string';

const style = {
  margin: 12,
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choicesAvailable: 5,
      categories: ['Burger', 'Mexican Food', 'Korean Food', 'Italian Food', 'Chinese Food', 'Mediterranean Food', 'Salad', 'Thai Food', 'Japanese Food', 'Indian Food'],
      selectedCategories: [],
      results: []
    };
  }

  handleSelect = (category) => {
    if (this.state.selectedCategories.length < this.state.choicesAvailable) {
      this.setState({
        selectedCategories: this.state.selectedCategories.concat(category)
      });
      return true;
    }
    return false;
  }

  handleDeselect = (category) => {
    let newSelectCategories = this.state.selectedCategories.slice();
    let targetIndex = newSelectCategories.indexOf(category);
    if (targetIndex !== -1) {
      newSelectCategories.splice(targetIndex, 1);
      this.setState({
        selectedCategories: newSelectCategories
      });
      return true;
    }
    return false;
  }

  async getRecommendations(queryString) {
    let endPoint = 'recommend/index?';
    let devURL = process.env.REACT_APP_SERVER_API_URL + endPoint + queryString;
    console.log('sending request', devURL);
    let result = await axios.get(devURL);
    console.log(result.data);
    this.setState({
      results: result.data
    });
  }

  handleClick = () => {
    let lat = '37.760737';
    let lon = '-122.467954';
    let queryString = `term=${this.state.selectedCategories.join('+')}&latitude=${lat}&longitude=${lon}`;
    this.getRecommendations(queryString);
  }

  render() {
    return (
    <div>
      <FoodCategoryChips 
        categories={this.state.categories} 
        handleSelect={this.handleSelect} 
        handleDeselect={this.handleDeselect}
      />
      <RaisedButton 
        label="Show Me The Magic" 
        primary={true} 
        style={style}
        onClick={this.handleClick} 
      />
    </div>
    );
  }
}

export default HomePage;