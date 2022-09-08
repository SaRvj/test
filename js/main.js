function populateDiv(jsonObj) {
    var div = document.querySelector('div');
    var section = document.querySelector('section');
    var requestURL = 'https://raw.githubusercontent.com/SaRvj/test/main/data/teacher.json';
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function() {
        var teachers = request.response;
        populateSection(teachers);
        showTeachers(teachers);
    }

    function populateSection(jsonObj) {
        var myH2 = document.createElement('h2');
        myH2.textContent = 'Teachers';
        myH2.className = 'teachers_title';
        section.appendChild(myH2);
      
        var myPara = document.createElement('p');
        myPara.textContent = 'Meet Professional Trainers';
        myPara.className = 'teachers_text';
        section.appendChild(myPara);
    }
    
    
    function showTeachers(jsonObj) {
        console.log(jsonObj);
        var person = JSON.parse(jsonObj);
        var myArticle = document.createElement('article');
        myArticle.className = 'teachers_section';
        var myH3 = document.createElement('h3');
        myH3.className = 'teachers_name';
        var myPara1 = document.createElement('p');
        myPara1.className = 'teachers_description';
        var myImg = document.createElement('img');
        myImg.className = 'teachers_img';
        var myDiv = document.createElement('div');
        myDiv.className = 'teachers_div';
        var myList = document.createElement('ul');
        myList.className = 'teachers_icon';
      
        for (var i = 0; i < person.length; i++) {
          
      
            myH3.textContent = person[i].name;
            myPara1.textContent = person[i].description;
            myImg.textContent = 'image: ' + person[i].image;
            myDiv.textContent = 'socials:';
        
            var socialsNet = person[i].socials;
            for (var j = 0; j < socialsNet.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = socialsNet[j];
                myList.appendChild(listItem);
            }
      
            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myImg);
            myArticle.appendChild(myDiv);
            myArticle.appendChild(myList);
        
            section.appendChild(myArticle);
        }
    }
    
}

populateDiv();




