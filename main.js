//GETTING ALL THE ID ELEMENTS

const header = document.getElementById('page-header');
const mainHeading = document.getElementById('main-heading');
const paragraph1 = document.getElementById('para1');
const paragraph2 = document.getElementById('para2');
const paragraph4 = document.getElementById('para4');
const btn = document.getElementById('btn');
const redCard = document.getElementById('red')
const blueCard = document.getElementById('blue')
const yellowCard = document.getElementById('yellow')
const greenCard = document.getElementById('green')
const blackCard = document.getElementById('black')


//CHANGING THE HEADER TEXT AND BACKGROUND COLOR

mainHeading.innerHTML = "New DOM Layout";
mainHeading.classList.add('bg-success');


//ADDING TEXT TO PARAGRAPH DIVS

paragraph1.innerHTML ="The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";
paragraph2.innerHTML ="The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."

//MAKING THE BUTTON CLICK ME FUNCTION


btn.addEventListener('click', function(){
     const paragraph = document.createElement("p");
     paragraph.innerHTML = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.'
     paragraph4.appendChild(paragraph);
})


//CHANGING THE COLORS OF THE BOXES

redCard.classList.remove("bg-white");
redCard.classList.add('bg-danger');

blueCard.classList.remove("bg-white");
blueCard.classList.add('bg-primary');

yellowCard.classList.remove("bg-white");
yellowCard.classList.add('bg-warning');

greenCard.classList.remove("bg-white");
greenCard.classList.add('bg-success');

blackCard.classList.remove("bg-white");
blackCard.classList.add('bg-dark');
