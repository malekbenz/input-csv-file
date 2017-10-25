# input-csv-file
Angular component for file inputs

## Installation

##### Installation

```
donwload the File 
```

##### Add script to HTML

```
<script src="path.../angular/angular.js"></script>
<script src="path.../input-csv-file.js"></script>
````

##### Import in your module definition

```js
angular.module('app', ['inputCsvFile']);
```

Congartulation you're done :)

## How to use

Add input-csv-file tag add an "add function" to get event : 
```html
<input-csv-file add="vm.upload(data)" ></input-csv-file>

```

```html
   function controller() {
        var self = this;
        self.upload = function (data) {
            console.log("from search compo", data);
        }


    };

```

Thanx
