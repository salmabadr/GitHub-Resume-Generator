# Github Resumé Generator

## Table of contents

- [Description](#description)
- [Languages and Technologies](#languages-and-technologies)
- [Setup](#setup)
- [Assumptions](#assumptions)
- [Notes](#notes)

## Description

This is a single page application that generates the user's resumé from his/her Github profile.

## Languages and technologies used

- ReactJS v16
- yarn v1.21.1
- NodeJS v12.18.1
- NPM v6.14.5
- HTML
- JavaScript
- CSS

## Setup

Install dependandcies:

`yarn install`

In the project directory, Run:

`yarn start`

It should open automatically in your default browser,

In case it didn't, Open http://localhost:3000 to view it in the browser.

## Assumptions

- Popular repositories are the repos that have the highest number of forks and stars together.
- Maximum number of languages to display is 8 languages.
- Maximum number of repos to display is 5 repos.
- Displayed languages are the ones that have the highest number of lines of code.
- "YearTo" value was not clear in the API response, it's assumed to be "pushed_at".
- Only non fork repos are displayed.
- "RepoRights" was not clear in the API response, it's assumed to compare the repo's owner with the current user.

## Notes

- Github was taken as a reference for all the above assumptions.
- My CSS skills are not extensive, So I tried to stick to the design as much as I can.
- The sketch file was not accurate in terms of font sizes, widths, heights, etc. Therefore I tried to produce to the design as faithfully as I could.
- create-react-app was used to initialize this app.
