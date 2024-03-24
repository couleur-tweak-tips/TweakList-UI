const tlui = {
    "Optimize-LunarClient": {
        "description": "Applies no-brainers and select tweaks to a Lunar Client profile",
        "tags": "Minecraft",
        "parameters": {
            "Settings": {
                "type": "enum[]",
                "description": "Specify which specific tweak you'd like applying on your profile",
                "values": {
                    "Performance": "Turn off performance-hungry settings",
                    "NoCosmetics": "Disable all emotes, cosmetics, wings, hats..",
                    "MinimalViewBobbing": "Keep item movement but disable walk bobbing",
                    "No16xSaturationOverlay": "Remove the yellow 16x hunger bar overlay",
                    "HideToggleSprint": "Hides the ToggleSprint status from HUD",
                    "ToggleSneak": "Turns on ToggleSneak",
                    "DisableUHCMods": "Disables ArmorHUD, DirectionHUD and Coordinates mods",
                    "FullBright": "literally night vision"
                }
            },
            "LazyChunkLoadSpeed": {
                "type": "enum",
                "description": "Specify which specific tweak you'd like applying on your profile",
                "values": [
                    "highest",
                    "high",
                    "medium",
                    "low",
                    "lowest",
                    "off_van"
                ]
            },
            "LCDirectory": {
                "type": "folder_path",
                "default": "$HOME\\.lunarclient"
            },
            "NoBetaWarning": {
                "type": "bool"
            },
            "KeepLCOpen": {
                "type": "bool"
            },
            "DryRun": {
                "type": "bool"
            }
        }
    },
    "Optimize-OBS": {
        "description": "Configure OBS UI, output and video settings from a list of presets",
        "tags": "Video Windows Linux",
        "path": "/modules/Game & Program tuners/Optimize-OBS.ps1",
        "parameters": {
            "Encoder": {
                "description": "Which encoder you wish to use",
                "required": "true",
                "type": "enum",
                "values": {
                    "NVENC": "NVIDIA's Fastest encoder, it lets you record in hundreds of FPS easily",
                    "AMF": "AMD GPUs/Integrated GPUs encoder, not as good as NVENC but can still record about ~240FPS at most",
                    "QuickSync": "Intel's GPU encoder, worst out of the three, note this is H264, not the new fancy but slow AV1",
                    "x264": "Encoding using your CPU, slow but efficient, only use if necessary/you know what you're doing"
                },
                "default": "x264"
            },
            "OBS64Path": {
                "description": "If you've got a portable install or something, pass in the main OBS binary's path here",
                "type": "filepath"
            },
            "OBSProfile": {
                "description": "Provide your own profile folder path",
                "type": "folderpath"
            }
        }
    },
    "Remove-ContextMenu": {
        "description": "Remove options you don't use from Windows' right click menu",
        "tags": "Windows UI ADMIN",
        "parameters": {
            "Entries": {
                "type": "enum[]",
                "values": [
                    "PinToQuickAccess",
                    "RestorePreviousVersions",
                    "Print",
                    "GiveAccessTo",
                    "IncludeInLibrary",
                    "AddToWindowsMediaPlayerList",
                    "CastToDevice",
                    "EditWithPaint3D",
                    "EditWithPhotos",
                    "Share",
                    "TakeOwnerShip",
                    "7Zip",
                    "WinRAR",
                    "Notepad++",
                    "OpenWithOnBatchFiles",
                    "SendTo",
                    "DrivesInSendTo",
                    "VLC"
                ]
            }
        }
    }
}