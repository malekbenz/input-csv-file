(function (app) {
    "use strict";
    angular.module("inputCsvFile", [])

        .component("inputCsvFile", {
            template: "<label class='btn btn-default'> Browse <input type='file'  hidden></label>",
            controller: controller,
            controllerAs: "vm",
            bindings:
            {
                add: '&'
            }
        });

    controller.$inject = ["$element"];

    function controller($element) {
        var self = this;
        var inputFile = $element.find("input");
        
        inputFile.on('change', function () {
            var input = this,
                textType = /\.csv$/;

            var file = input.files[0];
            if (!file) return;

            if (file.name.match(textType)) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var users = CSVToArray(reader.result);
                    var data = { data: users, fileName: file.name };
                    self.add({ data: data });
                }
                reader.readAsText(file);
            }
            else {
                alert("File not supported!");
            }
        });

    };
}());
