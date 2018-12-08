<template>
  <div id="app">
	<div class="mainNav">
		<div class="navigation">
			<nav>
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/about">About</router-link></li>
				<li><router-link to="/contact">Contact</router-link></li>
				<li><router-link to="/resume">Resume</router-link></li>
			</ul>
			</nav>
		</div>
		<section class="title">
			<h1>A. Jacob Horne</h1>
		</section>
	</div>
		<router-view/>
	
	</div>
</template>

<script>
</script>

<style lang="scss">

$black: #192740;
$blue: #5e91ef;
$grey: #dad4d4;
$purple:#2A1B6D;

.clearfix {
    zoom: 1;
    &:before, &:after {
        content: "";
        display: table;
    }
    &:after {
        clear: both;
    }
}


/** Generic Styles ***/
.buttons{
	position:fixed;
	top:40px;
	left:10px;
	a{
		display:block;
		padding:10px;
		border:1.5px solid #182b66;
		border-radius:10px;
		font-family: "Questrial", arial;
		background-color:white;
		opacity:0.9;
		margin:5px 0px;
		&:hover{
			border:1.5px solid white;
			transition: ease 0.4s all;
			background-color: #182b66;
			color:white;
		}
	}
}

.buttons {
	opacity: 1;
	transition: opacity 400ms ease-out;
}

.buttons.is-active {
	opacity: 1;
}

p{
	font-family: "Questrial", arial;
}
img{
	display:block;
}
h1{
	font-family: "Questrial", arial;
	text-shadow: 0.5px 0.5px #a39ea0;
}
h2,h3,h4{
	font-family: "Quicksand", arial;
	text-shadow: 0.5px 0.5px #a39ea0;
	margin:1em 0;
}
p{
	font-size: 0.9em;
	line-height: 1.4em;
}
.main {
	padding-top: 50px;
}
.wrapper{
	max-width:1500px;
	padding-top: 70px;
	width:90%;
	margin:0 auto;
}
a{
	text-decoration: none;
	color:$black;
	&:visited{
		color:$black;
	}
}
/** Sites Styles ***/
.navigation{
	display:none;
}
.icon{
	position:absolute;
	right:10%;
	top:40px;
	width: 95px;
}
.icon.close {
	width: 45px;
}
.mobile-nav{
	position:fixed;
	background:black;
	color:white;
	height:100%;
	width:100%;
	text-align:center;
	opacity:0.9;
	z-index:1000;
	margin:0;
	padding:0;
	nav{
		padding-top:50px;
	}
	ul{
		list-style: none;
	}
	li{
		padding:20px;
	}
	a{
		padding:40px;
		font-size: 2em;
		color:white;
		font-family: "Quicksand", arial; 
	}
}

.title{
	display:none;
}

.display-block{
	padding-top: 100px 0px;
	min-height:355px;
	transition: ease all 0.6s;
	margin:20px 0;
	&:hover{
			opacity:0.8;
			transform: scale(1.05);
		}
	h2{
		font-weight: 800;
		margin:20px 0;
	}
	img{
		width:95%;
		max-width: 800px;
		border-radius:3px;
		box-shadow: 8px 10px 20px 0 rgba(46,61,73,.15);
		border:1px solid rgba(0,0,0,0.05);
		
		
	}
}
.subpage-content{
	h1{
		font-size: 2em;
		text-align: center;
		margin:40px 0px;
	}
	h2{
		text-align: center;
	}
	h3{
		text-align: center;
		margin-bottom:25px 0px;
		font-weight: 900;
	}
	p{
		text-align:center;
	}
	ul{
		text-align:center;
		list-style:none;
		padding:0;

	}
	div{
		padding:20px 0px;
	}
	img{
		width:95%;
		margin:0 auto;
		max-width:1000px;
		border-radius:5px;
	}
	.code-image{
		div{
			width:95%;
			margin:0 auto;
		}
		a{
			display:block;
		}
		img{
			max-width:1200px;
			border-radius:5px;
		}
	}
}

