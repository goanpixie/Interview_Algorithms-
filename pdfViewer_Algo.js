//When you select a contiguous block of text in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently. For example:

// PDF-highighting.png

// In this challenge, you will be given a list of letter heights in the alphabet and a string. Using the letter heights given, determine the area of the rectangle highlight in  assuming all letters are  wide.

// For example, the highlighted . Assume the heights of the letters are  and . The tallest letter is  high and there are  letters. The hightlighted area will be  so the answer is .

// Function Description

// Complete the designerPdfViewer function in the editor below. It should return an integer representing the size of the highlighted area.

// designerPdfViewer has the following parameter(s):

// h: an array of integers representing the heights of each letter
// word: a string
// Input Format

// The first line contains  space-separated integers describing the respective heights of each consecutive lowercase English letter, ascii[a-z].
// The second line contains a single word, consisting of lowercase English alphabetic letters.

// Constraints

// , where  is an English lowercase letter.
//  contains no more than  letters.
// Output Format

// Print a single integer denoting the area in  of highlighted rectangle when the given word is selected. Do not print units of measure.

// Sample Input 0

// 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
// abc
// Sample Output 0

// 9

function designerPdfViewer(h, word) {
    const dict = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25
    }
    let word_array = word.split("");
    let letter_h = 0;
    let letterValues = function (value) {
        return h[dict[value]];
    }
    let val = word_array.map(letterValues)
    let largestNum = Math.max(...val);
    return (largestNum * word.length);

}