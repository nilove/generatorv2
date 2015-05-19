
var app = angular.module('drag-app', ["xeditable",
    "ui.bootstrap",
    "ngSanitize",
    "angular-medium-editor",
    "quramy-recursive",
    "ui.tree",
    "angular-flexslider"
]);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    editableOptions.mode = "popup";
});

app.controller('DragDropController', function($scope, $http, $filter, $sce) {




    $scope.bgposition = [{
        value: "left top"
    }, {
        value: "left center"
    }, {
        value: "left bottom"
    }, {
        value: "right top"
    }, {
        value: "right center"
    }, {
        value: "right bottom"
    }, {
        value: "center top"
    }, {
        value: "center center"
    }, {
        value: "center bottom"
    }];


    $http.get('widget.json').success(function(data) {
        $scope.widget_defination = data;

    });


    $http.get('template.json').success(function(data) {
        $scope.templatelist = data;

    });


    $scope.columns = [{
        value: "col-md-1",
        text: 'col-md-1'
    }, {
        value: "col-md-2",
        text: 'col-md-2'
    }, {
        value: "col-md-3",
        text: 'col-md-3'
    }, {
        value: "col-md-4",
        text: 'col-md-4'
    }, {
        value: "col-md-5",
        text: 'col-md-5'
    }, {
        value: "col-md-6",
        text: 'col-md-6'
    }, {
        value: "col-md-7",
        text: 'col-md-7'
    }, {
        value: "col-md-8",
        text: 'col-md-8'
    }, {
        value: "col-md-9",
        text: 'col-md-9'
    }, {
        value: "col-md-10",
        text: 'col-md-10'
    }, {
        value: "col-md-11",
        text: 'col-md-11'
    }, {
        value: "col-md-12",
        text: 'col-md-12'
    }];


    $scope.filtermargin=function(margin)
    {
        var marginsp=margin.split("-");
        marginsp[marginsp.length -1]=parseInt(marginsp[marginsp.length -1]);

        return ((marginsp[marginsp.length -1]/12)*100).toFixed(2); 
    };

    $scope.InportThis = function() {
        try {
            $scope.accachedwidget = JSON.parse($scope.accachedwidgetparse);
        } catch (e) {
            return false;
        }
    };




    $scope.GetContent = function(obj) {
        var str = "<i class='fa " + obj.icons + "'></i>" + obj.text;
        //alert(str);
        return str;
    };

    $scope.previewtext = "Enable Preview";
    $scope.preview = false;

    $scope.SetThisIcon = function(data, icon) {
        data.icon = icon;
    }

    $scope.EnablePrview = function() {
        if (!$scope.preview) {
            $scope.preview = true;
            $scope.previewtext = "Disable Preview";
            $(".row_edit_area").hide();
            $(".mn-height").css("border", "none");
            $(".dottedborder").css("border", "none");
            $(".edit-buttons").hide();
            $(".upload_button_container").hide();
            $(".commonhidden").hide();
        } else {
            $scope.preview = false;
            $scope.previewtext = "Enable Preview";
            $(".row_edit_area").show();
            $(".mn-height").css("border", "1px solid grey");
            $(".dottedborder").css("border", "1px solid grey");
            $(".edit-buttons").show();
            $(".upload_button_container").show();
            $(".commonhidden").show();
        }
    }



    $scope.filterHtml = function(html_element) {
        return $sce.trustAsHtml(html_element);
    };

    $scope.filterUrl = function(html_element) {
        return $sce.trustAsResourceUrl(html_element);
    };

    $scope.skey = parseInt(localStorage.getItem("pagescope"));

    $scope.setPageScope = function(key) {
        //alert(key);
        $scope.skey = key;
    };

    $scope.ApplyTemplate = function(template) {
        $http.get(template).success(function(data) {
            //alert($scope.skey);
            //console.log(data);
            $scope.accachedwidget[$scope.skey]["nodes"] = data;
        });
    }



    $scope.AddThisBlock = function(parsed_key) {
        $scope.EnablePrview();
        //alert($scope.widget_defination[parsed_key]["type"]);
        if ($scope.widget_defination[parsed_key]["type"] == 'row' || $scope.widget_defination[parsed_key]["type"] == 'column') {
            var node = {
                "id": "node" + new Date().getTime(),
                "name": $scope.widget_defination[parsed_key]["type"],
                "w_type": $scope.widget_defination[parsed_key]["type"],
                "class": $scope.widget_defination[parsed_key]["wclass"],
                "extraclass": $scope.widget_defination[parsed_key]["extraclass"],
                "margintopclass": "mt0",
                "marginbottomclass": "mb0",
                "background_property": {
                    "background_color": "",
                    "background_image": "none",
                    "background_position": "center center",
                    'background_repeat': 'no-repeat',
                    "height": 100,
                    "backgroundopacity": 0
                },
                "template": "templates/row.html",
                "nodes": []
            };
            $scope.accachedwidget[$scope.skey]["nodes"].push(node);
        } else {
            $http.get($scope.widget_defination[parsed_key]["widget_conf"]).success(function(data) {
                //alert($scope.widget_defination[parsed_key]["type"]);
                if ($scope.widget_defination[parsed_key]["type"] == "compound-widget") {
                    var wrp_class = "";
                    if (typeof(data.wrapper_class) != "undefined") {
                        wrp_class = data.wrapper_class;
                    }
                    var rootnode = {
                        "id": "node" + new Date().getTime(),
                        "name": $scope.widget_defination[parsed_key]["title"],
                        "w_type": "row",
                        "class": "",
                        "extraclass": wrp_class,
                        "margintopclass": "mt0",
                        "marginbottomclass": "mb0",
                        "background_property": {
                            "background_color": data.backgroundcolor,
                            "background_image": data.backgrondimage,
                            "height": 20,
                            "backgroundopacity": data.backgroundopacity
                        },
                        "template": "templates/row.html",
                        "nodes": []
                    };
                    var wrappernode = {
                        "id": "node" + new Date().getTime() + "" + Math.floor((Math.random() * 100) + 1),
                        "name": $scope.widget_defination[parsed_key]["title"],
                        "w_type": "row",
                        "class": "",
                        "extraclass": "row",
                        "background_property": {
                            "background_color": "",
                            "background_image": "",
                            "background_position": "",
                            "background_repeat": "no-repeat",
                            "height": 100
                        },
                        "template": "templates/row.html",
                        "nodes": []
                    };
                    for (j in data["rows"]) {
                        for (var i in data["rows"][j]["columns"]) {

                            var node = {
                                "id": "node" + new Date().getTime() + "" + Math.floor((Math.random() * 100) + 1),
                                "name": "Column" + " " + (rootnode.nodes.length + 1),
                                "w_type": "column",
                                "class": data["rows"][j]["columns"][i]["wrapper_class"],
                                "extraclass": data["rows"][j]["columns"][i]["wrapper_extra_class"],
                                "background_property": {
                                    "background_color": "",
                                    "background_image": "",
                                    "background_position": "",
                                    'background_repeat': '',
                                    "height": 100,
                                    "backgroundopacity": 0
                                },
                                "template": "templates/row.html",
                                "nodes": [{
                                    "id": "widget" + new Date().getTime() + "" + Math.floor((Math.random() * 100) + 1),
                                    "class": "posrelative",
                                    "extraclass": "",
                                    "w_type": "widget",
                                    "type": data["rows"][j]["columns"][i]["type"],
                                    "template": data["rows"][j]["columns"][i]["template"],
                                    "widgetdata": data["rows"][j]["columns"][i],
                                    "name": data["rows"][j]["columns"][i]["type"]
                                }]
                            };
                            if ((i % 1) !== 0) {
                                continue;
                            }
                            wrappernode.nodes.push(node);
                        }
                        if ((j % 1) !== 0) {
                            continue;
                        }

                    }
                    rootnode.nodes.push(wrappernode);
                    console.log(rootnode);
                    $scope.accachedwidget[$scope.skey]["nodes"].push(rootnode);
                } else {

                    var node = {
                        "id": "widget" + new Date().getTime(),
                        "class": "posrelative",
                        "extraclass": "",
                        "w_type": "widget",
                        "type": $scope.widget_defination[parsed_key]["type"],
                        "template": $scope.widget_defination[parsed_key]["template"],
                        "widgetdata": data,
                        "name": $scope.widget_defination[parsed_key]["type"] + " ",
                        "background_property": {
                            "background_color": "",
                            "background_image": "",
                            "background_position": "",
                            'background_repeat': '',
                            "height": 20,
                            "backgroundopacity": 0
                        }
                    };


                    var wrp_class = "";
                    if (typeof(data.wrapper_class) != "undefined") {
                        wrp_class = data.wrapper_class;
                    }


                    var rootnode = {
                        "id": "node" + new Date().getTime(),
                        "name": $scope.widget_defination[parsed_key]["title"],
                        "w_type": "row",
                        "class": $scope.widget_defination[parsed_key]["wclass"],
                        "extraclass": wrp_class,
                        "margintopclass": "mt0",
                        "marginbottomclass": "mb0",
                        "background_property": {
                            "background_color": data.backgroundcolor,
                            "background_image": data.backgrondimage,
                            "height": 20,
                            "backgroundopacity": data.backgroundopacity
                        },
                        "template": "templates/row.html",
                        "nodes": []
                    };
                    rootnode.nodes.push(node);


                    $scope.accachedwidget[$scope.skey]["nodes"].push(rootnode);
                }
            });


        }
    };




    $scope.RefreshScope = function() {
        //alert("here");
        localStorage.setItem("pagescope", $scope.skey);
        localStorage.setItem("generatorscope", JSON.stringify($scope.accachedwidget));
        location.href = self.location;
    }

    $scope.resetcanvas = function() {
        $scope.accachedwidget = [];
        $scope.RefreshScope();
    }

    $scope.ReloadFromeScope = function() {

       
        if($scope.accachedwidget.length == 0)
        {
            $scope.setPageScope(0);
            localStorage.setItem("pagescope", $scope.skey);
        }
        try {
            $scope.accachedwidget = JSON.parse(localStorage.getItem("generatorscope"));
            $scope.setPageScope(parseInt(localStorage.getItem("pagescope")));
            if ($scope.accachedwidget.length == 0) {
                $scope.addThisPage();
                $scope.setPageScope(0);

            }


        } catch (e) {
            $scope.accachedwidget = [];
            $scope.addThisPage();
            $scope.setPageScope(0);
            return false;
        }
        

        //alert();
        
        $scope.executeAutoSave();

    }

    $scope.executeAutoSave = function() {
        //alert("auto "+$scope.skey);
        localStorage.setItem("pagescope", $scope.skey);
        localStorage.setItem("generatorscope", JSON.stringify($scope.accachedwidget));
        setTimeout(function() {
            $scope.executeAutoSave();
        }, 1000);
    }

    $scope.accachedwidget = [];

    $scope.addPage = function(pagename) {
        $scope.accachedwidget.push({
            "id": "page" + new Date().getTime(),
            "name": pagename,
            "nodes": [],
            "background_property": {
                "background_color": "#fff",
                "background_image": "",
                "background_position": "",
                'background_repeat': '',
                'height': "auto"
            }
        });
        $scope.setPageScope($scope.accachedwidget.length - 1);
    };




    $scope.pagename = "";
    $scope.addThisPage = function() {
        $scope.pagename = "Chameleon " + ($scope.accachedwidget.length + 1);
        if ($scope.pagename != "") {
            $scope.addPage($scope.pagename);
            $scope.pagename = "";
        }
    };



    $scope.DeletePage = function(pagekey) {
        if($scope.accachedwidget.length > 1)
        {
            if(pagekey > 0)
            {
                $scope.skey= pagekey-1;
                $scope.accachedwidget.splice(pagekey, 1);
            }
            else
            {
                $scope.skey= pagekey+1;
                $scope.accachedwidget.splice(pagekey, 1);
            }
                
        }
        
    };



    $scope.ShowSettings = function(id) {
        $(".generator-sidebar.left-bar").removeClass("active");
        $("#settings_" + id).addClass("active");
        $scope.showthis = true;
    }




    $scope.DisPlayPageSettings = function(pagekey) {
        $(".generator-sidebar.left-bar").removeClass("active");
        $scope.setPageScope(pagekey);
        $("#base_page_settings").addClass("active");
    };



    $scope.HideSettings = function() {
        $(".generator-sidebar.left-bar").removeClass("active");
    };



    $scope.TriggerSliderUpload = function(wi_id, sl_id) {
        $("#slider_file_" + wi_id + "_" + sl_id).trigger("click");
    }




    $scope.remove = function(scope) {
        scope.remove();
    };

    $scope.toggle = function(scope) {
        scope.toggle();
    };

    $scope.newSubItem = function(scope) {
        var nodeData = scope.$modelValue;
        nodeData.items.push({
            title: nodeData.title + '.' + (nodeData.items.length + 1),
            link: nodeData.link,
            icons: nodeData.icons,
            items: []
        });
    };

    $scope.Export = function() {
        var data = {
            "obj": JSON.stringify($scope.accachedwidget)
        };

        $http.post('export.php', data)
            .success(function(data, status, headers, config) {
                location.href = data;
            })
            .error(function(data, status, headers, config) {
                console.log('error');
            });
    }

    $scope.CloneThis = function(page) {
        var lc_page = page;
        $scope.accachedwidget.push(lc_page);
    }

    $scope.ReloadFromeScope();


});




