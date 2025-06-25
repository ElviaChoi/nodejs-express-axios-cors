const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

let data = { message: "여러분 화이팅!" };

// CORS 허용 (특정 포트 허용)
app.use(
  cors({
    origin: ["http://127.0.0.1:9000", "http://127.0.0.1:5500"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// 요청 본문을 text로 파싱
app.use(express.text());

// GET 요청
app.get("/", (req, res) => {
  res.json(data);
});

// POST 요청
app.post("/", (req, res) => {
  data.message = req.body;
  res.send(`받은 POST 데이터: ${req.body}`);
});

// PUT 요청
app.put("/", (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

// DELETE 요청
app.delete("/", (req, res) => {
  data = {};
  res.send("데이터가 삭제되었습니다.");
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
