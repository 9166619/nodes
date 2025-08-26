const url = $request.url;
const response = $response.body;

if (url.includes("api.duolingo.com/users/hearts")) {
    let body = JSON.parse(response);
    body.hearts = 999; // 设置能量为最大值（如 999）
    $done({ body: JSON.stringify(body) });
} else {
    $done({});
}