.info-block{
	padding-top:25px;
	h1{
		padding:10px;
		text-align:center;
		text-shadow: none;
	}
	img{
		width:98%;
		margin: 0 auto;
		max-width: 1000px;
		-webkit-box-shadow: 10px 8px 5px -7px rgba(115,113,115,0.63);
		-moz-box-shadow: 10px 8px 5px -7px rgba(115,113,115,0.63);
		box-shadow: 10px 8px 5px -7px rgba(115,113,115,0.63);
	}
	p{
		line-height: 1.4em;
	}
	.about-image{
		max-width: 300px;
		width:50%;
    border-radius:25px;
		box-shadow: none;
		border:2px solid $grey;
		padding:5px;
		margin-top:10px;
	}
}

.col1{
	margin:0 auto;
	max-width: 1200px;
	p{
		text-align:center;
	}
	img{
		display: block;
		-webkit-box-shadow: 5px 5px 3px 0px rgba(0,0,0,0.6);
		-moz-box-shadow: 5px 5px 3px 0px rgba(0,0,0,0.6);
		box-shadow: 5px 5px 3px 0px rgba(0,0,0,0.6);
	}
}
.col3{
	h4{
		text-align:center;
	}
}

@media screen and (min-width: 620px) {
	.wrapper{
		padding-top:0px;
	}
	.main{
		padding-top:0;
	}
	.mobile-nav{
		display:none;
	}
	.icon{
		display:none;
	}
	.navigation{
		display:block;
		margin:20px;
		ul{
			margin: 0px;
			padding: 10px;
			text-align: center;
		}
		li{
			display: inline-block;
			padding:2px;
			text-align: center;
			margin:4px;
		}
		a{
			display: block;
			font-weight:900;
			font-size: 0.95em;
			letter-spacing: 2px;
			color:$black;
			padding:10px;
			border:1px solid transparent;
			border-radius:10px;
			transition: 0.8s ease all;
			&:hover{
				border:1px solid $black;
				border-radius:10px;
			}
		}
	}
	.title{
		display:block;
		h1{
			padding:5%;
			margin:0;
			font-size: 2.7em;
			text-align: center;
			color:$black;
		}
		h2{
			text-align: center;
			padding:0px 2%;
			text-align: center;
		}
	}
	footer{
		padding-bottom:50px;
	}
}

@media screen and (min-width: 750px) {
	.navigation{
	display:block;
	margin:20px;
	ul{
		margin: 0px;
		padding: 10px;
		text-align: center;
	}
	li{
		display: inline-block;
		padding:2px;
		text-align: center;
		margin:4px;
	}
}

.title{
	h1{
		padding:2%;
		margin:0;
	}
}
	.subpage-content{
		h1{
			font-size: 2em;
			padding:20px;
			text-align: center
		}
		h2{
			text-align: center;
		}
		h3{
			text-align: left;
			margin-bottom:25px 0px;
		}
		p{
			text-align: left;
		}
		ul{
			padding:0px;
			margin:0px;
			text-align: left;
		}
		li{
			padding-left:5px;
			margin:0px;
			text-align: left;
			font-size: .5;
		}
		div{
		}
		a{
			display:inline-block;
			padding:0px 2%;
		}
	}


	.display-block{    //index.html only
		width:48%;
		margin-left: 1%;
		display:inline-block;
		h2{
			text-align: center;
		}
	}
	.info-block{
		div{
			width:60%;
			margin: 0 auto;
		}
		p{
			text-align:left;
			padding:10px 0px;
		}
		padding:35px 0px;
	}
	.col2{
		text-align: center;
		div{
		display:inline-block;
		width:45%;
		vertical-align: top;
		padding: 20px 2%;
		}
		img{
			display: inline-block;
			margin-left:2%;
			max-width: 1400px;
		}
	}
	.col3{
		text-align: center;
		div{
		display:inline-block;
		vertical-align: top;
		width: 19%;
		margin:0px 4%;
    	}
    	h4{
    		text-align: left;
    		line-height: 0em;
    		font-weight: 300;
    	}
    }
}
@media screen and (min-width: 1400px) {
	.col2{
		text-align: center;
		div{
		display:inline-block;
		width:39%;
		}
	}
}
</style>
