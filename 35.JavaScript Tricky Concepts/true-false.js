/* falsy value
  1.  false
  2 . 0
  3. emty string
  4. undefined
  5. null
  6. nan
    
 */
/* truthy value 
1.true 
2.  number
3.string
4. array
5. object
6. emtry string include white space
*/


const x = parseInt('hell');
if (x) {
    console.log(' variable is truethy', x)
}
else {
    console.log('variable is falsy', x)
}