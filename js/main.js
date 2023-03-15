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

        //console.log(dog.name, x, y)
    
        return htmlDog;
    });

    const newDogs = allDogs.join('');


    document.querySelector('.container').innerHTML = newDogs;



    const dogItems = [] = document.querySelectorAll('.htmlDog');
    dogItems.forEach((dog) => {
        dog.addEventListener('click', (event) => {
            const x = event.pageX - dog.offsetLeft;
            const y = event.pageY - dog.offsetTop;
            //console.log(x +':'+ y )


            const getCoordLeft = dog.getBoundingClientRect();
            const getCoordTop = dog.getBoundingClientRect();
            //console.log(getCoordLeft, getCoordTop)


            if(x <= 25  && y <= 25){
                console.log('left top')
                //dog.style.left = getCoordLeft - '5 px';
                dog.style.left = dog.offsetLeft - 5 + 'px';
                dog.style.top = dog.offsetTop - 5 + 'px';
               
            }
            if(x >= 25  && y >=25){
                console.log('right bottom')
                dog.style.left = dog.offsetLeft + 5 + 'px';
                dog.style.top = dog.offsetTop + 5 + 'px';
            }
            if(x >= 25  && y <=25){
                console.log('right top')
                dog.style.left = dog.offsetLeft + 5 + 'px';
                dog.style.top = dog.offsetTop - 5 + 'px';
            }
            if(x <= 25  && y >=25){
                console.log('left bottom')
                dog.style.left = dog.offsetLeft - 5 + 'px';
                dog.style.top = dog.offsetTop + 5 + 'px';
            }
        })
    })

}

document.querySelector('.start').addEventListener('click', dogRender);



//click position
// document.querySelector('.container').addEventListener('click', event =>{
//     //console.log("X:", event.clientX,"Y:", event.clientY);

//     const dogItem = [] = document.querySelectorAll('.htmlDog');
//     //console.log(dogItem)

//     dogItem.forEach((dog) =>{
//         const getCoordLeftX = dog.getBoundingClientRect().x;
//         const getCoordTopY = dog.getBoundingClientRect().y;
//         //console.log(getCoordLeft, getCoordTop)
//         const getWidth = dog.getBoundingClientRect().width;
//         const getHeight = dog.getBoundingClientRect().height;
//         //console.log(getWidth, getHeight)

//         // if(event.clientX == getCoordLeftX || 
//         //     event.clientY == getCoordTopY){
//         //     console.log('+')
//         // }

//         console.log((event.pageX - dog.offsetLeft) + ':' + (event.pageY - dog.offsetTop))
//     })
    

// })