app.directive('dargable', function() {
    // Runs during compile
    return {
        restrict: 'A',
        link: function($scope, iElm, iAttrs, controller) {
            $(iElm).draggable({
                zIndex: 10000,
                helper: 'clone',
                start: function(e, ui) {

                },
                stop: function(e, ui) {

                }
            });
        }
    };
});




app.directive('filemodel', ['$parse', '$http', function($parse, $http) {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            element.bind('change', function() {
                scope.$apply(function() {
                    var fd = new FormData();
                    fd.append("file", element[0].files[0]);
                    $http.post("upload.php", fd, {
                        withCredentials: true,
                        headers: {
                            'Content-Type': undefined
                        },
                        transformRequest: angular.identity
                    }).success(function(filename) {
                        ngModel.$setViewValue(filename);
                    }).error(function() {

                    });
                });
            });
        }
    };
}]);



app.directive('columnslider', ['$parse', function($parse) {
    return {
        restrict: 'A',
        require: "ngModel",
        scope: {
            initialwidth: "="
        },
        link: function(scope, element, attrs, ngModel) {
            $(element).slider({
                range: "min",
                value: parseInt(scope.initialwidth),
                min: 1,
                max: 12,
                slide: function(event, ui) {
                    scope.$apply(function() {
                        ngModel.$setViewValue("col-md-" + ui.value);
                    });
                }
            });
        }
    };
}]);

