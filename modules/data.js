import { apikey, endpoint } from "./settings.js";
export async function getRecipes() {
  let headersList = {
    Accept: "application/json",
    apikey: apikey,
  };

  let response = await fetch(endpoint, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}
//WET - Write Everything Twice
//DRY - Don't Repeat Yourself
//AHA - Avoid Hasty Abstractions

export async function createRecipe() {
  let headersList = {
    Accept: "application/json",
    apikey: apikey,
    Prefer: "return=representation",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name: "Sushi",
    description: "En ret fra Japan",
    ingredients: ["Suhsi", "Tang", "Soya"],
    serves: 1,
    allergens: ["Soya"],
    diet: "Vegetar",
    studentFriendly: false,
    origin: "Japan",
  });

  let response = await fetch(endpoint, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  console.log(data);
}