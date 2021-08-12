/*function error ()

{
	alert('there is somthing wrong')
}
console.log()*/

/*var obj= {
	error : function()
	{
       alert('there is somthing wrong');	
	}		
};
obj.error();*/

var  lib = lib || {};
lib.output=(function(){
	return{
	add : function (x,y){
		return x+y
	},
	mult : function (x,y){
		return x*y
	},
	minus : function (x,y){
		return x-y
	},
	div :function (x,y){
		return x/y
	},	
		
	
	
          }
}());