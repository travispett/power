import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './components';
registerScreens();

Icon.getImageSource('ios-home-outline', 32).then((dashIcon) =>
  Icon.getImageSource('android-walk', 32).then((workoutIcon) =>
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Workout',
          screen: 'power.Workout',
          icon: workoutIcon,
          title: 'Workout',
          navigatorStyle: {
            navBarBackgroundColor: '#2C3E50',
            navBarTextColor: '#ECF0F1',
            navBarButtonColor: '#ECF0F1',
            statusBarTextColorScheme: 'light'
          }
        }, {
          label: 'Dashboard',
          screen: 'power.Dashboard',
          icon: dashIcon,
          title: 'Dashboard',
          navigatorStyle: {
            navBarBackgroundColor: '#2C3E50',
            navBarTextColor: '#ECF0F1',
            navBarButtonColor: '#ECF0F1',
            statusBarTextColorScheme: 'light'
          }
        }
      ],
      tabsStyle: {
        tabBarButtonColor: '#ECF0F1',
        tabBarSelectedButtonColor: '#3498DB',
        tabBarBackgroundColor: '#2C3E50'
      }
    })
  )
);
