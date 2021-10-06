## Table of Contents
- [What is a Workspace](#what-is-a-workspace)
- [Your Workspace specs](#your-workspace-specs)
- [Pre Installed Software and Applications](#pre-installed-software-and-applications)
- [Workspace Setup](#workspace-setup)
  * [Follow the instructions on the email sent from **Amazon WorkSpaces**](#follow-the-instructions-on-the-email-sent-from---amazon-workspaces--)
  * [Update User](#update-user)
  * [Download Client](#download-client)
  * [Register](#register)
  * [Login to your workspace](#login-to-your-workspace)
- [Terminal and oh-my-zsh](#terminal-and-oh-my-zsh)
  * [What is the terminal](#what-is-the-terminal)
  * [oh-my-zsh](#oh-my-zsh)
  * [oh-my-zsh tetup](#oh-my-zsh-tetup)
- [Discord](#discord)
  * [Register and Login to Discord](#register-and-login-to-discord)
  * [Discord Presence](#discord-presence)
  * [VSCODE and Discord Presence](#vscode-and-discord-presence)
  * [IntelliJ and Discord Presence](#intellij-and-discord-presence)
- [Done ✅](#done--)

# What is a Workspace   
Amazon WorkSpaces is a fully managed, persistent desktop virtualization service that enables your users to access the data, applications, and resources they need, anywhere, anytime, from any supported device. You can use Amazon WorkSpaces to provision either Windows or Linux desktops in just a few minutes and quickly scale to provide thousands of desktops to workers across the globe. Amazon WorkSpaces is deployed within an Amazon Virtual Private Cloud (VPC), and no user data is stored on the local device. This helps improve the security of user data and reduces your overall risk surface area.

Many organizations are making a permanent shift to a more flexible and more remote workforce, including more 'work from home' options. Amazon WorkSpaces enables you to give these workers fully functional Windows and Linux desktops in minutes, while increasing security by keeping data off of the end user's device, and increasing reliability with the power of the AWS Cloud.

# Your Workspace specs
- 4CPU Cores
- 16GB Ram
- 100GB Disk space

# Pre Installed Software and Applications
- Discord
- Visual Studio Code
- IntelliJ IDEA
- Node
- Docker
- MongoDB
- Mongo Compass
- Postgresql
- Sqlelectron (Database GUI Client)
- Feel free to install other applications you might need

# Workspace Setup
## Follow the instructions on the email sent from **Amazon WorkSpaces**

```
Dear Amazon WorkSpaces User,

Your administrator has created an Amazon WorkSpace for you. Follow the steps below to quickly get started with your WorkSpace:

1. Complete your user profile and download a WorkSpaces client using the following link: link

2. Launch the client and enter the following registration code: foo

3. Login with your newly created password. Your username is bar

You may download clients for additional devices at https://clients.amazonworkspaces.com/

Your WorkSpace is also enabled for Amazon WorkDocs. You can use Amazon WorkDocs to store, sync, and share your files. WorkDocs can automatically back up documents on your WorkSpace and sync documents to and from other devices such as a PC or Mac, so that you can access your data regardless of which desktop you are using. To use WorkDocs with your WorkSpace, follow the "Integrate with WorkDocs" instructions in the Amazon WorkSpaces User Guide:
https://docs.aws.amazon.com/workspaces/latest/userguide/workspaces-user-getting-started.html#workdocs-integration

When you set up WorkDocs, you will need to register and log in with the same registration code, username, and password that you use with your WorkSpace.

If you have any issues connecting to your WorkSpace, please contact your administrator.

Sincerely,

Amazon WorkSpaces
```
## Update User
![alt text](screenshots/Screenshot-2021-09-26-at-20.22.14.png)

## Download Client
![alt text](screenshots/Screenshot-2021-09-26-at-20.22.55.png)
![alt text](screenshots/Screenshot-2021-09-26-at-20.23.53.png)

## Register
![alt text](screenshots/Screenshot-2021-09-26-at-13.17.59.png)

## Login to your workspace
![alt text](screenshots/Screenshot-2021-09-26-at-13.18.24.png)
![alt text](screenshots/Screenshot-2021-09-26-at-13.18.49.png)
![alt text](screenshots/Screenshot-2021-09-26-at-13.20.02.png)

# Terminal and oh-my-zsh
## What is the terminal
Terminal, also known as command line or console, allow us to accomplish and automate tasks on a computer without the use of a graphical user interface.

## oh-my-zsh
Oh My Zsh is a delightful, open source, community-driven framework for managing your Zsh configuration. It comes bundled with thousands of helpful functions, helpers, plugins, themes, and a few things that make you shout...

In a nutshel it provides extra features that the default terminal does not come with.

## oh-my-zsh tetup
- Open the terminal
![alt text](screenshots/Screenshot-2021-09-24-at-19.54.43.png)
- copy and paste the following command 
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
![alt text](screenshots/Screenshot-2021-09-28-at-23.55.28.png)
- type `y` then press `enter` on your keyboard
![alt text](screenshots/Screenshot-2021-09-28-at-23.55.42.png)
- Enter your password
![alt text](screenshots/Screenshot-2021-09-28-at-23.55.50.png)
![alt text](screenshots/Screenshot-2021-09-28-at-23.56.15.png)
- Still in the terminal copy and paste the following command and press enter 
```
echo 'exec zsh' >> $HOME/.bashrc
```
![alt text](screenshots/Screenshot-2021-09-29-at-00.12.31.png)
- copy and paste the following command and press enter
```
cat $HOME/.bashrc
```
![alt text](screenshots/Screenshot-2021-09-29-at-00.18.16.png)
and you should see `exec zsh` at the end of the screen
![alt text](screenshots/Screenshot-2021-09-29-at-00.18.16.png)

# Discord
## Register and Login to Discord
- Click on **Applications/Programming/Discord**
![alt text](screenshots/Screenshot-2021-09-24-at-19.53.58.png)
![alt text](screenshots/Screenshot-2021-09-26-at-18.44.57.png)

## Discord Presence
Shows what you are editing in VSCode and IntelliJ and supports over 140 of the most popular languages.

**Here's an example:**   
![alt text](screenshots/Screenshot-2021-09-2-at-10.14.52.png)

## VSCODE and Discord Presence
- Click on **Applications/Programming/Visual Studio Code**
![alt text](screenshots/Screenshot-2021-09-24-at-19.53.58.png)

- **Install Discord Presence**
![alt text](screenshots/Screenshot-2021-09-24-at-19.57.12.png)

## IntelliJ and Discord Presence
- Click on **Applications/Programming/IntelliJ IDEA**
![alt text](screenshots/Screenshot-2021-09-24-at-19.53.58.png)
![alt text](screenshots/Screenshot-2021-09-24-at-20.01.17.png)
![alt text](screenshots/Screenshot-2021-09-24-at-20.01.27.png)
![alt text](screenshots/Screenshot-2021-09-24-at-20.01.35.png)

- Click on **Plugins**
![alt text](screenshots/Screenshot-2021-09-24-at-20.02.05.png)

- Install **Discord Integration**
![alt text](screenshots/Screenshot-2021-09-24-at-20.02.27.png)
![alt text](screenshots/Screenshot-2021-09-24-at-20.02.40.png)

# Done ✅ 
<p align="center">
  <img src="https://media.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif" alt="npm version">
</p>