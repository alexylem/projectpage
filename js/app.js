// Log levels
my.loglevel = 4;
Ractive.DEBUG = (my.log_level >= 4);

// theme
var css = 'lib/bootstrap-3.3.6-dist/css/bootstrap-theme.min.css';
if (Config.theme)
	css = '//bootswatch.com/'+Config.theme+'/bootstrap.min.css';
$('<link href="'+css+'" rel="stylesheet" />').appendTo('head');

var Page = new Ractive({
	el: 'container',
	template: '#template',
	data: Config, // js/config.js
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
		var md = window.markdownit().use(window.markdownitEmoji);
		md.renderer.rules.emoji = function(token, idx) {
			return twemoji.parse(token[idx].content);
		};
		$('p.markdown').each (function (){
			var $this = $(this);
			//$this.html(marked ($this.html()));
			$this.html (md.render($this.html()));
		});

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
