// 在react17以后，babel转换JSX新的写法
const babel = require('@babel/core')
const sourceCode = `<h1>
hello<span style={{color:'red'}}>world</span>
</h1>`;
const result = babel.transform(sourceCode, {
    plugins: [
        ["@babel/plugin-transform-react-jsx", { runtime: 'automatic' }]
    ]
});
console.log(result.code)

// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// /*#__PURE__*/_jsxs("h1", {
//   children: ["hello", /*#__PURE__*/_jsx("span", {
//     style: {
//       color: 'red'
//     },
//     children: "world"
//   })]
// });
