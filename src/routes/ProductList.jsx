import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function ProductList(props) {
  let navigate = useNavigate();
  return (
    <Container>
      <Row>
        {props.shoes.map((product) => (
          <Col sm={3} key={product.id} className="product-list" onClick={() => {navigate(`/detail/${product.id}`)}}>
            <img src={product.img} width="70%" height="63%" alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.content}</p>
            <p>{product.price.toLocaleString()}원</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
