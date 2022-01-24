// @ts-check
// require('core-js')
//
// const complicatedArray = [1, [2, 3]]
// const flattendArray = complicatedArray.flat()
// console.log(flattendArray)

/**
 * 블로그 포스팅 서비스
 * - 로컬 파일을 데이터베이스로 활용할 예정 (JSON)
 * - 인증 로직은 넣지 않습니다.
 * - RESTful API를 사용합니다.
 */

const http = require("http");

/**
 * Post
 *
 * GET /posts
 * GET /posts/:id
 * POST /posts
 */

const server = http.createServer((req, res) => {
  const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/;
  const postIdRegexResult = (req.url && POSTS_ID_REGEX.exec(req.url)) || undefined;
  if (req.url === "/posts" && req.method === "GET") {
    res.status = 200;
    res.end("List of posts");
  } else if (postIdRegexResult) {
    const postId = postIdRegexResult[1];
    console.log(postId);
    res.status = 200;
    res.end("Some content of the post");
  } else if (req.url === "/posts" && req.method === "POST") {
    res.status = 200;
    res.end("Posting");
  } else {
    res.status = 400;
    res.end("Not Found.");
  }
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log("The server is listening on port: ", PORT);
});