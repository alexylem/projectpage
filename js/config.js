var Config = {
	title: 'Coinche',
	comments: true,
	theme: 'united',
	sections: [
		/*
		{
			type: 'text|jumbotron|carousel'
			link: 'Navbar link label'
			id: 'navbar-link-id'
			title: 'Big title'
			text: 'This text supports *Markdown*' // https://help.github.com/articles/markdown-basics
			icon: 'asterisk' // for "glyphicon glyphicon-asterisk" (see http://getbootstrap.com/components)
			image: 'img/image.png'
			icons: [{
				icon: 'asterisk',
				title: 'Short title'
				text: 'Short text for this icon'
			}, {...}]
		}
		*/
		{
			type: 'jumbotron',
			title: 'Coinche',
			text: '*LE* simulateur de Coinche',
			image: '',
			button: 'Jouer',
			icon: 'play',
			url: '#'
		},{
			text: "Coinche est un ~~jeu~~ simulateur de coinche. Contrairement aux jeux de coinches que l'on peut trouver en ligne, il "
		},{
			link: 'Fonctionalités',
			id: 'features',
			grid: [{
				icon: 'phone',
				title: 'Responsive',
				text: 'Fonctionne sur smartphone, tablettes et PC'
			},{
				icon: 'education',
				title: 'Coach personnel',
				text: 'Votre coach vous dira si vous faites des erreurs ou si vous auriez pu jouer une meilleure carte'
			},{
				icon: 'dashboard',
				title: 'I.A. avancée',
				text: "Les robots ajustent automatiquement leur agressivité en fonction de l'évolution des scores"
			},{
				icon: 'gift',
				title: 'Gratuit',
				text: "Et c'est bien entendu gratuit et illimité pour tous"
			}]
		},{
			link: 'Apprendre',
			id: 'learn',
			title: 'Parfait pour apprendre',
			image: 'http://placehold.it/300',
			text:
			"* Mélanger, couper, distribuer, c'est vous qui avez la main\n"+
			"* Le coach vous arrête si vous faites une erreur de jeu\n"+
			"* Jouer des parties à jeu ouvert grâce au `mode Triche`"
		},{
			title: 'Ou se perfectionner',
			image: 'http://placehold.it/300',
			text:
			"* Paramétrez le type d'appels, la vitesse du jeu, etc.\n"+
			"* Voyez les stratégies des adversaires grâce au `mode Bavard`\n"+
			"* Le coach vous dira si vous auriez pu jouer une meilleure carte\n"+
			"* Rejouez la même donne et testez d'autres stratégies"
		},{
			title: "Démo en ligne",
			image: 'http://placehold.it/300',
			text: 'Cliquez dessous pour lancer la démo en ligne',
			button: 'Lancer la démo',
			icon: 'play',
			url: '#'
		}
	],
	footer: 'Alexandre Mély - [:pencil2:](https://github.com/alexylem/coinche/edit/gh-pages/js/config.js)'
};
