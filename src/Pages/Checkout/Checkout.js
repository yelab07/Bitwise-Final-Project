import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useContext } from "react";

// import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
// import NavBar from "../../Components/NavBar";
// import { mobile } from "../responsive";
import { useHistory } from "react-router";
import CartContext from "../../Context/ThemeContext";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

// const ProductColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;

// const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;
const QtyInput = styled.input`
  width: 35px;
  text-align:center;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const history = useHistory();

  const modifyCount = (e, index) => {
    const cartCopy = [...cart];
    cartCopy[index].count = e.target.value;
    setCart(cartCopy);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.price * item.count));
    return total;
  };

  return (
    <Container>
      <div>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton
              className="checkoutButton"
              onClick={() => {
                setCart([]);
                history.push("/");
              }}
            >
              CONTINUE SHOPPING
            </TopButton>
            <TopButton
              type="filled"
              className="checkoutButton"
              onClick={() => {
                setCart([]);
                history.push("/");
              }}
            >
              CHECKOUT NOW
            </TopButton>
          </Top>

          <Bottom>
            {cart.map((item, index) => (
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src={item.image} alt={item.title} />
                    <Details>
                      <ProductName>
                        {index + 1}.) {item.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {item.id}
                      </ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{item.count}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>
                      <h5>
                        ${item.price} x
                        <QtyInput
                          onChange={(e) => {
                            modifyCount(e, index);
                          }}
                          value={item.count}
                        ></QtyInput>
                        = ${item.price * item.count}
                      </h5>
                    </ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </Info>
            ))}
          </Bottom>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

            <SummaryItem type="total">
              <SummaryItemText>Total : ${calculateTotal()}</SummaryItemText>
              <SummaryItemPrice></SummaryItemPrice>
            </SummaryItem>
            <Button
              className="checkoutButton"
              onClick={() => {
                setCart([]);
                history.push("/");
              }}
            >
              <h1> Checkout</h1>
            </Button>
          </Summary>
        </Wrapper>
      </div>
    </Container>
  );
};

export default Checkout;
