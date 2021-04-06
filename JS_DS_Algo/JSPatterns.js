/*
 * 1. (Classes)Prototype is say an object thats lying around and this we can make prototype of another object
 * 2. (Encapsulation) Now JS is not a compiled language so the source code cant be hidden but the 
      interface is the same, some kind of information hiding is still possible
 * 3. In classical OOP languages the inheritance is using classes but in JS its based on the Objects
 * 4. 1*undefined = NaN whereas 1*null = 0;
 * 5. A function can rewrite itself - 
 *   function a() {
      alert('A!');
      a = function(){
       alert('B!');
      };
     }
 * 6. The arguments.length exists but arguments is not an array but an array like object
 * 7. Scope Chain - the innner function will have access to the variables in the outer function
 * 8. Closure - When a function keeps a link to its parent scope even after the parent is executed and returned
 * 9. Closure thing #1 - 
 * 
 *     var array = [];
 *     for(var i=0;i<3;i++){
 *       array[i] = function () {return i;}
 *     }
 *     the when we check array[0](), array[1]() etc all return i since the inner function remembers the outer i
 *     
 *     Resolution #1 - 
 *     var array = [];
 *     for(var i=0;i<3;i++){
 *        array[i] = (function(a){
 *                      return function (){return a;}
 *        
 *                     }
 *                   )(i)
 *     
 *     }
 *     => array[0]() = 0, array[1]() = 1 etc...
 *     
 *     
 *     Resolution #2
 *     function makeClosure(x) {
 *        return function () {return x;}
 *     }
 *     for(var i=0;i < 3 ;i++){
 *        array[i] = makeClosure(i);
 *     }
 *     => array[0]() = 0, array[1]() = 1 etc...
 * 
 * */
