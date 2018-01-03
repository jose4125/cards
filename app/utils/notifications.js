import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const notificationKey = 'cards:notification';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(notificationKey)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

const createNotification = () => ({
  title: 'CARDS',
  body: 'Do you want to improve your skills?, Don\' forget to start a Quiz',
  ios: {
    sound: 'true',
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  },
});

export function setLocalNotification() {
  AsyncStorage.getItem(notificationKey)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              const tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(24);
              tomorrow.setMinutes(32);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                },
              );
              AsyncStorage.getItem(notificationKey, JSON.stringify(true));
            }
          });
      }
    });
}
