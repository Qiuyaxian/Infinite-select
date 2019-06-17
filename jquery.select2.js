
(function ($) {
	$.fn.extend({
		SelectChange: function (jsons, options) {
			var ops = $.extend({
				//多级菜单数组
				menu: [
					{
						cName: 'select1',
						linkId: 'id',
						selectText: "pdClassName",
						arrName: 'subProductClassList'
					},
					{
						cName: 'select2',
						linkId: 'id',
						selectText: "pdClassName",
						arrName: 'subProductClassList'
					},
					{
						cName: 'select3',
						linkId: 'id',
						selectText: "pdClassName"
					}
				],

			}, options);
			return this.each(function () {
				var $this = $(this);
				if (!$.inArray(jsons)) {
					alert('该数据不是一个数组对象');
					return false;
				};
				//第一步:创建所有下拉选择
				$.each(ops.menu, function (i, selectMenu) {

					if (i < 1) {
						//判断第一个下拉框是否存在
						if ($('.' + selectMenu.cName, $this).length > 0) {
							var $select = $('.' + selectMenu.cName, $this)
							$select.empty();
							var $option = $('<option>请选择</option>');
							$select.append($option);
						} else {
							//不存在就创建
							var $select = $('<select class="' + selectMenu.cName + '"><option>请选择</option></select>');
							$select.prop('disabled', false);
						}


						//创建的同时把数据添加进去
						for (var i = 0; i < jsons.length; i++) {
							if ($.inArray(jsons[i][ops.menu[0].arrName])) {
								//第一层数据
								var arrs = jsons[i];
								var $options = $('<option value="' + arrs[ops.menu[0].linkId] + '">' + arrs[ops.menu[0].selectText] + '</option>')
								$select.append($options);
							} else {
								alert('该数组不存在');
							}
						}
					} else {
						//第二个不能编辑
						//判断后面的是否存在，不存在就创建
						if ($('.' + selectMenu.cName, $this).length > 0) {
							var $select = $('.' + selectMenu.cName, $this)
							$select.empty();
							var $option = $('<option>请选择</option>');
							$select.prop('disabled', true);
							$select.append($option);
						} else {
							//不存在就创建
							var $select = $('<select class="' + selectMenu.cName + '"><option>请选择</option></select>');
							$select.prop('disabled', true);
						}

					}
					$this.append($select);
				});
				var i = 0;
				//下拉选择
				$('.' + ops.menu[0].cName, $this).change(function () {
					i = $(this).index();
					if (ops.menu.length > 1) {
						for (var j = 1; j < ops.menu.length; j++) {
							$('.' + ops.menu[j].cName, $this).empty();
							var $option = $('<option>请选择</option>');
							$('.' + ops.menu[j].cName, $this).append($option);
							$('.' + ops.menu[j].cName, $this).prop('disabled', true);
						}
					}
					//找出下一个下拉选择框
					for (var n = 0; n < jsons.length; n++) {
						if (jsons[n][ops.menu[i].linkId] == $(this).val()) {
							//找出下一个数组
							var Arr = jsons[n][ops.menu[i].arrName];
							createSelect(Arr, $this, i, ops);
						}
					}
				});
			});
		}
	});
	function createSelect (arrs, that, index, options) {
		var op = $.extend({}, options);
		++index;
		if (index < op.menu.length) {
			$('.' + op.menu[index].cName, that).prop('disabled', false);
			$('.' + op.menu[index].cName, that).empty();
			var $option = $('<option>请选择</option>');
			$('.' + op.menu[index].cName, that).append($option);
			//插进数组
			if (!$.isArray(arrs)) {
				alert("该对象不是一个数组");
				return false;
			}
			for (var i = 0; i < arrs.length; i++) {
				var arr = arrs[i];
				var $options = $('<option value="' + arr[op.menu[index].linkId] + '">' + arr[op.menu[index].selectText] + '</option>');
				$('.' + op.menu[index].cName, that).append($options);
				//清空赋值
			}
			//递归函数
			$('.' + op.menu[index].cName, that).change(function () {
				for (var n = 0; n < arrs.length; n++) {
					if (arrs[n][op.menu[index].linkId] == $(this).val()) {
						var Arr = arrs[n][op.menu[index].arrName];
						createSelect(Arr, that, index, op);
					}
				}
			});
		}

	};

})(jQuery)