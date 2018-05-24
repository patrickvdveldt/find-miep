<?php

//http://localhost:8080/findmiep/main.php?page=index

class Route
{

   public function __construct()
   {

      $this->route();


   }


   public function route ()
   {

      if(isset($_GET['page']))
      {

         $page = $page = $_GET['page'];

         if($page == 'game')
         {

            require 'views/game.php';

         }else if($page == 'form')
         {

            require 'views/form.php';

         }else if($page == 'index')
         {

            require 'views/index.php';

         }

      }else{

        require 'views/game.php';

      }

   }


}

 ?>