app.directive('marginslider', ['$parse', function($parse) {
    return {
        restrict: 'A',
        require: "ngModel",
        scope: {
            initialwidth: "=",
            marginpos: "="
        },
        link: function(scope, element, attrs, ngModel) {
            $(element).slider({
                value: parseInt(scope.initialwidth),
                min: 0,
                max: 100,
                step: 10,
                slide: function(event, ui) {
                    //alert(scope.marginpos);
                    scope.$apply(function() {

                        ngModel.$setViewValue(scope.marginpos + "" + ui.value);
                    });
                }
            });
        }
    };
}]);

app.directive('opacityslider', ['$parse', function($parse) {
    return {
        restrict: 'A',
        require: "ngModel",
        scope: {
            initialwidth: "="
        },
        link: function(scope, element, attrs, ngModel) {
            $(element).slider({
                range: "min",
                value: parseInt(parseFloat(scope.initialwidth) * 10),
                min: 0,
                max: 10,
                slide: function(event, ui) {
                    scope.$apply(function() {
                        //alert(parseInt(ui.value)/10);
                        ngModel.$setViewValue((parseInt(ui.value) / 10).toString());
                    });
                }
            });
        }
    };
}]);

app.directive('addnewtab', ['$parse', function($parse) {
    return {
        restrict: 'A',
        scope: {
            currenttab: "="
        },
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    var node = {
                        "id": "node_" + new Date().getTime(),
                        "name": "Row ",
                        "w_type": "row",
                        "class": "row",
                        "extraclass": "",
                        "margintopclass": "mt0",
                        "marginbottomclass": "mb0",
                        "background_property": {
                            "background_color": "",
                            "background_image": "",
                            "background_position": "",
                            'background_repeat': '',
                            'height': 200
                        },
                        "template": "templates/row.html",
                        "nodes": []
                    };

                    ngModel.$viewValue.push({
                        "title": scope.currenttab.title,
                        "id": "node" + new Date().getTime(),
                        "nodes": [node]
                    });

                });
            });
        }
    };
}]);


