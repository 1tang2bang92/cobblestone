import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const HeadList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContentCard = styled.div`
  disply: flex;
  flex-direction: column;
`;

const SiteName = styled.h1`
  margin-block-end: 0.25rem;
  text-align: center;
`;

const IssueFileteringContainer = styled.div`
  display: flex;
  flex-direction: row;
  maring: 0px auto;
  justify-content: center;
  gap: 5px;
`;

const QuicToolBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: auto;
`

const ButtonWarp = styled.div`
  margin: auto 0px;
`
const HideArea = styled.div`
  visibility: hidden;
`

/**
 * 페이지 상세기능요구서
 *
 * 1. 로그인
 *  1-1. 로그인후 mypage 이동
 * 2. 검색
 * 3. 개인, 그룹, 뭐시기 탭  굳이 메인에서 개인이랑 그룹은 안나와도 될듯?
 * 4. hot issue
 * 5. filter trend
 * 6.
 */

const IndexPage: React.FC = () => {
  return (
    <>
      <HeadList>
          <HideArea>
            { "1" ? 
                /* TODO
                    로그인기능 만든후 버튼 변경
                */
                <ButtonWarp> <Button variant="text" href="/sign-in">Login</Button> </ButtonWarp>
              : <ButtonWarp> <Button variant="text" href="/sign-in">Login</Button> </ButtonWarp>
            }
          </HideArea>
        <SiteName> CobbleStone </SiteName>
        <QuicToolBar>
          { "1" ? 
              /* TODO
                  로그인기능 만든후 버튼 변경
              */
              <ButtonWarp> <Button variant="text" href="/sign-in">Login</Button> </ButtonWarp>
            : <ButtonWarp> <Button variant="text" href="/sign-in">Login</Button> </ButtonWarp>
          }
        </QuicToolBar>
      </HeadList>
      <IssueFileteringContainer>
        <p> hello world </p>
        <p> hello world </p>
        <p> hello world </p>
        <p> hello world </p>
      </IssueFileteringContainer>
      <ContentContainer>
        <ContentCard>card</ContentCard>
      </ContentContainer>
    </>
  );
};

export default IndexPage;
