<script>
export default {
  name: 'NewListTable',
  props: {
    column: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  render() {
    const data = this.data
    const column = this.column
    const columCom = (colItem, colIndex) => {
      const scopedSlots = {}
      function setScopedSlots(colItem) {
        const scopedSlots = {}
        // 如果是操作列
        if (colItem.type === 'action') {
          scopedSlots.default = ({ row, $index, }) => {
            const btnShow = (item) =>
              item.show ? item.show(row, $index) : true
            return colItem.btn.map((item, index) =>
              btnShow(item) ? (
                <el-button
                  type='text'
                  key={index}
                  onClick={() => item.onClick(row, $index)}
                >
                  {item.label}
                </el-button>
              ) : (
                ''
              )
            )
          }
          return scopedSlots
        }
        // 如果没有表头以及表格渲染
        if (!(colItem.render || colItem.headerRender)) {
          return scopedSlots
        }
        // 如果表头有自定义渲染
        if (colItem.render) {
          scopedSlots.default = ({ row, $index, }) => {
            return colItem.render(row, $index)
          }
        }
        if (colItem.headerRender) {
          scopedSlots.header = ({ column, $index, }) => {
            return colItem.headerRender(column, $index)
          }
        }
        return scopedSlots
      }
      if (!colItem.columns) {
        return (
          <el-table-column
            props={colItem}
            scopedSlots={setScopedSlots(colItem)}
          />
        )
      } else {
        return (
          <el-table-column props={colItem}>
            {colItem.columns.map((childItem, childIndex) => {
              return columCom(childItem, childIndex)
            })}
          </el-table-column>
        )
      }
    }
    return (
      <div class='newListTable'>
        <el-table
          props={this.$attrs}
          data={data}
          style={{ width: '100%', }}
          scopedSlots={{
            default: () => {
              return column.map((colItem, colIndex) => {
                return columCom(colItem, colIndex)
              })
            },
          }}
        />
      </div>
    )
  },
}
</script>
<style lang="scss" scoped>
::v-deep .el-table {
  .el-table__header-wrapper,
  .el-table__body-wrapper {
    table {
      width: 100% !important;
    }
  }
}
</style>