app.directive('addnewresumetab', ['$parse', function($parse) {
    return {
        restrict: 'A',
        scope: {
            currenttab: "="
        },
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {


                    ngModel.$viewValue.push({
                        "name": scope.currenttab.name,
                        "image": scope.currenttab.image,
                        "url": scope.currenttab.url,
                        "text": scope.currenttab.text

                    });

                });
            });
        }
    };
}]);

app.directive('twitterfeed', ['$parse', function($parse) {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    ngModel.$viewValue.push({
                        "title": ngModel.$viewValue[ngModel.$viewValue.length - 1].title,
                        "text": ngModel.$viewValue[ngModel.$viewValue.length - 1].text
                    });
                });
            });
        }
    };
}]);

app.directive('removetwitterfeed', ['$parse', function($parse) {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    ngModel.$viewValue.splice(ngModel.$viewValue.length - 1, 1);
                });
            });
        }
    };
}]);

app.directive('addtextslide', ['$parse', function($parse) {
    return {
        restrict: 'A',
        scope: {
            currentslide: "="
        },
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    ngModel.$viewValue.push({
                        "text": scope.currentslide.text,
                        "title": scope.currentslide.title,
                        "company": scope.currentslide.company
                    });

                });

                //scope.$parent.RefreshScope();


            });
        }
    };
}]);


app.directive('addarticle', ['$parse', function($parse) {
    return {
        restrict: 'A',
        scope: {
            currentslide: "="
        },
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    ngModel.$viewValue.push(
                        angular.copy(scope.currentslide));

                });

                scope.$parent.RefreshScope();


            });
        }
    };
}]);



app.directive('removetextslide', ['$parse', function($parse) {
    return {
        restrict: 'A',
        scope: {
            slideindex: "="
        },
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    ngModel.$viewValue.splice(scope.slideindex, 1);
                });
            });
        }
    };
}]);

app.directive('addslide', ['$parse', function($parse) {
    return {
        restrict: 'A',
        scope: {
            currentslide: "="
        },
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    ngModel.$viewValue.push({
                        "image": scope.currentslide.image,
                        "text": scope.currentslide.text,
                        "heading": scope.currentslide.heading
                    });

                });

                //scope.$parent.RefreshScope();


            });
        }
    };
}]);

app.directive('removeslide', ['$parse', function($parse) {
    return {
        restrict: 'A',
        scope: {
            slideindex: "="
        },
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    ngModel.$viewValue.splice(scope.slideindex, 1);
                });
            });
        }
    };
}]);

app.directive('txContenteditable', ['$compile', function($compile) {
    return {
        restrict: "A",
        scope: {
            old: '@'
        },
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            element.bind("click", function(e) {
                e.preventDefault();
            });
            //element.attr("contenteditable", true);
            function read() {
                ngModel.$setViewValue(element.html());


            };
            ngModel.$render = function() {

                element.html(ngModel.$viewValue || '');
            };



            element.bind("keydown", function(e) {
                if (e.keyCode == 13) {
                    document.execCommand('insertHTML', false, '<br/>');
                    return false;
                }
            });

            element.bind("blur keyup change", function(e) {
                scope.$apply(read);

            });

            var editor = new MediumEditor(element, {
                excludedActions: ['u', 'h3', 'blockquote'],
                buttonLabels: 'fontawesome'
            });
            /*$(element).mediumInsert({
                editor: editor,
                addons: {
                  images: {},
                  embeds: {
                    oembedProxy: 'http://medium.iframe.ly/api/oembed?iframe=1'
                  },
                  tables: {}
                }
              });*/
        }
    };
}]);

app.directive('plaintxContenteditable', ['$compile', function($compile) {
    return {
        restrict: "A",
        scope: {
            old: '@'
        },
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            element.bind("click", function(e) {
                e.preventDefault();
            });

            element.attr("contenteditable", true);

            function read() {
                ngModel.$setViewValue(element.html());
            }

            ngModel.$render = function() {

                element.html(ngModel.$viewValue || '');

            };

            element.bind("keydown", function(e) {
                if (e.keyCode == 13) {
                    //alert("here");
                    document.execCommand('insertHTML', false, '<br>');
                    return false;
                }
            });

            element.bind("blur keyup change", function(e) {
                scope.$apply(read);
            });

        }
    };
}]);

app.directive("sidebarposition", function() {
    return {
        restrict: 'A',
        link: function(scope, iElm, iAttrs) {
            $(window).scroll(function() {
                scope.$apply(function() {

                });
            });
        }
    };
});

