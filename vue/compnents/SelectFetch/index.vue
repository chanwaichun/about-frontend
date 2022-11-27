<template>
  <el-select
    v-model="currenValue"
    filterable
    placeholder="Select"
    :loading="isLoading"
    v-bind="attrs"
  >
    <el-option
      v-for="item in options"
      :key="item[config.valueKey]"
      :label="item[config.labelKey]"
      :value="item[config.valueKey]"
    />
  </el-select>
</template>
<script>
import { defineComponent, onMounted, defineProps } from "vue";
function useFetchMethod(data, fetch) {
  const options = ref(data);
  const isLoading = ref(true);
  isLoading.value = true;
  onMounted(async () => {
    const res = await fetch();
    // console.log(res);
    options.value = res;
    isLoading.value = false;
  });
  return {
    isLoading,
    options,
    fetch,
  };
}

export default defineComponent({
  props: {
    value: {
      type: String,
      default: "",
    },
    config: {
      type: Object,
      default: () => {},
    },
    fetchMethod: {
      type: Function,
      default: () => {},
    },
  },

  setup(props, ctx) {
    console.log(props, ctx);
    const { options, isLoading, fetch } = useFetchMethod([], props.fetchMethod);
    const initialValue = props.value;
    const currenValue = ref(props.value);
    watch(
      () => currenValue.value,
      (val) => {
        console.log(val);
        if (!isLoading.value) {
          ctx.emit("update:value", val);
        }
      }
    );
    watch(
      () => isLoading.value,
      (val) => {
        console.log(val, props.value);
        currenValue.value = val ? "加载中..." : initialValue;
      },
      {
        immediate: true,
      }
    );
    return {
      isLoading,
      options,
      currenValue,
    };
  },
});
</script>
