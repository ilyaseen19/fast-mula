import React, {Component} from 'react';
import {
  Container,
  Header,
  Button,
  Content,
  ActionSheet,
  Text,
} from 'native-base';

var BUTTONS = ['Option 1', 'Option 2', 'Option 3', 'Delete', 'Cancel'];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class MyActionSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Button
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: 'Header',
                },
                buttonIndex => {
                  this.setState({clicked: BUTTONS[buttonIndex]});
                },
              )
            }>
            <Text>Actionsheet</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
