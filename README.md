# Shopify Export App

一个支持后台自定义数据类型（订单、客户、商品等）一键导出全部字段的Shopify App。

## 主要功能
- 支持订单、客户、商品等全部字段导出
- UI简单：下拉选择数据类型，一键导出CSV
- 支持Shopify后台授权

## 使用方法

1. 克隆本项目
   ```
   git clone https://github.com/xxx/shopify-export-app.git
   cd shopify-export-app
   ```

2. 安装依赖
   ```
   npm install
   ```

3. 配置 `.env` 环境变量（参考 `.env.example`）

4. 启动开发服务器
   ```
   npm run dev
   ```

5. 在Shopify后台注册开发者App，配置重定向URL和API权限

6. 安装到你的Shopify店铺后，即可使用后台一键导出功能

## 目录结构
- `/client` 前端React组件
- `/server` 后端Express接口
