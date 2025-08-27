1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1.Answer-
getElementId selects the specific element with the specific id. It only selects one item at a time. In a html file every id is unique.

getElementsByClassName selects the items which have / has the specific class. Generally it is used to grab more than one element.

querySelector selects the elements like css file. For example, if we want to select a class by it then we have to give a dot(.) before the class. If there remains more than one element containing any class then it will select the first one as it finds. On the other hand, querySelectorAll grabs all the elements as the it is given the class or the tag or id.(Though id is used as a unique one)


2.How do you create and insert a new element into the DOM?

2.Answer-
To create an element in js we can follow the rule given below-
document.createElement("name of the element we want to create")

To insert a new element in dom we can follow the rule given below-
theParentDivInWhichWeWantToInsertTheElement.appendChild(the element we have created earlier)


3.What is Event Bubbling and how does it work?

3.Answer-
Event bubbling is a process through which an event is being held inside dom. For example, if we click a button inside a dom, there happens an event in the button. After the button event the event goes up to its parent element then goes to the grandparent element and finally it reaches the body tag of html file.

Pathway of event bubbling- child ==> parent div ==> grandparent div


4.What is Event Delegation in JavaScript? Why is it useful?

4.Answer-
Event delegation is a special process of js by which we can create an event to a specific element via its parent div. It is beneficial because as we grab the element via its parent div that's why it becomes very easier to grab other elements of its parent div related to its event.

By using event delegation we can create reusable block which helps us to minimize our code and thus our code becomes much more efficient than before and also it becomes very easy or understand to read.


5.What is the difference between preventDefault() and stopPropagation() methods?

5.Answer-
preventDefault() stops the default behavior of the browser like as we know that form by default makes the browser reload. So we can stop this in built behavior of form by using preventDefault()

stopPropagation() is used to stop event bubbling. Events happen on the elements and then it bubble to its parent. So we use the stopPropagation() to make the event stay on itself, not to bubble to its parent.