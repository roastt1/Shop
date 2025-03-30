import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

function Tabs() {
  let [tab, setTab] = useState("info");
  let [fade, setFade] = useState("");

  useEffect(() => {
    setFade("");
    const a = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(a);
    };
  }, [tab]);
  return (
    <>
      <div className="tabs-main">
        <Nav
          variant="tabs"
          activeKey={tab}
          onSelect={(selectedKey) => setTab(selectedKey)}
        >
          <Nav.Item>
            <Nav.Link eventKey="info">정보</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="review">후기</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="inquiry">문의</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className={`start ${fade}`}>
          {tab === "info" && (
            <div>
              <h3>상품 정보</h3>
              <p>
                이 제품은 최신 기술이 적용된 고품질 상품으로, 사용자 편의성을
                극대화한 것이 특징입니다.
              </p>
              <ul>
                <li>재질: 프리미엄 알루미늄</li>
                <li>색상: 블랙, 화이트, 실버</li>
                <li>배터리 수명: 최대 20시간</li>
                <li>보증 기간: 1년</li>
              </ul>
            </div>
          )}

          {tab === "review" && (
            <div>
              <h3>사용자 후기</h3>
              <p>
                <strong>김철수</strong>: "정말 만족스러운 제품이에요! 디자인도
                깔끔하고 성능도 훌륭합니다."
              </p>
              <p>
                <strong>이영희</strong>: "배터리가 오래가서 너무 좋아요. 하루
                종일 사용해도 문제없어요!"
              </p>
              <p>
                <strong>박민준</strong>: "배송도 빠르고, 기대 이상으로
                만족스러웠습니다. 강추합니다!"
              </p>
            </div>
          )}

          {tab === "inquiry" && (
            <div>
              <h3>자주 묻는 질문</h3>
              <p>
                <strong>Q: 이 제품은 방수가 되나요?</strong>
              </p>
              <p>
                A: 네, 생활 방수 기능이 있어 비 오는 날에도 사용 가능합니다.
              </p>
              <p>
                <strong>Q: AS는 어떻게 받을 수 있나요?</strong>
              </p>
              <p>
                A: 공식 홈페이지에서 AS 신청을 하시면, 가까운 서비스 센터에서
                수리 가능합니다.
              </p>
              <p>
                <strong>Q: 배송은 얼마나 걸리나요?</strong>
              </p>
              <p>A: 평균적으로 2~3일 내에 받아보실 수 있습니다.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Tabs;
