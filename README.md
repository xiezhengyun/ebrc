# ebaorc

基于dumi2框架下的lerna pnpm

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs ebaorc
$ pnpm start

# build library source code
$ pnpm lerna run build

# build docs
$ pnpm run docs:build

# version
# {major}.{minor}.{patch}-{pre-release}
# {主版本号}.{次版本号}.{修补版本号}-{非正式版版本号}
$ pnpm run version:patch

# 发布
$ pnpm run publish-all
```

## 调试本地包

- 进入本地npm包目录，比如 package/utils
- 在本地npm包目录中执行 `pnpm link --global`k命令，它会将当前目录中的npm包注册到全局pnpm模块目录中。
- 进入本地项目目录,(比如此leran主目录)，运行 `pnpm link --global @ebaorc/utils`
- 可以在项目中对已链接的本地npm包进行调试和修改。当你对本地npm包的代码进行了更改时，无需重新运行npm link命令，修改会立即生效。
- 完成本地npm包调试后，记得将链接断开. `pnpm uninstall --global @ebaorc/utils` (取消项目与本地pnpm包之间的链接)
- 删除link， pnpm uninstall --global `<package>`
- 查看全局已链接的包 `npm ls -g --depth=0`

## npm 设置源地址

```bash
# 官方npm
npm config set registry=https://registry.npmjs.org/
# 淘宝npm
npm config set registry=https://registry.npmmirror.com/
```
