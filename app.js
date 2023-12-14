
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get username and password from form inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the entered credentials are correct
    if (username === "test@sunbasedata.com" && password === "Test@123") {
        // Hide login form
        document.getElementById("loginForm").style.display = "none";
        
        // Show customer list section
        document.getElementById("customerListSection").style.display = "block";
    } else {
        // Show an error message or handle incorrect credentials
        alert("Invalid username or password. Please try again.");
    }
});




var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    fName = document.getElementById("fname"),
    lName=document.getElementById("lname"),
    address = document.getElementById("address"),
    city = document.getElementById("city"),
    state = document.getElementById("state"),
    email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser")


let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'Submit',
    modalTitle.innerText = "Fill the Form"
    isEdit = false
    imgInput.src = "./image/Profile Icon.webp"
    form.reset()
})


file.onchange = function(){
    if(file.files[0].size < 1000000){  // 1MB = 1000000
        var fileReader = new FileReader();

        fileReader.onload = function(e){
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(file.files[0])
    }
    else{
        alert("This file is too large!")
    }
}


function showInfo(){
    document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
    getData.forEach((element, index) => {
        let createElement = `<tr class="employeeDetails">
            <td>${index+1}</td>
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.employeefName}</td>
            <td>${element.employeelName}</td>
            <td>${element.employeeAddress}</td>
            <td>${element.employeeCity}</td>
            <td>${element.employeeState}</td>
            <td>${element.employeeEmail}</td>
            <td>${element.employeePhone}</td>



            <td class="d-inline-flex">
                     <button class="btn" onclick="readInfo('${element.picture}', '${element.employeefName}', '${element.employeelName}', '${element.employeeAddress}','${element.employeeCity}', '${element.employeeState}','${element.employeeEmail}', '${element.employeePhone}')" data-bs-toggle="modal" data-bs-target="#readData">
                     <i class="bi bi-eye-fill me-1" style="color:green;"></i> 
                    </button>

                     <button class="btn" onclick="editInfo(${index}, '${element.picture}', '${element.employeefName}', '${element.employeelName}', '${element.employeeAddress}','${element.employeeCity}', '${element.employeeState}','${element.employeeEmail}', '${element.employeePhone}')" data-bs-toggle="modal" data-bs-target="#userForm">
                    <i class="bi bi-pencil-fill me-1" style="color: gray;"></i> 
                    </button>

                    <button class="btn" onclick="deleteInfo(${index})">
                    <i class="bi bi-dash-circle-fill me-1" style="color: red;"></i>
                     </button>
            </td>




        </tr>`
        userInfo.innerHTML += createElement
    })
}
showInfo()


function readInfo(pic, fname, lname, address, city, state, email, phone){
    document.querySelector('.showImg').src = pic,
    document.querySelector('#showfName').value =fname,
    document.querySelector('#showlName').value =lname,
    document.querySelector('#showAddress').value =address,
    document.querySelector("#showCity").value = city,
    document.querySelector("#showState").value=state,
    document.querySelector("#showEmail").value = email,
    document.querySelector("#showPhone").value = phone
}


function editInfo(index, pic, fname,lname,Address, City, State,Email,Phone){
    isEdit = true
    editId = index
    imgInput.src = pic
    fName.value = fname
    lName.value =lname
    address.value = Address
    city.value =City
    state.value=State
    email.value = Email,
    phone.value = Phone,
    submitBtn.innerText = "Update"
    modalTitle.innerText = "Update The Form"
}


function deleteInfo(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1)
        localStorage.setItem("userProfile", JSON.stringify(getData))
        showInfo()
    }
}


form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const information = {
        picture: imgInput.src == undefined ? "./image/Profile Icon.webp" : imgInput.src,
        employeefName: fName.value,
        employeelName: lName.value,
        employeeAddress: address.value,
        employeeCity: city.value,
        employeeState:state.value,
        employeeEmail: email.value,
        employeePhone: phone.value,
    }

    if(!isEdit){
        getData.push(information)
    }
    else{
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('userProfile', JSON.stringify(getData))

    submitBtn.innerText = "Submit"
    modalTitle.innerHTML = "Fill The Form"

    showInfo()

    form.reset()

    imgInput.src = "./image/Profile Icon.webp"  

})


$(document).ready(function() {
    // Hide the logout button initially
    $('.logoutBtn').hide();

    // Function to handle login form submission (just an example)
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission for this example

        // Your login validation logic here
        // Assuming the login is successful, show the customer details section and the logout button
        $('#loginForm').hide();
        $('#customerListSection').show();
        $('.logoutBtn').show(); // Show the logout button
    });

    // Handle logout button click event using event delegation
    $(document).on('click', '.logoutBtn', function() {
        // Show the login form and hide the customer details section
        $('#loginForm').show();
        $('#customerListSection').hide();
        $('.logoutBtn').hide(); // Hide the logout button again

        // Reset the login form fields
        $('#loginForm')[0].reset(); // Resetting the form fields
    });
});

