import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { clearLocalNotification, setLocalNotification } from '../../utils/notifications';
import styles from './styles';

import { Button } from '../../components/Button';

export class Questions extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      questionSelected: 0,
      corrects: 0,
      showAnswer: false,
    }
  }

  goToDecks() {
    this.props.navigation.navigate('decks');
  }

  response() {
    const isCorrect = Math.ceil(Math.random() * 10) % 2;
    const corrects = isCorrect ? this.state.corrects + 1 : this.state.corrects;
    const newQuestion = this.state.questionSelected + 1;
    this.setState({ questionSelected: newQuestion, corrects, showAnswer: false });
  }

  renderQuestion(question) {
    const currentQuestion = this.props.questions.length - this.state.questionSelected;
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.status}>{currentQuestion}/{this.props.questions.length}</Text>
        <View style={styles.content}>
          <Text style={styles.title}>
            {this.state.showAnswer ? question.answer : question.question}
          </Text>
          <TouchableWithoutFeedback
            onPress={() => this.setState({ showAnswer: !this.state.showAnswer })}
          >
            <View>
              <Text>
                {this.state.showAnswer ? 'Question' : 'Answer'}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <Button handleClick={() => this.response()}>Correct</Button>
          <Button handleClick={() => this.response()}>Incorrect</Button>
        </View>
        
      </View>
    )
  }
  
  renderPercentage(percentage) {
    clearLocalNotification()
      .then(setLocalNotification);

    return (
      <View style={styles.content}>
        <Text style={styles.title}>Percentage</Text>
        <Text style={styles.title}>{percentage}%</Text>
        <Button handleClick={() => this.goToDecks()}>Go to Decks</Button>
      </View>
    )
  }

  render() {
    const question = this.props.questions[this.state.questionSelected];
    const finish = this.props.questions.length === this.state.questionSelected;
    const percentage = parseInt(this.state.corrects*(100/this.props.questions.length));
    return (
      <View style={styles.infoContainer}>
        {finish ? this.renderPercentage(percentage) : this.renderQuestion(question)}
      </View>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   deck: makeSelectDeck(),
// });

// export function mapDispatchToProps(dispatch) {
//   return {
//     selectedDeck: id => dispatch(selectedDeck(id)),
//     changeSaved: () => dispatch(changeSaved()),
//   };
// }

export default connect()(Questions);
