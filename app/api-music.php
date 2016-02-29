<?php
    /* read folder create api for categori music */
    $dir = "music/";
    if ($dh = opendir($dir))
    {
        $blackList = array( '.', '..', '.DS_Store' );  // lista nera
        while (($folder = readdir($dh)) != false)
        {
            if (!in_array($folder, $blackList))
            {
                $dir2 = $dir . $folder . "/";  // create sub folder
                if ($dh2 = opendir($dir2))
                {
                    $images = glob($dir2 . "*.jpg");  // controla se esiste un jpg en el folder per aseganrlo come cover
                    foreach ($images as $poster)
                    {
                        $poster;
                    }
                    unset($temp);
                    while (($file = readdir($dh2)) != false)
                    {
                        $extencion = explode('.', $file);  // explode() divide il file in 2 elementi di array
                        if ($extencion[1] == "mp3")
                        {    // array per creare la lista de canzone di ogni cartela
                            $temp[] = array( 'title'  => $extencion[0],
                                             'mp3'    => $dir2 . $file,
                                             'poster' => $poster );
                        }
                    }
                }

                $api_array2[ $folder ] = array( 'categoria' => $folder,
                                                'url'       => $dir . $folder . "/index.php",
                                                'cover'     => $poster,
                                                "music"     => $temp );
            }
        }
    }

    $return_array2 = array( 'musikita' => $api_array2 );


    //echo "<pre>"; print_r($return_array); echo "<pre>";
    echo json_encode($return_array2);

?>

