var app = new Vue({
  el: "#app",
  data:{
    message: 0,
    info: [],
    result: []
  },
  methods:{
    getValue(event){
      this.message = (event.target.value > 0) ? event.target.value : 0;
      axios.get("https://api.coinmarketcap.com/v2/ticker/").then(
        response => {
          this.info = response.data.data;
          this.result = [
            this.calc(this.message, this.info[1]),
            this.calc(this.message, this.info[1027]),
            this.calc(this.message, this.info[52]),
            this.calc(this.message, this.info[131]),
            this.calc(this.message, this.info[1437])
          ];
        }
      );
    },
    calc(count, data){
      var res = {
        name: data["name"],
        abr: data["symbol"],
        mult: data["quotes"]["USD"]["price"] * count
      }
      return res;
    }
  },
    mounted(){
      axios.get("https://api.coinmarketcap.com/v2/ticker/").then(
        response => {
          this.info = response.data.data;
          console.log(this.info);
        }
    );
  }
});
