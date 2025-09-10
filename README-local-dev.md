# 📚 本地运行说明（Jekyll + Docker）

本项目使用 **Docker Compose** 来运行 Jekyll，方便在本地开发和预览。

---

## 🚀 启动开发环境

### 前台运行（推荐调试时使用）

```powershell
cd D:\MyWorkstation\checlams.v2.github.io
docker compose up
```

- 打开浏览器访问 👉 [http://localhost:8080/al-folio/](http://localhost:8080/al-folio/)
- 终端会显示实时日志。
- 停止服务时，按下 **Ctrl + C** 即可。

---

### 后台运行（安静模式）

```powershell
cd D:\MyWorkstation\checlams.v2.github.io
docker compose up -d
```

- 服务会在后台运行，不占用终端窗口。
- 访问方式相同 👉 [http://localhost:8080/al-folio/](http://localhost:8080/al-folio/)

---

## ⛔ 停止服务

- 如果是前台运行：直接 **Ctrl + C** 停止。
- 如果是后台运行：
  ```powershell
  docker compose down
  ```

---

## 🔍 查看容器状态

```powershell
docker compose ps
```

示例输出：

```
NAME                          STATUS          PORTS
checlamsv2githubio-jekyll-1   Up              0.0.0.0:8080->8080/tcp
```

## 第一次运行后再次运行

运行前先打开docker desktop,运行start-site.bat

---

## 🛠 常见问题

- **打不开页面？**
  1. 确认是否运行了 `docker compose up`。
  2. 浏览器访问地址必须带 `/al-folio/`。
  3. 确认 8080 端口未被占用。
