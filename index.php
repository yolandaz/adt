<!DOCTYPE html>
<?php include("header.php"); ?>

<body>
	<div id="wrapper">
		<?php include("nav.php"); ?>
		<div id="tab1" class="tabContent">
			<p><span class="cap">A</span>sian <span class="cap">D</span>ance <span class="cap">T</span>eam</p>
		</div>
		<div id="tab2" class="tabContent" style="text-align:justify">
			<?php include("about.php"); ?>
		</div>
		<div id="tab3" class="tabContent" style="text-align:justify">
			<?php include("auditions.php"); ?>
		</div>
		<div id="tab4" class="tabContent">
			<?php include("team.php"); ?>
		</div>
		<div id="tab5" class="tabContent">
			<?php include("exec.php"); ?>
		</div>
		<div id="tab6" class="tabContent">
			<?php include("showcases.php"); ?>
		</div>
		<div id="tab7" class="tabContent" style="text-align:left">
			<?php include("external.php"); ?>
		</div>
	</div>
	<?php include("announcement.php"); ?>
	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-65259513-2', 'auto');
  ga('send', 'pageview');

</script>
</body>
</html>