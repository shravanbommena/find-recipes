import React, { useState } from "react";
// import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Header from "../Header";
import RecipeCard from "../RecipeCard";
import { Typography } from "@mui/material";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const normalResult = [
  {
    id: 632485,
    title: "Apple Cake",
    image: "https://img.spoonacular.com/recipes/632485-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 632522,
    title: "Apple Crumble",
    image: "https://img.spoonacular.com/recipes/632522-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 632573,
    title: "Apple Pie Bars",
    image: "https://img.spoonacular.com/recipes/632573-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 632527,
    title: "Apple Cupcakes",
    image: "https://img.spoonacular.com/recipes/632527-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 632543,
    title: "Apple Footballs",
    image: "https://img.spoonacular.com/recipes/632543-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 632603,
    title: "Apple Tarte Tatin",
    image: "https://img.spoonacular.com/recipes/632603-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 632481,
    title: "Apple Brown Betty",
    image: "https://img.spoonacular.com/recipes/632481-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 632575,
    title: "Apple Pie Smoothie",
    image: "https://img.spoonacular.com/recipes/632575-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 632577,
    title: "Apple Pie Pancakes",
    image: "https://img.spoonacular.com/recipes/632577-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 632598,
    title: "Apple spinach soup",
    image: "https://img.spoonacular.com/recipes/632598-312x231.jpg",
    imageType: "jpg",
  },
];

function Home() {
  const [recipeList, setRecipeList] = useState([...normalResult]);

  //   useEffect(() => {
  //     const getRecipiesList = async () => {
  //       const options = {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-api-key": "a498c63d428540509db0547e95a1105b",
  //           // 'Content-Type': 'application/x-www-form-urlencoded',
  //         },
  //       };
  //       const response = await fetch(
  //         `https://api.spoonacular.com/recipes/complexSearch?query=apple`,
  //         options
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       return data;
  //     };
  //     const data = getRecipiesList();
  //     setRecipeList(data);
  //   }, []);

  const showValues = setRecipeList.length > 0;

  const renderProductItems = () => (
    <Box
      sx={{
        flexGrow: 1,
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          maxWidth: 1000,
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        {/* {recipeList.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))} */}
        {recipeList.map((recipe, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <RecipeCard key={recipe.id} recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <div>
      <Header />
      <Typography variant="h3" mt="90px" align="center">
        Find Recipies
      </Typography>
      {showValues && renderProductItems()}
    </div>
  );
}

export default Home;
