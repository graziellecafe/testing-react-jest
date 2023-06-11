# Testing React Jest
Learn best practices for testing your apps with Jest and React Testing Library!

## Introduction to testing library and Jest

### **React Testing Library** 
- Not just a library, also a philosophy ( "opnionated" )
- Test your software the way users actually use it 
- One is to test your software the way that users actually use it 
- Find elements by accessibility markers, not test IDs
- Provides virtual DOM for tests
- Testes devem passar mesmo que o código tenha mudado

### **Jest** 
- Test runner that 
    - Find tests
    - Run Tests
    - Determines whether tests pass or fail 

### **create-react-app**
- We start create-react-app in order to make a new react application
- npm package 
- creates react application with 
    - configuration 
    - setup webpack and babel 
    - web server 
    - testing library

### npx 

- We will be using `npx` with create-react-app 
- Downloads the latest version of create-react-app templates every time
- Not dependent on when you last installed create-react-app 
- Never installed on your machine! 

### how to initiate the react project 
- `cd name-of-project`
- `npm start`
- and how to test `npm run test`     


## How to create a test 
```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

### Breaking down syntax
*render*
- Create virtual DOM for argument JSX - `render(App/)`
- Access virtual DOM via *screen* global - `screen.getByText()`



