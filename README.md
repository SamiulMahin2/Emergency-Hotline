<!-- first answer -->
getElementId selects the specific element with the specific id. It only selects one item at a time. In a html file every id is unique.

getElementsByClassName selects the items which have / has the specific class. Generally it is used to grab more than one element.

querySelector selects the elements like css file. For example, if we want to select a class by it then we have to give a dot(.) before the class. If there remains more than one element containing any class then it will select the first one as it finds.
<!-- first answer -->

<!-- second answer -->
To create an element in js we can follow the rule given below-
document.createElement("name of the element we want to create")

To insert a new element in dom we can follow the rule given below-
theParentDivInWhichWeWantToInsertTheElement.appendChild(the element we have created earlier)
<!-- second answer -->

<!-- third answer -->
Event bubbling is a process through which an event is being held inside dom. For example, if we click a button inside a dom, there happens an event in the button. After the button event the event goes up to its parent element then goes to the grandparent element and finally it reaches the body tag of html file.

Pathway of event bubbling- child ==> parent div ==> grandparent div
<!-- third answer -->

<!-- fourth answer -->

<!-- fourth answer -->