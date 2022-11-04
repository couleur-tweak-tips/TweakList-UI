import store from './store';

store.commit('setOptimizations', [
  {
    Category: 'Games',
    Platform: ['windows', 'linux'],
    FilePath: 'modules/Game & Program tuners/Optimize-LunarClient.ps1',
    FunctionName: 'Optimize-LunarClient',
    DisplayName: 'Optimize Lunar Client',
    Description:
      'Tunes your Lunar Client profile with commonly done modifications (numbers in scoreboard, disable UHC mods..)',
    Parameters: [
      {
        Name: 'Test string (drop down)',
        ParameterType: 'string',
        IsMandatory: true,
        ValidValues: 'test test2 test3'
      },
      {
        Name: 'Test string',
        ParameterType: 'string',
        IsMandatory: true,
      },
      {
        Name: 'Test boolean',
        ParameterType: 'switch',
        IsMandatory: true,
      }
    ],
  },
  {
    Category: 'Games',
    Platform: ['windows'],
    FilePath: 'modules/Game & Program tuners/Optimize-OptiFine.ps1',
    FunctionName: 'Optimize-OptiFine',
    DisplayName: 'Optimize OptiFine',
    Description:
      'Tunes your Lunar Client profile with commonly done modifications (numbers in scoreboard, disable UHC mods..)',
    Parameters: [],
  },
  {
    Category: 'Office',
    Platform: ['windows'],
    FilePath: 'modules/Game & Program tuners/Optimize-OptiFine.ps1',
    FunctionName: 'Optimize-Word',
    DisplayName: 'Optimize Microsoft Word',
    Description:
      'Tunes your Lunar Client profile with commonly done modifications (numbers in scoreboard, disable UHC mods..)',
    Parameters: [],
  },
  {
    Category: 'Office',
    Platform: ['windows'],
    FilePath: 'modules/Game & Program tuners/Optimize-OptiFine.ps1',
    FunctionName: 'Optimize-Excel',
    DisplayName: 'Optimize Microsoft Excel',
    Description:
      'Tunes your Lunar Client profile with commonly done modifications (numbers in scoreboard, disable UHC mods..)',
    Parameters: [],
  },
]);
