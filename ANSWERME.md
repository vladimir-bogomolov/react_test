1. What React components does your app have and what is the responsibility of each component?
   (_TIP: We've filled in the App component for you, add the rest of the components in a similar manner_)

`App` - Functions as the entry point for the whole application. Renders the app container component. Defines global state of the app and make it accessible for any component by using global context.
`NavBar` - Keeps navigation buttons and all the necessary navigation logic in one place. Renders navigation buttons and the pages if necessary.
`Bar` & `Radar` - Defines the structure of 'bar' and 'radar' pages. Renders form and chart (with the necessary function to get url of chart as a prop).
`Chart` - Takes function to get url of a chart. Executes the function with a dataSet from global state (using global context) and gets url of chart image. Renders img with the url as a source.
`Form` - Keeps and renders controlled form. Changes state of the app in global context if value in the form was changed.

2. Let's say your product owner asks you to define what you need to change to also validate that the user can only enter a number between 1 and 10. Write down (do NOT implement) in short steps what you would need to do.

Way 1:

- In the Form component in the existing function inside 'onChange' attribute of inputs add `if`-statement.
- If `parseInt(e.target.value)` is in range 1 - 10, then implement state change (execute `setDataSet`).
- Otherwise show to user error message and don't implement state change.
- For the error message create an additional component with 'error'-styling. Component will take an error message as a prop.

  Way 2:

- We can instead use `min` and `max` (1 and 10 relatively) attributes for `input` tag.
- Put additional information (as a <p> under a form) for user, that describes the limits for user.
