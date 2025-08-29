## WELCOME TO ( সহজ সরল সিম্পল ) B12-ASSIGNMENT-005-Emergency-Hotline

### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

<h1>Answer-1:</h1>

<ul> 
 <li> getElementById : finds one element by its Id is unique</li>

 <li> getElementsByClassName finds all elements with the given class name   and returns an htmlCollection<br>
   This collection is array-like but not a true array, so some array methods won't work directly.</li>

 <li> querySelector finds the first element in the document that matches a given css selector - id, class,'',''<br>
if multiple elements match, it returns only the first one, if none match, it returns null</li>

 <li> querySelectorAll finds all elements in the document that match a given css selector -id, class, tag, and returns them as a nodeList <br>
if no elements match, it returns an empty nodeList</li>

2. How do you **create and insert a new element into the DOM**?

<h1>Answer-2:</h1>

<p>
at first i will create- document.createElement() then add some text , i want and then append it to the dom by selecting that element and append child, <br>
example: <br>
	let newDiv = document.createElement("div"); <br> 
	newDiv.textContent = "I love Sylhet";<br>
	document.body.appendChild(newDiv);<br>
</p>

3. What is **Event Bubbling** and how does it work?

<h1>Answer-3:</h1>
<p>
   Event bubbling is a DOM event handling concept where when an event is triggered on a child element, it slowly bubbles up to the next level parent element
</p>

4. What is **Event Delegation** in JavaScript? Why is it useful?

<h1>Answer-4:</h1>
<p>
Event delegation is a JavaScript technique where you use a single event listener on a parent element, <br> and that event listener also handles events on child elements , and useful because it lets handle events for many child elements with a single parent listener
</p>

5. What is the difference between **preventDefault() and stopPropagation()** methods?

<h1>Answer-5:</h1>
 <ul> 
  <li>  preventDefault()stops the browser default action for an event,like prevent a form from submitting, stop a link from opening.</li>
  <li>  stopPropagation():It stops the event from bubbling up to parent elements</li>
 </ul>
