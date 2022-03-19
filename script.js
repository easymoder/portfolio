let work = `<div id="h2line"></div><h2>Selected Projects</h2><div id="projects"><div class="project" id="print"><img src="media/printcollateral.jpg"/><p>Print Collateral</p></div><div class="project" id="mograph"><img src="media/motiongraphics.jpg"/><p>Motion Graphics</p></div><div class="project" id="gis"><img src="media/giscartography.png"/><p>GIS / Cartography</p></div><div class="project" id="3d"><img src="media/3dunity.jpg"/><p>3D / Unity</p></div><div class="project" id="interactive"><img src="media/interactivescripting.png"/><p>Interactive Scripting</p></div><div class="project" id="editing"><img src="media/compositingediting.jpg"/><p>Compositing / Editing</p></div></div>`;

let print = `<div id="h2line"></div><h2>Print Collateral</h2><div id="content"><h3>1. Petco Foundation Brochure</h3><p>Design spread:</p><img src="media/brochure1.png"/><img src="media/brochure2.png"/><p>Mockup:</p><img src="media/brochuremockup.jpg"/><h3>2. Lovelies Branding & Packaging</h3><p>Dieline:</p><img src="media/dieline.png"/><p>Mockup:</p><img src="media/box.png"/><h3>3. Posters in Three Styles</h3><p>Low-tech Seattle:</p><img src="media/lowtech.jpg"/><p>Swiss Typography:</p><img src="media/swiss.jpg"/><p>Bauhaus:</p><img src="media/bauhaus.jpg"/></div><p id="back">Back</p>`;

let mograph = `<div id="h2line"></div><h2>Motion Graphics</h2><div id="content"><h3>1. Chicago Cubs Lower Thirds</h3><div class="vid" style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/mcof4u?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div><h3>2. Catalyst Bumper</h3><div class="vid" style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/di5rdj?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div><h3>3. OfferUp UX Prototype</h3><iframe class="vid" src="https://streamable.com/e/ihlt1i?loop=0" width="350" height="720" frameborder="0" allowfullscreen></iframe><p>Storyboard:</p><img src="media/offerupstoryboard.png"/><h3>4. Random Facts</h3><div class="vid" style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/mv2dju?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div></div><p id="back">Back</p>`;

let gis = `<div id="h2line"></div><h2>GIS / Cartography</h2><div id="content"><h3>1. Maritime Piracy & Ship Routes</h3><img src="media/map.png"/><p>The piracy data are <a href="https://msi.nga.mil/Piracy" target="_blank">Anti-Shipping Activity Messages</a> collected by the National Geospatial-Intelligence Agency, ran through Kernel Density Estimation to produce a heatmap.</p><p>The global shipping routes were manually digitized in Adobe Illustrator from the Central Intelligence Agency's <a href="https://www.loc.gov/item/2013591571/" target="_blank">Map of the World Oceans</a>, published in October 2012.</p><p>Analysis settings:</p><img src="media/kernel.png"/><h3>2. Siting a Hiking Trail</h3><p>Storymap:</p><iframe id="storymap" src="https://storymaps.arcgis.com/stories/9e869ec62c3544209d7c79edcaba4132" allowfullscreen="" allow="geolocation" width="100%" height="800px" frameborder="0"></iframe></div><p id="back">Back</p>`;

let unity = `<div id="h2line"></div><h2>3D / Unity</h2><div id="content"><h3>1. Ball jumps</h3><p>Rig:</p><img src="media/ballrig.jpg"/><p>Tangents:</p><img src="media/balltangents.png"/><p>Animation:</p><div class="vid" style="width:100%;height:0px;position:relative;padding-bottom:58.221%;"><iframe src="https://streamable.com/e/dpcmt7?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div><h3>2. One-legged jumps</h3><p>Rig:</p><img src="media/hoprig.jpg"/><p>Tangents:</p><img src="media/hoptangents.png"/><p>Animation:</p><div class="vid" style="width:100%;height:0px;position:relative;padding-bottom:53.792%;"><iframe src="https://streamable.com/e/delqid?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div><h3>3. Character Creator</h3><p>Models and rig:</p><img src="media/models.png"/><p>UVs of pants model:</p><img src="media/uvs.png"/><p>Opacity textures:</p><img src="media/textures.png"/><p>Blendshapes:</p><img src="media/blendshapes.png"/><p>Camera control script:</p><img src="media/code.png"/><p>WebGL build:</p><div id='unity-container'><canvas id='unity-canvas'></canvas><div id='unity-loading-bar'><div id='unity-logo'></div><div id='unity-progress-bar-empty'><div id='unity-progress-bar-full'></div></div></div><div id='unity-footer'><div id=unity-fullscreen-button></div></div><script src='unity.js'></script></div></div><p id="back">Back</p>`;

