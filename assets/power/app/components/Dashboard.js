import React from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { postHeaders, targetRoute } from '../utils/api';

const {
  StyleSheet,
  View,
  PropTypes,
  Text
} = React;

let resData = [];

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      dataSource: resData,
      networkError: false,
      user: {},
      previousWorkouts: []
    };
  }

  componentDidMount() {
    var self = this;
    fetch(targetRoute('user?username=admin'), { method: 'GET'})
      .then((response) => response.json())
      .then((responseData) => {
        self.setState({ user: responseData.data[0] });

        fetch(targetRoute(`workout?user=${this.state.user.id}&populate=exercises&sort=date%20DESC`), { method: 'GET' })
          .then((response) => response.json())
          .then((responseData) => {
            self.setState({ previousWorkouts: responseData.data });
          })
          .catch((error) => console.warn(error))
          .done();
      })
      .catch((error) => {
        console.warn(error);
      })
      .done();
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          { `${this.state.user.firstName}'s Recent Workouts` }
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ECF0F1',
    paddingHorizontal: 40,
    paddingVertical: 32
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  previousWorkout: {
    textAlign: 'center'
  }
});

export default Dashboard;
