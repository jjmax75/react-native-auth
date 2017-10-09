import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Input = props => (
  <View style={styles.container}>
    <Text style={styles.label}>{props.label}</Text>
    <TextInput
      placeholder={props.placeholder}
      autoCorrect={false}
      autoCapitalize='none'
      secureTextEntry={props.secureTextEntry}
      style={styles.textInput}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  </View>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
};

Input.defaultProps = {
  secureTextEntry: false,
};

const styles = {
  textInput: {
    height: 20,
    width: 100,
    color: '#000000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
};

export { Input };
