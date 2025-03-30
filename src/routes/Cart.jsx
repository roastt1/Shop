import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "../store/store";

function Cart() {
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();//store.js로 요청보내주는 함수

  return (
    <div>
      <Table striped bordered hover responsive>

        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <Button onClick={()=> {
                    dispatch(increase(item.id));
                }} variant="primary">변경하기</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
