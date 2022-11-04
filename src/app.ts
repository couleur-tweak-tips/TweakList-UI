import store from './store';

store.commit('setOptimizations', [
  {
    Category: 'Games',
    Platform: ['windows', 'linux'],
    FunctionName: 'Optimize-LunarClient',
    DisplayName: 'Optimize Lunar Client',
    Description:
      'Tunes your Lunar Client profile with commonly done modifications (numbers in scoreboard, disable UHC mods..)',
    Parameters: [],
  },
  {
    Category: 'Games',
    Platform: ['windows'],
    FunctionName: 'Optimize-Apex',
    DisplayName: 'Optimize Apex Legends',
    Description:
      'Tunes your Lunar Client profile with commonly done modifications (numbers in scoreboard, disable UHC mods..)',
    Parameters: [],
  },
  {
    Category: 'Office',
    Platform: ['windows'],
    FunctionName: 'Optimize-Word',
    DisplayName: 'Optimize Microsoft Word',
    Description:
      'Tunes your Lunar Client profile with commonly done modifications (numbers in scoreboard, disable UHC mods..)',
    Parameters: [],
  },
  {
    Category: 'Office',
    Platform: ['windows'],
    FunctionName: 'Optimize-Excel',
    DisplayName: 'Optimize Microsoft Excel',
    Description:
      'Tunes your Lunar Client profile with commonly done modifications (numbers in scoreboard, disable UHC mods..)',
    Parameters: [],
  },
]);
