import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import Tabs from "../components/Tabs";
import { useDispatch } from "react-redux";
import { addItem } from "../store/store";
import { useLike } from "../hooks/like";
function Detail(props) {
  let { id } = useParams();
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(5);
  let [like, addLike] = useLike();
  let dispatch = useDispatch();

  useEffect(() => {
    if (count === 0) {
      setAlert(false); // 카운트가 0이 되면 sale-box 숨김
      return;
    }
    let a = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(a);
  }, [count]);
  return (
    <>
      <Container className="product-detail">
        <Row>
          <Col md={6}>
            <img
              src={props.shoes[id].img}
              alt={props.shoes[id].title}
              width="100%"
            />
          </Col>
          <Col md={6}>
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <Button
              onClick={() => {
                dispatch(
                  addItem({ id: id, name: props.shoes[id].title, count: 1 })
                );
                console.log("구매완");
              }}
              variant="outline-primary"
            >
              장바구니 담기
            </Button>

            <Button variant="outline-danger" onClick={addLike} style={{marginLeft : "10px"}}>
              ♥ {like}
            </Button>
            {alert && (
              <div className="sale-box">{count}초 이내 구매 시 할인</div>
            )}
          </Col>
        </Row>
      </Container>
      <Tabs />
    </>
  );
}

export default Detail;
