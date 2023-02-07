import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const AddRecipeForm = () => {
  const [ingredientCount, setIngredientCount] = useState(1);
  let ingredientFields;

  const addIngredientHandler = (e) => {
    e.preventDefault();
    setIngredientCount((prevState) => prevState + 1);
  };

  for (let index = 0; index < ingredientCount; index++) {
    ingredientFields += (
      <label className="">
        <input
          type="text"
          name="ingredients"
          placeholder="Zutat eingeben..."
          className="border rounded-lg p-1 mr-2"
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Menge eingeben..."
          className="border rounded-lg p-1 m-2"
        />

        <select className="p-1 ml-2 border rounded-lg">
          <option value="gr">gr</option>
          <option value="kg">kg</option>
          <option value="cup">cup</option>
          <option value="tsp">tsp</option>
        </select>
      </label>
    );
  }

  return (
    <>
      <div className="title flex justify-center">
        <h1 className="font-bold text-center mb-6 pb-2 text-xl border-b-2 xl:w-[50%]">
          Neues Rezept anlegen
        </h1>
      </div>
      <div className="">
        <form className="felx-auto content-center flex-col">
          <label className="flex m-2 p-2 flex-col">
            <p className="flex font-bold mb-2">Rezepttitel:</p>
            <input type="text" name="name" className="border rounded-lg p-1" />
          </label>

          <label className="flex m-2 p-2 flex-col">
            <p className="flex font-bold mb-2">Zubereitungszeit in Minuten:</p>
            <input
              type="number"
              name="preptime"
              className="border rounded-lg p-1"
            />
          </label>

          <label className="flex m-2 p-2 flex-col">
            <p className="flex font-bold mb-2">Koch/Backzeit in Minuten:</p>
            <input
              type="number"
              name="preptime"
              className="border rounded-lg p-1"
            />
          </label>

          <label className="flex m-2 p-2 flex-col">
            <p className="flex font-bold mb-2">Anforderung:</p>

            <select className="p-1 ml-2 border rounded-lg">
              <option value="light">leicht</option>
              <option value="medium">mittel</option>
              <option value="hard">schwer</option>
            </select>
          </label>

          <label className="flex m-2 p-2 flex-col">
            <p className="flex font-bold mb-2">Ernährung:</p>

            <select className="p-1 ml-2 border rounded-lg">
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarisch</option>
              <option value="meat">mit Fleisch</option>
            </select>
          </label>

          <label className="flex m-2 p-2 flex-col">
            <p className="flex font-bold mb-2">Tags:</p>
            <input type="text" name="name" className="border rounded-lg p-1" />
          </label>

          <label className="flex m-2 p-2 flex-col">
            <p className="flex font-bold mb-2">Portionen:</p>
            <input
              type="number"
              name="servings"
              className="border rounded-lg p-1"
            />
          </label>

          <label className="flex m-2 p-2 flex-col">
            <p className="flex font-bold mb-2">Kalorien pro Mahlzeit:</p>
            <input
              type="number"
              name="calories"
              className="border rounded-lg p-1"
            />
          </label>

          <label className="flex m-2 p-2 flex-col">
            <p className="flex font-bold mb-2">Zutaten:</p>

            {/* Hier wird die Anzahl der Zutatenfelder generiert /> */}

            {Array.from(Array(ingredientCount)).map((count, index) => {
              return (
                <label key={count} className="">
                  <input
                    type="text"
                    name="ingredients"
                    placeholder="Zutat eingeben..."
                    className="border rounded-lg p-1 mr-2"
                  />
                  <input
                    type="text"
                    name="ingredients"
                    placeholder="Menge eingeben..."
                    className="border rounded-lg p-1 m-2"
                  />

                  <select className="p-1 sm:ml-2 border rounded-lg">
                    <option value="gr">gr</option>
                    <option value="kg">kg</option>
                    <option value="cup">cup</option>
                    <option value="tsp">tsp</option>
                  </select>
                </label>
              );
            })}

            <button
              className="flex justify-center p-2 mt-2 border rounded-full text-[#354F52] hover:bg-[#84A98C]"
              onClick={addIngredientHandler}
            >
              <IoIosAddCircleOutline />
            </button>
          </label>

          <label className="flex m-2 p-2 flex-col">
            <p className="flex font-bold mb-2">Zubereitung:</p>
            <textarea
              id="preparation"
              rows="8"
              class="block p-2.5 w-full text-m text-gray-900 
                            bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
                            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500"
              placeholder="Zubereitung hinzufügen..."
            ></textarea>
          </label>
          <label className="flex m-2 p-2 flex-col">
            <p className="flex font-bold mb-2">Autor:</p>
            <input
              type="text"
              name="author"
              className="border rounded-lg p-1"
            />
          </label>
          <label className="flex m-2 p-2 flex-col">
            <p className="flex font-bold mb-2">Quelle:</p>
            <input
              type="text"
              name="sourcename"
              className="border rounded-lg p-1"
              placeholder="Name der Quelle"
            />
            <input
              type="text"
              name="sourceurl"
              className="border rounded-lg mt-2 p-1"
              placeholder="Url"
            />
          </label>
        </form>
      </div>
      <div className="footer">
        <br />
        <button
          className="m-2 p-2 font-bold bg-red-500 hover:bg-[#f37e7e] rounded-lg"
          onClick={() => closeModal(false)}
        >
          Abrechen
        </button>
        <button className="m-2 p-2 font-bold bg-[#84A98C] hover:bg-[#b2e2bc] rounded-lg">
          Erstellen
        </button>
      </div>
    </>
  );
};

export default AddRecipeForm;
