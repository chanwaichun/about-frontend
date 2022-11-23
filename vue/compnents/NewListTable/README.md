# 基于 jsx 实现的灵活表格

## 使用实例

- 表格数据

```js
const data= [
        {
          seq: '5.094219645931464',
          subOptionId: '7.055183426806377',
          allAmount: '5.666461141261124',
          engineeringAmountUnit: '0.4338773270567664',
          finishAmount: '6.239555046442302',
          allOfFinishDifference: '5.0026262801168',
          overdueReason: '5.422120494275271',
          cumulativeCompletionAmount: '5.365796683743516',
          cumulativeCompletionAmountRate: '8.039251346938347',
          durationRemedies: '4.221485512602879',
          planCompletionPercentage: '2.200786356012192',
          remark: '9.192879651614525',
        },
      ],

```

- 表格列的配置
除了不使用自定义插槽以外，使用方法大致和ListTable一样，支持每一列传入element的配置、render自定义渲染，一定要写JSX语法

```js
 const column = [
        {
          headerAlign: 'center',
          align: 'center',
          label: this.$c('序号'),
          // 对应接口的字段
          prop: '',
          columns: [
            {
              label: this.$c('分项工程或工序'),
              // 对应接口的字段
              prop: 'processName',
              render: (row, index) => {
                console.log(row, index)
                return (
                  <div onClick={() => {}}>
                    222222222222222222222
                  <el-input vModel={row.remark}></el-input>
                  </div>
                )
              },
            },
            {
              align: 'center',
              label: this.$c('总工程量'),
              // 对应接口的字段
              prop: 'allAmount',
            },
            {
              label: this.$c('工程量单位'),
              // 对应接口的字段
              prop: 'engineeringAmountUnit',
            },
          ],
        },
        {
          label: this.$c('分项工程或工序'),
          // 对应接口的字段
          prop: 'processName',
        },
        {
          label: this.$c('总工程量'),
          // 对应接口的字段
          prop: 'allAmount',
          type: 'custom',
        },
        {
          label: this.$c('工程量单位'),
          // 对应接口的字段
          prop: 'engineeringAmountUnit',
        },
      ]
```
```html
<template>
  <NewListTable :column="column" :data="data" />
</template>
```