import React from "react";
import "./App.css";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import SvgIcon from "@mui/material/SvgIcon";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function SearchIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </SvgIcon>
  );
}
function CartIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
    </SvgIcon>
  );
}
function UserIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
    </SvgIcon>
  );
}

const Countries = [
  {
    value: "India",
    label: "India",
  },
  {
    value: "Europe",
    label: "Europe",
  },
  {
    value: "Canada",
    label: "Canada",
  },
  {
    value: "Australia",
    label: "Australia",
  },
];

export default function SkellyTask() {
  const [Country, setCountry] = React.useState("EUR");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="container">
      <div className="Navbar">
        <div className="Navbar-logo">
          <Avatar>A</Avatar>
          <span>LOGO</span>
        </div>
        <div className="Navbar-mid">
          <Button>Men</Button>
          <Button>Women</Button>
          <Button>Kids</Button>
        </div>
        <div className="Navbar-end">
          <Button>
            <SearchIcon />
          </Button>
          <Button>
            <CartIcon sx={{ fontSize: 30 }} />
          </Button>
          <Button>
            <UserIcon sx={{ fontSize: 30 }} />
          </Button>
        </div>
      </div>
      <div className="task-body">
        <div className="login-sec">
          <h2 className="login-sec-heading">Shipping and Payment</h2>
          <div className="login-btns">
            <Button>login</Button>
            <Button>sign up</Button>
          </div>
          <h3 className="login-sec-heading">Shipping Info</h3>
          <div className="ship-text">
            <TextField
              className="text-boxes"
              label="Email"
              variant="outlined"
              sx={{
                m: 2,
              }}
            />
            <TextField
              id="text-boxes"
              label="Address"
              variant="outlined"
              sx={{
                m: 2,
              }}
            />
            <TextField
              id="text-boxes"
              label="First Name"
              variant="outlined"
              sx={{
                m: 2,
              }}
            />
            <TextField
              id="text-boxes"
              label="City"
              variant="outlined"
              sx={{
                m: 2,
              }}
            />
            <TextField
              id="text-boxes"
              label="Last Name"
              variant="outlined"
              sx={{
                m: 2,
              }}
            />
            <TextField
              id="text-boxes"
              label="Postal Code/ZIP"
              variant="outlined"
              sx={{
                m: 2,
              }}
            />
            <TextField
              id="text-boxes"
              label="Phone Number"
              variant="outlined"
              sx={{
                m: 2,
              }}
            />
            <TextField
              id="text-boxes"
              select
              label="Select"
              value={Country}
              onChange={handleChange}
              helperText="Please select your country"
              variant="outlined"
              sx={{
                m: 2,
              }}
            >
              {Countries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div className="payment-sec">
          <div className="payment-sec-one">
            <h2>Payment Method</h2>
            <div className="payment-btns">
              <Button>
                <img
                  src={require("../src/pics/paypal.png")}
                  alt="visa"
                  className="btn-img"
                />
              </Button>
              <Button>
                <img
                  src={require("../src/pics/visa.png")}
                  alt="visa"
                  className="btn-img"
                />
              </Button>
              <Button>
                <img
                  src={require("../src/pics/credit-card.png")}
                  alt="visa"
                  className="btn-img"
                />
              </Button>
              <Button>
                <img
                  src={require("../src/pics/credit-card.png")}
                  alt="visa"
                  className="btn-img"
                />
              </Button>
              <Button>
                <img
                  src={require("../src/pics/discover.png")}
                  alt="visa"
                  className="btn-img"
                />
              </Button>
              <Button>
                <img
                  src={require("../src/pics/visa.png")}
                  alt="visa"
                  className="btn-img"
                />
              </Button>
            </div>
          </div>
          <div className="payment-sec-two">
            <h2>Delivery Method</h2>
            <div className="delivery-btns">
              <Button>
                <img
                  src={require("../src/pics/fedex.png")}
                  alt="visa"
                  className="btn-img"
                />
                <p className="delivery-text">20rs</p>
              </Button>
              <Button>
                <img
                  src={require("../src/pics/fedex.png")}
                  alt="visa"
                  className="btn-img"
                />
                <p className="delivery-text">20rs</p>
              </Button>
              <Button>
                <img
                  src={require("../src/pics/fedex.png")}
                  alt="visa"
                  className="btn-img"
                />
                <p className="delivery-text">20rs</p>
              </Button>
              <Button>
                <img
                  src={require("../src/pics/fedex.png")}
                  alt="visa"
                  className="btn-img "
                />
                <p className="delivery-text">20rs</p>
              </Button>
            </div>
          </div>
        </div>
        <div className="cart-sec">
          <div className="cart-icon">
            <Button className="cart-icon-one">
              <img src={require("../src/pics/shopping-cart.png")} alt="pic" />
            </Button>
            <Button className="cart-icon-one">
              <img src={require("../src/pics/truck.png")} alt="pic" />
            </Button>
          </div>
          <div className="cart-info">
            <h3>Your Cart</h3>
            <div className="cart-info-one">
              <div className="cart-info-icon">
                <Avatar>T</Avatar>
              </div>
              <div className="cart-info-text">
                <p>T-Shirt</p>
                <p>Summer vibes</p>
                <p>#123456</p>
              </div>
              <div className="cart-info-price">
                <p>600 Rs</p>
              </div>
            </div>
            <div className="cart-info-one">
              <div className="cart-info-icon">
                <Avatar>J</Avatar>
              </div>
              <div className="cart-info-text">
                <p>Jeans</p>
                <p>Monsoon here</p>
                <p>#015781</p>
              </div>
              <div className="cart-info-price">
                <p>900 Rs</p>
              </div>
            </div>
          </div>
          <div className="cart-last">
            <div className="cart-last-icon">
              <img src={require("../src/pics/truck.png")} alt="pic" />
            </div>
            <div className="cart-last-text">
              <p>You are 600 Rs away from free shipping.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="task-footer">
        <div className="back-btn">
          <Button>
            <img src={require("../src/pics/back-button.png")} alt="pic" />
          </Button>
        </div>
        <div className="shop-btn">
          <Button>Continue Shopping</Button>
          <Button>Proceed to Payment</Button>
        </div>
      </div>
    </div>
  );
}
