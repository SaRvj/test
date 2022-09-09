function populateDiv(jsonObj) {
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

    function populateSection() {
        var myH2 = document.createElement('h2');
        myH2.textContent = 'Teachers';
        myH2.className = 'text';
        section.appendChild(myH2);

        var myPara = document.createElement('p');
        myPara.textContent = 'Meet Professional Trainers';
        myPara.className = 'text';
        section.appendChild(myPara);

    }
    

    // pour récupérer les données et afficher les teachers
    function showTeachers(jsonObj) {
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

        console.log(person.length);

        for (var i = 0; i < person.length; i++) {
            var newDiv = document.createElement('div');
            newDiv.id = "teachers_wrapper";
            document.body.appendChild(newDiv);
        
            // pour recréer chaque teacher
            var ids = ['id1', 'id2', 'id3'];
            ids.forEach(function(e) {
                document.body.innerHTML += `
                <div class="teacher_div" id=${e}">
                    <p></p>           
                </div>
                `
            })

            myImg.src = '../assets/images/' + person[i].image;
            console.log(person[i].image);
            myH3.textContent = person[i].name;
            console.log(person[i].name);
            myPara1.textContent = person[i].description;
            console.log(person[i].description);
            
            myArticle.appendChild(myImg);
            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myList);


            document.getElementById("teachers_bloc").appendChild(myArticle);
        }

    }

}

populateDiv();
