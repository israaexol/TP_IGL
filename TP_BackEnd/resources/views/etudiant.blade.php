@extends('layouts.appp')
@section('content')
<?php  
if (!isset($_SESSION)


)
{
     session_start();
     $_SESSION['id']=2;
}

$_SESSION['id']=2 ;
?>   
    <div>blablacar</div>
    <div id="app"></div>
    <script src="{{ asset('js/app.js') }}" ></script>

@endsection