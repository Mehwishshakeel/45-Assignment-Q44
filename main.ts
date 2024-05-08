// Define a function with rest parameter that accept items arguments that representing our sandwich
function make_sandwich(... items:string[]){
   console.log("\nMaking a sandwich with the following items\n");

   items.forEach(singleItem =>console.log(singleItem));

   console.log("\nNow enjoy the sandwitch\n");
}
// Call the function three times using three  different arguments
make_sandwich("Chicken","Cheese","Mayo","Ketchup");
make_sandwich("Chicken","onion","Tomato");
make_sandwich("Bread","Egg");
