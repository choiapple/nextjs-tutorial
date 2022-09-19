import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document{
    render(){
        return (
            <Html lang="ko">
                <Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        )
    }
}

export default MyDocument;

// 이게 있어야 Html부터 아래까지 수정할 수 있음
// 서버에서만 랜더링 됨
// css도 적용되지않음