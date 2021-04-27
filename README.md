# Typing GAME
## Test 순서
+ npm install
+ npm run build
+ npm test
+ npm start
## 과제 요구사항
+ webpack 환경구성
+ start script를 통해서 hot-loading 적용
    + npm start
+ build script를 구성하여 /public 폴더에 빌드한 html, js, css를 export
    + npm run build
+ 단위 테스트 적용
    + npm test
        + jest 사용하여 단위테스트 적용.
## 해결전략
### 주어진 단어가 표시되면 input에 단어를 정해진 시간 내에 입력하여 점수를 획득하는 어플리케이션 개발
+ 단어는 서버에 요청하여 받아 온다. https://my-json-server.typicode.com/kakaopay-fe/resources/words
    + fetch() 사용하여 서버 호출하여 단어 목록 조회
+ 페이지를 접속하면 게임 화면을 표시한다.
    + window load 시 게임화면 표시 되도록 event 및 라우터 개발 
+ 남은 시간 : 각 단어는 제한 시간이 존재하며, 단어별 남은 시간을 표시한다.
    + 각 단어 별 남은시간을 setTimer() 함수를 재귀함수로 사용하여 1초단위로 감소 시키며 남은시간이 0초가 되거나 정답을 맞춘 경우
    + 다음 단어와 남은시간을 표시한다.
    + 다음 단어가 없는 경우 결과 페이지로 이동한다.
+ 점수 : 총 문제 수를 점수로 하여 시간 만료 시 1점씩 삭감하는 형태로 한다.
    + 총 단어의 개수를 총 점수로 진행하며 남은시간이 0초가 되면 총점수를 -1 진행
+ 단어 표시 : 제시된 단어를 표시한다.
    + 서버에서 받아 온 단어 목록을 차례대로 표시 한다. 
+ 입력 : 단어를 입력할 수 있는 input box를 표시한다.
    + 메인 중앙에 input box 표시 
+ input box 에서 엔터키 입력 시 현재 입력한 텍스트와 주어진 문구와 비교하여 맞으면 다음 문제, 틀리면 input box를 clear한다.
+ 시작 : 게임을 시작할 수 있는 버튼을 표시한다.
+ 시작 버튼을 누르면 텍스트는 "초기화"로 변경 되며 click시 모든 게임이 초기화 되고 "시작" 텍스트로 변경된다.
    + 시작 버튼 클릭 시 style을 활용하여 시작버튼을 숨김처리하고 초기화 버튼을 보여지게 한다.
    + 반대의 경우 초기화 버튼 클륵 시 시작 버튼을 표시하고 초기화 버튼을 숨김 처리.
    + 시작 시 서버에서 받아온 단어 목록을 순차적으로 게임 화면에 표시 한다.
#   t y p i n g 
 
 #   t y p i n g G a m e 
 
 #   t y p i n g G A M E 
 
 #   t y p i n g G A M E 
 
 #   T y p i n g G A M E  
 #   T y p i n g G a m e  
 