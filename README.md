# simple-vue-carousel

## Project setup

- This project is built in Vue using the Vue CLI 3. After cloning the repository you would need to run the following commands
- `npm install -g @vue/cli` installs Vue CLI globally
- `npm install` installs all the packages and dependencies

### Development workflow
- Hot Reload and Webpack come built-in with Vue CLI so to start the server run `npm run serve`
- Minified build is created through `npm run build` which creates a minified version of the app in the /dist folder

### Unit Tests
```
npm run test:unit
```

## Project Approach

### Technology Stack
- I've used Vue for this project as it's easier to boostrap with the Vue CLI. I initially considered Angular as I have a fair amount of experience with that but decided to go with Vue as it feels more lightweight and fast and most of the concepts are similiar. I would have liked to use React.js but due to the time-contraints I did not as it has a lot of boilerplate setup and I would have to research the best ways to go about creating the project and learning some of the patterns and ways of implementing the project. For example, I'm fairly new to CSS-in-JSX, Redux although it's something I'm keen to pick-up as React is a popular framework these days

### Preparation and Execution
- I spent some time in planning my approach so I hope it was okay with the rules. Overall, I believe I spent the required amount of time on this project and I usually follow this approach of planning and prep before going straight into development.
- I went through the requirements README.md file Saturday evening to get a rough idea on what was required and then made some notes on how I could implement the solution efficiently, brainstorming ways on the logic of the slider, setting up the HTML structure, considering the technology stack (decided on Vue.js) and ways whereby I could try some ES6 principles 
- I decided to go with Typescript as it's cleaner with type checking and it allows validation during development. It also supports the latest ES6 principles and fallbacks for older browsers through babel support (which comes built-in with the Vue CLI)

### Limitations and Improvements
- I went through some articles and videos on Unit testing and although it made more sense to me, I only managed to do a very basic unit test to check the title of the header. Unit testing is new to me (not in theory but in practice) and it's something that I'm keen to learn and implement if time permits at my projects
- A Pixabay service file would have been better for scalability so it can be used across multiple components if required
- Perhaps some animations would be nice when the images are scrolled through `transition-group` propery in Vue
- Any other way to improve performance of the app and perhaps a better approach in the logic of the slide movement
