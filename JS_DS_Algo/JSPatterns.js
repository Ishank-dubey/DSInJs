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
       
                  
       (Boolean) var b = new Boolean();
       typeof b;//object
       typeof b.valueOf();//false
       
       (String)  var s = new String("Couch potato");
       (Math) has static methods so new keyword is not needed
       (Error) try, catch and finally
         #Pattern
         throw {
          name: "MyError",
          message: "OMG! Something terrible has happened"
         }
       (Prototype) 
         Every function has a prototype property and it contains an object
         __proto__, the secret link every object keeps to its prototype
         Can be used to Enhance built-in Objects
         In-Built functions like - call, apply
         - function myFunction() {}
         - myFunction.constructor is Function() {}
         - myFunction.prototype.constructor is myFunction() {}
         - the myFunction.prototype is used only when the function myFunction is used as a constructor
         - 'this' keyword is the object or value to be returned by the constructor function
         
       (Add properties and methods via prototype)  
       (All object have the constructor property thats a function, function in turn has a prototype object
       that in-turn has a constructor and so on till object is reached)
         function Gadget(name, color) {
              this.name = name;
              this.color = color;
              this.whatAreYou = function(){
                  return 'I am a ' + this.color + ' ' + this.name;
              }
         }
         Gadget.prototype.price = 100;
         Gadget.prototype.rating = 3;
         Gadget.prototype.getInfo = function () {return this.name+"-"+this.color + this.price}
         is different from -
         Gadget.prototype.getInfo = function () {return this.name+"-"+this.color + Gadget.prototype.price}
         as the this will point to the object in getInfo but the Gadget.protoype.price will remain same
         
         
         (__proto__) is the  secret link as consider =>
         
         function Human() {}
         var human1 = new Human();
         Human.name = 'test';
         human1.name is test
         
         that means the secret __proto__ is doing this even if we chage the prototype fully, the __proto__ 
         of the already instantiated obj will still have the earlier prototype =>
         
         Human.prototype = {name:'i am ironman'};
         human1.name is still 'test' 
         
         but,
         var human2 = new Human(); human2.name = 'i am ironman'; 
         
         (Efficiency)
         function Shape(name){
           this.name = name;
           this.getName = function () {
                return this.name;
           }
         }  VS        
         
         this is more efficient -> function Shape(name) {
                         this.name = name;
                      }
                      Shape.protype.getName = function () {return this.name;}
        the common function is NOT going to be created again and again when the objects are created from this constructor
        This Does adds one more lookup to Shape.prototype to find the getName function
        //hasOwnProperty
        Even better we could just use only the prototype of the parent=>
        2DShape.prototype = Shape.prototype;
        Tiangle.prototype = 2DShape.prototype;
        2DShape.prototype.constructor = 2DShape;
        Triangle.prototype.constructor = Triangle;
        now if we change the Triangle.prototype.name = 'test'; everyone's prototype will have same name property
        
        (Use intermediate F() to have different prototypes)
        function Shape(){}
        // augment prototype
        Shape.prototype.name = 'shape';
        Shape.prototype.toString = function() {return this.name;};
        function TwoDShape(){}
          // take care of inheritance
        var F = function(){};
        F.prototype = Shape.prototype; 
        TwoDShape.prototype = new F(); 
        TwoDShape.prototype.constructor = TwoDShape; 
        // augment prototype TwoDShape.prototype.name = '2D shape';
        function Triangle(side, height) {
          this.side = side;
          this.height = height;
        }
        var F = function(){};
         F.prototype = TwoDShape.prototype;
        Triangle.prototype = new F();
        Triangle.prototype.constructor = Triangle;
       // augment prototype
        Triangle.prototype.name = 'Triangle';
        Triangle.prototype.getArea = function(){return this.side * this.height / 2;};
        
        (Child having the reference to the Parent prototype)
        function Shape() {
        
        }
        Shape.prototype.name = 'Shape';
        Shape.prototype.toString() = function () {
          var result = [];
          if(this.constructor.uber){
            result[result.length] = this.constructor.uber.toString(); 
          }
          result[result.length] = this.name;
        }
        
             function TwoDShape(){}
             
             var F = function() {};
             F.prototype = Shape.prototype;
             
             TwoDshape.prototype = new F();
             TwoDshape.prototype.constructor = TwoDShape;
             TwoDShape.prototype.name = '2DObject';
             TwoShape.uber = Shape.prototype;
             
             
             function Triangle() {}
             
             var F = function () {}
             F.prototype = TwoShape.prototype;
             Triangle.prototype = new F();
             Triangle.prototype.name = 'Triangle';
             Triangle.prototype.constructor = Triangle;
             Triangle.uber = TwoShape.prototype;
             
             
             var myTriangle = new Triangle();
             myTriangle.toString();// O/P= shape, 2D shape, Triangle
             
             Or, in general-
             function extend(Child, Parent) {
               var F = function () {};
               F.prototype = Parent.prototype;
               Child.prototype = new F();
               Child.prototype.constructor = Child;
               Child.uber = Parent.prototype;
             }
             
             Another example where we can call the parent from the child- 
             function Shape () {}
             Shape.	prototype.name = 'Shape';
             Shape.prototype.test = function () {console.log(this.name);}
             var F = function() {};
             function Triangle() {};
             F.prototype = Shape.prototype;
             Triangle.prototype = new F();
             Triangle.uber = Shape.prototype;
             Triangle.prototype.constructor = Triangle
             Triangle.prototype.name = 'Triangle';
             Triangle.prototype.test = function () {this.constructor.uber.test(); console.log(this.name);}
             var myVar = new Triangle();
             myVar.test();// Shape and Triangle
             
             (Copy the properties as in inheritance)
             
             function extend2 (Child, Parent) {
               var c = Child.prototype;
               var p = Parent.prototype;
               for (var i in p) {
                  c[i] = p[i];
               }
               Child.uber = Parent.prototype;
             }
             
             Lets compare the extend and extend2 method ->
             Consider - 
             
             function Shape() {}
             Shape.prototype.name = 'Shape';
             function TwoDShape() {}
             extend(TwoDShape, Shape);
             var t = new TwoShape();
             t.__proto__.hasOwnProperty('name');//false
             t.__proto__.__proto__.hasOwnProperty('name');//true
             t.hasOwnProperty('name');//false
             
             extend2(TwoDShape, Shape);
             Shape.prototype.name = 'Shape';
             var t2 = new TwoDShape();
             t2.__proto__.hasOwnProperty('name');//true
             
             Do note that while using extend if the non promitive value is changes in the child's prototype like
             B.prototype.stuff = [1, 2];
             extend2(A, B);
             A.prototype.stuff.push(3);
             B.prototype.stuff// is now [1, 2, 3]; as well
             
             (Inherit via Objects)
             Not using the constructor
             
             function extendCopy(parent) {
               var c = {};
               for(var i in p){
                 c[i] =p[i];
               }
               c.uber = p;
               return c;
             }
             var shape = {
                    name: 'shape',
                    toString: function() {return this.name;}
                 }
             var twoDShape = extendCopy(shape);
             twoDShape.name = '2D Shape';
             twoDShape.toString = function() {
                 console.log(this.uber.toString(), this.name);
             }
             //only draw back is that properties can't be passed as arguments
             //to resolve that we can have a function that in turn accepts arguments
             
             (Deep Copy)
             function deepCopy(p, c){
                var c = c || {};
                for(var i in p){
                if(typeof p[i] === 'object'){
                   c[i] = p[i].constructor === Array ? []: {}; 
                   deepCopy(p[i], c[i]);
                }else{
                  c[i] = p[i]
                }
                }
             }

             
 * 
 * */
