import React, { useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../stylesheets/shoppingCartItems.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "react-bootstrap/Button";
const ShoppingCartItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3001/cartDetails")
      .then((response) => {
        console.log("response.data", response.data);
        dispatch({
          type: "UPDATE_CART_ITEMS",
          payload: response.data.shoppingCartDetails,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  const { shoppingItems = [], selectedItems = {} } = useSelector(
    (state) => state.shoppingCartItems
  );
  const onPlusClick = ({ id = "" }) => {
    const temp = [...selectedItems];
    const filterData = temp.filter(({ id: selectedId = "" }) => {
      return id == selectedId;
    });
    console.log("filterData", filterData);
    if (filterData.length == 0) {
      temp.push({
        id,
        count: 1,
      });
      dispatch({
        type: "UPDATE_SELECTED_ITEMS",
        payload: temp,
      });
    } else {
      let { count = "" } = filterData?.[0] || {};
      const updatedArray = selectedItems.map((eachItem) => {
        const { id: selectedId = "", count: selectedCount = "" } = eachItem;
        if (id == selectedId) {
          return {
            id,
            count: selectedCount + 1,
          };
        }
        return eachItem;
      });
      console.log("updatedArray", updatedArray);
      dispatch({
        type: "UPDATE_SELECTED_ITEMS",
        payload: updatedArray,
      });
    }
  };

  const getCount = ({ id = "" }) => {
    const filterData = selectedItems.filter(
      ({ id: selectedId = "", count = "" }) => {
        return id == selectedId;
      }
    );
    console.log("abcde", filterData);
  };
  console.log("selectedItems", selectedItems);
  return (
    <div className="shoppingCartStyle">
      <Container>
        <div className="cartStyle">
          <h4>SHOPPING CART ITEMS:</h4>
          <h4>CheckOut {<ShoppingCartIcon />}</h4>
        </div>

        <Row xs={1} md={3} className="g-4">
          {shoppingItems.map((eachItem, idx) => {
            const {
              id = "",
              title = "",
              price = "",
              description = "",
              category = "",
              image = "",
              rating: { rate = "", count = "" } = {},
            } = eachItem;
            return (
              <Col key={idx}>
                <Card className="cartCardStyle">
                  <Card.Img
                    className="cardImgStyle"
                    variant="top"
                    src={image}
                    alt={"image"}
                  />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                      Price:
                      <span style={{ color: "rgb(92, 17, 122)" }}>{price}</span>
                    </Card.Text>
                    <Card.Text>
                      Ratings:{" "}
                      <span style={{ color: "rgb(92, 17, 122)" }}>{rate}</span>{" "}
                      <span style={{ fontSize: "12px" }}>({count})</span>
                    </Card.Text>
                    <div className="symbolsStyle">
                      <Button>-</Button>
                      <p>{getCount(eachItem.id)}0</p>
                      <Button
                        onClick={() => {
                          onPlusClick(eachItem);
                        }}
                      >
                        +
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ShoppingCartItems;
