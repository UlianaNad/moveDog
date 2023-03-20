const dogs = [
    {name:'Vasya'},
    {name:'Petya'},
    {name:'Vova'},
    {name:'Oleg'}
]

const dogRender = () => {
    const allDogs = dogs.map((dog) => {
        let x = Math.floor(Math.random() * 850);
        let y = Math.floor(Math.random() * 550);
    
        //console.log(x, y)
        let htmlDog = `<div class="htmlDog" style="top:${y}px; left:${x}px" > <img src="../img/dog-nose.png" > <span>${dog.name}</span></div>`;
        
        //console.log(dog.name, x, y)
    
        return htmlDog;
    });

    const newDogs = allDogs.join('');

    let dogHouse = `<div class="dogHouse"></div>`;

    document.querySelector('.container').innerHTML = newDogs + dogHouse;


// move the dog
    const dogItems = [] = document.querySelectorAll('.htmlDog');
    dogItems.forEach((dog) => {
        dog.addEventListener('click', (event) => {
            const x = event.pageX - dog.offsetLeft;
            const y = event.pageY - dog.offsetTop;
            //console.log(x +':'+ y )
            
            if(x <= 25  && y <= 25){
                //console.log('left top')
                
                dog.style.left = dog.offsetLeft - 15 + 'px';
                dog.style.top = dog.offsetTop - 15 + 'px';
                //console.log(dog.getBoundingClientRect().x, dog.getBoundingClientRect().y)
               
            }
            if(x >= 25  && y >=25){
                //console.log('right bottom')
                dog.style.left = dog.offsetLeft + 15 + 'px';
                dog.style.top = dog.offsetTop + 15 + 'px';
                //console.log(dog.getBoundingClientRect().x, dog.getBoundingClientRect().y)
            }
            if(x >= 25  && y <=25){
               // console.log('right top')
                dog.style.left = dog.offsetLeft + 15 + 'px';
                dog.style.top = dog.offsetTop - 15 + 'px';
                //console.log(dog.getBoundingClientRect().x, dog.getBoundingClientRect().y)
            }
            if(x <= 25  && y >=25){
                console.log('left bottom')
                dog.style.left = dog.offsetLeft - 15 + 'px';
                dog.style.top = dog.offsetTop + 15 + 'px';
                //console.log(dog.getBoundingClientRect().x, dog.getBoundingClientRect().y)
            }

            dogItems.forEach((dog) => {
                const house = document.querySelector('.dogHouse');
        
                let dogLeft = dog.getBoundingClientRect().left;
                let dogTop = dog.getBoundingClientRect().top;
                let dogRight = dog.getBoundingClientRect().right;
                let dogBottom = dog.getBoundingClientRect().bottom;
        
                let houseLeft = house.getBoundingClientRect().left;
                let houseTop = house.getBoundingClientRect().top;
                let houseRight = house.getBoundingClientRect().right;
                let houseBottom = house.getBoundingClientRect().bottom;
                // console.log('dogLeft',dogLeft)
                // console.log('dogright',dogRight)
                // console.log('dogtop',dogTop)
                // console.log('dogbottom',dogBottom)
                //console.log(houseLeft,houseRight, houseTop, houseBottom)
                
                if(dogLeft >= houseLeft && dogTop >= houseTop && dogRight <= houseRight && dogBottom <= houseBottom){
                    let dogIsHome = `<span class="alertDog" >Dog is at home!</span>`;
                    document.querySelector('.alert').innerHTML = dogIsHome;
                    // console.log(dogIsHome)
                    setTimeout(() => {
                        let dogIsHome = ``;
                        document.querySelector('.alert').innerHTML = dogIsHome;
                    }, 3000)
                    dog.style.display = 'none';
                    dogs.shift();
                    return;
                }
                if(dogs.length === 0){
                    console.log('Thank you!')
                    
                    let winner = `<span class='winner'>All dogs are home! You won the game! 
                    <br> If you want to play again - restart the page!</span>`;

                    document.querySelector('.container').innerHTML = winner;
                }
        
            });
        });
        

    
    });
   

}

document.querySelector('.start').addEventListener('click', dogRender);
