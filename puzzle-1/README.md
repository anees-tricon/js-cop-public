# Puzzle on javascript logical operator and TS

This is a simple code which works on dates.
You would call this function as

```js
const isActive = isActiveMonth(3,2020)
if(isActive) {
  ...
} else {
  ...
}
```

As you can see in `src/index.ts`, the function essentially returns a value with which we make a decision.

```js
return (
  (start &&
    start.getMonth() === monthToBeChecked &&
    start.getFullYear() === yearToBeChecked) ||
  (end &&
    end.getMonth() === monthToBeChecked &&
    end.getFullYear() === yearToBeChecked)
);
```

But looking at the return type of the function, and also looking at the test cases, we can see that the function returns either of true, false and null.

Ideally it should return a boolean as we are using logical operators.

As part of the puzzle, you have to do the following.

1. Identify why the output is not just boolean and provide the explanation in the readme section below.
2. Change the code so that the type will be `boolean` and not `boolean | null`.
3. Modify test cases for the changes in 2.
4. Raise a PR containing changed code and the updated Readme.

## Explanation (point 1)

The return type of the method can also be null because...
Your answer goes here. You can provide example codes, explanations and supporting links.

## Engine

This code has been tested on node v14.13.1 and npm v6.14.8. It should work on earlier versions as well.

## Running Locally

Follow the below steps to run the code locally

### Clone the repo

clone the repo and cd into puzzle-1

```sh
git clone git@github.com:anees-tricon/js-cop-public.git
cd puzzle-1
```

or you could also look at ways of cloning sub directory as described [here](https://stackoverflow.com/questions/600079/how-do-i-clone-a-subdirectory-only-of-a-git-repository/52269934#52269934)

### Install dependencies

```sh
npm install
```

### Run Test

```sh
npm run test
```

## Other useful commands

`npm run lint` to check for lint and style issues.

`npm run lint-and-fix` to check and fix lint issues.

`npm run prettier-format` to format the files according to prettier configuration.
