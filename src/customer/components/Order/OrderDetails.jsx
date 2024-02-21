import React from "react";
import AdressCard from "../AdressCard/AdressCard";
import OrderTraker from "./OrderTraker";
import { Grid, Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7 ">Delivery Address</h1>
        <AdressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim2.flixcart.com/image/832/832/kxhvf680/ethnic-set/3/l/j/3xl-598-tissu-original-imag9xmhj6bmqxhh.jpeg?q=70&crop=true"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold ">
                    <span>Color : pink</span> <span>Size : M</span>
                  </p>
                  <p>Seller : linaria</p>
                  <p>₹1,195</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim2.flixcart.com/image/832/832/kxhvf680/ethnic-set/3/l/j/3xl-598-tissu-original-imag9xmhj6bmqxhh.jpeg?q=70&crop=true"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold ">
                  <span>Color : pink</span> <span>Size : M</span>
                </p>
                <p>Seller : linaria</p>
                <p>₹1,195</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetails;
