# Key takeaways

## Language Features

### Variable Naming

`let varName = `

- `let` differs from `var` in that it does not redefine variables that have already been defined
- New values can simply be assigned to variables defined using `let` by assigning a value to them using the `=` operator

### String Interpolation

```javascript
`${varName} some more text` 
```

- Can be used to create strings that do not require complex concatenation logic

### Equality comparison

#### `==` vs `===`

- `==` does *string* comparison
- `===` does *value* comparison

## Useful libraries to look at

### Math

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

### Date

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

## Native Data Structures

### Array

#### Adding/Removing

##### To the end

- `push`
- `pop`

##### To the front

- `shift`
- `unshift`

### Object

#### Accessing properties

- `objectName.propName`
- `objectName['propName']`

### Map

#### Adding/Accessing key/value pairs

- `mapName.set("keyName", "stringValue")`
- `mapName.get("keyName")`

## Functional Features

### ES6 Fat arrow

```javascript
var functionName = function (parameterName) {
  let returnValue = parameterName + 1;
  return returnValue;
}
```

can be rewritten as

```javascript
var functionName = (parameterName) => parameterName + 1;
```

### Map

- lets us `map` a function over an array of elements

### Filter
- allows us to filter our data based on some criterion
- takes a parameter that evaluates to a boolean value

### Reduce

- The `reduce` method takes a function of *two* arguments,
  - first is an *accumulator* for the result
  - second is the array element itself
- The return value of the (anonymous) function gets passed back to `reduce` as the starting value for the next element in the array
- The second argument is the initial value of the *accumulator*



