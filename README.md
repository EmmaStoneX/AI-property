# Cyberceratops - AI 资产展示

集中展示所有已部署的 AI 服务和工具的静态落地页。

🌐 **在线访问**: [www.zxvmax.com](https://www.zxvmax.com)

## 功能

- 16 个 AI 服务卡片展示（含可访问服务和后端服务）
- 服务健康状态呼吸灯（GitHub Actions 每日自动检测 + 自动部署）
- 响应式布局（桌面 / 平板 / 移动端）
- 纯 HTML + CSS，无框架依赖

## 技术栈

- HTML5 + CSS3（CSS Grid, CSS Variables, Keyframe Animation）
- GitHub Actions + Playwright（无头浏览器健康检测）
- Cloudflare Pages（托管 + 自动部署）

## 项目结构

```
├── index.html                          # 主页
├── assets/style.css                    # 样式
├── status.json                         # 服务状态（自动生成）
└── .github/workflows/health-check.yml  # 定时健康检测 + 自动部署
```

## 健康检测机制

每天 UTC 02:00 自动运行 GitHub Actions workflow：

1. 使用 Playwright 无头浏览器逐一访问所有服务域名
2. 根据 HTTP 状态码判断服务是否正常（< 500 为正常）
3. 结果写入 `status.json` 并提交到仓库
4. 自动部署到 Cloudflare Pages

前端通过 fetch 加载 `status.json`，在每张卡片右下角显示呼吸灯状态指示。

## License

[MIT](LICENSE)
