## Requirements

Node: 'v16.13.1'
Npm: '8.1.2'

## Getting Started

First, install all the dependecies:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

- You can interact with the request list on the localhost.
  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run Tests

```bash
npm run tests
```

## Notes

- The component includes the errors list at the same level. I would like to destructure it into another component that uses the error list, providing the possibility to adapt it to any screen. The next iteration will incorporate this option.
- I added an onChange event so there exists the possibility to use it in a form and obtain the current value (I added tests for this).
- I also added an isPasswordValid property so the developer can disable a button on the parent to prevent the user from making unnecessary requests.
- I believe the best option would be to add an API response that fetches the regex you want to validate, possibly with a dictionary containing each validation.
