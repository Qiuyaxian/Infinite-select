/**
 * [SelectChange description]
 * @param {[type]} jsons   [description]
 * @param {[type]} options [{
	menu:['first','second'],
	关联字段
	id:'id',
	关联名称
	pdClassName:'pdClassName',
	数组名
	subProductClassList:'subProductClassList'
}]
 */
function SelectChange(jsons,options){
	var op = $.extend({
		//多级菜单数组
		menu:['first','second'],
		//关联字段
		id:'id',
		//关联名称
		pdClassName:'pdClassName',
		//数组名
		subProductClassList:'subProductClassList'
	},options);
	var arr = jsons;
	for(var i=0;i<arr.length;i++){
		var $option = $('<option value="'+arr[i].id+'">'+ arr[i].pdClassName+'</option>');
		//插入到一级位置
		$('.'+op.menu[0]).append($option);
	}
	$('.'+op.menu[0]).change(function(){
		var $id = $(this).val();
		Other(arr,$id,op);
	})
}
function Other(arrs,id,options){
	var ops = $.extend({},options);
	for(var n=0;n<arrs.length;n++){
		if(arrs[n].id == id){
			var newArr = arrs[n].subProductClassList;
			$('.second').html('<option value="">请选择</option>');
			for(var i=0;i<newArr.length;i++){
				var $option2 = $('<option value="'+newArr[i].id+'">'+newArr[i].pdClassName+'</option>');
				//插入到二级位置
				$('.'+options.menu[1]).append($option2);
			}
		}
	}
}


