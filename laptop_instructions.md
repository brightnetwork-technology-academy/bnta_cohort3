# Laptop Setup Instructions

When you receive your MacBook you'll need to instal a few things on it to recreate the environment you have on your Amazon Workspace. We'll use a package manager called [Homebrew](https://brew.sh/) to install some of the command line tools, you'll need to download the apps. If you have any problems contact one of the trainers who can help you debug it.

If you're new to using a mac [this video](https://www.youtube.com/watch?v=67keaaWOKzE) will give you an overview of the basics.

## Installing Command Line Tools

Open a terminal window using Spotlight. Press `command` + `space` to open the search bar and type "Terminal", then press the return key. 

> Spotlight will be a very useful tool for you going forward, it's worth practicing with.

For each of these tools copy/paste the text here into your terminal then press return. If any command throws an error saying you don't have permission, add "sudo " to the front of it and try again. This will prompt you for your password but will override any access issues.

- **[Oh-My-Zsh](https://ohmyz.sh/)** for a nicer terminal experience

```sh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

- **[Homebrew](https://brew.sh/)** to make installing/managing packages easier

```sh
# step 1 - downlaod
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# step 2 - check your username for the next step
whoami

# step 3 - installation, add your username from the line above where it says your_username_here
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/your_username_here/.zprofile\n    eval "$(/opt/homebrew/bin/brew shellenv)"\n
```

- **[Git](https://formulae.brew.sh/formula/git#default)** for version control. We'll go through SSH setup again on Monday.

```sh
# step 1 - installation
brew install git

# step 2 - configuring default branch
git config --global init.defaultBranch main
``` 

- **[Node](https://formulae.brew.sh/formula/node#default)** for running JavaScript code (includes npm)

```sh
brew install node
```

- **[Java](https://formulae.brew.sh/cask/adoptopenjdk#default)** for running Java code

```sh
# step 1 - installation
brew install adoptopenjdk16

# step 2 - setting default Java version
echo 'export PATH="/Library/Java/JavaVirtualMachines/adoptopenjdk-16.jdk/Contents/Home/bin:$PATH"' >> ~/.zshrc

# step 3 - reload settings with updates
source ~/.zshrc 
```

- **[PostgreSQL](https://www.postgresql.org/)** for database management

```sh
# step 1 - installation
brew install postgresql

# step 2 - start database manager
brew services start postgresql

# step 3 - add yourself as a user using your username from earlier
createdb your_username_here
```

## Installing Apps

Follow the links to download each program.

- **[VSCode](https://code.visualstudio.com/)** for code editing, plus any extensions you want to add.
- **[IntelliJ](https://www.jetbrains.com/idea/download/#section=mac)** for Java editing. Make sure you select Community Edition (unless you want to pay for it) and the Apple Silicon version from the dropdown.
- **[Postico](https://eggerapps.at/postico/)** for inspecting databases.
- **[Postman](https://www.postman.com/)** for querying APIs. You'll need to create an account, but it's free.
- **[Chrome](https://www.google.co.uk/chrome)** for internet access. You'll also need the [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) extension.
- **[Zoom](https://zoom.us/download)** so you can see the lessons.
- **[Discord](https://discord.com/)** so you can talk about the lessons after.
