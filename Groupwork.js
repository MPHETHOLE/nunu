        document.querySelector('#submit-button').addEventListener('click', recommendProgram);
        
        function recommendProgram() {
            const mathGrade = document.querySelector('#math-grade').value;
            const scienceGrade = document.querySelector('#science-grade').value;
            const businessGrade = document.querySelector('#business-grade').value;
            const englishGrade = document.querySelector('#english-grade').value;
            let programName='', programImage='', programDetails='';
        
            if (mathGrade === 'A' || mathGrade === 'A*') {
                programName = 'Information Technology';
                programImage = document.getElementById("IMG");
                programImage.src="inf.jpg";
                programDetails = "A course uses computers,software,networks and technoogy. this includes hardware and software development to data management,cybersecurity and network";
            } else if ((businessGrade === 'B' ||businessGrade === 'A'|| businessGrade === 'A*') &&(englishGrade === 'B' ||englishGrade === 'A' || englishGrade === 'A*')) {
                programName = 'Business Management';
                programImage = document.getElementById("IMG");
                programImage.src="bmn.jpg";
                programDetails = "A course involves planning,organising,ordering amd managing. It encoupasses various functiond including strategic planning,finantial management,human resourses and operations";
            } else if (englishGrade === 'B' || englishGrade === 'A' || englishGrade === 'A*') {
                programName = 'Communication Studies';
                programImage = document.getElementById("IMG");
                programImage.src="bss.jpg";
                programDetails = "A course focus on various aspects of business.It provides multidisciplinary aproach, covering areas such as economics,finance,marketing,management and entrepreneurship.";
            } else {
                programName = 'SORRY! No program matches your grades.';
            }
        
            document.querySelector('#program-name').textContent = programName;
            document.querySelector('#program-image').textContent = programImage;
            document.querySelector('#program-details').textContent = programDetails;

            document.querySelector('#program-recommendation').style.display = 'block';
        }