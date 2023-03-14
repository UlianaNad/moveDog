const dogs = [
    {name:'Vasya'},
    {name:'Petya'},
    {name:'Vova'},
    {name:'Oleg'}
]

const dogRender = () => {
    const allDogs = dogs.map((dog) => {
        let x = Math.floor(Math.random() * 850 );
        let y = Math.floor(Math.random() * 550 );
    
        //console.log(x, y)
        let htmlDog = `<div class="htmlDog" style="top:${y}px; left:${x}px" >${dog.name}</div>`;

        console.log(dog.name, x, y)
    
        return htmlDog;
    });

    const newDogs = allDogs.join('');

    document.querySelector('.container').innerHTML = newDogs;
}

document.querySelector('.start').addEventListener('click', dogRender);


//click position
document.querySelector('.container').addEventListener('click', event =>{
    //console.log("X:", event.clientX,"Y:", event.clientY);

    const dogItem = [] = document.querySelectorAll('.htmlDog');

    dogItem.forEach((dog) =>{
        const getCoordLeftX = dog.getBoundingClientRect().x;
        const getCoordTopY = dog.getBoundingClientRect().y;
        //console.log(getCoordLeft, getCoordTop)

        if(event.clientX >= getCoordLeftX){
            console.log('+')
        }
    })
    

})