const jsDOM={
  _store:{},
  render:function(elm,par){
    try{
      par.innerHTML=elm;
    }catch(err){
      console.log('error:',err)
      par.children=[elm];
    }
    return this.promise();
  },
  softRender:function(elm,par){
    par.innerHTML+=elm;
    return this.promise()
  },
  promise:function(fun){
    return {
      then:function(fun){
        fun();
      }
    }
  }
}


export default jsDOM
