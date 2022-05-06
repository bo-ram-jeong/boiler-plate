import React, {useEffect} from 'react'
import axios from 'axios';
import { response } from 'express';

function LandingPage() {
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])
    

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '10vh'
        }}>
            <h2>시작 페이지</h2>
        </div>
    )
}

export default LandingPage

// 프록시 설정할 때, src 밑 파일 생성
// setupProxy.js <file>
// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:5000',
//       changeOrigin: true,
//     })
//   );
// };