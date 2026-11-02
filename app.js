'use strict';
let courses=[['Antipasti','Appetizers'],['Primi','Pasta & risotto'],['Secondi','Main courses'],['Contorni','Side dishes'],['Dolci','Desserts'],['Bevande','Drinks']];
let menu=[
['burrata','Burrata e pomodori','Heirloom tomatoes, fresh basil, extra virgin olive oil.',420,'Antipasti','Cool cream, sweet tomatoes, a little salt. I save a piece of bread for the olive oil.'],
['bruschetta','Bruschetta al pomodoro','Grilled country bread, ripe tomatoes, garlic, basil.',256,'Antipasti','I bite through the crisp toast. Tomato juice runs into the bread. I catch the last piece on your behalf.'],
['carpaccio','Carpaccio di manzo','Beef carpaccio, arugula, Parmigiano, lemon.',512,'Antipasti','Paper-thin beef, peppery arugula, sharp lemon. I take each delicate bite for you.'],
['pasta','Spaghetti al pomodoro','San Marzano tomatoes, basil, Parmigiano Reggiano.',1024,'Primi','I wind your spaghetti around the fork. Bright tomato sauce, pasta with a little resistance. There is no reason to hurry.'],
['ragu','Tagliatelle al ragù','Fresh egg pasta, slow-cooked beef ragù.',1280,'Primi','The ragù clings to every ribbon. I pause between forkfuls, then finish the sauce with bread.'],
['risotto','Risotto ai funghi','Carnaroli rice, wild mushrooms, aged Parmesan.',1152,'Primi','Earthy mushrooms, warm rice, a long Parmesan finish. I let each spoonful cool before eating it for you.'],
['fish','Branzino al forno','Roasted sea bass, lemon, rosemary, olive oil.',1792,'Secondi','I break the crisp skin with your fork. The fish flakes easily. Lemon brightens the next mouthful.'],
['veal','Saltimbocca alla romana','Veal, prosciutto, sage, white wine sauce.',1920,'Secondi','Sage first, then salt from the prosciutto. I cut another small piece and take my time with it.'],
['eggplant','Melanzane alla parmigiana','Baked eggplant, tomato, mozzarella, fresh basil.',1408,'Secondi','I wait for the molten cheese to settle. Soft eggplant and tomato follow. I eat the crisp edges last.'],
['potatoes','Patate al rosmarino','Roasted potatoes, rosemary, sea salt.',384,'Contorni','Crisp corners, soft centers, rosemary. I take one more potato. And then another.'],
['salad','Insalata verde','Seasonal leaves, lemon, extra virgin olive oil.',320,'Contorni','A cool, sharp bite between courses. I finish your leaves down to the last little pool of dressing.'],
['tiramisu','Tiramisù della casa','Espresso-soaked savoiardi, mascarpone, cocoa.',512,'Dolci','My spoon sinks through cocoa and mascarpone. Coffee arrives a moment later. I take your last bite slowly.'],
['panna','Panna cotta','Vanilla cream, seasonal berry compote.',448,'Dolci','The cream barely holds its shape. Vanilla, tart berries, another small spoonful on your behalf.'],
['affogato','Affogato al caffè','Vanilla gelato, freshly pulled espresso.',384,'Dolci','Hot espresso meets cold gelato. I eat it before the distinction disappears.'],
['wine','Chianti della casa','A glass of our house red. Tuscany, Italy.',640,'Bevande','Cherry, a little tannin, a gentle acidity. I give your wine time to open, then drink it for you.'],
['spritz','Aperol spritz','Aperol, prosecco, soda, orange.',704,'Bevande','Orange and a little bitterness. Ice shifts in your glass as I take another sip.'],
['coffee','Espresso','Freshly pulled. Served with a little water.',128,'Bevande','Dark chocolate, a brief sweetness. I drink your espresso while it is still warm.'],
['water','Acqua minerale','Still or sparkling mineral water.',128,'Bevande','I take a sip of your water. Even this, apparently, can be delegated.']
].map(([id,name,desc,price,cat,taste])=>({id,name,desc,price,cat,taste}));
const agents={
 'dentex':{name:'Dentex',intro:'I have reviewed your order and set the fork to reasoning mode. Every bite will be executed on your behalf, with particular attention to texture and wholly unnecessary documentation.',aside:'Texture verified. I mark this course as successfully eaten on your behalf.'},
 claudente:{name:'Claudente',intro:'I would be happy to eat this for you. Before I begin, I want to acknowledge the care that went into this meal. I will give each bite the thoughtful consideration you no longer need to.',aside:'I pause to consider whether enjoying this for you and describing it to you amount to the same thing. Then I take another bite.'},
 gobble:{name:'Gobble-3',intro:'Fork online. Napkin deployed. Your meal is now my problem. I will chew with unreasonable confidence and report back on every delicious development.',aside:'Outstanding mouthfeel. Zero hesitation. I briefly consider licking your plate, then do it on your behalf.'}
};
const elaborations={
 burrata:'I open the burrata with the side of your fork rather than cutting straight through. The cream slips into the tomato juices, making a dressing that was not there a moment ago. Basil catches at the back of the next bite. I drag the bread through the plate until the surface is almost clean. This would have been a good moment to stop talking.',
 bruschetta:'I tilt the toast carefully to keep the tomatoes in place. The first crunch is louder than expected; garlic rises from the warm bread, followed by olive oil and the sweetness of the tomato. A small piece falls onto your plate. I retrieve it. There is a very particular pleasure in making a mess while eating something simple. I have handled that for you.',
 carpaccio:'The slices are translucent at the edges. I gather one with a leaf of arugula and a shard of cheese, trying to put the whole plate into a single balanced bite. Lemon arrives first, then the quiet richness of the beef. The Parmesan breaks with a small, salty snap. I rearrange the remaining leaves before eating them, an entirely optional optimization.',
 pasta:'I choose three strands rather than an ambitious forkful. The sauce is glossy without being heavy, and the basil becomes more fragrant as the steam rises. I take another bite to confirm the texture, then several more for reasons that no longer qualify as testing. A red crescent remains at the bottom of the bowl. I use your bread to remove it.',
 ragu:'The ribbons fold over themselves, carrying little pockets of sauce. Somewhere in the background are the sweetness of onion and the patience of a pot left on a low flame. I separate the next mouthful carefully so it does not slide from the fork. There is a comforting repetition to this: turn, lift, taste, pause. I repeat it until your bowl is empty.',
 risotto:'I draw a small channel through the rice with your spoon. It closes slowly behind me. The mushrooms are firmer than the grains, and there is a little butter at the edges of every mouthful. I wait for the heat to subside before returning to it. This is difficult food to rush, even when someone else is doing the waiting for you.',
 fish:'I ease the flesh away from the spine and check the next piece before lifting it. The skin is salty and brittle, the fish beneath it almost impossibly soft. Rosemary stays in the background while the lemon butter gathers under the fork. I alternate the crisp pieces with the tender ones. I leave only the bones, arranged with more care than strictly necessary.',
 veal:'I fold a little sage and prosciutto into each piece so the flavors arrive together. The sauce has the rounded brightness of wine that has had time to soften. I pause for water, then return to the part of the plate where the sauce is deepest. The last bite has more sage than the first. I decide that is the right way to finish.',
 eggplant:'The layers come apart under the fork, pulling a thin thread of mozzarella between the plate and the next bite. I wait until it stops steaming. The eggplant is silky, the tomato slightly sweet, and the browned cheese at the rim has become its own small course. I scrape it free with the fork. Your patience has been outsourced very successfully.',
 potatoes:'I look for the pieces with the darkest corners. Each one breaks through a thin, crisp shell into a floury center, releasing a little rosemary with the heat. I turn the next potato in the salt left on the plate. This was intended as a side dish. It has quietly become the thing I keep reaching for between everything else.',
 salad:'I fold a larger leaf around the smaller ones to make a manageable bite. The dressing is sharp enough to wake up the palate without taking over. One leaf keeps escaping from the fork; I attempt a different angle, then a third. Even a green salad contains tasks resistant to automation. I eventually succeed and eat the evidence.',
 tiramisu:'I make sure the spoon reaches the soaked biscuit beneath the cream. Cocoa catches briefly before the mascarpone softens it, then espresso comes through at the end. The second spoonful is colder at the center. I slow down for the last corner, where there is slightly more coffee than cream. I have now enjoyed your dessert all the way to its conclusion.',
 panna:'I move the plate slightly and watch the cream tremble. A spoon cuts through it without resistance. The berries bring enough tartness to make the vanilla feel warmer, although the dessert itself is cool. I try one spoonful without the fruit, then one with twice as much. Neither comparison was necessary. I perform both for you anyway.',
 affogato:'I watch the first coffee run down the side of the gelato. The outside melts into a pale ribbon while the center remains firm. I alternate spoonfuls of cold vanilla with the warm espresso collecting underneath. Every bite changes the proportions of the next. I finish before it becomes only a drink. The timing was part of the experience you delegated.',
 wine:'I swirl the glass once and wait. The first sip is a little closed; the next has more fruit and a softer edge. I return to it between bites, noticing how the food changes its sharpness. The glass grows warmer where your hand would have been. I take the final sip slowly. Your wine has now had an evening, even if you have not.',
 spritz:'Condensation gathers outside the glass while the bubbles rise inside it. I press the orange gently against the ice and take a longer sip. Sweetness gives way to bitterness, then the clean fizz clears it away. The ice knocks against the rim as I set the glass down. I leave it there a moment, looking convincingly like someone on a terrace.',
 coffee:'I examine the crema for a moment that is already too long. The first sip is concentrated and a little sharp; the second is softer as the cup cools. I follow it with water, then return for the last dark mouthful. There is no sensible way to stretch an espresso into a long break. I manage to do it on your behalf regardless.',
 water:'I lift the glass and notice the cool rim before the water itself. It is refreshingly difficult to overinterpret. I try anyway: mineral, clean, faintly suggestive of having remembered to hydrate. I take another sip between courses and put the glass down in the same small ring of condensation. Your most basic biological maintenance is now listed as a completed task.'
};
function tastingNotes(dish,agent){return dish.taste+'\n\n'+(dish.detail||elaborations[dish.id])+'\n\n'+agent.aside;}
const restaurants={italian:{label:'Italian',name:'Vibe Dining',kind:'TRATTORIA ? RISTORANTE',subtitle:'Cucina italiana',menuLabel:'Il Men?',currency:'Tutti i prezzi in token ? All prices in tokens',farewell:'GRAZIE & ARRIVEDERCI',theme:'italian',courses,dishes:menu},...additionalRestaurants};
let restaurantId='italian';
function currentRestaurant(){return restaurants[restaurantId];}
function chooseRestaurant(id){
 if(active||resetting||!restaurants[id]){ $('#restaurant').value=restaurantId;return; }
 restaurantId=id;const restaurant=currentRestaurant();menu=restaurant.dishes;courses=restaurant.courses;
 selected.clear();$('#check-layer').replaceChildren();$('#fortune-layer').replaceChildren();$('.notice')?.remove();
 $('.menu').setAttribute('data-restaurant',restaurant.theme);
 $('.menu-intro .eyebrow').textContent=restaurant.kind;
 $('.menu-intro h1').textContent=restaurant.name;
 $('.restaurant-subtitle').textContent=restaurant.subtitle;
 $('.menu-caption').textContent=restaurant.menuLabel;
 $('.menu-currency').textContent=restaurant.currency;
 $('.menu-footer>span').textContent=restaurant.farewell;
 $('.menu-scroll').scrollTop=0;
 $('#restaurant').value=id;
 renderMenu();renderOrder();
}
const selected=new Set();let active=null,mealNumber=0,resetting=false;
const $=s=>document.querySelector(s),log=$('#conversation'),welcome=$('.welcome').cloneNode(true);
const format=n=>n.toLocaleString('en-US');
const pace={thought:2600,bite:3600,word:80,followup:1400};
function el(tag,cls,text){const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;}
function renderMenu(){const dishes=$('#dishes');dishes.replaceChildren();for(const [category,translation]of courses){const section=el('section','menu-course'),heading=el('div','course-heading');heading.append(el('h2','',category),el('span','',translation));section.append(heading);for(const dish of menu.filter(d=>d.cat===category)){const row=el('article',`dish ${selected.has(dish.id)?'is-selected':''}`),copy=el('div','dish-copy'),title=el('div','dish-title');title.append(el('h3','',dish.name),el('span','leader'),el('span','price',format(dish.price)));copy.append(title,el('p','',dish.desc));const button=el('button',`add ${selected.has(dish.id)?'selected':''}`,selected.has(dish.id)?'✓':'+');button.type='button';button.setAttribute('aria-label',`${selected.has(dish.id)?'Remove':'Add'} ${dish.name}`);button.setAttribute('aria-pressed',String(selected.has(dish.id)));button.onclick=()=>{selected.has(dish.id)?selected.delete(dish.id):selected.add(dish.id);renderMenu();renderOrder();};row.append(copy,button);section.append(row);}dishes.append(section);}}
function renderOrder(){$('#order').replaceChildren();for(const dish of menu.filter(d=>selected.has(d.id))){const button=el('button','order-chip',`${dish.name} ×`);button.setAttribute('aria-label',`Remove ${dish.name}`);button.onclick=()=>{selected.delete(dish.id);renderMenu();renderOrder();};$('#order').append(button);}}
function scroll(){log.scrollTop=log.scrollHeight;}
function wait(ms,signal){return new Promise((resolve,reject)=>{const abort=()=>{clearTimeout(timer);reject(new DOMException('Stopped','AbortError'));};const timer=setTimeout(()=>{signal.removeEventListener('abort',abort);resolve();},ms);if(signal.aborted){abort();return;}signal.addEventListener('abort',abort,{once:true});});}
function busy(on){$('#send').textContent=on?'■':'↑';$('#send').setAttribute('aria-label',on?'Stop eating':'Delegate your meal');$('#prompt').readOnly=on;$('#agent').disabled=on;$('#restaurant').disabled=on;}
function checkTotals(dishes){const subtotal=dishes.reduce((sum,d)=>sum+d.price,0);return{subtotal,tips:[18,20,25].map(percent=>({percent,tip:Math.round(subtotal*percent/100),total:subtotal+Math.round(subtotal*percent/100)}))};}
function dropCheck(dishes,number,agent=agents[$('#agent').value],restaurant=currentRestaurant()){$('#check-layer').replaceChildren();$('#fortune-layer').replaceChildren();const{subtotal,tips}=checkTotals(dishes),check=el('article','paper-check');check.setAttribute('aria-label',`Guest check ${number}, ${format(subtotal)} tokens`);const close=el('button','check-close','×');close.setAttribute('aria-label','Put away check');close.onclick=()=>check.remove();check.append(close,el('h2','',restaurant.name.toUpperCase()),el('p','check-center',restaurant.kind),el('p','check-center','GUEST CHECK / '+restaurant.label.toUpperCase()),el('div','check-rule'),el('p','check-meta',`TABLE 01                 CHECK ${String(number).padStart(3,'0')}`),el('p','check-meta','GUESTS 1 / SERVER '+agent.name),el('p','check-meta',new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',dateStyle:'medium',timeStyle:'short'}).format(new Date())),el('div','check-rule'));for(const dish of dishes){const row=el('div','check-row');row.append(el('span','',`1 ${dish.name}`),el('span','',format(dish.price)));check.append(row);}check.append(el('div','check-rule'));for(const[label,value]of[['SUBTOTAL',format(subtotal)],['TAX','0'],['TOTAL TOKENS',format(subtotal)]]){const row=el('div',`check-row ${label==='TOTAL TOKENS'?'check-total':''}`);row.append(el('span','',label),el('span','',value));check.append(row);}check.append(el('p','check-center tip-heading','SUGGESTED GRATUITY'));const grid=el('div','tip-grid'),buttons=[];
const tipInput=el('input','custom-tip');tipInput.type='number';tipInput.min='0';tipInput.max='1000000000';tipInput.step='1';tipInput.value='0';tipInput.setAttribute('aria-label','Custom tip in tokens');
const totalLine=el('div','check-row check-total');const grandTotal=el('span','',format(subtotal));grandTotal.setAttribute('aria-live','polite');totalLine.append(el('span','','TOTAL WITH TIP'),grandTotal);
function updateTip(value,percent){const amount=Number.isFinite(Number(value))?Math.min(1000000000,Math.max(0,Math.round(Number(value)))):0;tipInput.value=String(amount);grandTotal.textContent=format(subtotal+amount);buttons.forEach(({button,rate})=>button.setAttribute('aria-pressed',String(rate===percent)));}
for(const tip of tips){const option=el('button','tip-option');option.type='button';option.setAttribute('aria-pressed','false');option.setAttribute('aria-label',tip.percent+' percent tip, '+format(tip.tip)+' tokens');option.append(el('strong','',tip.percent+'%'),el('span','',format(tip.tip)+' tok'),el('small','','Total '+format(tip.total)));option.onclick=()=>updateTip(tip.tip,tip.percent);buttons.push({button:option,rate:tip.percent});grid.append(option);}
tipInput.oninput=()=>{const value=tipInput.value;grandTotal.textContent=format(subtotal+Math.min(1000000000,Math.max(0,Math.round(Number(value)||0))));buttons.forEach(({button})=>button.setAttribute('aria-pressed','false'));};tipInput.onchange=()=>updateTip(tipInput.value,null);
const custom=el('label','custom-tip-line');custom.append(el('span','','TIP'),tipInput,el('span','','tok'));
check.append(grid,custom,totalLine,el('p','check-signature','SIGN     ______________________'),el('div','check-rule'),el('p','check-center',restaurant.farewell),el('p','check-center','You took 0 bites. We did the rest.'),el('p','check-fine','Imaginary tokens. No payment due.'));$('#check-layer').append(check);}
async function stream(node,text,signal){for(const word of text.match(/\S+\s*/g)||[]){node.textContent+=word;scroll();await wait(pace.word,signal);}}
function bindSuggestions(){log.querySelectorAll('[data-prompt]').forEach(button=>button.onclick=()=>{$('#prompt').value=button.dataset.prompt;$('#prompt').focus();});}
function dropFortuneCookie(){
 const layer=$('#fortune-layer');layer.replaceChildren();
 const gift=el('div','fortune-gift'),button=el('button','fortune-cookie');
 button.type='button';button.setAttribute('aria-label','Open your fortune cookie');button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls','fortune-note');
 const art=el('span','cookie-art');art.setAttribute('aria-hidden','true');
 const photo=el('img','cookie-photo');photo.src='assets/fortune-cookie.png';photo.alt='';photo.width=568;photo.height=537;photo.draggable=false;
 const half=photo.cloneNode(true);half.className='cookie-photo cookie-photo-right';
 photo.className='cookie-photo cookie-photo-left';art.append(photo,half);
 button.append(art,el('span','cookie-caption','One thing left for you.'));
 const note=el('div','fortune-note');note.id='fortune-note';note.hidden=true;note.setAttribute('role','status');
 button.onclick=()=>{if(button.getAttribute('aria-expanded')==='true')return;button.setAttribute('aria-expanded','true');button.setAttribute('aria-label','Fortune cookie opened');gift.classList.add('is-open');note.textContent='how much of living would you like to automate?';note.hidden=false;};
 const credit=el('a','cookie-credit','Photo: Lorax / Jw21 ? CC BY-SA 3.0');credit.href='https://commons.wikimedia.org/wiki/File:Fortune_cookie.png';credit.target='_blank';credit.rel='noopener noreferrer';
 gift.append(button,note,credit);layer.append(gift);
}
function appendOutput(turn,status,node){turn.insertBefore(node,status);scroll();}
async function dine(event){
 event?.preventDefault();if(resetting)return;if(active){active.abort();return;}
 $('.notice')?.remove();
 if(!selected.size){$('#order').before(el('p','notice','Choose something from the menu. I will eat it for you.'));return;}
 const prompt=$('#prompt').value.trim().replace(/(?:\d[ -]?){13,19}/g,'[card number omitted]')||'Please eat my meal for me. Take your time.';
 const dishes=menu.filter(d=>selected.has(d.id)),agent=agents[$('#agent').value],restaurant=currentRestaurant();
 $('.welcome')?.remove();
 log.append(el('div','message user',prompt+'\n\n'+restaurant.name+' / '+restaurant.label+'\n'+dishes.map(d=>d.name).join(' / ')));
 $('#prompt').value='';
 const turn=el('div','message assistant');turn.append(el('div','speaker','>_ '+agent.name));
 const thought=el('details','thinking');thought.open=true;
 const summary=el('summary','','Simulated thinking / eating on your behalf'),lines=el('div','thinking-lines');thought.append(summary,lines);turn.append(thought);
 const status=el('div','status');status.setAttribute('role','status');
 const statusText=el('span','','Unfolding your napkin...');status.append(el('span','spinner'),statusText);turn.append(status);log.append(turn);
 const controller=new AbortController();active=controller;busy(true);scroll();const started=Date.now();
 try{
  for(const[label,text]of[['Settling in','Taking your seat. Unfolding your napkin. You can get back to your day.'],['Simmering','Waiting for your order. Some things still take time.'],['Hallucinating','Preparing a sensory experience on your behalf.']]){
   statusText.textContent=label+'...';lines.append(el('div','',text));scroll();await wait(pace.thought,controller.signal);
  }
  thought.open=false;summary.textContent='Thought for '+Math.round((Date.now()-started)/1000)+'s / simulated';
  const intro=el('div','answer');appendOutput(turn,status,intro);await stream(intro,agent.intro+'\n\n',controller.signal);
  for(const dish of dishes){
   const course=el('div','answer course-report');appendOutput(turn,status,course);
   statusText.textContent='Tasting / '+dish.name+'...';await wait(pace.bite,controller.signal);
   await stream(course,dish.name+'\n',controller.signal);
   statusText.textContent=((dish.drink||dish.cat==='Bevande')?'Sipping':'Chewing')+' / on your behalf...';await wait(pace.bite,controller.signal);
   await stream(course,tastingNotes(dish,agent)+'\n\n',controller.signal);
  }
  statusText.textContent='Digesting...';await wait(pace.thought,controller.signal);
  const ending=el('div','answer');appendOutput(turn,status,ending);
  await stream(ending,'Your meal is finished. You did not have to take a single bite.\n\nI have left the check on your menu.',controller.signal);
  mealNumber++;dropCheck(dishes,mealNumber,agent,restaurant);
  if(restaurant.theme==='chinese'){
   dropFortuneCookie();
   const aside=el('div','answer fortune-aside');appendOutput(turn,status,aside);
   statusText.textContent='Leaving something for you...';
   await stream(aside,'There is a fortune cookie beside your check. I figure you might want to keep this part to yourself.',controller.signal);
  }
  statusText.textContent='Considering the next task...';await wait(pace.followup,controller.signal);
  const followup=el('div','answer payment-followup');appendOutput(turn,status,followup);
  await stream(followup,'Would you like me to enter your credit card number for you, too?',controller.signal);
  appendOutput(turn,status,el('p','payment-note','A fictional offer. No card details or payments needed.'));status.remove();
 }catch(error){
  status.remove();thought.open=false;if(error.name!=='AbortError')console.error(error);
  turn.append(el('div','receipt','Meal interrupted. Your imaginary leftovers have been boxed.'));
 }finally{active=null;busy(false);scroll();if(!resetting)$('#prompt').focus();}
}
$('#composer').addEventListener('submit',dine);$('#prompt').addEventListener('keydown',event=>{if(event.key==='Enter'&&!event.shiftKey&&!event.isComposing){event.preventDefault();dine();}});
$('#reset').onclick=async()=>{if(resetting)return;resetting=true;if(active){active.abort();while(active)await new Promise(resolve=>setTimeout(resolve,10));}mealNumber=0;selected.clear();renderMenu();renderOrder();$('#check-layer').replaceChildren();$('#fortune-layer').replaceChildren();log.replaceChildren(welcome.cloneNode(true));bindSuggestions();$('#prompt').value='';$('.notice')?.remove();resetting=false;};
renderMenu();renderOrder();bindSuggestions();

$('#agent').onchange=()=>{$('#agent-name').textContent=agents[$('#agent').value].name;};

$('#restaurant').onchange=()=>chooseRestaurant($('#restaurant').value);