app.directive("colorpicker", function() {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, iElm, iAttrs, ngModel) {
            $(iElm).ColorPicker({
                    onSubmit: function(hsb, hex, rgb, el) {
                        $(el).val("#" + hex);
                        $(el).ColorPickerHide();
                        scope.$apply(function() {
                            ngModel.$setViewValue("#" + hex);
                        });

                    },
                    onBeforeShow: function() {
                        $(this).ColorPickerSetColor(this.value);
                    }
                })
                .bind('keyup', function() {
                    $(this).ColorPickerSetColor(this.value);
                });
        }
    };
});


app.directive("fontpicker", function() {
    return {
        restrict: 'A',
        link: function(scope, iElm, iAttrs, ngModel) {
            $(iElm).googleFontPicker({
                defaultFont: 'Calligraffitti',
                callbackFunc: function(fontFamily) {
                    $('body').css('fontFamily', fontFamily);
                }
            });
        }
    };
});


app.directive('addnavlink', ['$parse', function($parse) {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    ngModel.$viewValue.push({
                        "title": "Link " + ngModel.$viewValue.length
                    });
                });
            });
        }
    };
}]);

app.directive('removelink', ['$parse', function($parse) {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    ngModel.$viewValue.splice((ngModel.$viewValue.length - 1), 1);
                });
            });
        }
    };
}]);


app.directive('addnode', ['$parse', function($parse) {
    return {
        restrict: 'A',
        require: "ngModel",
        scope: {
            widgettype: "=",
            wclass: "=",
            extraclass: "="
        },
        link: function(scope, element, attrs, ngModel) {

            $(element).click(function() {
                scope.$apply(function() {
                    var node = {
                        "id": "node" + new Date().getTime(),
                        "name": scope.widgettype + " " + (ngModel.$viewValue.nodes.length + 1),
                        "w_type": scope.widgettype,
                        "class": scope.wclass ,
                        "margintopclass": "mt0",
                        "marginbottomclass": "mb0",
                        "extraclass": scope.extraclass,
                        "background_property": {
                            "background_color": "",
                            "background_image": "",
                            "background_position": "",
                            'background_repeat': '',
                            "height": 200
                        },
                        "template": "templates/row.html",
                        "nodes": []
                    };
                    ngModel.$viewValue.nodes.push(node);
                });
            });
        }
    };
}]);

app.directive('removenode', ['$parse', function($parse) {
    return {
        restrict: 'A',
        scope: {
            key: "="
        },
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    ngModel.$viewValue.splice(scope.key, 1);
                });
            });
        }
    };
}]);




app.directive('acceptwidgetbyclick', ['$parse', '$http', function($parse, $http) {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    scope.$parent.EnablePrview();
                    var parsed_key = parseInt($(element).attr("data-key"));
                    if (ngModel.$viewValue.w_type != "widget") {
                        if (scope.$parent.widget_defination[parsed_key]["type"] == 'row' || scope.$parent.widget_defination[parsed_key]["type"] == 'column') {
                            var node = {
                                "id": "node" + new Date().getTime(),
                                "name": scope.$parent.widget_defination[parsed_key]["type"] + " " + (ngModel.$viewValue.nodes.length + 1),
                                "w_type": scope.$parent.widget_defination[parsed_key]["type"],
                                "class": scope.$parent.widget_defination[parsed_key]["wclass"],
                                "extraclass": scope.$parent.widget_defination[parsed_key]["extraclass"],
                                "margintopclass": "mt0",
                                "marginbottomclass": "mb0",
                                "background_property": {
                                    "background_color": "",
                                    "background_image": "",
                                    "background_position": "",
                                    'background_repeat': '',
                                    "height": 100,
                                    "backgroundopacity": 0
                                },
                                "template": "templates/row.html",
                                "nodes": []
                            };
                            ngModel.$viewValue.nodes.push(node);
                        } else {
                            $http.get(scope.$parent.widget_defination[parsed_key]["widget_conf"]).success(function(data) {
                                if (scope.$parent.widget_defination[parsed_key]["type"] == "compound-widget") {
                                    for (j in data["rows"]) {
                                        var rootnode = {
                                            "id": "node" + new Date().getTime() + "" + Math.floor((Math.random() * 100) + 1),
                                            "name": "row" + " " + (ngModel.$viewValue.nodes.length + 1),
                                            "w_type": "row",
                                            "class": "",
                                            "extraclass": "row",
                                            "background_property": {
                                                "background_color": "",
                                                "background_image": "",
                                                "background_position": "",
                                                "background_repeat": "",
                                                "height": 100
                                            },
                                            "template": "templates/row.html",
                                            "nodes": []
                                        };
                                        for (var i in data["rows"][j]["columns"]) {
                                            var node = {
                                                "id": "node" + new Date().getTime() + "" + Math.floor((Math.random() * 100) + 1),
                                                "name": "Column" + " " + (rootnode.nodes.length + 1),
                                                "w_type": "column",
                                                "class": data["rows"][j]["columns"][i]["wrapper_class"] + " mn-height",
                                                "extraclass": data["rows"][j]["columns"][i]["wrapper_extra_class"],
                                                "background_property": {
                                                    "background_color": "",
                                                    "background_image": "",
                                                    "background_position": "",
                                                    'background_repeat': '',
                                                    "height": 100,
                                                    "backgroundopacity": 0
                                                },
                                                "template": "templates/row.html",
                                                "nodes": [{
                                                    "id": "widget" + new Date().getTime() + "" + Math.floor((Math.random() * 100) + 1),
                                                    "class": "posrelative",
                                                    "extraclass": "",
                                                    "w_type": "widget",
                                                    "type": data["rows"][j]["columns"][i]["type"],
                                                    "template": data["rows"][j]["columns"][i]["template"],
                                                    "widgetdata": data["rows"][j]["columns"][i],
                                                    "name": data["rows"][j]["columns"][i]["type"] + " "
                                                }]
                                            };
                                            if ((i % 1) !== 0) {
                                                continue;
                                            }
                                            rootnode.nodes.push(node);
                                        }
                                        if ((j % 1) !== 0) {
                                            continue;
                                        }
                                        ngModel.$viewValue.nodes.push(rootnode);
                                    }
                                    ngModel.$viewValue.extraclass = data.wrapper_class;
                                    ngModel.$viewValue.background_property.background_image = data.backgrondimage;
                                    ngModel.$viewValue.background_property.backgroundopacity = data.backgroundopacity;
                                    ngModel.$viewValue.background_property.background_color = data.backgroundcolor;
                                } else {

                                    var node = {
                                        "id": "widget" + new Date().getTime(),
                                        "class": "posrelative",
                                        "extraclass": "",
                                        "w_type": "widget",
                                        "type": scope.$parent.widget_defination[parsed_key]["type"],
                                        "template": scope.$parent.widget_defination[parsed_key]["template"],
                                        "widgetdata": data,
                                        "name": scope.$parent.widget_defination[parsed_key]["type"] + " ",
                                        "background_property": {
                                            "background_color": "",
                                            "background_image": "",
                                            "background_position": "",
                                            'background_repeat': '',
                                            "height": 20,
                                            "backgroundopacity": 0
                                        }
                                    };
                                    if (typeof(data.wrapper_class) != "undefined") {
                                        ngModel.$viewValue.extraclass = data.wrapper_class;
                                    }
                                    ngModel.$viewValue.background_property.background_image = data.backgrondimage;
                                    ngModel.$viewValue.background_property.backgroundopacity = data.backgroundopacity;
                                    ngModel.$viewValue.background_property.background_color = data.backgroundcolor;
                                    ngModel.$viewValue.background_property.height = 20;
                                    ngModel.$viewValue.nodes.push(node);
                                }
                            });
                        }
                    }
                });
            });

        }
    }
}]);





