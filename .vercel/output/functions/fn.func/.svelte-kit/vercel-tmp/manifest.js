export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["192.png","512.png","album/album.html","album/album.rss","album/data1.json","album/folderimage.jpg","album/folderthumb.jpg","album/humans.txt","album/res/all.min.js","album/res/apple-touch-icon-114x114-precomposed.png","album/res/apple-touch-icon-144x144-precomposed.png","album/res/audio.poster.png","album/res/bg.png","album/res/common.css","album/res/favicon-192x192.png","album/res/favicon-32x32.png","album/res/favicon.ico","album/res/favicon.png","album/res/folder.svg","album/res/fonts/lazaicon.eot","album/res/fonts/lazaicon.svg","album/res/fonts/lazaicon.ttf","album/res/fonts/lazaicon.woff","album/res/help-index.svg","album/res/help-lightbox.svg","album/res/jquery.js","album/res/modernizr.js","album/res/photosphere/photo-sphere-viewer.min.js","album/res/photosphere/three.min.js","album/res/styles.css","album/res/tileicon.png","album/res/video.poster.png","album/robots.txt","album/slides/2008 Board.jpg","album/slides/2013 BOARD.jpg","album/slides/2013 Spring Book Sale 1.JPG","album/slides/2013 Spring Book Sale 2.JPG","album/slides/2013 Spring Book Sale 3.JPG","album/slides/2013 Spring Book Sale 4.JPG","album/slides/2013 Spring Book Sale 5.JPG","album/slides/2013 Spring Book Sale 6.JPG","album/slides/2013 Spring Book Sale 7.JPG","album/slides/2013 Spring Book Sale 8.JPG","album/slides/2013 Summer Reading Program.JPG","album/slides/2013 Volunteer Picnic 1.jpg","album/slides/2013 Volunteer Picnic 2.jpg","album/slides/2013 Volunteer Picnic 3.jpg","album/slides/2013 Volunteer Picnic 4.jpg","album/slides/2013 Volunteer Picnic 5.jpg","album/slides/2013 Volunteer Picnic 6.jpg","album/slides/2013 Volunteer Picnic 7.jpg","album/slides/2018 Volunteer Appreciation Picnic--Alan Lynch, Ken Goode, Pat Howard.JPG","album/slides/2018 Volunteer Appreciation Picnic--Art Altman, Brenda and Walt Day.JPG","album/slides/2018 Volunteer Appreciation Picnic--Barbara Lynch, Jill Corbin, Nick Farley, Alan Lynch, Joy Howard, Pat Howard, Liz Lynch, Dick Lynch.JPG","album/slides/2018 Volunteer Appreciation Picnic--Carol Schmidt, Louise Rutland, Kathy Kahn.JPG","album/slides/2018 Volunteer Appreciation Picnic--Celie Griffiths, Nancy and Ken Hanson, Joan Seaman, Bee Woods.JPG","album/slides/2018 Volunteer Appreciation Picnic--Denise Nusom, John Boshier, Ellen and David Evans.JPG","album/slides/2018 Volunteer Appreciation Picnic--Dick and Ellen Evans, Larry and Susan Woods.JPG","album/slides/2018 Volunteer Appreciation Picnic--Dick and Liz Lynch, Alan Lynch.JPG","album/slides/2018 Volunteer Appreciation Picnic--Jayne Hoover, Peggy Thompson.JPG","album/slides/2018 Volunteer Appreciation Picnic--Jeff Storer, Sally Arman, Sue Storer, Liz McAdams, Joy Howard, Kathy Kahn.JPG","album/slides/2018 Volunteer Appreciation Picnic--Joan Klug, Bill Peterson, Celie Griffiths, Nancy Hanson, Jane Peterson, Karen Cassard.JPG","album/slides/2018 Volunteer Appreciation Picnic--Joan Seaman, Bee Woods, Karen Cassard.JPG","album/slides/2018 Volunteer Appreciation Picnic--Laurie and Joe Witten.JPG","album/slides/2018 Volunteer Appreciation Picnic--Liz McAdams, Pat and Joy Howard, Alan Lynch, Ken Goode.JPG","album/slides/2018 Volunteer Appreciation Picnic--Martha Carpenter, Carol Schmidt, Toni McBride, Mike Fleischmann.JPG","album/slides/2018 Volunteer Appreciation Picnic--Mike and Nancy Fleischmann, Liz McAdams.JPG","album/slides/2018 Volunteer Appreciation Picnic--Penny and Nick Farley.JPG","album/slides/2018 Volunteer Appreciation Picnic--Penny Farley, Jane Peterson, Jill Corbin, Joan Klug.JPG","album/slides/2018 Volunteer Appreciation Picnic--Rochelle Frank, Al Frank, Sheila Kautz, Walt Day, Brenda Day.JPG","album/slides/2018 Volunteer Appreciation Picnic--Roger and Barbara Neds.JPG","album/slides/2018 Volunteer Appreciation Picnic--Sal Martorelli, Bob Reeves, Dick Myers, Sue Storer, Karen Martorelli, Linda Reeves, Rhea Myers, Warren and Lois Dixon.JPG","album/slides/2020 Board.jpg","album/slides/2021 Board.jpg","album/slides/2021 Fall Book Sale 1.jpg","album/slides/2021 Fall Book Sale 2.jpg","album/slides/2021 Fall Book Sale 3.jpg","album/slides/2021 Fall Book Sale 4.jpg","album/slides/2021 Fall Book Sale 5.jpg","album/slides/2021 Fall Book Sale 6.jpg","album/slides/2021 Spring Book Sale 1.jpg","album/slides/2021 Spring Book Sale 10.jpg","album/slides/2021 Spring Book Sale 11.jpg","album/slides/2021 Spring Book Sale 12.jpg","album/slides/2021 Spring Book Sale 13.jpg","album/slides/2021 Spring Book Sale 14.jpg","album/slides/2021 Spring Book Sale 15.jpg","album/slides/2021 Spring Book Sale 16.JPEG","album/slides/2021 Spring Book Sale 17.JPEG","album/slides/2021 Spring Book Sale 18.JPEG","album/slides/2021 Spring Book Sale 2.jpg","album/slides/2021 Spring Book Sale 3.jpg","album/slides/2021 Spring Book Sale 4.jpg","album/slides/2021 Spring Book Sale 5.jpg","album/slides/2021 Spring Book Sale 6.jpg","album/slides/2021 Spring Book Sale 7.jpg","album/slides/2021 Spring Book Sale 8.jpg","album/slides/2021 Spring Book Sale 9.jpg","album/slides/2022 Fall Book Sale 1--Kim Hicks.jpg","album/slides/2022 Fall Book Sale 2--Kathy Kahn and Beth Mowry.jpg","album/slides/2022 Fall Book Sale 3--Kathy Berlin and Stan Berlin.jpg","album/slides/2022 Fall Book Sale 4--Lynn Townsend, Brenda Day, and Jayne Hoover.jpg","album/slides/2022 Fall Book Sale 5--Joy Howard and Karen Sellick.jpg","album/slides/2022 Fall Book Sale 6--Liz Lynch.jpg","album/slides/2022 Fall Book Sale--Joy Howard and Karen Sellick.jpg","album/slides/2022 Fall Book Sale--Kathy Berlin and Stan Berlin.jpg","album/slides/2022 Fall Book Sale--Kathy Kahn and Beth Mowry.jpg","album/slides/2022 Fall Book Sale--Kim Hicks.jpg","album/slides/2022 Fall Book Sale--Liz Lynch.jpg","album/slides/2022 Fall Book Sale--Lynn Townsend, Brenda Day, and Jayne Hoover.jpg","album/slides/2022 Spring Book Sale 01.jpg","album/slides/2022 Spring Book Sale 02.jpg","album/slides/2022 Spring Book Sale 03.jpg","album/slides/2022 Spring Book Sale 04.jpg","album/slides/2022 Spring Book Sale 05.jpg","album/slides/2022 Spring Book Sale 06.jpg","album/slides/2022 Spring Book Sale 07.jpg","album/slides/2022 Spring Book Sale 08.jpg","album/slides/2022 Spring Book Sale 09.jpg","album/slides/2022 Spring Book Sale 10.jpg","album/slides/2022 Spring Book Sale 11.jpg","album/slides/2022 Spring Book Sale 12.jpg","album/slides/2023 Spring Book Sale 01.jpg","album/slides/2023 Spring Book Sale 02.jpg","album/slides/2023 Spring Book Sale 03.jpg","album/slides/2023 Spring Book Sale 04.jpg","album/slides/2023 Spring Book Sale 05.jpg","album/slides/2023 Spring Book Sale 06.jpg","album/slides/2023 Spring Book Sale 07.jpg","album/slides/2023 Spring Book Sale 08.jpg","album/slides/2023 Spring Book Sale 09.jpg","album/slides/2023 Spring Book Sale 10.jpg","album/slides/2023 Spring Book Sale 11.jpg","album/slides/2023 Spring Book Sale 12.jpg","album/slides/2023 Spring Book Sale 13.jpg","album/slides/2023 Spring Book Sale 14.jpg","album/slides/2023 Spring Book Sale 15.jpg","album/slides/2023 Spring Book Sale 16.jpg","album/slides/2023 Spring Book Sale 17.jpg","album/slides/Barbara and Art Jenks.JPG","album/slides/Beba and Joe Hall.JPG","album/slides/Bill and Joan Seaman.JPG","album/slides/Book Signing--Murder in the Village Library (A Novel by Collett, Fogarty, and Webner).jpg","album/slides/Calico's Curious Kittens.JPG","album/slides/Children listening to Phyllis Tildes.jpg","album/slides/Children Reading.JPG","album/slides/Chris Fogarty, Leslie Fitzgerald, Toni McBride.JPG","album/slides/Curt and Nancy Shambaugh.JPG","album/slides/Dodie Sanders UGA Aquarium Program.jpg","album/slides/Don McCulloch, Bob Fogarty.JPG","album/slides/Emily Horton, Penny Farley.JPG","album/slides/Eye Guess.JPG","album/slides/Ice cream for kids.jpg","album/slides/Jack and Ann Considine.JPG","album/slides/Janet Murphy, Bill and Sue Bouton.JPG","album/slides/Jim and Lorna Cross.JPG","album/slides/Karen Cassard, Gay Morison.JPG","album/slides/Ken Goode and Sue Storer.JPG","album/slides/Kids Day.JPG","album/slides/Louise Walters, Corinne Webner, Bill Griffin.JPG","album/slides/Marcia Durben, Bianca and Joe DeNapoli, Martha Carpenter.JPG","album/slides/Margaret Glading, Marshall and Debbie Hinds.JPG","album/slides/Mary Anne Westley, Gay Morison.JPG","album/slides/Mary Bailey, Joanne Bovey, Betty Stout.JPG","album/slides/Normand Allen, Corinne Webner.JPG","album/slides/Not-So-Scary Halloween Story Time.jpg","album/slides/Ocean Creatures--2019 Childrens' Summer Program 1.jpg","album/slides/Ocean Creatures--2019 Childrens' Summer Program 2.jpg","album/slides/Phyllis Limbacher Tildes and Children.JPG","album/slides/Phyllis Limbacher Tildes.JPG","album/slides/Phyllis Tildes and children.JPG","album/slides/Sandy Cooper honoring Carol Duren for 20 years as a volunteer.jpg","album/slides/Sandy Cooper honoring Karen Sellick for 20 years as a volunteer.jpg","album/slides/Sandy Cooper honoring Sally Arman for 20 years as a volunteer.jpg","album/slides/Sue Storer and Allison Smith.JPG","album/slides/Sue Storer and Ann Yingling.JPG","album/slides/Sue Storer and Janet Murphy.JPG","album/slides/Sue Storer and Phil Van Ess.JPG","album/slides/Summer Reading Program 2017--Bee A Reader 1.jpg","album/slides/Summer Reading Program 2017--Bee A Reader 2.jpg","album/slides/Turtle Time Tuesdays--2018 Childrens' Summer Reading Program 01.jpg","album/slides/Turtle Time Tuesdays--2018 Childrens' Summer Reading Program 02.jpg","album/slides/Turtle Time Tuesdays--2018 Childrens' Summer Reading Program 03.jpg","album/slides/Turtle Time Tuesdays--2018 Childrens' Summer Reading Program 04.jpg","album/slides/Turtle Time Tuesdays--2018 Childrens' Summer Reading Program 05.jpg","album/slides/Village Library 2012.jpg","album/slides/Village Library.jpg","album/thumbs/2008 Board.jpg","album/thumbs/2013 BOARD.jpg","album/thumbs/2013 Spring Book Sale 1.JPG","album/thumbs/2013 Spring Book Sale 2.JPG","album/thumbs/2013 Spring Book Sale 3.JPG","album/thumbs/2013 Spring Book Sale 4.JPG","album/thumbs/2013 Spring Book Sale 5.JPG","album/thumbs/2013 Spring Book Sale 6.JPG","album/thumbs/2013 Spring Book Sale 7.JPG","album/thumbs/2013 Spring Book Sale 8.JPG","album/thumbs/2013 Summer Reading Program.JPG","album/thumbs/2013 Volunteer Picnic 1.jpg","album/thumbs/2013 Volunteer Picnic 2.jpg","album/thumbs/2013 Volunteer Picnic 3.jpg","album/thumbs/2013 Volunteer Picnic 4.jpg","album/thumbs/2013 Volunteer Picnic 5.jpg","album/thumbs/2013 Volunteer Picnic 6.jpg","album/thumbs/2013 Volunteer Picnic 7.jpg","album/thumbs/2018 Volunteer Appreciation Picnic--Alan Lynch, Ken Goode, Pat Howard.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Art Altman, Brenda and Walt Day.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Barbara Lynch, Jill Corbin, Nick Farley, Alan Lynch, Joy Howard, Pat Howard, Liz Lynch, Dick Lynch.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Carol Schmidt, Louise Rutland, Kathy Kahn.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Celie Griffiths, Nancy and Ken Hanson, Joan Seaman, Bee Woods.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Denise Nusom, John Boshier, Ellen and David Evans.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Dick and Ellen Evans, Larry and Susan Woods.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Dick and Liz Lynch, Alan Lynch.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Jayne Hoover, Peggy Thompson.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Jeff Storer, Sally Arman, Sue Storer, Liz McAdams, Joy Howard, Kathy Kahn.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Joan Klug, Bill Peterson, Celie Griffiths, Nancy Hanson, Jane Peterson, Karen Cassard.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Joan Seaman, Bee Woods, Karen Cassard.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Laurie and Joe Witten.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Liz McAdams, Pat and Joy Howard, Alan Lynch, Ken Goode.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Martha Carpenter, Carol Schmidt, Toni McBride, Mike Fleischmann.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Mike and Nancy Fleischmann, Liz McAdams.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Penny and Nick Farley.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Penny Farley, Jane Peterson, Jill Corbin, Joan Klug.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Rochelle Frank, Al Frank, Sheila Kautz, Walt Day, Brenda Day.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Roger and Barbara Neds.JPG","album/thumbs/2018 Volunteer Appreciation Picnic--Sal Martorelli, Bob Reeves, Dick Myers, Sue Storer, Karen Martorelli, Linda Reeves, Rhea Myers, Warren and Lois Dixon.JPG","album/thumbs/2020 Board.jpg","album/thumbs/2021 Board.jpg","album/thumbs/2021 Fall Book Sale 1.jpg","album/thumbs/2021 Fall Book Sale 2.jpg","album/thumbs/2021 Fall Book Sale 3.jpg","album/thumbs/2021 Fall Book Sale 4.jpg","album/thumbs/2021 Fall Book Sale 5.jpg","album/thumbs/2021 Fall Book Sale 6.jpg","album/thumbs/2021 Spring Book Sale 1.jpg","album/thumbs/2021 Spring Book Sale 10.jpg","album/thumbs/2021 Spring Book Sale 11.jpg","album/thumbs/2021 Spring Book Sale 12.jpg","album/thumbs/2021 Spring Book Sale 13.jpg","album/thumbs/2021 Spring Book Sale 14.jpg","album/thumbs/2021 Spring Book Sale 15.jpg","album/thumbs/2021 Spring Book Sale 16.JPEG","album/thumbs/2021 Spring Book Sale 17.JPEG","album/thumbs/2021 Spring Book Sale 18.JPEG","album/thumbs/2021 Spring Book Sale 2.jpg","album/thumbs/2021 Spring Book Sale 3.jpg","album/thumbs/2021 Spring Book Sale 4.jpg","album/thumbs/2021 Spring Book Sale 5.jpg","album/thumbs/2021 Spring Book Sale 6.jpg","album/thumbs/2021 Spring Book Sale 7.jpg","album/thumbs/2021 Spring Book Sale 8.jpg","album/thumbs/2021 Spring Book Sale 9.jpg","album/thumbs/2022 Fall Book Sale 1--Kim Hicks.jpg","album/thumbs/2022 Fall Book Sale 2--Kathy Kahn and Beth Mowry.jpg","album/thumbs/2022 Fall Book Sale 3--Kathy Berlin and Stan Berlin.jpg","album/thumbs/2022 Fall Book Sale 4--Lynn Townsend, Brenda Day, and Jayne Hoover.jpg","album/thumbs/2022 Fall Book Sale 5--Joy Howard and Karen Sellick.jpg","album/thumbs/2022 Fall Book Sale 6--Liz Lynch.jpg","album/thumbs/2022 Fall Book Sale--Joy Howard and Karen Sellick.jpg","album/thumbs/2022 Fall Book Sale--Kathy Berlin and Stan Berlin.jpg","album/thumbs/2022 Fall Book Sale--Kathy Kahn and Beth Mowry.jpg","album/thumbs/2022 Fall Book Sale--Kim Hicks.jpg","album/thumbs/2022 Fall Book Sale--Liz Lynch.jpg","album/thumbs/2022 Fall Book Sale--Lynn Townsend, Brenda Day, and Jayne Hoover.jpg","album/thumbs/2022 Spring Book Sale 01.jpg","album/thumbs/2022 Spring Book Sale 02.jpg","album/thumbs/2022 Spring Book Sale 03.jpg","album/thumbs/2022 Spring Book Sale 04.jpg","album/thumbs/2022 Spring Book Sale 05.jpg","album/thumbs/2022 Spring Book Sale 06.jpg","album/thumbs/2022 Spring Book Sale 07.jpg","album/thumbs/2022 Spring Book Sale 08.jpg","album/thumbs/2022 Spring Book Sale 09.jpg","album/thumbs/2022 Spring Book Sale 10.jpg","album/thumbs/2022 Spring Book Sale 11.jpg","album/thumbs/2022 Spring Book Sale 12.jpg","album/thumbs/2023 Spring Book Sale 01.jpg","album/thumbs/2023 Spring Book Sale 02.jpg","album/thumbs/2023 Spring Book Sale 03.jpg","album/thumbs/2023 Spring Book Sale 04.jpg","album/thumbs/2023 Spring Book Sale 05.jpg","album/thumbs/2023 Spring Book Sale 06.jpg","album/thumbs/2023 Spring Book Sale 07.jpg","album/thumbs/2023 Spring Book Sale 08.jpg","album/thumbs/2023 Spring Book Sale 09.jpg","album/thumbs/2023 Spring Book Sale 10.jpg","album/thumbs/2023 Spring Book Sale 11.jpg","album/thumbs/2023 Spring Book Sale 12.jpg","album/thumbs/2023 Spring Book Sale 13.jpg","album/thumbs/2023 Spring Book Sale 14.jpg","album/thumbs/2023 Spring Book Sale 15.jpg","album/thumbs/2023 Spring Book Sale 16.jpg","album/thumbs/2023 Spring Book Sale 17.jpg","album/thumbs/Barbara and Art Jenks.JPG","album/thumbs/Beba and Joe Hall.JPG","album/thumbs/Bill and Joan Seaman.JPG","album/thumbs/Book Signing--Murder in the Village Library (A Novel by Collett, Fogarty, and Webner).jpg","album/thumbs/Calico's Curious Kittens.JPG","album/thumbs/Children listening to Phyllis Tildes.jpg","album/thumbs/Children Reading.JPG","album/thumbs/Chris Fogarty, Leslie Fitzgerald, Toni McBride.JPG","album/thumbs/Curt and Nancy Shambaugh.JPG","album/thumbs/Dodie Sanders UGA Aquarium Program.jpg","album/thumbs/Don McCulloch, Bob Fogarty.JPG","album/thumbs/Emily Horton, Penny Farley.JPG","album/thumbs/Eye Guess.JPG","album/thumbs/Ice cream for kids.jpg","album/thumbs/Jack and Ann Considine.JPG","album/thumbs/Janet Murphy, Bill and Sue Bouton.JPG","album/thumbs/Jim and Lorna Cross.JPG","album/thumbs/Karen Cassard, Gay Morison.JPG","album/thumbs/Ken Goode and Sue Storer.JPG","album/thumbs/Kids Day.JPG","album/thumbs/Louise Walters, Corinne Webner, Bill Griffin.JPG","album/thumbs/Marcia Durben, Bianca and Joe DeNapoli, Martha Carpenter.JPG","album/thumbs/Margaret Glading, Marshall and Debbie Hinds.JPG","album/thumbs/Mary Anne Westley, Gay Morison.JPG","album/thumbs/Mary Bailey, Joanne Bovey, Betty Stout.JPG","album/thumbs/Normand Allen, Corinne Webner.JPG","album/thumbs/Not-So-Scary Halloween Story Time.jpg","album/thumbs/Ocean Creatures--2019 Childrens' Summer Program 1.jpg","album/thumbs/Ocean Creatures--2019 Childrens' Summer Program 2.jpg","album/thumbs/Phyllis Limbacher Tildes and Children.JPG","album/thumbs/Phyllis Limbacher Tildes.JPG","album/thumbs/Phyllis Tildes and children.JPG","album/thumbs/Sandy Cooper honoring Carol Duren for 20 years as a volunteer.jpg","album/thumbs/Sandy Cooper honoring Karen Sellick for 20 years as a volunteer.jpg","album/thumbs/Sandy Cooper honoring Sally Arman for 20 years as a volunteer.jpg","album/thumbs/Sue Storer and Allison Smith.JPG","album/thumbs/Sue Storer and Ann Yingling.JPG","album/thumbs/Sue Storer and Janet Murphy.JPG","album/thumbs/Sue Storer and Phil Van Ess.JPG","album/thumbs/Summer Reading Program 2017--Bee A Reader 1.jpg","album/thumbs/Summer Reading Program 2017--Bee A Reader 2.jpg","album/thumbs/Turtle Time Tuesdays--2018 Childrens' Summer Reading Program 01.jpg","album/thumbs/Turtle Time Tuesdays--2018 Childrens' Summer Reading Program 02.jpg","album/thumbs/Turtle Time Tuesdays--2018 Childrens' Summer Reading Program 03.jpg","album/thumbs/Turtle Time Tuesdays--2018 Childrens' Summer Reading Program 04.jpg","album/thumbs/Turtle Time Tuesdays--2018 Childrens' Summer Reading Program 05.jpg","album/thumbs/Village Library 2012.jpg","album/thumbs/Village Library.jpg","album/tree.json","apple-touch-icon.png","favicon.ico","favicon.svg","fonts/lucida-calligraphy.ttf","manifest.json","robots.txt"]),
	mimeTypes: {".png":"image/png",".html":"text/html",".rss":"application/rss+xml",".json":"application/json",".jpg":"image/jpeg",".txt":"text/plain",".js":"text/javascript",".css":"text/css",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".JPG":"image/jpeg",".JPEG":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.u68U94_J.js","app":"_app/immutable/entry/app.XEsBVCDn.js","imports":["_app/immutable/entry/start.u68U94_J.js","_app/immutable/chunks/entry.LyB7Ukaq.js","_app/immutable/chunks/scheduler.APWDNMY4.js","_app/immutable/entry/app.XEsBVCDn.js","_app/immutable/chunks/scheduler.APWDNMY4.js","_app/immutable/chunks/index.QNaJDHQu.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js')),
			__memo(() => import('../output/server/nodes/19.js')),
			__memo(() => import('../output/server/nodes/20.js')),
			__memo(() => import('../output/server/nodes/21.js')),
			__memo(() => import('../output/server/nodes/22.js'))
		],
		routes: [
			{
				id: "/(hero)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/about/artforsale",
				pattern: /^\/about\/artforsale\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/about/board",
				pattern: /^\/about\/board\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/about/bookdonations",
				pattern: /^\/about\/bookdonations\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/about/childrensprogram",
				pattern: /^\/about\/childrensprogram\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/about/collection",
				pattern: /^\/about\/collection\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/about/grabandgo",
				pattern: /^\/about\/grabandgo\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/about/membership",
				pattern: /^\/about\/membership\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/about/missionstatement",
				pattern: /^\/about\/missionstatement\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/donate",
				pattern: /^\/donate\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/donate/recentdonors",
				pattern: /^\/donate\/recentdonors\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/donate/supporters",
				pattern: /^\/donate\/supporters\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(nohero)/menu",
				pattern: /^\/menu\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(hero)/newarrivals",
				pattern: /^\/newarrivals\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/newsevents",
				pattern: /^\/newsevents\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/newsevents/literaryprizes",
				pattern: /^\/newsevents\/literaryprizes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/newsevents/outgoingboardmembers",
				pattern: /^\/newsevents\/outgoingboardmembers\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(hero)/(subpages)/newsevents/readinglistsontheweb",
				pattern: /^\/newsevents\/readinglistsontheweb\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(nohero)/upcomingevents",
				pattern: /^\/upcomingevents\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
