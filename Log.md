# 登陆业务
    无跨域问题 cookie+session
    有跨域问题 token

    ## token原理
        登陆页面输入密码
        服务器验证 生成该用户的token
        客户端存储token
        后续所有请求都携带该token的请求
        服务端验证token是否通过
        token:服务端实现身份校验
    ## git相关
        git status
        git checkout -b XXX(分支的名字) ---创建新的分支并且切换到新的分支当中
        git branch ---查看分支列表
    ## sessionStorage Api
        window.sessionStorage.setItem('token',对应value)
        window.sessionStorage.getItem('token')
        window.sessionStorage.clear()