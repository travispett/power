import React from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CalendarPicker from 'react-native-calendar-picker';
import Button from 'react-native-button';
import SmartScrollView from 'react-native-smart-scroll-view';
import { Navigation } from 'react-native-navigation';
import Exercise from './Exercise';

import { postHeaders, targetRoute } from '../utils/api';

const {
  DatePickerIOS,
  StyleSheet,
  View,
  PropTypes,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView
} = React;

class Workout extends React.Component {
  constructor (props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      date: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
      showCalendar: false,
      user: {},
      exercises: [
        {
          title: '',
          sets: {
            sets: '',
            reps: '',
            weight: ''
          }
        }
      ]
    };
  }

  static navigatorButtons = {
    rightButtons: [
      {
        id: 'add',
        title: 'Add'
      }
    ]
  };

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'add') {
        let newExercises = this.state.exercises;
        let exerciseToAdd = {
          title: '',
          sets: {
            sets: '',
            reps: '',
            weight: ''
          }
        };
        newExercises.push(exerciseToAdd);
        this.setState({ exercises: newExercises });
      }
    }
  }

  // onAddStats(key) {
  //   let newStats = this.state.exercises;
  //   let statToAdd = {
  //     sets: '',
  //     reps: '',
  //     weight: ''
  //   };
  //   newStats[key].stats.push(statToAdd);
  //   this.setState({ exercises: newStats });
  // }

  componentDidMount() {
    fetch(targetRoute('user?username=admin'), { method: 'GET' })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ user: responseData.data[0] });
      })
      .catch((error) => {
        console.warn(error);
      })
      .done();
  }

  onDateChange(date) {
    this.setState({ date: date });
  }

  _renderCalendar() {
    if (this.state.showCalendar) {
      return (
        <CalendarPicker
          selectedDate={this.state.date}
          onDateChange={this.onDateChange.bind(this)}
        />
      );
    } else {
      return null;
    }
  }

  toggleCalendar() {
    styles.calendarContainer.height = 100;
    this.setState({ showCalendar: !this.state.showCalendar });
  }

  _savePress() {
    console.warn(JSON.stringify(this.state));
    fetch(targetRoute('workout'), postHeaders({
      date: this.state.date,
      title: 'workout3',
      user: this.state.user,
      exercises: this.state.exercises
    }))
      .then((response) => response.json())
      .then((responseData) => {
        console.warn(JSON.stringify(responseData));
      })
      .catch((error) => {
        console.warn(error);
      })
      .done();
  }

  render () {
    let workoutExercises = this.state.exercises.map((row, i) => {
      return (
        <Exercise
          key={ i }
          title={ row.title }
          sets={ row.sets.sets }
          reps={ row.sets.reps }
          weight={ row.sets.weight }
          titleOnChangeText={(title) => {
            let newExercises = this.state.exercises;
            newExercises[i].title = title;
            this.setState({ exercises: newExercises });
          }}
          setsOnChangeText={(sets) => {
            let newExercises = this.state.exercises;
            newExercises[i].sets.sets = sets;
            this.setState({ exercises: newExercises });
          }}
          repsOnChangeText={(reps) => {
            let newExercises = this.state.exercises;
            newExercises[i].sets.reps = reps;
            this.setState({ exercises: newExercises });
          }}
          weightOnChangeText={(weight) => {
            let newExercises = this.state.exercises;
            newExercises[i].sets.weight = weight;
            this.setState({ exercises: newExercises });
          }}
        />
      );
    });

    return (
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>

        <View style={styles.calendarContainer}>
          <TouchableHighlight onPress={() => this.toggleCalendar()}>
            <Text style={styles.selectedDate}>
              Date: { this.state.date.toDateString() }
            </Text>
          </TouchableHighlight>
          { this._renderCalendar() }
        </View>

        <View style={styles.halfHeight}>
          { workoutExercises }
        </View>

        <View style={styles.saveButtonContainer}>
          <Button onPress={() => this._savePress()} style={styles.saveButton}>
            Save
          </Button>
        </View>

      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  scrollViewContainer: {
    paddingHorizontal: 40,
    paddingVertical: 32,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ECF0F1'
  },
  calendarContainer: {
    height: 32,
    padding: 10
  },
  selectedDate: {
    textAlign: 'center'
  },
  saveButton: {
    textAlign: 'center',
    padding: 10
  },
  saveButtonContainer: {
    height: 32
  },
  halfHeight: {
    flex: 2
  },
  quarterHeight: {
    flex: 1
  }
});

export default Workout;
