To view the app hosted live, go to [https://compassionate-bohr-149fff.netlify.com/](https://compassionate-bohr-149fff.netlify.com/)

To launch this project, clone the repo, run
`npm install` and
`npm start`, and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Coding Challenge

We want you to build a small React App (using TypeScript is a bonus!) which fetches users from an endpoint (https://jsonplaceholder.typicode.com/users or any other endpoint you want) and renders a table that represents data.

As a bonus: add a button to copy table to clipboard so you can paste it in Excel / Pages / Google SpreadSheets.
Here is an example (https://www.loom.com/share/4cffbc9906a14549a2498ebb52cf18d0)

I have attached a link to the design in Figma, as an example of what the result of the exercise should roughly look like. You do NOT need to complete the entire thing, just get as far as you can then send us back what you've got.

https://www.figma.com/file/dYr7l3sesV7Bo0xOM26LFK/users?node-id=0%3A1

A few things to consider:
HTML5 semantics
You can use "Create React App" to speed up initial setup.
Possibly use a Front End component library to speed up the process such as Bootstrap, Foundation or Material UI (or your choice).
Use a CSS pre-processor (SASS preferred)
Use Fetch API to get data
Redux or Context API is a bonus

## Technical Decisions

I didn't use Redux or React Context because it would be overkill in this case. The app has 2 components:

### App

Responsible primarily for fetching user data

### Users

Responsible for displaying a table of users given the user data. It also has 2 buttons: 1 for copying the user data to a clipboard, and another for sorting. I moved the copying logic to it's own file as it's more of a utility, but kept the sorting functionality in the User component because of how simple it was.
