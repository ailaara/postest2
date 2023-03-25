

users.push({user});
    localStorage.setItem('users', JSON.stringify(users));
    dispData();
    e.preventDefault();


    <div id="output">
                
                    function dispData(){
                        var output = document.getElementById('output');
                        JSON.parse(localStorage.getItem('users')).array.forEach(data => {
                            output.innerHTML +=`
                            <h3> Haiii: ${data.name} </h3>
                            `
                        });
                    }
               

            </div>