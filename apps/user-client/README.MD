# USER CLIENT 


## 启动命令
`yarn start:dev user-client`

将会在 3001 端口开启http服务, graphQL 端点为 `:3001/graphql`

## API

### 查询学校信息

```graphql
{
  school(name:"学校1") {
    status,
    name
  }
}
```

返回值

```json
{
  "data": {
    "school": {
      "status": 0,
      "name": "学校1"
    }
  }
}
```

### 开学

```graphql
mutation {
  openSchool(name: "学校1") {
    status,
    name
  }
}
```
返回值
```json
{
  "data": {
    "openSchool": {
      "status": 1,
      "name": "学校1"
    }
  }
}
```