app.directive('foglioDiLavoro', function () {
    return {
        restrict:'E',
    templateUrl: 'core/foglio-di-lavoro/foglio-di-lavoro.component.html',
    controller: ['$scope', "$log","ListaOperatoriService" ,"FoglioDiLavoroService", FoglioDiLavoroController]
    };
});



function FoglioDiLavoroController($scope, $log, $event, FoglioDiLavoroService) {
 
//TOCHECK Secondo me anche questo non serve a nulla, era vuoto
//     this.aggiungiOperatore = function($positionX, $positionY, $inPorts, $outPorts, $inPortsTypes,
//  $outPortsTypes, $testoOperatore){

//  }



}


    


