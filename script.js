function firstNonRepeatedChar(str) {
 // Write your code here
	firstNonRepeatedChar('aabbcdd')	
firstNonRepeatedChar('aabbcc')
	
	    const charCount = {};

    // Iterate through the string and count occurrences of each character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a count of 1
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
