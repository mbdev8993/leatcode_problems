// 3. Longest Substring Without Repeating Characters
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0, sub_str = '';
    let substr_arr = [];
    if(s.length == 1 || s.length == 0) return s.length
    while (i < s.length) {
        if (!substr_arr.includes(s[i])) {
            substr_arr.push(s[i]);
            temp_sub_str = substr_arr.join('');
        } else {
            last_index = substr_arr.findIndex(char=> char == s[i])
            substr_arr.splice(0, last_index+1)
            if(sub_str.length < temp_sub_str.length){
                sub_str = temp_sub_str;
            }
            substr_arr.push(s[i]);
        }
        i += 1;
    }

    if(sub_str.length < temp_sub_str.length){
        console.log(temp_sub_str);
        return temp_sub_str.length
    }
    return sub_str.length;
};
