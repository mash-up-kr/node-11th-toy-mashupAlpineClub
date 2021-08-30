## Installation

```bash
$ npm install
```

### nvm

[nvm](https://www.google.com/search?q=nvm&rlz=1C5CHFA_enKR941KR941&oq=nvm&aqs=chrome.0.69i59j69i60l4j69i61.191j0j7&sourceid=chrome&ie=UTF-8)은 Node.js의 버전 매니저입니다.

위 링크를 통해 설치하고 사용합니다.  
프로젝트에는 이미 .nvmrc 파일이 존재하기 때문에 다음과 같이 입력하면 파일에 명시된 버전을 사용하게 됩니다.

```bash
$ nvm use
```

다른 버전을 검색하거나 설치/사용하려면 다음 명령어를 참조하세요.

```bash
# List versions 14.*
$ nvm ls-remote 14

# Install specific version of Node and use it
$ nvm install 14.17.5
$ nvm use 14.17.5
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
