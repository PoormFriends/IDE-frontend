# POORM_FRIENDS - 코딩테스트를 위한 WEB IDE
## [기간]
2023.12.01 ~ 2023.12.28

## [프로젝트 개요]
![preview](https://github.com/GoormFriends/IDE-frontend/assets/100774811/fc70da74-653e-45f7-93d7-d450b7d6ccc0)

저희 서비스는 알고리즘 문제 풀이에 최적화된 WebIDE 입니다.

알고리즘 문제를 풀고, 채팅을 통해 서로의 코드를 참고하여 풀이 방식을 공유할 수 있습니다.

자신만의 문제집(마이리스트)를 만들어, 편리하게 문제를 찾거나 저장할 수 있습니다.

### 🛠주요 기능

### 채팅

- 채팅 속 마크다운 형식 지원
- SNS 형식의 채팅 UI

### 문제집(마이리스트) 및 문제리스트

- 문제리스트, 마이페이지에서 확인, 수정, 삭제 가능
- 문제리스트 별 필터 기능 (정답 유무, 레벨 별)
- 문제리스트 내 검색 기능

### WEB IDE

- 컴파일 기능 (문제를 풀고 나면, 컴파일 에러, 오답, 정답 등 표시)
- 문제 정답일 경우, 콘페티로 표시

### 기타 기능

- 소셜 로그인 (kakao, github) 지원
- 문제 클릭 시 이동

### ⚙개발 환경 및 기술 스택

**OS**

- Window 10

**Backend - spring**

- JDK: 17
- Spring Boot: 3.2.0
- Gradle
- Spring Security
- Spring Data JPA
- Spring Boot Starter Oauth2 Client
- Json Web Token(jwt)
- Spring Data Redis

**Frontend**

- react
- axios
- react-query
- react-router-dom
- monaco-editor
- Material-UI
- tiptap
- stompjs

**CI/CD**

- Docker
- Nginx
- github actions

**IDE**

- IntelliJ
- VS Code

**Database**

- DBMS: MySQL
- Cache: Redis

### 🎨시스템 아키텍처 (참고사항)
![기술 아키텍쳐](https://github.com/GoormFriends/IDE-frontend/assets/100774811/690ee2fe-e3b4-42e2-a438-54b6edbc2e19)


### 🔀 ERD
![ERD](https://github.com/GoormFriends/IDE-frontend/assets/100774811/f775be13-1e44-4690-bdbf-5b990834fc5c)

### 💾프로젝트 파일 구조

- Backend

```bash
📦backend
 ┣ 📂src
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📂java
 ┃ ┃ ┃ ┗ 📂com.goorm.goormfriends
 ┃ ┃ ┃ │ ┣ 📂api
 ┃ ┃ ┃ │ ┃ ┣ 📂compiler
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📂core
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜IdeController.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜IdeRequest.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜IdeResponse.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┗ 📜WrapperResponse.java
 ┃ ┃ ┃ │ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜IdeCompiler.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜IdeCompilerService.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜IdeService.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜MemoryClassLoader.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┗ 📜MemoryJavaFileManager.java
 ┃ ┃ ┃ │ ┃ ┣ 📂controller
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜DirectoryController.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜ProblemController.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜UserController.java
 ┃ ┃ ┃ │ ┃ ┃ ┗ 📜WebSocketController.java
 ┃ ┃ ┃ │ ┃ ┣ 📂dto
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📂criteria
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┗ 📜ProblemSearchCriteria.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📂redis
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜RedisPublisher.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┗ 📜RedisSubscriber.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜ChatMessageRequest.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜CreateDirectoryRequest.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜DeleteDirectoryRequest.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜DirectoryProblemRequest.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜UpdateDirectoryRequest.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┗ 📜UpdateUserInfoRequest.java
 ┃ ┃ ┃ │ ┃ ┃ ┗ 📂response
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜CustomDirectoryInfo.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜DirectoryListResponse.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜DirectoryProblemResponse.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜LoginResponse.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜ProblemDetailsResponse.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜ProblemResponse.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┣ 📜TestCaseInfo.java
 ┃ ┃ ┃ │ ┃ ┃ ┃ ┗ 📜UserInfoRespone.java
 ┃ ┃ ┃ │ ┃ ┗ 📂service
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜ChatService.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜DirectoryService.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜DirectoryServiceImpl.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜ProblemService.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜UserService.java
 ┃ ┃ ┃ │ ┃ ┃ ┗ 📜UserServiceImpl.java
 ┃ ┃ ┃ │ ┣ 📂common
 ┃ ┃ ┃ │ ┃ ┣ 📂jwt
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜JwtAuthenticationEntryPoint.java
 ┃ ┃ ┃ │ ┃ ┃ ┗ 📜TokenProvider.java
 ┃ ┃ ┃ │ ┃ ┗ 📂oauth
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜GithubUserInfo.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜KakaoUserInfo.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜OAuth2UserInfo.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜PrincipalDetails.java
 ┃ ┃ ┃ │ ┃ ┃ ┗ 📜PrincipalOauth2UserService.java
 ┃ ┃ ┃ │ ┣ 📂conig
 ┃ ┃ ┃ │ ┃ ┣ 📜JwtSecurityConfig.java
 ┃ ┃ ┃ │ ┃ ┣ 📜RedisConfig.java
 ┃ ┃ ┃ │ ┃ ┣ 📜SecurityConfig.java
 ┃ ┃ ┃ │ ┃ ┗ 📜WebSocketConfig.java
 ┃ ┃ ┃ │ ┣ 📂db
 ┃ ┃ ┃ │ ┃ ┣ 📂entity
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜BaseTimeEntity.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜ChatMessage.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜CustomDirectory.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜CustomDirectoryProblem.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜Ide.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜Problem.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜ProblemTestCase.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜RefreshToken.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜State.java
 ┃ ┃ ┃ │ ┃ ┃ ┗ 📜User.java
 ┃ ┃ ┃ │ ┃ ┗ 📂repository
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜ChatMessageRepository.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜CustomDirectoryProblemRepository.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜CustomDirectoryRepository.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜IdeRepository.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜ProblemRepository.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜ProblemTestCaseRepository.java
 ┃ ┃ ┃ │ ┃ ┃ ┣ 📜RefreshTokenRepository.java
 ┃ ┃ ┃ │ ┃ ┃ ┗ 📜UserRepository.java
 ┃ ┃ ┃ │ ┣ 📂filter
 ┃ ┃ ┃ │ ┃ ┗ 📜JwtFilter.java
 ┃ ┃ ┃ │ ┣ 📂handler
 ┃ ┃ ┃ │ ┃ ┣ 📜JwtAccessDeniedHandler.java
 ┃ ┃ ┃ │ ┃ ┣ 📜OAuth2AuthenticationFailureHandler.java
 ┃ ┃ ┃ │ ┃ ┗ 📜OAuth2AuthenticationSuccessHandler.java
 ┃ ┃ ┃ │ ┣ 📂util
 ┃ ┃ ┃ │ ┃ ┣ 📜CookieUtil.java
 ┃ ┃ ┃ │ ┃ ┗ 📜SecurityUtil.java
 ┗ ┗ ┗ ┗ ┗ 📜GoormfriendsApplication.java
 ```
 
 - Frontend

```bash
📦src
 ┣ 📂api
 ┃ ┣ 📜MyListService.js
 ┃ ┗ 📜ProblemListsService.js
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┗ 📜title_logo.png
 ┣ 📂components
 ┃ ┣ 📂Ide
 ┃ ┃ ┣ 📜Confetti.jsx
 ┃ ┃ ┣ 📜InputOutput.jsx
 ┃ ┃ ┣ 📜InputOutput.module.css
 ┃ ┃ ┣ 📜MonacoEditor.jsx
 ┃ ┃ ┣ 📜ProblemContent.jsx
 ┃ ┃ ┗ 📜ProblemContent.module.css
 ┃ ┣ 📂chatModal
 ┃ ┃ ┣ 📜ChatModal.jsx
 ┃ ┃ ┣ 📜ChatModal.module.css
 ┃ ┃ ┣ 📜InputField.jsx
 ┃ ┃ ┣ 📜InputField.module.css
 ┃ ┃ ┣ 📜MessageContainer.jsx
 ┃ ┃ ┣ 📜MessageContainer.module.css
 ┃ ┃ ┗ 📜TipTap.css
 ┃ ┣ 📂footer
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┗ 📜Footer.module.css
 ┃ ┣ 📂header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜Header.module.css
 ┃ ┣ 📂miniMyList
 ┃ ┃ ┣ 📜MiniMyList.jsx
 ┃ ┃ ┗ 📜MiniMyList.module.css
 ┃ ┣ 📂myList
 ┃ ┃ ┣ 📜AddMyList.jsx
 ┃ ┃ ┣ 📜AddMyList.module.css
 ┃ ┃ ┣ 📜MyList.jsx
 ┃ ┃ ┣ 📜MyList.module.css
 ┃ ┃ ┣ 📜MyListContainer.jsx
 ┃ ┃ ┣ 📜MyListContainer.module.css
 ┃ ┃ ┣ 📜MyListProblem.jsx
 ┃ ┃ ┣ 📜MyListProblem.module.css
 ┃ ┃ ┗ 📜TestModal.jsx
 ┃ ┣ 📂myPageListBox
 ┃ ┃ ┣ 📜myPageListBox.jsx
 ┃ ┃ ┗ 📜myPageListBox.module.css
 ┃ ┗ 📂problemList
 ┃ ┃ ┣ 📜ProblemRow.jsx
 ┃ ┃ ┗ 📜ProblemRow.module.css
 ┣ 📂contexts
 ┃ ┗ 📜EditorContext.jsx
 ┣ 📂pages
 ┃ ┣ 📂ide
 ┃ ┃ ┣ 📜IdePage.jsx
 ┃ ┃ ┗ 📜IdePage.module.css
 ┃ ┣ 📂login-page
 ┃ ┃ ┣ 📜LoginPage.jsx
 ┃ ┃ ┣ 📜LoginPage.module.css
 ┃ ┃ ┣ 📜RedirectPage.jsx
 ┃ ┃ ┗ 📜api.jsx
 ┃ ┣ 📂my_page
 ┃ ┃ ┣ 📜my_page.jsx
 ┃ ┃ ┗ 📜my_page.module.css
 ┃ ┗ 📂problem_lists_page
 ┃ ┃ ┣ 📜ProblemListsPage.jsx
 ┃ ┃ ┗ 📜ProblemListsPage.module.css
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜App.test.jsx
 ┣ 📜index.css
 ┣ 📜index.jsx
 ┣ 📜setupProxy.js
 ┗ 📜setupTests.jsx
```

### 👨🏻‍🤝‍👨🏻협업 툴

- Notion
- Git
- Zep
- Slack
- Discord

### 👨🏻‍🤝‍👨🏻협업 환경

- Gitlab
  - 코드의 버전 관리
  - MR시, 팀원이 코드 리뷰를 진행하고 피드백 게시
- Notion
  - 회의가 있을때마다 회의록을 기록하여 보관
  - 기술 확보 시, 다른 팀원들도 추후 따라할 수 있도록 보기 쉽게 작업 순서대로 정리
  - 컨벤션 정리
  - 간트차트 활용한 개발 계획 관리
  - 스토리 보드, 시퀀스 다이어그램, 기능 명세서 등 팀원 모두가 공유해야 하는 문서 관리
- Discord, Zep
  - 회의 및 기능 구현, 개발 진행 상황 파악
  - 온라인 개발 진행할 때 서로 공유

### 😎팀원 역할

- 이다희
  - 팀장
  - Frontend
  - IDE 페이지, 마이리스트, FE 코드 리펙토링
- 강수영
  - FE 파트장
  - Frontend
  - 소셜 로그인, 마이페이지, 배포
- 변유정
  - 프로젝트 매니저
  - Backend
  - 소셜 로그인, 마이리스트 API, 채팅
- 임동기
  - 서기 및 발표
  - Frontend
  - 문제 리스트 페이지, 채팅
- 임소라
  - BE 파트장
  - Backend
  - 코드 컴파일 기능, 배포
- 한석규
  - 기술 문서 담당
  - Backend
  - 문제 리스트 API, IDE 데이터 및 테스트케이스 API, 배포

## [로그인 페이지]
![login](https://github.com/GoormFriends/IDE-frontend/assets/100774811/eefff8fc-2ee2-4012-84c0-79ca68e21eba)

## [문제리스트 페이지]
![pl_search_filter](https://github.com/GoormFriends/IDE-frontend/assets/100774811/1c89c31e-91c4-4983-834d-8c4201e30cdf)
![pl_mylist](https://github.com/GoormFriends/IDE-frontend/assets/100774811/7d10cc1b-cc67-46f3-ba68-e26b9b9a21d6)

## [마이 페이지]
![mp_mylist](https://github.com/GoormFriends/IDE-frontend/assets/100774811/5d05e935-5c57-4676-93d3-a318c9c7b5fe)

## [IDE 페이지]
![compile](https://github.com/GoormFriends/IDE-frontend/assets/100774811/2ba3db42-abf1-4f26-a6a2-eb1346b2ed07)

## [마이리스트 모달]
![myListModal](https://github.com/GoormFriends/IDE-frontend/assets/100774811/843d6661-4d5a-4dff-a192-a6ad6f655b38)

## [채팅 모달]
![chat](https://github.com/GoormFriends/IDE-frontend/assets/100774811/7e232172-5e70-4f89-bbad-bad6537adbfe)



## [Problem]

### [Try]

  


