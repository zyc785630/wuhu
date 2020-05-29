<template>
<div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
         <add :addComment="addComment"/>
        <list :comments='comments' :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import add from '../components/add'
import list from '../components/list'
export default {
  components:{
    add,
    list
  },
  data(){
    return{
      comments:[
        {id:1,username:'张寅春',content:'vueZBC'},
        {id:2,username:'zyc',content:'vue赞尼奈斯'},
        {id:3,username:'cc',content:'vue芜湖！'},
        {id:4,username:'joker',content:'vue哇哦'}
      ]
    }
  },
  methods:{
    addComment(obj){
      this.comments.unshift(obj)
    },
    deleteComment(index){
      this.comments.splice(index,1)
    }
  }
}
</script>

<style scoped>


</style>