app.directive('sortablewidget', ['$parse', function($parse) {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).sortable({
                handle: ".widget_edit_area,.dragholder",

                start: function() {},
                stop: function() {
                    scope.$apply(function() {
                        var sorted = $(element).sortable("toArray", {
                            attribute: 'data-id'
                        });
                        var temp = [];
                        for (var i in sorted) {
                            for (var j in ngModel.$viewValue.nodes) {
                                if (ngModel.$viewValue.nodes[j]["id"] == sorted[i]) {

                                    temp.push(ngModel.$viewValue.nodes[j]);
                                }
                            }
                        }
                        for (var i in temp) {
                            ngModel.$viewValue.nodes[i] = temp[i];
                        }
                    });
                }
            });

        }
    };
}]);

app.directive('addmainmenu', ['$parse', function($parse) {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    //if(scope.menutitle != "")
                    //{
                    ngModel.$viewValue.push({
                        "title": scope.menutitle,
                        "link": scope.menulink,
                        "text": scope.menutext,
                        "image": scope.menuimage,
                        "icons": scope.icons,
                        "background": scope.background,
                        "items": []
                    });
                    scope.menutitle = "";
                    scope.menulink = "";
                    scope.menutext = "";
                    scope.icons = "";
                    //}  
                });

            });
        }
    };
}]);


app.directive('addsliderfrommodal', ['$parse', function($parse) {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            $(element).click(function() {
                scope.$apply(function() {
                    //if(scope.menutitle != "")
                    //{
                    ngModel.$viewValue.push({
                        "heading": scope.sliderheading,
                        "text": scope.slidertext,
                        "image": scope.sliderimage,
                        "items": []
                    });
                    scope.sliderheading = "";
                    scope.slidertext = "";
                    scope.sliderimage = "";

                    scope.$parent.RefreshScope();
                    //}  
                });

            });
        }
    };
}]);

app.directive('iconpicker', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            $(element).qlIconPicker({
                'save': 'class'
            });
            var $body = $('body');
            $body.on('iconselected.queryloop', function(e, icon) {
                scope.$apply(function() {
                    scope.icons = icon;
                });
            });
        }
    };
}]);

app.directive('navsettings', ['$parse', function($parse) {
    return {
        restrict: 'A',
        templateUrl: 'modal/menu.html',
        link: function(scope, element, attrs) {}
    };
}]);

app.directive('navsettingswithimage', ['$parse', function($parse) {
    return {
        restrict: 'A',
        templateUrl: 'modal/menuwithimage.html',
        link: function(scope, element, attrs) {}
    };
}]);


app.directive('youtubemodal', ['$parse', function($parse) {
    return {
        restrict: 'A',
        templateUrl: 'modal/youtube.html',
        link: function(scope, element, attrs) {}
    };
}]);

app.directive('htmlinputpopup', ['$parse', function($parse) {
    return {
        restrict: 'A',
        templateUrl: 'modal/htmlwidget.html',
        link: function(scope, element, attrs) {}
    };
}]);


app.directive('navsettingswithtext', ['$parse', function($parse) {
    return {
        restrict: 'A',
        templateUrl: 'modal/menuwithtext.html',
        link: function(scope, element, attrs) {}
    };
}]);

