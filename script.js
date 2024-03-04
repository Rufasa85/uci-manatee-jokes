function loadManateeJoke(event){
    fetch(`https://manateejokesapi.herokuapp.com/manatees/random`).then(function(res){
        return res.json()
    }).then(function(data){
        document.querySelector("#setup").textContent=data.setup
    })
}

loadManateeJoke();