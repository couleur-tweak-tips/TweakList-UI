import store from './store';

store.commit('setOptimizations', [
  {
    Category: 'Games',
    Platform: ['windows'],
    FunctionName: 'Optimize-LunarClient',
    DisplayName: 'Optimize Lunar Client',
    Description:
      'Tunes your Lunar Client profile with commonly done modifications (numbers in scoreboard, disable UHC mods..)',
    Parameters: [
      {
        Name: 'LazyChunkLoadSpeed',
        ParameterType: 'array',
        IsMandatory: false,
        ValidValues: 'highest high medium low lowest off_van',
      },
      {
        Name: 'Settings',
        ParameterType: 'array',
        IsMandatory: false,
        ValidValues:
          'Performance NoCosmetics MinimalViewBobbing No16xSaturationOverlay HideToggleSprint ToggleSneak DisableUHCMods FullBright CouleursPreset',
      },
      {
        Name: 'LCDirectory',
        ParameterType: 'string',
        IsMandatory: false,
        ValidValues: null,
      },
      {
        Name: 'NoBetaWarning',
        ParameterType: 'switch',
        IsMandatory: false,
        ValidValues: null,
      },
      {
        Name: 'KeepLCOpen',
        ParameterType: 'switch',
        IsMandatory: false,
        ValidValues: null,
      },
      {
        Name: 'DryRun',
        ParameterType: 'switch',
        IsMandatory: false,
        ValidValues: null,
      },
    ],
  },
  {
    Category: 'Games',
    Platform: ['linux'],
    FunctionName: 'Optimize-Apex',
    DisplayName: 'Optimize Apex',
    Description:
      'Tunes your Lunar Client profile with commonly done modifications (numbers in scoreboard, disable UHC mods..)',
    Parameters: [
      {
        Name: 'LazyChunkLoadSpeed',
        ParameterType: 'array',
        IsMandatory: false,
        ValidValues: 'highest high medium low lowest off_van',
      },
      {
        Name: 'Settings',
        ParameterType: 'array',
        IsMandatory: false,
        ValidValues:
          'Performance NoCosmetics MinimalViewBobbing No16xSaturationOverlay HideToggleSprint ToggleSneak DisableUHCMods FullBright CouleursPreset',
      },
      {
        Name: 'LCDirectory',
        ParameterType: 'string',
        IsMandatory: false,
        ValidValues: null,
      },
      {
        Name: 'NoBetaWarning',
        ParameterType: 'switch',
        IsMandatory: false,
        ValidValues: null,
      },
      {
        Name: 'KeepLCOpen',
        ParameterType: 'switch',
        IsMandatory: false,
        ValidValues: null,
      },
      {
        Name: 'DryRun',
        ParameterType: 'switch',
        IsMandatory: false,
        ValidValues: null,
      },
    ],
  },
]);
