# This is a Javascript overview
 - Javascript is single threaded ad synchronous

 # How to connect JS
  - Internal (<script type="script">Your code goes here</script>)
  - External (<script src="script.js">Your code goes here...</script>)
    - defer -> means that the script should be executed after the whole page is loaded
    - async -> that the script will be executed immediately, but in parallel to parsing the rest of the page

# Varibles
 - Containers for storing info
 - var -> originally used
 - let -> come after var (Prevents us from declaring another variable with the same name. => prevents accidental redeclaring of a variable)
 - consr -> store certain values, once values have been initialized, cannot be modified (prevents accidentaly changing a value stored in a variable)
 - If we declare any variable or constant using *let* of *const*, outisde the code blocks, they will be global
 - Variable declared using *var* can be accessed anywhere that is; either inside the scope or outside. All the variables turn out to be global
 - When a variable is declared inside a function using *var* it becomes local

# Hoisiting
 - Focus on the declaration not the initialization

# Primitive Data Types (Stored directly in the "stack")

 - String -  Sequence of characters. "quotes" or "backticks"
    - string interpolation - you can be able to create a character string as a template
 - Number - int, floating-point numbers
 - Boolean - Logical entity / true or false
 - Null - Intentional absenece of any object value (The value itself is a primitive, while the type to which it belongs is not a primitive type)
 - Undefined - A variable that has not yet been defined
 - BigInt - represents large large number that the "Number" type can't handle

# Reference Data Types (stored in the heap and accessed by reference)
 -  Non-primitive types that are stored and accessed i.e object literals, arrays and functions

 -*typeof* operator takes only one argument and informs us of the type of data indicated as a given argument


# Arrays and loops
 - NB: arrays are references
 - .push() -> adds an element/ a value the end of the array
 - .splice() -> removes the value from the array
 - .shift() -> removes a value from the begin of the array
 - .unshift() -> adds a value at the front of the array
 
# Falsy values
 - 0,
 - NaN,
 - empty string,
 - undefined,
 - null