 // from html
 var nameInput = document.getElementById("name");
 var urlInput = document.getElementById("url");
 var addBtn = document.getElementById("addBtn");
 var tableBody = document.getElementById("tBody");

 //add - create
 var bookmarks = [];
 var mainIndex = 0;

if(localStorage.getItem("bookmarks") == null){
    bookmarks = [];
}else{
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    displaySite(bookmarks);
}

 addBtn.onclick = function(){
    if(addBtn.innerHTML == "Update"){
        addBtn.innerHTML = "Submit";
        var bookmark = {
            name: nameInput.value,
            url:urlInput.value
        }
        bookmarks.splice(mainIndex,1,bookmark);
    }else {
        var bookmark = {
            name : nameInput.value,
            url : urlInput.value
        }
        bookmarks.push(bookmark);
    }
    
    localStorage.setItem("bookmarks" , JSON.stringify(bookmarks));
    displaySite(bookmarks);
    clearData();
 }
 
 var nameRegex = /^[A-Za-z_]{1,}$/
 function isNameValid(){
    if(nameRegex.test(nameInput.value)){
        return true;
    }else{
        return false; 
    }
 }

 var urlRegex = /^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{1,3}$/
  function isUrlValid(){
    if(urlRegex.test(urlInput.value)){
        return true;
    }else{
        return false; 
    }
 }

 nameInput.onkeyup = function(){
    if(isUrlValid() && isNameValid()){
        addBtn.removeAttribute("disabled");
    }else{
        addBtn.disabled = "true";
    }
 }

 urlInput.onkeyup = function(){
    if(isUrlValid() && isNameValid()){
        addBtn.removeAttribute("disabled");
    }else{
        addBtn.disabled = "true";
    }
 }
 //read
 function displaySite(arr){
    var sites = ``;
    for(var i = 0;i<arr.length;i++){
        sites += `
                <tr>
                    <td>${i+1}</td>
                    <td>${arr[i].name}</td>
                    <td> <button class="btn btn-primary"><a class="text-black" style="text-decoration: none;" href="${bookmarks[i].url}"> Visit </a></button></td>
                    <td><button onclick="updateSite(${i})" class="btn btn-info">Update</button></td>
                    <td><button onclick="deleteSite(${i})" class="btn btn-danger">Delete</button></td>
                </tr>`
    }
    tableBody.innerHTML = sites;
 }

 //delete
function deleteSite(index){
    bookmarks.splice(index,1);
    localStorage.setItem("bookmarks" , JSON.stringify(bookmarks));
    displaySite(bookmarks);
}

//update

function clearData(){
    nameInput.value = "";
    urlInput.value = ""; 
}
function updateSite(index){
    nameInput.value = bookmarks[index].name;
    url.value = bookmarks[index].url;
    addBtn.innerHTML = "Update";
    mainIndex = index;
}


//search
function search(term){
    var searchedSite = [];
     for(var i = 0;i<bookmarks.length;i++){
        if(bookmarks[i].name.toLowerCase().includes(term)){
            searchedSite.push(bookmarks[i]);
        }
     }

    //  console.log(searchedSite);
    displaySite(searchedSite);
}