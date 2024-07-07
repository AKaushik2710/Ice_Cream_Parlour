                                                    // CRAVING FOR SOME ICE CREAM -----?
function chng(){
    let color_1 = Math.floor(Math.random()*255);
    let color_2 = Math.floor(Math.random()*255);
    let color_3 = Math.floor(Math.random()*255);

    let visi = Math.random();
    return `rgba(${color_1},${color_2},${color_3},${visi})`;
}

    document.getElementById("permission").style.backgroundColor = 'rgba(157, 255, 242, 0.9)';

    const asker = document.getElementById("permission");

                                            // ASKING FOR PERMISSION
    document.getElementById("yes").addEventListener('click',()=> {
        asker.style.display = 'none';

        document.querySelector(".body").style.backgroundImage = "none";
        document.querySelector(".body").style.backgroundColor = "#38b6ff";
                                                // CHOOSING FRUITS
        let fruits = document.querySelector(".fruit");
        fruits.style.display = "flex";

        const fruit_choice= fruits.querySelectorAll("li");
        for(let choice of fruit_choice){
            choice.addEventListener('click',()=>{
                fruits.style.display='none';

                                                    // MASHER
                const masher = document.createElement('div');
                masher.setAttribute('class','mash');

                                                 // GETTING IMAGE
                const apnd_choice = choice.querySelector("img");
                const cho_p = document.createElement('p');
                cho_p.setAttribute('id','choice');
                cho_p.append(apnd_choice);

                                                    // ICE CUBES
                const cube = document.createElement('p');
                cube.setAttribute('id','ice_cube');
                cube.innerHTML = `<i class="fa-solid fa-dice-d6"></i>
                                    <i class="fa-solid fa-dice-d6" id="middle_one"></i> <i class="fa-solid fa-dice-d6"></i>`;
                

                                             // COLLECTING IN A SINGLE ELEMENT
                const choice_holder = document.createElement('div');
                choice_holder.setAttribute('class','choice_holder');
                choice_holder.append(cho_p);
                choice_holder.append(cube);
                
                                            // DISPLAYING PROCESS FOR FRUIT MASHING
                const quote = document.createElement('p');
                setInterval(()=>{
                    quote.style.color = chng();
                },100)
                quote.style.fontSize = '3rem';
                quote.style.textAlign = 'center';
                quote.setAttribute('id','fruit_quote');

                quote.innerHTML= 'Mashing';
                masher.append(quote);
                masher.append(choice_holder);

                document.getElementById("displayer").append(masher);
                setTimeout(()=>{
                                                        // CHOOSING HOLDERS
                const holders = document.querySelector(".holder");
                masher.style.display = 'none';
                holders.style.display = 'flex';

                document.querySelector(".body").style.backgroundColor = "#ff66c4";

                                                        // HOLDERS
                const holder_choice = holders.querySelectorAll("li");
                for(let holder of holder_choice){
                    holder.addEventListener('click',()=>{
                        holders.style.display = 'none';
                        const masher = document.createElement('div');
                masher.setAttribute('class','mash');

                                                 // COLLECTING INTO A SINGLE PLACE 
                const apnd_choice = holder.querySelector("svg");
                const cho_p = document.createElement('p');
                cho_p.setAttribute('class','choice');
                cho_p.append(apnd_choice);

                const choice_holder = document.createElement('div');
                choice_holder.setAttribute('class','choice_holder');
                choice_holder.append(cho_p);
                
                                                     // DISPLAYING PROCESS
                const quote = document.createElement('p');
                setInterval(()=>{
                    quote.style.color = chng();
                },100)

                quote.style.textAlign = 'center';
                quote.innerHTML= 'BEING PROCESSED';
                quote.setAttribute('id',"process_quote");
                quote.style.position = 'absolute';
                quote.style.right = '-30dvw';
                quote.style.bottom = '-30dvh';
                masher.append(quote);
                masher.style.position = 'relative';
                masher.style.height = "10dvh";

                const processed_img = document.createElement("div");
                
                                                    // PROCESSING WINDOW
                const holder_img = document.createElement("div");
                const slurry_img = document.createElement("div");
                
                const holder_img_image = document.createElement("img");
                const slurry_img_image = document.createElement("img");

                slurry_img.append(slurry_img_image);
                slurry_img.setAttribute('id','slurry_img');

                holder_img.append(holder_img_image);
                holder_img.setAttribute('id','holder_img');

                slurry_img_image.style.animationName = 'slurry';
                                                        // APPENDING IMAGES
                switch(holder.querySelector("p").innerText){
                    case "Cone":
                        holder_img_image.src = "./images/_cone.jpg";
                        break;
                    
                    case "Cup":
                        holder_img_image.src = "./images/_cup.jpg";
                        break;

                    case "Stick":
                        holder_img_image.src = "./images/_stick.jpg";
                        slurry_img_image.style.animationName = 'slurry_left';
                        slurry_img_image.style.height = '20dvh';
                        slurry_img_image.style.width = '20dvw';
                        slurry_img_image.style.top='15dvh';
                        holder_img.style.zIndex = 1;
                        break;

                    default:
                        holder_img_image.alt = "Something is wrong";
                }

                switch(choice.querySelector("p").innerText){
                    case "Blueberry":
                        slurry_img_image.src = "./images/Blueberry/blueberry_slurry.jpg";
                        break;

                    case "Grapes":
                        slurry_img_image.src = "./images/Grapes/grape_slurry.jpg";
                        break;

                    case "Banana":
                        slurry_img_image.src = "./images/Banana/banana_slurry.jpg";
                        break;

                    case "Strawberry":
                        slurry_img_image.src = "./images/Strawberry/strawberry_slurry.jpg";
                        break;

                    default:
                        slurry_img_image.alt = "Something is not right";
                }

                slurry_img.append(slurry_img_image);
                slurry_img.setAttribute('id','slurry_img');

                holder_img.append(holder_img_image);
                holder_img.setAttribute('id','holder_img');

                processed_img.append(masher);
                processed_img.append(slurry_img);
                processed_img.append(holder_img);

                processed_img.style.width = '70dvw';
                processed_img.style.height = '60dvh';
                processed_img.style.display = "flex";
                processed_img.style.flexDirection = "column"
                document.getElementById("displayer").append(processed_img);

                setTimeout(()=>{
                    processed_img.style.display='none';
                    const toppings_choice = document.querySelector(".toppings");
                    toppings_choice.style.display = "flex";
                    document.querySelector(".body").style.backgroundColor = "#ffde59";
                                                            // TOPPINGS
                    const toppings = toppings_choice.querySelectorAll("li");
                    for(let topping of toppings){
                        topping.addEventListener('click',()=>{
                            toppings_choice.style.display = "none";

                            const end_wait = document.createElement("div");

                            end_wait.style.display = "flex";
                            end_wait.innerHTML = ` Wait Just A Moment`;
                            end_wait.setAttribute('id',"end_Wait");
                            setInterval(()=>{
                                end_wait.style.color = chng();
                            },100)
                            document.getElementById("displayer").append(end_wait);

                            setTimeout(()=>{
                                end_wait.style.display = 'none';
                                                // CHOICES FOR ICE CREAM 
                                const images_sprinkles = [
                                    straw_stick_sprinkle = { 
                                        name : "Strawberry",
                                        bg_color : "#ff64c4", 
                                        src_stick : "./images/Strawberry/straw_stick_sprinkles.jpg",
                                        src_cone : "./images/Strawberry/straw_cone_sprinkles.jpg",
                                        src_cup : "./images/Strawberry/straw_cup_sprinkles.jpg"
                                    },
                                    grape_stick_sprinkle = {
                                        name : "Grapes",
                                        bg_color : "#cb6ce6", 
                                        src_stick : "./images/Grapes/grape_stick_sprinkles.jpg",
                                        src_cone : "./images/Grapes/grape_cone_sprinkles.jpg",
                                        src_cup : "./images/Grapes/grape_cup_sprinkles.jpg"
                                    },
                                    banana_stick_sprinkle = {
                                        name : "Banana",
                                        bg_color : "#ffde59", 
                                        src_stick : "./images/Banana/banana_stick_sprinkles.jpg",
                                        src_cone : "./images/Banana/banana_cone_sprinkles.jpg",
                                        src_cup : "./images/Banana/banana_cup_sprinkles.jpg"
                                    },
                                    blueberry_stick_sprinkle = { 
                                        name : "Blueberry",
                                        bg_color : "#38b6ff", 
                                        src_stick : "./images/Blueberry/blueberry_stick_sprinkles.jpg", 
                                        src_cone : "./images/Blueberry/blueberry_cone_sprinkles.jpg", 
                                        src_cup : "./images/Blueberry/blueberry_cup_sprinkles.jpg"
                                    }
                                ]
            
                                const images_choco = [
                                    straw_stick_choco = { 
                                        name : "Strawberry",
                                        bg_color : "#ff64c4", 
                                        src_stick : "./images/Strawberry/straw_stick_choco.jpg",
                                        src_cone : "./images/Strawberry/straw_cone_choco.jpg",
                                        src_cup : "./images/Strawberry/straw_cup_choco.jpg"
                                    },
                                    grape_stick_choco = {
                                        name : "Grapes",
                                        bg_color : "#cb6ce6", 
                                        src_stick : "./images/Grapes/grape_stick_choco.jpg",
                                        src_cone : "./images/Grapes/grape_cone_choco.jpg",
                                        src_cup : "./images/Grapes/grape_cup_choco.jpg"
                                    },
                                    banana_stick_choco = {
                                        name: "Banana",
                                        bg_color : "#ffde59", 
                                        src_stick : "./images/Banana/banana_stick_choco.jpg",
                                        src_cone : "./images/Banana/banana_cone_choco.jpg",
                                        src_cup : "./images/Banana/banana_cup_choco.jpg"
                                    },
                                    blueberry_stick_choco = { 
                                        name : "Blueberry",
                                        bg_color : "#38b6ff", 
                                        src_stick : "./images/Blueberry/blueberry_stick_choco.jpg", 
                                        src_cone : "./images/Blueberry/blueberry_cone_choco.jpg", 
                                        src_cup : "./images/Blueberry/blueberry_cup_choco.jpg"
                                    }
                                ]
            
            
                                const holder_name = holder.querySelector('p').innerText;

                                const end_result = document.createElement("div");
                                end_result.style.display = "flex";

                                const end_result_img = document.createElement("img");

                                end_result_img.setAttribute('id',"end_img");
                                end_result.append(end_result_img);

                                document.getElementById("displayer").append(end_result);
                                if(topping.querySelector("p").innerText == "Chocolate"){
                                    for(let image of images_choco){
                                        if(image.name == choice.querySelector("p").innerText){
                                            document.querySelector(".body").style.backgroundColor = image.bg_color;
                                            document.querySelector(".body").style.backgroundImage = 'none';
                                        switch(holder_name){
                                            case "Cone":
                                                end_result_img.src = image.src_cone;
                                                break;
                                            
                                            case "Stick":
                                                end_result_img.src = image.src_stick;
                                                break;

                                            case "Cup":
                                                end_result_img.src = image.src_cup;
                                                break;

                                            default :
                                            console.log("something is wrong");
                                        }
                                        }
                                    }
                                }
                                else if(topping.querySelector("p").innerText == "Sprinkles"){
                                    for(let image of images_sprinkles){
                                        if(image.name == choice.querySelector("p").innerText){
                                            document.querySelector(".body").style.backgroundColor = image.bg_color;
                                            document.querySelector(".body").style.backgroundImage = 'none';
                                        switch(holder_name){
                                            case "Cone":
                                                end_result_img.src = image.src_cone;
                                                break;
                                            
                                            case "Stick":
                                                end_result_img.src = image.src_stick;
                                                break;

                                            case "Cup":
                                                end_result_img.src = image.src_cup;
                                                break;

                                            default :
                                            console.log("something is wrong");
                                        }
                                        }
                                    }
                                }
                                else{
                                    console.log("Something is wrong");
                                }

                                if(screen.width <=320){
                                    end_result.style.width = "80dvw";
                                    end_result.style.height = "70dvh";

                                    end_result_img.style.height = "inherit";
                                    end_result_img.style.width = "inherit";
                                }
                            },3000);
                        })
                    }
                    
                },5000)
                    })
                }
            },5000)
            })
        } 
    });

                                             // PERMISSION REPEATER
    document.getElementById("no").addEventListener('click',()=>{
        asker.style.display = 'none';

        setTimeout(()=>{
            asker.style.display = 'flex';
        },1000)
    })