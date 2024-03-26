//Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.

try {
    // Attempt to access a property of an undefined object
    const undefinedObject = undefined;
    const obj = undefinedObject.property;
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Caught a TypeError: The property is undefined.");
    } else {
        throw error;
    }
}
