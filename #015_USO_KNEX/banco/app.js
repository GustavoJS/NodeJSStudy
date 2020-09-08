const db = require("./database");
const knexDB = require("./database");


const dbGames = db('games');
/*
// INSERT
  let data = [
    {
      name: "Sonic Generation Part 2",
      price: 153.44
    },

    {
      name: "God of War",
      price: 75.62
    },

    {
      name: "Street Fighter VI",
      price: 136.38
    }
];
let query = db.insert(data).into('games').then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});

*/
// console.log(query.toQuery());

//****************************************************************************************************************** */

//SELECT 
/*
// db.select().table("games").then(data => {
db.select(["name", "price"]).table("games").then(data => {
  // console.log(data);

  data.forEach(dado  => {
    console.log(`${dado.name} = R$${dado.price}`);
  });

}).catch(err => {
  
  console.log(err);
})
*/

//****************************************************************************************************************** */

//NESTED QUERY
/*
db.insert({name: "Mass Effects", price: 43.68}).into("games").then(succes => {

  db.select(["name", "price"]).table("games").then(data => {
    // console.log(data);
  
    data.forEach(dado  => {
      console.log(`${dado.name} ===> R$${dado.price}`);
    });
  
  }).catch(err => {
    
    console.log(err);
  })

}).catch(err => {
  console.log(err);
});
*/

//****************************************************************************************************************** */

//WHERE
/*
db.where({name: "God of War"}).table("games").then(data => {
  console.log(JSON.stringify(data));
  console.log(typeof data);
  
}).catch(err => {
  console.log(err);
});
*/

/*
let queryGames = db.where({name: "God of War"}).table("games");
let queryGames2 = db.select(["name"]).where({name: "God of War"}).table("games");

console.log(queryGames.toQuery());
console.log(queryGames2.toQuery());


db.where("id", 3).table("games").then(data => {
  console.log(data);
})

db.whereIn("name", ['Super Smash Bros.','Call of Duty MW 2','Street Fighter VI']).table("games").then(success => {
  console.log(success);
});

db.whereNotIn("id", [2,5]).table("games").then(success => {
  console.log(success);
});


dbGames.where('name', 'like', '%Sonic%').orWhere("id","<",3).then(success => {
  console.log(success);
});

// dbGames.where('name', 'like', '%Sonic%').orWhere("id","<",3)
// select * from `games` where `name` like '%Sonic%' or `id` < 3

// dbGames.where('name', 'like','%of%').whereRaw('price > 100').then(success => {
//   console.log(success);
// });


// db.raw("SELECT   * FROM games").then(data => {
//   console.log(data);
  
// }).catch(error => {
  
//   console.log(error);
// })


*/

//****************************************************************************************************************** */
// DELETE 
/*
// dbGames.where({id: 5}).delete().then(success => {
//   console.log(success);
// }).catch( error => {
//   console.log(error);
// });


// dbGames.where('name', 'like','%of%').whereRaw('price > 100').delete().then(success => {
//   console.log(success);
// });
*/

//****************************************************************************************************************** */

// UPDATE

// dbGames.where({id: 5}).update({price: 245.33}).then(sucess => {
//   console.log(sucess);
// });


//****************************************************************************************************************** */

// UPDATE
/*
dbGames.orderBy('price', 'asc').then(success => {
  
  console.log(success);
}).catch(error => {

  console.log(error);
});

*/


//****************************************************************************************************************** */

//INSERTS ASSOCIADOS - Associated Insert

dbGames.insert({
    name_studio: 'Rockstar Game',
    id_game : 12
}).table('estudio').then(data => {
    console.log(data);
}).catch(err => {
   console.log(err);
 })

