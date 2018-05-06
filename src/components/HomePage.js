import React, { Component } from 'react';
import axios from 'axios';
import FoodCategoryChips from './FoodCategoryChips';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choicesRemaining: 5,
      categories: ['Burger', 'Mexican Food', 'Korean Food', 'Italian Food', 'Chinese Food', 'Mediterranean Food', 'Salad', 'Thai Food', 'Japanese Food', 'Indian Food'],
      selectedCategories: []
    };
    // this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.getRecommendations();
  }

  handleSelect = (category) => {
    this.setState({
      selectedCategories: this.state.selectedCategories.concat(category)
    });
  }

  async getRecommendations() {
    let queryString = 'term=salad+japanese+korean&latitude=37.760737&longitude=-122.467954';
    let endPoint = 'recommend/index?';
    let devURL = process.env.REACT_APP_SERVER_API_URL + endPoint + queryString;
    let result = await axios.get(devURL);
    console.log(result.data);
    this.setState({
      dummyString: result.data[0].name
    });
  }

  render() {
    return (
    <div>
      <FoodCategoryChips categories={this.state.categories} handleSelect={this.handleSelect}/>
    </div>
    );
  }
}

export default HomePage;