app.directive('socialsettings', ['$parse', function($parse) {
    return {
        restrict: 'A',
        templateUrl: 'modal/sicialmenu.html',
        link: function(scope, element, attrs) {}
    };
}]);


app.directive('icons', ['$parse', function($parse) {
    return {
        restrict: 'A',
        templateUrl: 'modal/icons.html',
        link: function(scope, element, attrs) {}
    };
}]);

app.directive('exportmodal', ['$parse', function($parse) {
    return {
        restrict: 'A',
        templateUrl: 'modal/exportmodal.html',
        link: function(scope, element, attrs) {}
    };
}]);

app.directive('importmodal', ['$parse', function($parse) {
    return {
        restrict: 'A',
        templateUrl: 'modal/importmodal.html',
        link: function(scope, element, attrs) {}
    };
}]);

app.directive('slidermodal', ['$parse', function($parse) {
    return {
        restrict: 'A',
        templateUrl: 'modal/slidermodal.html',
        link: function(scope, element, attrs) {}
    };
}]);


app.directive('sfmenu', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).superfish();
        }
    };
}]);


app.directive('headerdirective', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var $module = $(element).parent();

            $module.find('.container .search').each(function() {
                var $this = $(this);

                $this.find('.toggle').on('click', function(event) {
                    event.preventDefault();
                    $this.addClass('active');
                });

                $this.find('input[type="text"]').on('blur', function() {
                    $this.removeClass('active');
                });
            });

            $module.find('.container .language').each(function() {
                var $this = $(this);

                $this.find('.toggle').on('click', function(event) {
                    event.preventDefault();

                    if (!$this.hasClass('active')) {
                        $this.addClass('active');
                    } else {
                        $this.removeClass('active');
                    }
                });
            });


        }
    };
}]);



app.directive('staticuoutabs', ['$parse', function($parse) {
    return {
        restrict: 'A',

        link: function(scope, element, attrs) {
            $(element).uouTabs();

        }
    };
}]);


app.directive('rangeslider', ['$parse', function($parse) {
    return {
        restrict: 'A',

        link: function(scope, element, attrs) {
            $(element).rangeslider({
                polyfill: false,
                onInit: function () {
                  this.$range.wrap('<div class="uou-rangeslider"></div>').parent().append('<div class="tooltip">' + this.$element.data('unit-before') + '<span></span>' + this.$element.data('unit-after') + '</div>');
                },
                onSlide: function(value, position) {
                  var $span = this.$range.parent().find('.tooltip span');
                  $span.html(position);
                }
              });

        }
    };
}]);




app.directive("uoutabs", function($timeout) {
    return {

        scope: {
            tabs: '=tabs'
        },
        link: function(scope, element, attr) {
            $timeout(function() {
                return $(element).uouTabs();
            }, 1);

            scope.$watch('tabs.length', function(n, o) {
                console.log(n)
                    //alert(n);
                if (n > o)

                    $timeout(function() {
                    return $(element).uouTabs();
                }, 1);
            });


        }
    }
});


app.directive("uouaccordians", function($timeout) {
    return {

        scope: {
            tabs: '=tabs'
        },
        link: function(scope, element, attr) {
            $timeout(function() {
                return $(element).uouAccordions();
            }, 1);

            scope.$watch('tabs.length', function(n, o) {
                //console.log(n)
                if (n > 0)

                    $timeout(function() {
                    return $(element).uouAccordions();
                }, 1);
            })


        }
    }
});

app.directive('hasbgimage', ['$parse', function($parse) {
    return {
        restrict: 'A',

        link: function(scope, element, attrs) {
            $(element).each(function() {
                var e = $(this),
                    a = e.data("bg-image"),
                    i = e.data("bg-color"),
                    t = e.data("bg-opacity"),
                    n = $("<div/>", {
                        "class": "content"
                    }),
                    s = $("<div/>", {
                        "class": "background"
                    });
                //alert(a);
                t ? (e.children().wrapAll(n), e.append(s), s.css({
                    "background-image": "url(" + a + ")",
                    "background-color": "#" + i,
                    opacity: t
                })) : e.css("background-image", "url(" + a + ")")
            })
        }
    };
}]);

app.directive('blockbgimage', ['$parse', function($parse) {
    return {
        restrict: 'A',
        scope: {
            bgimage: '=bgimage',
            bgcolor: '=bgcolor',
            bgopacity: '=bgopacity'
        },
        link: function(scope, element, attrs) {

            var e = $(element),
                a = scope.bgimage,
                i = scope.bgcolor,
                t = scope.bgopacity,
                n = $("<div/>", {
                    "class": "content"
                }),
                s = $("<div/>", {
                    "class": "background"
                });
            e.children().wrapAll(n), e.append(s), s.css({
                "background-color": "#" + i,
                opacity: t
            });
            e.css("background-image", "url(" + a + ")");

        }
    };
}]);



