import Api from "../common/Api"

export default  {

     getNewsList(cb){
         Api.get("datas/news.json",cb)
     }
}
