/*
 * @Author: your name
 * @Date: 2021-08-12 22:03:49
 * @LastEditTime: 2021-08-12 22:19:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \一些原理\算法\广度优先和深度优先.js
 */
const data = [
  {
    name: "1",
    children: [
      {
        name: "1-1",
      },
      {
        name: "1-2",
        children: [
          {
            name: "1-2-1",
          },
          {
            name: "1-2-2",
          },
        ],
      },
      {
        name: "1-3",
        children: [
          {
            name: "1-3-1",
          },
          {
            name: "1-3-2",
          },
        ],
      },
    ],
  },
]
// function dfs (data) {
//   data.forEach(item => {
//     console.log(item.name)
//     if (item.children) {
//       dfs(item.children)
//     }
//   })
// }
// dfs(data);
function bfs (data) {
  let queue = []
  data.forEach(item => {
    console.log(item.name)
    if (item.children) {
      queue = queue.concat(item.children)
    }

  })
  if (queue.length) {
    bfs(queue);
  }
}
bfs(data)