import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const Spinner = props => (
  <View style={styles.spinner}>
    <ActivityIndicator size={props.size} />
  </View>
);

Spinner.propTypes = {
  size: PropTypes.string.isRequired,
};

Spinner.defaultProps = {
  size: 'large',
};

const styles = {
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export { Spinner };
