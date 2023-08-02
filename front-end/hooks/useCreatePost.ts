import { DEFAULT_URL, GITHUB_TOKEN } from "@/config";

const useCreatePost = (title: string, content: string) => {
    console.log("잘 왔나?", title)
      
    if (!GITHUB_TOKEN) {
        console.log("토큰이 없어요!");
    } else {
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
        console.log("토큰 있음");

        const res = fetch(`${DEFAULT_URL}/api/project`, { method: 'POST', headers: requestHeaders, body: JSON.stringify({title: title, content: content}) })
        .then((response) => {
            if(response.status === 200)
              return response.json();
            else {
              // 서버 에러 코드 전송 시 실행할 부분
            }
        })
        .then((result) => {
        // 성공 시 실행할 부분
        console.log(result); // 서버에서 .json() 으로 보낸 메세지 확인 가능
        })
        .catch((err) => {
        // 인터넷 문제로 실패 시 실행할 부분
        console.log(err);
        });;
    }
};

export default useCreatePost;