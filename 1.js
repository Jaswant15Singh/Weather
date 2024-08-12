let detail = document.getElementsByClassName("detail"); 
let cll = document.getElementById("cl")

const fetchDetails = async () => {
    try {
        let data = await fetch("https://dummyjson.com/users");
        data = await data.json();
        detail.innerHTML = data.users.firstName; 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

cll.addEventListener("click",()=>{fetchDetails});
