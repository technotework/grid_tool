let app = new Vue({
  el: "#app",
  data: {
    fontSize: 16,
    gapTextNum: 2,
    gridTextNum: 4,
    gridNum: 12,
    gridPxNum: 74,
    gridWidthType: "rem"
  },
  computed: {
    gridNums: function () {

      return this.gridNum;
    },
    total: function () {

      let result = this.getTotalGapWidth() + this.getTotalGridWidth();

      return result;
    },
    gapWidth: function () {

      return this.fontSize * this.gapTextNum;
    },
    gridRemWidth: function () {

      return this.fontSize * this.gridTextNum;
    },
    gridPxWidth: function () {

      return this.gridPxNum;
    },
    gridWidth: function () {

      return (this.gridWidthType === "rem") ? this.gridRemWidth : this.gridPxWidth;
    },
    gridWidthTypes: function () {

      return this.gridWidthType;
    }

  },
  methods: {

    getTotalGapWidth: function () {

      let gap = this.gapWidth;
      let numOfGap = this.gridNum - 1;
      return numOfGap * gap;
    },
    getTotalGridWidth: function () {

      let column = (this.gridWidthType === "rem") ? this.gridRemWidth : this.gridPxWidth;
      let numOfColumn = this.gridNum;

      return numOfColumn * column;
    }
  }

});
