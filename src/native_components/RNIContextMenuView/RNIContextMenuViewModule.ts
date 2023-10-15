import { requireNativeModule } from 'expo-modules-core';
import type { NotifyOnComponentWillUnmount } from 'react-native-ios-utilities';

import type { MenuElementConfig } from '../../types/MenuConfig';


interface RNIContextMenuViewModule  {
  notifyOnComponentWillUnmount: NotifyOnComponentWillUnmount;

  dismissMenu(
    node: number,
  ): Promise<void>;

  provideDeferredElements(
    node: number,
    deferredID: string, 
    menuItems: MenuElementConfig[]
  ): Promise<void>;
};

export const RNIContextMenuViewModule: RNIContextMenuViewModule = 
  requireNativeModule('RNIContextMenuView');


  
