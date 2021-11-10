const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': '박보검',
      'birthday': '1990.02.03',
      'gender': '남자',
      'job': '대학생'
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': '조인성',
      'birthday': '1985.04.13',
      'gender': '남자',
      'job': '무직'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '공유',
      'birthday': '1988.06.06',
      'gender': '남자',
      'job': '바리스타'
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));