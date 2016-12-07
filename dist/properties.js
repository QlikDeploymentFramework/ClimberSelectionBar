define(["jquery","qlik","ng!$q","ng!$http","./lib/js/components/pp-climber/pp-climber"],function(a,b,c){"use strict";var d=b.currApp(),e=function(){var a=c.defer();return d.getAppObjectList("masterobject",function(b){var c=[],d=[],e=[];return _.each(b.qAppObjectList.qItems,function(a){"table"==a.qData.visualization&&_.each(a.qMeta.tags,function(a){c.push(a)})}),d=_.uniq(c),e.push({value:"All tables",label:"All tables"}),_.each(d,function(a){e.push({value:a,label:a})}),a.resolve(e)}),a.promise},f={type:"string",component:"dropdown",label:"Select tag",ref:"props.tagSetting",defaultValue:"All tables",options:function(){return e().then(function(a){return a})}},g={type:"boolean",component:"switch",label:"Tag color",ref:"props.tagColor",options:[{value:!0,label:"Colors"},{value:!1,label:"No colors"}],defaultValue:!0},h={type:"string",component:"dropdown",label:"Dimensions and measures sort order",ref:"props.dimensionSortOrder",defaultValue:"SortByA",options:[{value:"SortByA",label:"Sort alphabetical"},{value:"SortByTableOrder",label:"Sort by table order"}]},i={type:"boolean",component:"switch",label:"Allow collapse",ref:"props.allowCollapse",options:[{value:!0,label:"Yes"},{value:!1,label:"No"}],defaultValue:!0},j={type:"number",label:"Trigger collapse min width",ref:"props.collapseMinWidth",defaultValue:200,show:function(a){return a.props.allowCollapse}},k={type:"number",label:"Trigger collapse min height",ref:"props.collapseMinHeight",defaultValue:200,show:function(a){return a.props.allowCollapse}},l={type:"string",label:"Display text",ref:"props.displayText",defaultValue:"Custom Report"},m={component:"pp-cl-customreport",translation:"Common.About",show:!0},n={uses:"settings",items:{settings:{type:"items",label:"Settings",items:{tagColor:g,sortOrder:h,allowCollapse:i,collapseMinWidth:j,collapseMinHeight:k,displayText:l}},about:m}},o={type:"items",label:"Setup",items:{tagPanel:{type:"items",label:"Tag",items:{tagList:f}}}},p={type:"items",component:"expandable-items",translation:"properties.addons",items:{dataHandling:{uses:"dataHandling",items:{suppressZero:{show:!1}}}}};return{type:"items",component:"accordion",items:{tag:o,addons:p,appearance:n}}});