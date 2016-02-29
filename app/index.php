<?php include 'php/head.php' ?>

<nav class="navbar navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" id="musikex">Musica</a>
        </div>

        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#" id="data"></a></li>
            </ul>
        </div>
    </div>
</nav>
<<<<
<<<||<<<
<section class="full-width">
    <div class="container">
        <div class="row">

            <!--  DISCOS  -->
            <div class="col-md-6">
                <div class="row galleri" id="contenedor">
                    <script id="lista-indice" type="text/x-handlebars-template">
                        {{#each musikita}}
                        <div class="col-xs-4 col-sm-3 col-md-2">
                            <a href="javascript:;" id="{{categoria}}"><img src="{{cover}}" alt="{{categoria}}" title="{{categoria}}"/></a>
                        </div>{{/each}}
                    </script>
                </div>
            </div>

            <!--  PLAYER  -->
            <div class="col-md-6 player">
                <div id="panel_player">
                    <!-- <img src="img/720.gif" alt=""/>-->
                    <?php include 'php/player.php' ?>

                </div>
            </div>
        </div>
    </div>

</section>




<?php include 'php/footer.php' ?>

