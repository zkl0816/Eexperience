exports=function Watch(){
	constructor=()=>{
		this.observe={}
	}
	//订阅方法
	on=(key,fn)=>{
       if(!observe[key]){
		   observe[key]=[]
	   }
	   observe[key].push(fn)
	}
	//发布
	emmit=(key,value)=>{ 
       if(observe[key].length){
		   let fnList=observe[key]
		   for(let i=0;i<fnList.length;i++){
			   fnList[i].call(this,value)
		   }
	    }
	}
}
// console.log(new Watch())
