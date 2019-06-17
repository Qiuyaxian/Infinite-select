# Infinite-select

<h3>这是基于jquery封装的无限级下拉选择组件，通过配置相对应的json数据，实现三级联动下来选择，用法如下</h3>

<h3>参数说明</h3>
<h3>在需要存放下拉框的父级容器中调用该函数</h3>

``` bash
配置说明

$('.xxx').SelectChange(数据, {
  menu: [
    {
 	  arr：为数字名称,自定义
	  menu作为多级菜单的控制数组，需要多少级可自行调节
	  cName：下拉框的样式名，用于定位
	  linkId：作为下一级关联的标识
	  selectText：select下拉显示的内容
	  arrName：数组名字，该数组为下一级的数组名
	}
  ]
});

demo

var arr = [
  {
    "addTime": 1477652520000,
    "delState": "1",
    "editTime": 1477652978000,
    "editorId": 1,
    "editorName": "admin",
    "id": 3, //*
    "parentId": 0,//*
    "pdClassName": "广州新中国大厦服装城", //*
    "sortNum": 1,
    "subProductClassList": [
        {
            "addTime": 1477652520000,
            "delState": "1",
            "editTime": 1477652520000,
            "editorId": 1,
            "editorName": "admin",
            "id": 5,   //*
            "parentId": 3,
            "pdClassName": "男装", //*
            "sortNum": 1,
            "subProductClassList": [
		            {
		                "addTime": 1477652520000,
		                "delState": "1",
		                "editTime": 1477652520000,
		                "editorId": 1,
		                "editorName": "admin",
		                "id": 6,   //*
		                "parentId": 3,
		                "pdClassName": "西装2", //*
		                "sortNum": 2,
		                "subProductClassList": [
		                	{
				                "addTime": 1477652520000,
				                "delState": "1",
				                "editTime": 1477652520000,
				                "editorId": 1,
				                "editorName": "admin",
				                "id": 10,   //*
				                "parentId": 3,
				                "pdClassName": "西装3", //*
				                "sortNum": 2,
				                "subProductClassList": [],
				                "viewState": "1"
				            }
		                ],
		                "viewState": "1"
		            },
		            {
		                "addTime": 1477652520000,
		                "delState": "1",
		                "editTime": 1477652520000,
		                "editorId": 1,
		                "editorName": "admin",
		                "id": 10,   //*
		                "parentId": 3,
		                "pdClassName": "西装", //*
		                "sortNum": 2,
		                "subProductClassList": [],
		                "viewState": "1"
		            },
		            {
		                "addTime": 1477652520000,
		                "delState": "1",
		                "editTime": 1477652520000,
		                "editorId": 1,
		                "editorName": "admin",
		                "id": 61,   //*
		                "parentId": 3,
		                "pdClassName": "西装", //*
		                "sortNum": 2,
		                "subProductClassList": [],
		                "viewState": "1"
		            }
            ],
            "viewState": "1"
        }
    ],
    "viewState": "1"
  }
]

$('.xxx').SelectChange(arr,{
   menu:[
    {
   	  cName: 'select1',
   	  linkId: 'id',
   	  selectText: 'pdClassName',
   	  arrName: 'subProductClassListss'
    },
    {
   	  cName: 'select2',
   	  linkId: 'id',
   	  selectText: 'pdClassName',
   	  arrName: 'subProductClassList'
    }
  ]
});

```