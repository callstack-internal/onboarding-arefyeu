import {NativeModules} from 'react-native';

const module = NativeModules.MyNotification;

export function showNotification(title: string, body: string) {
  module.showNotification(title, body);
}
