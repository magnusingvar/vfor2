fetch('students.json')
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        appendData(data);
    })
    .catch((err)=> {
        console.log('error:' + err);
    });

function appendData(data) {
    const mainContainer = document.getElementById("studentList");
    for (let i = 0; i < data.length; i += 1) {
        const list = document.createElement("li");
        list.innerHTML = `${data[i].firstName} ${data[i].lastName} - ${data[i].nickname} - ${data[i].favoriteSubject}`
        mainContainer.appendChild(list);
    }
}