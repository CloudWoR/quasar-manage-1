# Quasar App (quasar-manage)

A Quasar Framework app

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### electron分支介绍
1. 添加动态加载的eletorn启动文件——electron
2. 添加窗口类型判断
3. 利用router.beforeEach()完成主进程登录、登出及退出APP操作
4. 首屏渲染优化，利用window.on('ready-to-show')配合600毫秒的延迟，解决首屏加载闪烁问题（如果有更好的方法，请改进）
5. 利用单例模式防止滥用new BrowserWindow()产生垃圾对象
6. 集中处理主/渲染进程通信
