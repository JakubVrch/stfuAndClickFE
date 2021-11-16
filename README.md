# STFU&Click Docs

This app was made by Jakub Vrchlabský for Applifting during hiring process.

App is using Applifting's BE.

## Features

User can "register" team on main page by submitting name. This points him to second page, where he can click. Clicks are saved and summarized on Leaderboards on both pages. User can share link to his team, so others can click on his behalf.

## Release notes

1) I was not able to produce any meaningful error state from BE, so error handling is a bit unfinished. However components check ompty state values and display accordingly.

2) I wanted to register the first click of a user on the main page and did not want to register just the user visiting "clicking page". So uuid is generated on app mount and there when user visit clicking page without visiting main page, team clicks are not shown. I could be done differently, but the docs are unclear an I followed described path.

3) I chose to implement different css styling. It is somewhat responsive and works on Chrome a Firefox. I does not work on safari perfectly.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the /app directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
