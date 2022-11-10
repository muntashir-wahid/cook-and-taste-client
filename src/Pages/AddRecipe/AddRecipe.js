import React from "react";
import { useNavigate } from "react-router-dom";
import useChangeTitle from "../../hooks/useChangeTitle";

const AddRecipe = () => {
  useChangeTitle("Add Recipe");
  const navigate = useNavigate();

  const addRecipeFormSubmitHandler = (event) => {
    event.preventDefault();
    const addRecipeForm = event.target;
    const name = addRecipeForm.name.value;
    const picture = addRecipeForm.picture.value;
    const price = +addRecipeForm.price.value;
    const ratings = +addRecipeForm.price.value;
    const description = addRecipeForm.description.value;
    const ingredients = addRecipeForm.ingredients.value.split("&");
    const directions = addRecipeForm.directions.value.split("&");

    const newRecipe = {
      name,
      price,
      picture,
      ratings,
      description,
      ingredients,
      directions,
    };

    fetch("https://cook-and-taste-server.vercel.app/api/v1/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
      });
  };

  return (
    <div className="min-h-screen px-6 w-full">
      <h2 className="text-center text-4xl mt-10 font-semibold">
        Add a new Recipe
      </h2>
      <div className="max-w-lg  mx-auto p-6 my-6 shadow-2xl rounded-xl">
        <form onSubmit={addRecipeFormSubmitHandler} className="p-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Recipe name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Photo URL</span>
            </label>
            <input
              type="text"
              name="picture"
              placeholder="Recipe photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="number"
              name="ratings"
              placeholder="Default Ratings"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe description</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Description"
              name="description"
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe ingredients</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="ex : ing1&ing2&ing3..."
              name="ingredients"
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe directions</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-28"
              placeholder="ex : step1&step2&step3..."
              name="directions"
              required
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
