//1 Create an object that contains a first name and a last name.
let = person = {
    firstName: "Kamal",
    lastName: "Hassan"
  };
  
  console.log(person);

 //2 Create an object that contains an array  
 let =  myObject = {
    arrayProperty: ["Kamal", "Hannan", "Drake", "Marina", "Braedon"]
  };
  
  console.log(myObject);

        //3 Use this object to console.log the first name, email, and phone number.

        let userObject = {
            first_name:"Jurimo",
            last_name:"Datatag",
            email:"jD@gmail.com",
            phone:"905-905-9055"
        }
        
          console.log("First Name:", userObject.first_name);
          console.log("Email:", userObject.email);
          console.log("Phone Number:", userObject.phone);
          console.log(" ")
//4 do the same as the last question but for each person in this array

        let users = [
            {
                first_name:"Jurimo",
                last_name:"Datatag",
                email:"jD@gmail.com",
                phone:"905-905-9055"
            },
            {
                first_name:"Bingle",
                last_name:"Dorf",
                email:"bingD@gmail.com",
                phone:"995-558-4101"
            },
            {
                first_name:"Sarsha",
                last_name:"Warsha",
                email:"sarshwarsh@gmail.com",
                phone:"787-747-5754"
            }
        ]

        for (let user of users) {
            console.log("First Name:", user.first_name);
            console.log("Email:", user.email);
            console.log("Phone Number:", user.phone);
            console.log(" ");
        }


          //5 Find a recipe online and create an object filled with all necessary info. Ingredients, description, name, picture, steps, allergy warnings

        let = recipe = {
            name: "Delicious Frozen Pizza",
            picture: "https://v7a4q7y5.rocketcdn.me/wp-content/uploads/2021/01/air-fryer-frozen-pizza5-735x1103.jpg",
            description: "Classic Quick and easy Frozen pizza.",
            ingredients: [
              "1 pound pizza dough, at room temperature at least 1 hour",
              "1/2 to 1 cup sauce: tomato sauce or other spread",
              "2 to 3 cups other toppings: sautéed onions, sautéed mushrooms, pepperoni, cooked sausage, cooked bacon, diced peppers, leftover veggies, or any other favorite toppings",
              "1 to 2 cups shredded or sliced cheese (8 to 16 ounces), such as mozzarella, Monterey Jack, provolone, fontina, or any other favorite",
            ],
            steps: [
              "Preheat the oven to 450°F. Arrange a rack in the middle of the oven, place a baking stone or baking sheet on the rack, and heat to 450°F.",
              "Roll out the pizza rounds. Divide the pizza dough in half to make 2 individual pizzas, if desired. Place the ball of dough in the middle of a piece of parchment paper. ",
              "Par-bake the pizza rounds. Slide the pizza rounds on the parchment sheets onto the hot baking stone or baking sheet. Bake until the rounds are puffy and dry on the top, but still very pale, 3 to 5 minutes.",
              "Let the pizza rounds cool completely. Remove the parchment from beneath the pizza rounds and let them cool completely on a wire rack.",
              "Top the pizzas. When cool, top the rounds as you would if you were going to bake them right away: Spread some sauce on the pizzas, add toppings, and sprinkle cheese over the top. Note: Pizza rounds can also be frozen un-topped.",
              "Freeze the pizzas. Place the pizzas on a baking sheet and freeze, uncovered, until solid, about 3 hours.",
              "Wrap the pizzas in plastic wrap and aluminum foil. Once frozen, remove the pizzas from the freezer and wrap them first in plastic wrap. Write the pizza toppings on a piece of masking tape and stick the label to the plastic wrap. Then, wrap the pizzas in a layer of aluminum foil. The double layer protects the pizzas from drying out in the freezer.",
              "Freeze for pizzas for up to 3 months. The pizzas can be frozen for up to 3 months.",
              "Bake the frozen pizzas. When ready to bake the pizzas, heat the oven to 550°F (or the temperature at which you normally cook your pizzas). If you have a baking stone, place it in the oven as it heats; frozen pizzas can also be baked on the foil used to wrap them. Unwrap the pizzas, discard the plastic wrap, and slide into the oven. Bake until the crust is dark brown and the cheese in the center of the pizza is bubbly, 8 to 10 minutes. Let cool a few minutes, slice, and serve."
            ],
            allergyWarnings: [
              "casein",
              "tomato",
              "yeast",
            ]
          };
          
          console.log(recipe);
          
          
         //6 Choose some books and make an array of objects with the books info in each object. Title, Author, Description, Release Date, Genre
         let books = [
            {
              title: "Game of Thornes",
              author: "George R.R Martin",
              description: "Sweeping from a harsh land of cold to a summertime kingdom of epicurean plenty, A Game of Thrones tells a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens.",
              releaseDate: "August 1, 1996",
              genre: "Action-Fiction, Thriller, Suspence, Fantasy, Adventure, Medevial Fantasy"
            },
            {
                title: "Hunger Games",
                author: "Suzanne Collins",
                description: "The Games are a televised event in which the participants, called tributes, are forced to fight to the death in a dangerous public arena. The winning tribute and his or her home district are then rewarded with food, supplies, and riches.",
                releaseDate: "Septemeber 14, 2008",
                genre: "dystopian fiction, Thriller, Science fiction, Action, Apocalytic and post-apocalytic fiction"
              },
              {
                title: "The Vampire Diaries",
                author: "L.R. Smith and Aubrey Clark",
                description: "The lives, loves, dangers and disasters in the town, Mystic Falls, Virginia. Creatures of unspeakable horror lurk beneath this town as a teenage girl is suddenly torn between two vampire brothers. After centuries of quarreling, Stefan and Damon Salvatore return to their original town of Mystic Fall, Virginia.",
                releaseDate: "Septemeber  1991",
                genre: "Drama, Romance, Supernatural, Horror "
              },

            {
              title: "The Maze runner",
              author: "James Dashner",
              description: "The story is set in a distant future, where a group of teens are mysteriously teleported into a giant, stone maze. Not only has their memory been cleared, but they also have no indication as to why they have ended up in this position and what means they must take to escape.",
              releaseDate: "October 6, 2009",
              genre: "Mystery, Thriller, Science Fiction, Action"
            }
          ];
          
          console.log(books);
        
          
          
          
          

        //7 prompt the user to write the key they want to access, Then console.log the value of that key

        let promptMe = {
            hello:"Hello!",
            goodbye:"See ya later"
        }
          
        let userInput = prompt("Enter a key to access its value:");

        // Check if the entered key exists in the object
        if (promptMe.hasOwnProperty(userInput)) {
          let value = promptMe[userInput];
          console.log("Hello", value);
        } else {
          console.log("See ya later");
        }
          
        
          