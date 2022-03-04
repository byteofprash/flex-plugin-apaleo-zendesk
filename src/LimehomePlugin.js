import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import reducers, { namespace } from './states';
import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import MyComponent from './MyComponent'
import LimehomeTheme from './theme/LimehomeTheme'

const PLUGIN_NAME = 'LimehomePlugin';

export default class LimehomePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    this.registerReducers(manager);

    const configuration = {
      colorTheme: LimehomeTheme
    }

    manager.updateConfig(configuration);
    flex.MainHeader.defaultProps.logoUrl = '/limehomeLogo.png'

    flex.CRMContainer.Content.replace(
      <MyComponent key="sample" />
    ); //  Add my component here


    // flex.CRMContainer.defaultProps.uriCallback = () =>{
    //   return `https://limehomecrm-1893-dev.twil.io/index.html`
    // }
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint-disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
