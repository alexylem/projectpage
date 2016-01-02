// Log levels
my.loglevel = 4; // recommended for production is 2
Ractive.DEBUG = (my.loglevel >= 4);
console.log ('loglevel is', my.loglevel);

// loading Config
var hjson = 'config.defaults.hjson';
my.debug ('retrieving config file at', hjson);
$.ajax ({
	url: hjson,
	dataType: 'text',
	success: function (sconfig) {
		my.debug ('ok');
		buildpage (Hjson.parse (sconfig));
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
		var error = textStatus+';'+XMLHttpRequest.responseText+';'+errorThrown,
		 	config = {
			title: 'Error',
			sections: [{
				title: 'Error',
				text: error,
				image: '',
			}]
		};
		console.error ('Error '+XMLHttpRequest.status+' from '+hjson+': ', error);
		buildpage (config);
	}
});

function buildpage (config) {
	my.debug ('building page with config', config);
	
	// theme
	var css = 'lib/bootstrap-3.3.6-dist/css/bootstrap.min.css';
	if (config.theme)
		css = '//bootswatch.com/'+config.theme+'/bootstrap.min.css';
	$('<link href="'+css+'" rel="stylesheet" />').appendTo('head');

	var Page = new Ractive({
		el: 'container',
		template: '#template',
		data: config, // js/config.js
		oncomplete: function () {
			my.debug ('onrender');
			// Page title
			document.title = this.get('title');

			// Scroll Spy
			$('body').scrollspy({
				target: '#navbar',
				offset: 70
			});

			// Markdown
			var md = window.markdownit({
				html: true,
				highlight: function (str, lang) {
					if (lang && hljs.getLanguage(lang)) {
						try {
							return hljs.highlight(lang, str).value;
						} catch (__) {}
					}
					try {
						return hljs.highlightAuto(str).value;
					} catch (__) {}
					return ''; // use external default escaping
				}
			}).use(window.markdownitEmoji);
			md.renderer.rules.emoji = function(token, idx) {
				return twemoji.parse(token[idx].content);
			};
			$('p.markdown').each (function (){
				var $this = $(this);
				$this.html (md.render($this.text()));
			});
			// Add bootstrap table classes
			$("table").addClass("table table-striped table-condensed table-bordered");

			// Disqus Comments
			if (this.get('comments')) {
				/*
				// https://disqus.com/admin/universalcode/#configuration-variables
				var disqus_config = function () {
				this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
				this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
				};
				*/
				var d = document, s = d.createElement('script');
				s.src = '//coinche.disqus.com/embed.js';
				s.setAttribute('data-timestamp', +new Date());
				(d.head || d.body).appendChild(s);
			}
		}
	});
}
