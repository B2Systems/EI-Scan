<template lang="html">
  <div class="">
    <el-row>
      <el-col :md="12">
        <div id="scan_prev" ref="scan"></div>
      </el-col>
      <el-col :md="12">
        <ul>
          <li v-for="(code, key) in barcodes" :key="key">{{ code }}</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Quagga from 'quagga'
var includes = require('lodash.includes')
var scanMp3 = require('@/assets/scan.mp3')

export default {
  name: 'BarcodeScannerComponent',

  mounted () {
    this.barcodeInit()
  },

  data () {
    return {
      barcodes: []
    }
  },

  methods: {
    /**
     * Initialise the barcode scanner.
     *
     */
    barcodeInit () {
      Quagga.init({
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          constraints: {
            facingMode: 'environment'
          },
          target: this.$refs['scan']
        },
        decoder: {
          readers: ['code_39_reader']
        }
      }, (err) => {
        if (err) {
          this.$message({
            type: 'danger',
            message: `Error setting up barcode scanner.`
          })
        } else {
          Quagga.start()
          this.barcodeDetected()
        }
      })
    },

    /**
     * Callback for when a barcode has been detected.
     *
     */
    barcodeDetected () {
      Quagga.onDetected((result) => {
        var code = result.codeResult.code
        if (this.shouldAddBarcode(code)) {
          this.addCode(code)
          this.$message({
            type: 'success',
            message: `Barcode scanned: ${code}.`
          })
        }
      })
    },

    /**
     * Whether or not the barcode should be added.
     *
     */
    shouldAddBarcode (code) {
      return !includes(this.barcodes, code)
    },

    /**
     * Add the code to the barcodes array.
     *
     */
    addCode (code) {
      this.barcodes.push(code)
      this.playAudio()
    },

    /**
     * Play audio on add.
     *
     */
    playAudio () {
      var audio = new Audio(scanMp3)
      audio.play()
    }
  }
}
</script>

<style lang="scss">
  #scan_prev {
    width: 100%;
    height: 200px;
    overflow: hidden;
    video {
      width: 100%;
      position: relative;
      height: 100%;
    }
  }
</style>
