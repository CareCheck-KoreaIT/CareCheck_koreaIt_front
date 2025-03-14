/**@jsxImportSource @emotion/react */
import * as s from "./style";
import MainHeader from "../../components/common/MainHeader/MainHeader";
import MainContainer from "../../components/common/MainContainer/MainContainer";

function MainRoute() {
  return (
    <div css={s.container}>
      <div css={s.header}>
        <MainHeader />
      </div>
      <div css={s.mainContent}>
        <MainContainer />
      </div>
    </div>
  );
}

export default MainRoute;
