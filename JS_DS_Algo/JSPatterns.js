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
 *    it has arguments.callee which is a reference to itself that can help us in calling an anonymous function
 *    arguments is not having .sort , .slice etc.
 * 7. Scope Chain - the innner function will have access to the variables in the outer function
 * 8. Closure - When a function keeps a link to its parent scope even after the parent is executed and returned
 * 9. Closure thing #1 - 
 *     #Problem-
 *     var array = [];
 *     for(var i=0;i<3;i++){
 *       array[i] = function () {return i;}
 *     }
 *     => the when we check array[0](), array[1]() etc all return i since the inner function remembers the outer i
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
 * 10. To create an Object -
 *     a. {}
 *     b. []
 *     c. new keyword and function constructor, the benfit is that we can pass arguments while creating the object
 *        the we can access the properties using the this keyword, if the constructor is called w/o the new key word
 *        the this will refer to window in the browser(host env)
 *     d. var hero = {
 *                    name: 'test',
 *                    callName: function () {
 *                      return hero.name;//or this.name
 *                    }
 *                    }
 *                    
 * 11. When we crate an object with the new keyword, a special property is created in the object called Constructor which points to the function that created the object 
 * 12. In case a new object created via {} the constructor is the Object function
 * 13. All types of Built-in objects and creating them - 
 *     (Objects) var o = {};
       var o = new Object();
       
       (Array) var a = new Array(1);
       var a = [1];
       a.length = 5;
       => a = [1, undefined, undefined, undefined, undefined]
       
       
       (Function) var  f = new Function('a, b, c, d','return arguments'); //not recommended
       function have a length property that points to the number of parameters the function accepts
       
       # Pattern
       var myObj = {
          name:'test',
          say: function () {return this.name;}
       };
       function myFunc() {
       
       }
       myFunc.prototype = myObj;
       
       var newObj = new myFunc();
       console.log(newObj.name);
                  
 * 
 * */
