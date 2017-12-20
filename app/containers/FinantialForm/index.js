import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, Text, FlatList } from 'react-native';

import { makeSelectZipCode } from '../../screens/Decks/selectors';
import { changeText } from '../../screens/Decks/actions';

import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { InfoText } from '../../components/InfoText';
import { FinancialItem } from '../../components/FinantialItem';
import { changeFi } from '../../screens/CreateAccount/actions';

import styles from './styles';

const fi = [
  'finantial 1',
  'finantial 2',
  'finantial inst 3',
  'finantial institution 4',
  'finantial institution 5',
  'finantial institu 6',
  'finantial inst 7',
  'fina inst 8',
  'finanti institu 9',
  'fina institution 10',
];

export class FinantialForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.changeFi = this.changeFi.bind(this);
    this.state = {
      financialIntitution: '',
    };
  }

  handleChangeText(value, name) {
    this.props.onChangeText(value, name);
  }

  changeFi(fiSelected) {
    this.setState({ financialIntitution: fiSelected });
    this.props.onChangeFi(fiSelected);
  }

  renderItem(item) {
    return (
      <View>
        <FinancialItem
          item={item}
          selectedFi={this.state.financialIntitution}
          handleChangeFi={() => this.changeFi(item)}
        />
      </View>

    );
  }

  render() {
    return (
      <View style={styles.form}>
        <Label type="secondary">ZIP Code:</Label>
        <Input
          name="zipCode"
          type="secondary"
          value={this.props.zipCode}
          onChangeText={value => this.handleChangeText(value, 'zipCode')}
        />
        <InfoText>Please enter your ZIP code so we can locate a partner finantial institution in your area.</InfoText>
        <Text style={styles.headline}>Select your finantial institution</Text>
        <View style={styles.finantial}>
          <FlatList
            renderItem={({ item }) => this.renderItem(item)}
            data={fi}
            keyExtractor={item => item}
            extraData={this.state}
          />
        </View>
        <InfoText>I don't see my finantial institution.</InfoText>
      </View>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeText: (value, name) => dispatch(changeText(value, name)),
    onChangeFi: (financialIntitution) => dispatch(changeFi(financialIntitution)),
  };
}

const mapStateToProps = createStructuredSelector({
  zipCode: makeSelectZipCode(),
});

export default connect(mapStateToProps, mapDispatchToProps)(FinantialForm);
