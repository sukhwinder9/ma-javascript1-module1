const cats = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1
var cat = {
    complain: function() {
        return "meow";
    }
};

console.log(cat.complain());

//question 2

var heading = document.querySelector("h3");
heading.innerHTML = "updated heading";

//question 3
heading.style.fontSize = "2em";

//question 4

heading.classList.add("subheading");

//question 5

var paragraph = document.getElementsByTagName('p');
for (i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "red";
}

//question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML += "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7

const cats = [{
        name: "blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function listvalues(lists) {

    for (i = 0; i < lists.length; i++) {
        console.log(lists[i]);
    }
}
listvalues(cats);



//question 8

function createcats(cats) {
    var catContainer = document.getElementById("catContainer");
    for (i = 0; i < cats.length; i++) {
        var divContainer = document.createElement('div')
        var h5Name = document.createElement('h5');
        h5Name.innerHTML = cats[i].name;

        var pAge = document.createElement('p');
        pAge.innerHTML = cats[i].age;
        divContainer.appendChild(h5Name);
        divContainer.appendChild(pAge);

        catContainer.appendChild(divContainer);
    }
    return catContainer;
}

createcats(cats);