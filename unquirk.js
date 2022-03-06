
module.exports = {
    title: "unquirk", 
    author: "Isaac (<a href='https://twitter.com/coolskulltv'>@CoolSkullTV with thanks to <a href='https://twitter.com/spaghettitron'>@spaghettitron</a>)",
    modVersion: 1.0,

    description: `<p>unquirk troll text</p>`,

    edit(archive) {
		// okay so first up we need to regex for _any_ troll text by checking the colour or username?
		
		const trollArray = [["Karkat","CG",696969],[],[],[],[],[],[],[],[],[],[],[]];
		
		// fuck. the dancestors have the same colours.
		// work on that later dont worry about it yet
		
		const aradiaSearchRegex = /<span style="color: #a10000">(?:\w{2,}): (.*?)<\/span>/ig;
		const tavrosSearchRegex = /<span style="color: #a15000">(?:\w{2,}): (.*?)<\/span>/ig;
		const solluxSearchRegex = /<span style="color: #a1a100">(?:\w{2,}): (.*?)<\/span>/ig;
		const karkatSearchRegex = /<span style="color: #626262">(?:\w{2,}): (.*?)<\/span>/ig;
		
		const nepetaSearchRegex = /<span style="color: #416600">(?:\w{2,}): (.*?)<\/span>/ig;
		const kanayaSearchRegex = /<span style="color: #008141">(?:\w{2,}): (.*?)<\/span>/ig;
		const tereziSearchRegex = /<span style="color: #008282">(?:\w{2,}): (.*?)<\/span>/ig;
		const vriskaSearchRegex = /<span style="color: #005682">(?:\w{2,}): (.*?)<\/span>/ig;
		
		const equiusSearchRegex = /<span style="color: #000056">(?:\w{2,}): (.*?)<\/span>/ig;
		const gamzeeSearchRegex = /<span style="color: #2b0057">(?:\w{2,}): (.*?)<\/span>/ig;
		const eridanSearchRegex = /<span style="color: #6a006a">(?:\w{2,}): (.*?)<\/span>/ig;
		const feferiSearchRegex = /<span style="color: #77003c">(?:\w{2,}): (.*?)<\/span>/ig;
		
        let searchMatch;
		
		// loop over all homestuck pageString
        // only runs once each reload
        for (let i = 1926; i < 9999; i++) {
            const pageString = `00${i}`;

            // if the page exists (prevents certain errors)
            if (archive.mspa.story[pageString]) {
				
                // check if tavros speaks
                if (archive.mspa.story[pageString].content.includes('#a15000')) {
					// get whole page
					const content = archive.mspa.story[pageString].content;
					
                    // store all of tavros's lines
                    const tavrosLines = [];
                    while(searchMatch = tavrosSearchRegex.exec(content)) tavrosLines.push(searchMatch[1]);
					
					for (let j = 0;j < tavrosLines.length; j++) {
						let newContent = archive.mspa.story[pageString].content;
						
						let thisText = tavrosLines[j];
						
						//let newText = thisText.replace(/4/g,"A");
						
						//archive.mspa.story[pageString].content = newContent.replace(thisText, newText);
					}
				}
				
                // check if sollux speaks
                if (archive.mspa.story[pageString].content.includes('#a1a100')) {
					// get whole page
					const content = archive.mspa.story[pageString].content;
					
                    // store all of sollux's lines
                    const solluxLines = [];
                    while(searchMatch = solluxSearchRegex.exec(content)) solluxLines.push(searchMatch[1]);
					
					for (let j = 0;j < solluxLines.length; j++) {
						let newContent = archive.mspa.story[pageString].content;
						
						let thisText = solluxLines[j];
						
						let newText = thisText.replace(/ii/g,"i");
						newText = newText.replace(/2/g,"s");
						
						archive.mspa.story[pageString].content = newContent.replace(thisText, newText);
					}
				}
				
                // check if nepeta speaks
                if (archive.mspa.story[pageString].content.includes('#416600')) {
					// get whole page
					const content = archive.mspa.story[pageString].content;
					
                    // store all of nepeta's lines
                    const nepetaLines = [];
                    while(searchMatch = nepetaSearchRegex.exec(content)) nepetaLines.push(searchMatch[1]);
					
					for (let j = 0;j < nepetaLines.length; j++) {
						let newContent = archive.mspa.story[pageString].content;
						
						let thisText = nepetaLines[j];
						
						let newText = thisText.replace(/33/g,"ee");
						newText = newText.replace(/:ee/g,":33");
						
						archive.mspa.story[pageString].content = newContent.replace(thisText, newText);
					}
				}
				
                // check if terezi speaks
                if (archive.mspa.story[pageString].content.includes('#008282')) {
					// get whole page
					const content = archive.mspa.story[pageString].content;
					
                    // store all of terezi's lines
                    const tereziLines = [];
                    while(searchMatch = tereziSearchRegex.exec(content)) tereziLines.push(searchMatch[1]);
					
					for (let j = 0;j < tereziLines.length; j++) {
						let newContent = archive.mspa.story[pageString].content;
						
						let thisText = tereziLines[j];
						
						let newText = thisText.replace(/4/g,"A");
						newText = newText.replace(/1/g,"I");
						newText = newText.replace(/3/g,"E");
						
						archive.mspa.story[pageString].content = newContent.replace(thisText, newText);
					}
				}
				
				// check if vriska speaks
                if (archive.mspa.story[pageString].content.includes('#005682')) {
					// get whole page
					const content = archive.mspa.story[pageString].content;
					
                    // store all of vriska's lines
                    const vriskaLines = [];
                    while(searchMatch = vriskaSearchRegex.exec(content)) vriskaLines.push(searchMatch[1]);
					
					for (let j = 0;j < vriskaLines.length; j++) {
						let newContent = archive.mspa.story[pageString].content;
						
						let thisText = vriskaLines[j];
						
						let newText = thisText.replace(/gr8/g,"great");
						newText = newText.replace(/8/g,"b");
						newText = newText.replace(/thbt/g,"that");
						newText = newText.replace(/chbnge/g,"change");
						newText = newText.replace(/asshble/g,"asshole");
						newText = newText.replace(/plby/g,"play");
						newText = newText.replace(/gbmes/g,"games");
						newText = newText.replace(/wbs/g,"was");
						newText = newText.replace(/consolbtion/g,"consolation");
						newText = newText.replace(/idibt/g,"idiot");
						
						
						archive.mspa.story[pageString].content = newContent.replace(thisText, newText);
					}
				}
				
                // check if equius speaks
                if (archive.mspa.story[pageString].content.includes('#000056')) {
					// get whole page
					const content = archive.mspa.story[pageString].content;
					
                    // store all of equius's lines
                    const equiusLines = [];
                    while(searchMatch = equiusSearchRegex.exec(content)) equiusLines.push(searchMatch[1]);
					
					for (let j = 0;j < equiusLines.length; j++) {
						let newContent = archive.mspa.story[pageString].content;
						
						let thisText = equiusLines[j];
						
						let newText = thisText.replace(/100/g,"loo");
						newText = newText.replace(/001/g,"ool");
						
						archive.mspa.story[pageString].content = newContent.replace(thisText, newText);
					}
				}
				
                // check if gamzee speaks
                if (archive.mspa.story[pageString].content.includes('#2b0057')) {
					// get whole page
					const content = archive.mspa.story[pageString].content;
					
                    // store all of gamzee's lines
                    const gamzeeLines = [];
                    while(searchMatch = gamzeeSearchRegex.exec(content)) gamzeeLines.push(searchMatch[1]);
					
					for (let j = 0;j < gamzeeLines.length; j++) {
						let newContent = archive.mspa.story[pageString].content;
						
						let thisText = gamzeeLines[j];
						
						let newText = thisText.toLowerCase();
						
						archive.mspa.story[pageString].content = newContent.replace(thisText, newText);
					}
				}
				
                // check if eridan speaks
                if (archive.mspa.story[pageString].content.includes('#6a006a')) {
					// get whole page
					const content = archive.mspa.story[pageString].content;
					
                    // store all of eridan's lines
                    const eridanLines = [];
                    while(searchMatch = eridanSearchRegex.exec(content)) eridanLines.push(searchMatch[1]);
					
					for (let j = 0;j < eridanLines.length; j++) {
						let newContent = archive.mspa.story[pageString].content;
						
						let thisText = eridanLines[j];
						
						let newText = thisText.replace(/ww/g,"w");
						newText = newText.replace(/vv/g,"v"); 
						
						archive.mspa.story[pageString].content = newContent.replace(thisText, newText);
					}
				}
				
				// check if feferi speaks
                if (archive.mspa.story[pageString].content.includes('#77003c')) {
					// get whole page
					const content = archive.mspa.story[pageString].content;
					
                    // store all of feferi's lines
                    const feferiLines = [];
                    while(searchMatch = feferiSearchRegex.exec(content)) feferiLines.push(searchMatch[1]);
					
					for (let j = 0;j < feferiLines.length; j++) {
						let newContent = archive.mspa.story[pageString].content;
						
						let thisText = feferiLines[j];
						
						let newText = thisText.replace(/)(/g,"H");
						
						archive.mspa.story[pageString].content = newContent.replace(thisText, newText);
					}
				}
				
			}
		}
		
		/*
		
		from the wiki:
		aradia: i remember this being mostly ok? keep unless i spot something
		tavros: either all lowercase or invert capitalisation? keep commas
		sollux: remove double is, replace 2 with s, probably keep the twos in tact
		karkat: keep, all caps is readable and obnoxious
		nepeta: replace 33s with ees, unless its an emoticon
		kanaya: uncap all but the first letter of the sentence? + where appropriate, names and The Green Sun
		terezi: the inspo. Uncap, un413?
		vriska: replace 8 with eight? this may need a shitpost setting
		equius: un% xs, 100 loo 001 ool
		gamzee: i may leave him be. i may stoned lowercase
		eridan: half the ws and vs
		feferi: )( to H and .. maybe leave the -E
		
		dancestors can wait fuck em
		
		*/
		
    },
}
