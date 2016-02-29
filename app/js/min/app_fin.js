angular.module('myApp', ['ngAnimate', 'firebase'])

    .controller('ctrlmusikex', function ($scope, $http) {
        var ruta = 'js/datos.json';
        /*obten el archivo json entonces(then)funcion(res)ahi mandara todos los datos*/
        $http.get(ruta).then(function (rest) {
            //en el objeto .data guardara los datos
            $scope.generos = rest.data;
        })

    })

    .controller('ctrlFire', function ($scope, $firebaseArray) {
        //creo un objeto de colegandome
        var ref = new Firebase("https://musicajorge.firebaseio.com/");
        //listaProductos contiene i dati di firebase
        $scope.listaProductos = $firebaseArray(ref);

        $scope.agregarProducto = function () {
            $scope.listaProductos.$add({nombre: $scope.producto})
            $scope.producto = '';
        }

        $scope.eliminarProducto = function () {
            var total = $scope.listaProductos.length;
            var registro = $scope.listaProductos[total - 1];
            $scope.listaProductos.$remove(registro);
        }
    })

    .controller('TabsController', function () {
        this.tab = 1;
        this.selectTab = function (tab) {
            this.tab = tab;
        };

    })
    .filter('imageify', function () {
        return function (input) {
            var url = "img/pokemons/" + input.toLowerCase() + ".jpg";
            return url;
        };
    })
    .controller('CommentsController', function () {
        this.comments = [];
        this.show = false;

        this.toggle = function () {
            this.show = !this.show;
        };

    })
    .controller('PokemonController', function () {
        this.pokemon = {
            id: "001",
            name: "Bulbasaur",
            species: "Seed Pokémon",
            type: ["Grass", "Poison"],
            height: "2′4″ (0.71m)",
            weight: "15.2 lbs (6.9 kg)",
            abilities: ["Overgrow", "Chlorophyll"],
            stats: {
                hp: 45,
                attack: 49,
                defense: 49,
                "sp.atk": 65,
                "sp.def": 65,
                speed: 45,
                total: 318
            },
            evolution: ["Bulbasaur", "Ivysaur", "Venusaur"]
        };
    });


$(document).ready(function () {
    var x = $('#panel_player').empty();
    x.load('00_mejores/index.php');
});