let interactive = `<div id="h2line"></div><h2>Interactive Scripting</h2><div id="content"><h3>1. Netflix vs Blockbuster</h3><p>Annual revenue (in millions USD):</p><div id='graphButtons'><button id='netflixButton' class='activeData'><img src='media/netflix.png'/></button><button id='blockbusterButton'><img src='media/blockbuster.png'/></button></div><svg id='graphContainer' width='800' height='600'></svg><script src='graph.js'></script><h3>2. USA Unemployment Rates</h3><div class='viz'></div><script src='map.js'></script><p>This is a fork of <a href="https://bl.ocks.org/mbostock/2206590" target="_blank">Mike Bostock's click-to-zoom Block</a>, with the added functionality of revealing county-level data on click. Data was retrieved from the US Bureau of Labor Statistics.</p><h3>3. Trivia Quiz</h3><p>Demo:</p><div class="vid" style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/w9dzhz?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div><h3>4. Mystery Heroes</h3><p>Demo:</p><div class="vid" style="width:100%;height:0px;position:relative;padding-bottom:48.750%;"><iframe src="https://streamable.com/e/pv1tjc?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div></div><p id="back">Back</p>`;

let editing = `<div id="h2line"></div><h2>Compositing / Editing</h2><div id="content"><h3>1. Indeed Ad</h3><img src="media/indeed.jpg"/><p>Source images:</p><img src="media/indeedsrc.png"/><h3>2. Tesla Cinemagraph Ad</h3><iframe class="vid" src="https://streamable.com/e/yiyzot?autoplay=1" width="400" height="251" frameborder="0" allowfullscreen allow="autoplay"></iframe><p>Source images:</p><img src="media/teslasrc.png"/><h3>DIY Product Photography</h3><p>Before and after:</p><img src="media/photoedit1.jpg"/><img src="media/photoedit2.jpg"/><img src="media/photoedit3.jpg"/></div><p id="back">Back</p>`;

let about = `<div id="h2line"></div><h2>About Me</h2><div id="content"><p>I'm first and foremost a beginner. Having recently graduated, I'm still at the start of a lifelong career of learning.</p><p>As a designer, I'm straightforward. My passion is taking raw information and presenting it in easy-to-understand, easy-to-use visual interfaces. I believe in user-centric design with no frills, and I'm always learning better ways to implement it.</p><p>I'm also straightforward as a person. My functionality-first attitude extends to both conversational candor and overall stable sensibilities. There's rarely need for me to rock the boat &#8212; if it works, it works. I enjoy familiar standard operating procedures.</p><p>Web-based technology has become increasingly interesting to me as a material to work with, so I'm considering a master's in web and mobile applications development. I would love to study full-stack development to further my ability to create informatic solutions.</p><p>This website was written from scratch. Plain by design, I wanted it to act only as a vehicle for my work rather than a piece of work itself. All the projects dealing with brands are fictional, done in an academic setting.</p></div>`;

let resume = `<div id="h2line"></div><h2>Resume</h2><div id="content"><img id="resume" src="media/resume.png"/></div>`;

let contact = `<div id="h2line"></div><h2>Contact Me</h2><div id="content"><p>Thank you for your interest in my work. To contact me, please fill in the form below.</p><form id="contactForm"><label for="name">Name <span class="red">*</span></label><input type="text" name="name" id="name" required="required" placeholder="Firstname Lastname" class="input"/><label for="email">Email address <span class="red">*</span></label><input type="email" name="email" id="email" required="required" placeholder="you@domain.com" class="input"/><label>Message</label><textarea name="message" id="message" rows="12" cols="60" class="input"></textarea><input type="submit" id="mySubmit" name="submit" value="Submit" class="input"/></form></div>`;

function loadMain(html){
	$("main").fadeOut(function(){
		$("main").html(html);
		$("main").fadeIn();
	});	
}

$(document).ready(loadMain(work));

$(document).on("mouseenter", ".project", function(){
	$(".project").not(this).css("color","#9b9b9b");
	$(".project").not(this).find("img").css("filter","opacity(50%)");
});
$(document).on("mouseleave", ".project", function(){
	$(".project").not(this).css("color","#000000");
	$(".project").not(this).find("img").css("filter","opacity(100%)");
});

$(document).on("click", "#workLink", function(){
	$(".activePage").removeClass("activePage");
	$(this).find("a").addClass("activePage");
	loadMain(work);
});
$(document).on("click", "#aboutLink", function(){
	$(".activePage").removeClass("activePage");
	$(this).find("a").addClass("activePage");
	loadMain(about);
});
$(document).on("click", "#resumeLink", function(){
	$(".activePage").removeClass("activePage");
	$(this).find("a").addClass("activePage");
	loadMain(resume);
});
$(document).on("click", "#contactLink", function(){
	$(".activePage").removeClass("activePage");
	$(this).find("a").addClass("activePage");
	loadMain(contact);
});

$(document).on("click", "#print", function(){
	loadMain(print);
});
$(document).on("click", "#back", function(){
	loadMain(work);
});
$(document).on("click", "#mograph", function(){
	loadMain(mograph);
});
$(document).on("click", "#gis", function(){
	loadMain(gis);
});
$(document).on("click", "#3d", function(){
	loadMain(unity);
});
$(document).on("click", "#interactive", function(){
	loadMain(interactive);
});
$(document).on("click", "#editing", function(){
	loadMain(editing);
});

$(document).on("click", "#netflixButton", function(){
	update(netflixData);
});
$(document).on("click", "#blockbusterButton", function(){
	update(blockbusterData);
});

$(document).on("submit", "#contactForm", function(){
	$.post("mail.php", {name: $("#name").val(), email: $("#email").val(), message:$("#message").val()}, function(){
		$("#content").append(`<p class="hidden">Your message has been sent. I will be in touch shortly.</p>`);
		$(this).fadeOut(function(){
			$(".hidden").fadeIn();
		});
	});
	return false;
});