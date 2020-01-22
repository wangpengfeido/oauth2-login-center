# oauth2-login-center
王彭飞的登录中心

## 目录结构
````
oauth2-login-center
├─app    # 应用文件夹
| ├─controller    # 控制器文件夹
| ├─dao    # 数据库操作文件夹
| ├─middleware    # 中间件文件夹
| ├─model    # 模型文件夹
| ├─router    # 路由文件夹
| ├─schedule    # 定时任务文件夹
| ├─service    # 服务文件夹
| └─view    # 视图文件夹
├─util    # 工具文件夹
├─public    # 静态资源文件夹
├─config    # 配置文件夹
| └─mysql.json    # mysql配置
└─index.js    # 入口文件
````

## 权限
#### 用户权限
* createApp 创建应用
* changeAppCodeType 改变所属应用使用授权式登录
* changeAppTokenType 改变所属应用使用隐藏式登录
* changeAppPasswordType 改变所属应用使用密码式登录
* changeAppCredentialsType 改变所属应用使用凭证式登录

#### 应用权限
* grantTypeCode 可以使用授权式登录
* grantTypeToken 可以使用隐藏式登录
* grantTypePassword 可以使用密码式登录
* grantTypeCredentials 可以使用凭证式登录









