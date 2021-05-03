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

But looking at the return type of the function, we can see that the function returns either of true, false and null.

Ideally it should return a boolean as we are using logical operators.

As part of the puzzle, you have to do the following.

1. Identify why the output is not just boolean and provide the explanation in the readme section below.
2. Change the code so that the type will be `boolean` and not `boolean | null`.
3. Make sure the existing test cases are all passing(4 are failing right now).
4. Raise a PR containing changed code and the updated Readme.

## Explanation (point 1)

The return type of the method can also be null because...
`null && true` or `null && false` evaluates to `null`. This is because `null` is a JavaScript literal that represents an "empty" value or "undefined". It is neither equal to boolean `true` nor equal to boolean `false`, because it's value is `undefined`. The value of `null` is more inclined towards `false` even though it is not false. It's thus called a "falsey" operator. In another explanation, `true` and `false` boolean values, that are coerced to a number via `ToNumber()`, which converts `true` to `1` and `false` to `+0`. The Null type, doesn't coerce and thus does not compare as equal to either `1` or `+0`.

Explanations are here: https://stackoverflow.com/a/27632465 , https://stackoverflow.com/a/27632549

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
