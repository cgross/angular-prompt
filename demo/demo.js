angular.module('app', ['ui.bootstrap','cgPrompt']);

angular.module('app').controller('DemoCtrl',function($scope,prompt){

    $scope.options = {
        title: 'Title',
        message:'Message',
        input:false,
        label:'Input label',
        value:'Input initial value',
        values:'',
        buttons:''
    };

    var processOptions = function(){
        var options = angular.copy($scope.options);

        if (options.values.length === 0) {
            options.values = undefined;
        }

        options.buttons = _.chain(options.buttons.split(','))
            .filter(function(val){
                return val;
            })
            .map(function(val){
                val = val.trim();
                return {label:val,cancel:val.toLowerCase() === 'cancel',primary:val.toLowerCase() === 'ok'};
            })
            .value();
        if (options.buttons.length === 0) {
            options.buttons = undefined;
        }

        if (!options.input){
            options.input = undefined;
            options.value = undefined;
            options.values = undefined;
            options.label = undefined;
        }
        return options;
    };

    $scope.getCode = function(){
        var options = processOptions();
        return 'prompt(' + JSON.stringify(options,null,'\t') + ').then(function(result){\n\tconsole.log(result);\n});';        
    };

    $scope.go = function(){
        $scope.results = '';

        var options = processOptions();

        prompt(options).then(function(results){
            $scope.results = JSON.stringify(results,null,'\t');
        },function(){
            $scope.results = 'Promise rejected';
        });

    };

});