app.directive("resumetabs", function($timeout) {
    return {

        scope: {
            tabs: '=tabs'
        },
        link: function(scope, element, attr) {
            $timeout(function() {
                var e = $(element),
                    a = e.find(".tabs > li");
                a.on("click", function() {
                    var i = $(this),
                        t = i.data("target");
                    return i.hasClass("active") ? void 0 : (e.find("." + t).addClass("active").siblings("blockquote").removeClass("active"), a.removeClass("active"), i.addClass("active"), !1)
                });
                //return $(element).uouTabs();
            }, 1);

            scope.$watch('tabs.length', function(n, o) {
                console.log(n)

                if (n > o) {
                    $timeout(function() {
                        //return $(element).uouTabs();
                        //alert(n+"=="+o);
                        var e = $(element),
                            a = e.find(".tabs > li");

                        a.on("click", function() {
                            var i = $(this),
                                t = i.data("target");
                            //alert(t);
                            $(".tabs  li", element).each(function() {

                                $(this).removeClass("active");
                            });


                            return i.hasClass("active") ? void 0 : (e.find("." + t).addClass("active").siblings("blockquote").removeClass("active"), a.removeClass("active"), i.addClass("active"), !1)
                        });
                    }, 1);
                }


            })


        }
    }
});

app.directive('uoublock12a', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).each(function() {
                n = [{
                    lat: 37.780823,
                    lng: -122.4231,
                    title: "Marker 1"
                }, {
                    lat: 37.768068680454725,
                    lng: -122.430739402771,
                    title: "Marker 2"
                }, {
                    lat: 37.7791272169824,
                    lng: -122.4296236038208,
                    title: "Marker 3"
                }, {
                    lat: 37.770715,
                    lng: -122.392631,
                    title: "Marker 4"
                }, {
                    lat: 37.78197638783258,
                    lng: -122.45829105377197,
                    title: "Marker 5"
                }, {
                    lat: 37.769629187677,
                    lng: -122.46798992156982,
                    title: "Marker 6"
                }];

                function e() {
                    var e = {
                        scrollwheel: !1,
                        zoom: 14,
                        center: new google.maps.LatLng(s, l)
                    };
                    o = new google.maps.Map(t[0], e);
                    for (var a = 0; a < n.length; a++) {
                        var i = n[a];
                        new google.maps.Marker({
                            position: new google.maps.LatLng(i.lat, i.lng),
                            map: o,
                            title: i.title
                        })
                    }
                }
                var a = $(this),
                    t = a.find(".map-container .map"),
                    o, i = t.data("height"),
                    s = t.data("center-lat"),
                    l = t.data("center-lng");
                t.css("height", i + "px"), google.maps.event.addDomListener(window, "load", e), google.maps.event.addDomListener(window, "resize", function() {
                    //var e = o.getCenter();
                    //google.maps.event.trigger(o, "resize"), o.setCenter(e)
                })
            });
        }
    };
}]);


app.directive('uoublock12b', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).each(function() {
                var n = [{
                    lat: 37.780823,
                    lng: -122.4231,
                    title: "Marker 1"
                }, {
                    lat: 37.768068680454725,
                    lng: -122.430739402771,
                    title: "Marker 2"
                }, {
                    lat: 37.7791272169824,
                    lng: -122.4296236038208,
                    title: "Marker 3"
                }, {
                    lat: 37.770715,
                    lng: -122.392631,
                    title: "Marker 4"
                }, {
                    lat: 37.78197638783258,
                    lng: -122.45829105377197,
                    title: "Marker 5"
                }, {
                    lat: 37.769629187677,
                    lng: -122.46798992156982,
                    title: "Marker 6"
                }];

                function e() {
                    var e = {
                        scrollwheel: !1,
                        zoom: 14,
                        center: new google.maps.LatLng(s, l)
                    };
                    o = new google.maps.Map(t[0], e);
                    for (var a = 0; a < n.length; a++) {
                        var i = n[a];
                        new google.maps.Marker({
                            position: new google.maps.LatLng(i.lat, i.lng),
                            map: o,
                            title: i.title
                        })
                    }
                }
                var a = $(this),
                    t = a.find(".map-container .map"),
                    o, i = t.data("height"),
                    s = t.data("center-lat"),
                    l = t.data("center-lng");
                t.css("height", i + "px"), google.maps.event.addDomListener(window, "load", e), google.maps.event.addDomListener(window, "resize", function() {
                    //var e = o.getCenter();
                    //google.maps.event.trigger(o, "resize"), o.setCenter(e)
                })
            });
        }
    };
}]);


app.directive('flexsliderwithcaption', ['$parse', function($parse) {
    return {
        restrict: 'A',

        link: function(scope, element, attrs) {
            $(element).flexslider();
            $(element).each(function(){

                var self = $(this),
                slide = self.find( '.slide' );

                // SET BG IMAGES
                slide.each(function(){
                  var img =  $(this).find( '.background' );
                  if ( img.length > 0 ) {
                    $(this).css( 'background-image', 'url(' + img.attr( 'src' ) + ')' );
                    img.hide();
                  }
                });
              });
        }
    };
}]);

app.directive('portfolio', ['$parse', function($parse) {
    return {
        restrict: 'A',

        link: function(scope, element, attrs) {
           $(element).each(function() {
              var $container = $('.portfolio-filters-content');
              // initialize
              $container.masonry({
                itemSelector: 'article'
              });

              var filterFns = {};

              $('.filters li a',element).on( 'click', function() {
                var filterValue = $( this ).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[ filterValue ] || filterValue;
                $container.isotope({ filter: filterValue });

                $('.filters li a',element).each(function(){
                  $(this).removeClass("active");
                });
                $(this).addClass("active");

                return false;
              });
            });
        }
    };
}]);


app.directive('owlslider', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).owlCarousel(
            {
                items: 6
            });
        }
    };
}]);

