function visible(){
    let x = document.getElementsByClassName('visible')[0];
    let y = document.getElementsByClassName('submit')[0];
    y.innerHTML = "Log In"
    if (x.style.display === "none")
    {
        x.style.display = "block";
    }
    else
    {
        x.style.display = "none";
    }
}

function visible2(){
    let x = document.getElementsByClassName('visible')[0];
    let y = document.getElementsByClassName('submit')[0];
    y.innerHTML = "Sign Up"
    if (x.style.display === "none")
    {
        x.style.display = "block";
    }
    else
    {
        x.style.display = "none";
    }

}
