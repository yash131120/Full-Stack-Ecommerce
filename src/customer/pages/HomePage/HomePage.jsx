import React from "react";
import MainCrosel from "../../components/HomeCarosel/MainCrosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCrosel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;


// exports.index = asyncHandler(async (req, res, next) => {
//   // Get details of books, book instances, authors and genre counts (in parallel)
//   const [
//     mens_kuurta,
//     mens_shoes,
//     mens_shirt,
//     womens_saree,
//     womens_dress,
//   ] = await Promise.all([
//     mens_kuurt.countDocuments({}).exec(),
//     mens_shoes.countDocuments({}).exec(),
//     mens_shirt.countDocuments({ status: "Available" }).exec(),
//     womens_saree.countDocuments({}).exec(),
//     womens_dress.countDocuments({}).exec(),
//   ]);

//   res.render("index", {
//     title: "select the items",
//     book_count: numBooks,
//     book_instance_count: numBookInstances,
//     book_instance_available_count: numAvailableBookInstances,
//     author_count: numAuthors,
//     genre_count: numGenres,
//   });
// });
