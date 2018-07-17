<template>
  <div class="home">
    <barcode-scanner-component />
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    BarcodeScannerComponent: () => import(/* webpackChunkName: "barcode-scanner-component" */'@/components/BarcodeScannerComponent')
  }
}
</script>
