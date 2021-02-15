import React, {Component} from 'react';

import Content from './components/Content';

class Quesbank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentText: 'Content Component',
    };
  }
  onViewClick() {
    this.setState({
      contentText: 'Hello World',
    });
  }
  render() {
    const {contentText} = this.state;
    return (
      <Content
        contentText={contentText}
        onViewClick={this.onViewClick.bind(this)}
      />
    );
  }
}

export default Quesbank;
