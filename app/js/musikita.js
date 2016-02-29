//<![CDATA[
$(document).ready(function ()
{
    // show data
    var today = new Date();
    var timeNow = today.toLocaleTimeString() + " -  " + today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    $('#data').append(timeNow);// la ora y fecha  en formato 8:54:50 AM - 24/2/2016

    // to call api
    $.getJSON("api-music.php", recorrido);

    function recorrido(data)
    {
        // print template lista-indice dentro de #contenedor pasandole data
        var origen = document.getElementById('lista-indice').innerHTML;
        var plantilla = Handlebars.compile(origen);
        $('#lista-desktop').html(plantilla(data));

        var origen2 = document.getElementById('lista-indice2').innerHTML;
        var plantilla2 = Handlebars.compile(origen2);
        $('#lista-mobile').html(plantilla2(data));


        // usamos Jplayer
        var myPlaylist = new jPlayerPlaylist
            ({
                jPlayer: "#jquery_jplayer_1",
                cssSelectorAncestor: "#jp_container_1"
            },
            data.musikita[$("img").attr('title')].music,
            //data.musikita.mejores.music,
            {
                playlistOptions: {
                    autoPlay: true,
                    loopOnPrevious: false
                },
                swfPath: "jplayer",
                supplied: "webmv, ogv, m4v, oga, mp3",
                useStateClassSkin: true,
                autoBlur: false,
                smoothPlayBar: true,
                keyEnabled: true,
                audioFullScreen: true
            });


        myPlaylist.shuffle(true);
        myPlaylist.option("autoPlay", true);
        myPlaylist.option("enableRemoveControls", true);

        // lista de categorias cargadas con setPlaylist
        $("img").click(function ()
        {
            myPlaylist.setPlaylist(data.musikita[$(this).attr('title')].music);
            //myPlaylist.setPlaylist(data.musikita.mejores.music);
        });




    }

});
//]]>
