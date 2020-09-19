# seed-node-azurefunc
A seed project for Serverless Function REST API

Stack
- Azure Function
- Serverless Framework
- Express JS
- Typescript
- MongoDB

## Version specification
- node: v12.16.3
- TypeScript v4

## IDE recommendations and setup
- VSCode IDE
- Eslint vscode plugin
- Prettier vscode plugin for linting warnings (auto fix on save)
- Add the following setting in vscode settings.json 
```json
"eslint.autoFixOnSave": true
```

## Dev setup
- Install azure-cli with homebrew `brew update && brew install azure-cli`
- Install serverless-cli `npm install -g serverless`
- Install all the dependencies using `npm install`
- To run the server with watch use `npm run start`
- To run the test cases in watch mode use `npm run test:watch`
- To run the test cases without watch mode use `npm run test`
- To run the test coverage without watch mode use `npm run test:cov`

## Setup ENV variables

Create **serverless.env.local.yml** at the same level with serverless.yaml and update with your local configuration

```yaml
API_ROUTE: '/api/core'
MONGO_USER_PARAM: <db user name>
MONGO_PASSWORD: <db pwd>
MONGO_DB_NAME: <db name>
MONGO_HOSTS: <db host>
```

## Access URL

```bash
GET http://localhost:7071/api/core/ping
```

## Test

- Unit Test: We are using Jest for assertion and mocking


## Git Hooks
The seed uses `husky` to enable commit hook.

### Pre commit
Whenever there is a commit, there will be check on lint, on failure commit fails.

### Pre push
Whenever there is a push, there will be check on test.

## Working with Mongo migration script