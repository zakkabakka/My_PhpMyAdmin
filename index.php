<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Titre</title>
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="materialize/css/materialize.min.css" media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="style.css"/>
</head>

<body>
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="materialize/js/materialize.min.js"></script>
<nav>
    <div class="nav-wrapper grey">
        <a href="#" class="brand-logo center">My PhpMyAdmin</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
            <!--<li><a href="#">Sass</a></li>-->
            <!--<li><a href="#">Components</a></li>-->
            <!--<li><a href="#">JavaScript</a></li>-->
        </ul>
    </div>
</nav>
<div class="tableCentre">
    <h5>Vos BDD:</h5>
    <table class=" centered highlight">
        <thead>
        <tr>
            <th data-field="id">Name</th>
            <th data-field="name">nombre de tables</th>
            <th data-field="date">date de création</th>
            <th data-field="espace">espace mémoire</th>
            <th data-field="mod"></th>
            <th data-field="sup"></th>
        </tr>
        </thead>

        <tbody>
        <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
            <td>$0.87</td>
            <td><a class="btn-floating waves-effect waves-light"><i class="material-icons" style="cursor: pointer">mode_edit</i></a></td>
            <td><a class="btn-floating waves-effect waves-light red"><i class="material-icons" style="cursor: pointer">delete</i></a></td>
        </tr>
        <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
            <td>$0.87</td>
            <td><a class="btn-floating waves-effect waves-light"><i class="material-icons" style="cursor: pointer">mode_edit</i></a></td>
            <td><a class="btn-floating waves-effect waves-light red"><i class="material-icons" style="cursor: pointer">delete</i></a></td>
        </tr>
        <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
            <td>$0.87</td>
            <td><a class="btn-floating waves-effect waves-light"><i class="material-icons" style="cursor: pointer">mode_edit</i></a></td>
            <td><a class="btn-floating waves-effect waves-light red"><i class="material-icons" style="cursor: pointer">delete</i></a></td>
        </tr>
        </tbody>
    </table>
    <a class="waves-effect waves-light btn" style="margin-top: 2%">Ajouter une base de donnée</a>
</div>
</body>
<footer class="page-footer grey lighten-4">
    <div class="footer-copyright">
        <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">Lamech_h & kherfi_a</a>
        </div>
    </div>
</footer>
</html>