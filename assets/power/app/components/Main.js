import React from 'react-native';
import { connect } from 'react-redux/native';
import InteractionManager from 'InteractionManager';

let {
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  TabBarIOS
} = React;
let deviceWidth = Dimensions.get('window').width;

class Main extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.container}>
        <TabBarIOS>
          <TabBarIOS.Item
            systemIcon="featured"
            />
        </TabBarIOS>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default Main;
