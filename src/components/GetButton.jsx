import axios from "axios";

function GetButton(props) {
  return (
    <>
      <button className="get-button"
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {
              let copy = [...props.shoes, ...result.data];
              props.setShoes(copy);
            })
            .catch(() => {
              console.log("실패함");
            });
        }}
      >
        추가
      </button>
    </>
  );
}
 export default GetButton;