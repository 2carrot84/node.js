// @ts-check

/**
 * 블로그 포스팅 서비스
 * - 로컬 파일을 데이터베이스로 활용할 예정 (JSON)
 * - 인증 로직은 넣지 않습니다.
 * - RESTful API를 사용합니다.
 */

const http = require("http");
const {routes} = require("./api");

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} contents
 */

/** @type {Post[]} */
const posts = [
    {
        id: "my_first_post",
        title: "My first post",
        content: "Hello world!"
    },
    {
        id: "my_second_post",
        title: "My second post",
        content: "두번째 포스트"
    }
];

/**
 * Post
 *
 * GET /posts
 * GET /posts/:id
 * POST /posts
 */
const server = http.createServer((req, res) => {
    async function main() {
        const route = routes.find(_route => req.url &&
            req.method &&
            _route.url.test(req.url) &&
            _route.method === req.method
        )

        if (!route) {
            res.statusCode = 404;
            res.end("Not Found.");
        }

        const result = await route.callback()
        res.statusCode = result.statusCode

        if (typeof result.body === 'string') {
          res.end(result.body)
        } else {
          res.setHeader('Content-Type', 'application/json; encoding=utf-8')
          res.end(JSON.stringify(result.body));
        }
    }

    main()
})

/*const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/;
const postIdRegexResult = (req.url && POSTS_ID_REGEX.exec(req.url)) || undefined;
if (req.url === "/posts" && req.method === "GET") {
    const result = {
        posts: posts.map(post => ({
            id: post.id,
            title: post.title,
            content: post.content,
        })),
        totalCount: posts.length
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; encoding=utf-8')
    res.end(JSON.stringify(result));
} else if (postIdRegexResult) {
    const postId = postIdRegexResult[1];
    const post = posts.find(_post => _post.id === postId);

    if (post) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; encoding=utf-8')
        res.end(JSON.stringify(post));
    } else {
        res.statusCode = 404;
        res.end("Post not found.");
    }
} else if (req.url === "/posts" && req.method === "POST") {
    req.setEncoding('utf-8')
    req.on('data', data => {
        /!** @type {Post} *!/
        const body = JSON.parse(data)
        console.log(body);
        posts.push({
            id: body.title.toLowerCase().replace(/\s/g, '_'),
            title: body.title,
            content: body.content,
        })
    })

    res.statusCode = 200;
    res.end("Posting");
} else {
    res.statusCode = 404;
    res.end("Not Found.");
}
})
;*/

const PORT = 4000;

server.listen(PORT, () => {
    console.log("The server is listening on port: ", PORT);
});