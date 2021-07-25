# Table of contents
* [Features](#features)
*   [Prerequisites](#prerequisites)
*  [Installation](#installation)
   * [Download repo](#download-repo)
   * [Config files](#config-files)
   * [Install packages & start](#install-packages--start)
*  [ToDo](#todo)

![enter image description here](https://i.imgur.com/unR9Puv.png)
# Features
It can turn your Philips Hue lights on and off 🤯
|Command| Action |
|--|--|
| /on | Turns your lights on |
| /off | Turns your lights off |


# Prerequisites
**NodeJS** version **16.5.0**
# Installation
## Download repo
    gh repo clone Fabian9799/PhilipsHue-Discord-Bot
## Config files
 1. Rename .env.example to .env
 2. Change all the default values in your .env file
 
|KEY| VALUE |
|--|--|
| TOKEN | Your bot token from https://discord.com/developers/ |
| USER | Philips hue username * (https://developers.meethue.com/develop/hue-api/remote-api-quick-start-guide/) |
| BEARER | Bearer ACCESS_TOKEN (https://www.lewisroberts.com/poshue/) (gets invalidated after 7 days) |

\* After the first PUT request press the top button on your Hue Bridge
## Install packages & start

    npm i
    npm run dev

# ToDo
 - [ ] Automatically refresh access token
 - [ ] Change brightness
 - [ ] Change color
 - [ ] Change Scenes

