'use strict';

// Every route, date and inclusion in this site comes from the supplied
// "Winter Spiti 2027" brochure. Journey details may vary with conditions.
const DAYS = [
 {day:1,date:'THU · 21 JAN',title:'The expedition begins',route:'Ahmedabad → Jaipur',distance:'Approx. 670 km',drive:'11–12 hrs',halt:'Jaipur',phase:'outbound',image:'jaipur.webp',imageLabel:'JAIPUR',highlights:['Scenic highway drive through Rajasthan','Evening arrival in Jaipur','Hotel check-in and group dinner']},
 {day:2,date:'FRI · 22 JAN',title:'The road to the mountains',route:'Jaipur → Chandigarh',distance:'Approx. 500 km',drive:'9–10 hrs',halt:'Chandigarh',phase:'outbound',image:'chandigarh.webp',imageLabel:'CHANDIGARH',highlights:['Drive through Haryana and Punjab','Evening arrival in Chandigarh','Visit Rock Garden if time permits','Hotel check-in and a leisure evening'],note:'Rock Garden visit depends on available time.'},
 {day:3,date:'SAT · 23 JAN',title:'Ascending into the Himalayas',route:'Chandigarh → Kufri / Shimla',distance:'Approx. 120 km',drive:'4–5 hrs',halt:'Kufri / Shimla',phase:'outbound',image:'kufri.webp',imageLabel:'KUFRI',highlights:['Scenic drive into the Shimla hills','Arrival in Kufri','Enjoy snow views and Himalayan landscapes','Local sightseeing at Kufri Fun World or Mahasu Peak','Hotel check-in, leisure evening and group dinner']},
 {day:4,date:'SUN · 24 JAN',title:'Into the snowbound frontier',route:'Kufri → Chitkul via Narkanda, Rampur & Sangla',distance:'Approx. 250 km',drive:'8–9 hrs',halt:'Chitkul / Sangla',phase:'outbound',image:'chitkul.webp',imageLabel:'CHITKUL',highlights:['Drive via Narkanda, Rampur and Sangla','Stunning views of Sutlej Valley','Arrive in Chitkul, the advertised last village of India','Explore riverside, wooden houses and local culture','Hotel check-in, leisure evening and group dinner'],note:'Night halt may be Chitkul or Sangla, subject to road conditions.'},
 {day:5,date:'MON · 25 JAN',title:'The ascent to the high desert',route:'Chitkul / Sangla → Kaza',distance:'Approx. 250–300 km',drive:'9–10 hrs',halt:'Kaza',phase:'spiti',image:'kaza.webp',imageLabel:'KAZA',highlights:['Drive through Sangla Valley','Cross challenging mountain roads','Take in snow-clad landscapes','Arrive in Kaza, Spiti Valley','Hotel check-in and rest']},
 {day:6,date:'TUE · 26 JAN',title:'Exploring Spiti’s iconic villages',route:'Kaza local sightseeing',distance:'Approx. 50–100 km',drive:'4–6 hrs',halt:'Kaza',phase:'spiti',image:'key-monastery.webp',imageLabel:'KEY MONASTERY',highlights:['Visit Key Monastery','Explore Kibber village','Visit Komic, listed as the world’s highest motorable village','Discover Langza Buddha Statue and fossil site','See Chicham Bridge','Return to Kaza'],note:'Sightseeing is dependent on winter road access.'},
 {day:7,date:'WED · 27 JAN',title:'The Spiti loop',route:'Kaza local sightseeing',distance:'Approx. 50–100 km',drive:'4–6 hrs',halt:'Kaza',phase:'spiti',image:'langza.webp',imageLabel:'LANGZA',highlights:['Explore Hikkim, known for its high-altitude post office','Visit Langza and Komic if not covered earlier','Scenic drives to nearby high-altitude villages','Capture stunning landscapes','Leisure evening in Kaza'],note:'Access to these villages depends on winter road conditions.'},
 {day:8,date:'THU · 28 JAN',title:'Looking back at the peaks',route:'Kaza → Kalpa',distance:'Approx. 200–220 km',drive:'8–9 hrs',halt:'Kalpa',phase:'return',image:'kalpa.webp',imageLabel:'KALPA',highlights:['Drive along scenic Spiti and Kinnaur routes','Breathtaking views of Sutlej River','Arrive in Kalpa','Visit Kalpa village if time permits','Hotel check-in and leisure evening']},
 {day:9,date:'FRI · 29 JAN',title:'Through Kinnaur Valley',route:'Kalpa → Mashobra / Shimla',distance:'Approx. 200–250 km',drive:'8–9 hrs',halt:'Mashobra',phase:'return',image:'mashobra.webp',imageLabel:'MASHOBRA',highlights:['Drive through Kinnaur Valley','Stunning mountain and river views','Arrive at Mashobra / Shimla','Hotel check-in','Leisure evening and group dinner']},
 {day:10,date:'SAT · 30 JAN',title:'Back to the plains',route:'Mashobra → Jaipur',distance:'Approx. 600–650 km',drive:'10–12 hrs',halt:'Jaipur',phase:'return',image:'jaipur.webp',imageLabel:'JAIPUR',highlights:['Long scenic drive back to Jaipur','En-route lunch and refreshment stops','Arrive in Jaipur','Hotel check-in','Leisure evening and farewell dinner']},
 {day:11,date:'SUN · 31 JAN',title:'The journey back home',route:'Jaipur → Ahmedabad',distance:'Approx. 607 km',drive:'11–12 hrs',halt:'Trip ends in Ahmedabad',phase:'return',image:'hero-convoy.webp',imageLabel:'AHMEDABAD',highlights:['Final drive back to Ahmedabad','En-route breaks for meals and refreshments','Reach Ahmedabad with unforgettable expedition memories']}
];
const STOPS = [
 ['Ahmedabad',1],['Jaipur',1],['Chandigarh',2],['Kufri',3],['Chitkul',4],['Sangla',4],['Kaza',5],['Kalpa',8],['Mashobra',9],['Jaipur',10],['Ahmedabad',11]
];
const PACKING = {
 personal:[
  'Thermal innerwear (2–3 sets)','Heavy down jacket & insulated layers','Waterproof / windproof jacket','Woollen cap, muffler & gloves','Woollen socks (4–5 pairs)','Snow / trekking shoes with good grip','Sunglasses, sunscreen & lip balm','Personal medicines','Thermos / insulated bottle','Power bank & torch'
 ],
 vehicle:[
  'Heavy-duty portable air pump','Tyre puncture repair kit','Spare tube (for tubeless sidewall damage)','Engine coolant (1 litre)','Engine oil (1 litre)','M-Seal / epoxy compound','Instant adhesive','Zip ties / cable ties','Heavy-duty duct tape','Jack & wheel spanner','Tow rope / recovery strap','Snow chains (if required)','Tyres and spare checked','Battery & brakes inspected','Coolant / antifreeze levels OK','Heater, defogger & lights functional'
 ]
};
const asset = s => `assets/${s}`;
const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];
const pad = n => String(n).padStart(2,'0');

// Header, focus-aware mobile menu and page-reading progress.
const header = $('#siteHeader');
const menuToggle = $('#menuToggle');
const navLinks = $('#navLinks');
function closeMenu(){header.classList.remove('menu-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open menu');}
menuToggle.addEventListener('click',()=>{
 const next=!header.classList.contains('menu-open');
 header.classList.toggle('menu-open',next);
 menuToggle.setAttribute('aria-expanded',String(next));
 menuToggle.setAttribute('aria-label',next?'Close menu':'Open menu');
});
$$('.nav-links a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.addEventListener('click',e=>{if(header.classList.contains('menu-open')&&!header.contains(e.target))closeMenu();});
const updateScroll=()=>{
 const y=window.scrollY;
 header.classList.toggle('is-scrolled',y>45);
 const max=document.documentElement.scrollHeight-window.innerHeight;
 $('#pageProgress').style.width=(max?100*y/max:0)+'%';
};
window.addEventListener('scroll',updateScroll,{passive:true});
updateScroll();

// Reveal effects. Always display content if IntersectionObserver is unavailable.
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
 }),{threshold:.09,rootMargin:'0px 0px -10px 0px'});
 $$('.reveal').forEach(el=>observer.observe(el));
}else{$$('.reveal').forEach(el=>el.classList.add('visible'));}

// Route track; choosing a stop reveals that precise day's itinerary.
const routeTrack=$('#routeTrack');
STOPS.forEach(([name,day],i)=>{
 const button=document.createElement('button');
 button.type='button';button.className='route-point';
 button.title=`See day ${day} — ${name}`;
 button.setAttribute('aria-label',`View day ${day} on the expedition: ${name}`);
 button.innerHTML=`<span class="point-marker"><span>${pad(i+1)}</span></span><span class="point-name">${name}</span><span class="point-day">DAY ${pad(day)}</span>`;
 button.addEventListener('click',()=>{
  $$('.route-point').forEach(el=>el.classList.remove('is-active'));
  button.classList.add('is-active');
  setFilter('all');
  expandDay(day,true);
  window.setTimeout(()=>document.getElementById(`day-${day}`)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'}),50);
 });
 routeTrack.append(button);
});

// Day cards with readable summaries and optional full highlights.
const dayList=$('#dayList');
DAYS.forEach(d=>{
 const card=document.createElement('article');
 card.className='day-card';card.id=`day-${d.day}`;card.dataset.phase=d.phase;
 const highlights=d.highlights.map(t=>`<li>${t}</li>`).join('');
 card.innerHTML=`
 <div class="day-num"><small>DAY</small><strong>${pad(d.day)}</strong><span>${d.date}<br>2027</span></div>
 <div class="day-body"><div class="day-stage">${d.phase==='spiti'?'THE SPITI EXPERIENCE':d.phase==='outbound'?'INTO THE HIMALAYAS':'THE HOMECOMING'}</div>
 <h3 class="day-title">${d.title}</h3><div class="day-route">${d.route}</div>
 <div class="day-metrics"><span><i>↗</i>${d.distance}</span><span><i>◷</i>${d.drive}</span><span><i>⌂</i><b>${d.halt}</b></span></div>
 <button class="day-expand" type="button" aria-expanded="false" aria-controls="details-${d.day}">SHOW HIGHLIGHTS +</button></div>
 <div class="day-cover"><img src="${asset(d.image)}" loading="lazy" alt="${d.imageLabel} landscape, illustrated in the official brochure"><span class="day-image-tag">${d.imageLabel}</span></div>
 <div class="day-details" id="details-${d.day}"><ul>${highlights}</ul>${d.note?`<p class="day-note">${d.note}</p>`:''}</div>`;
 const button=card.querySelector('.day-expand');
 button.addEventListener('click',()=>toggleDay(d.day));
 dayList.append(card);
});
function toggleDay(number){
 const card=document.getElementById(`day-${number}`);
 if(!card)return;
 const open=!card.classList.contains('is-open');
 card.classList.toggle('is-open',open);
 const button=card.querySelector('.day-expand');
 button.setAttribute('aria-expanded',String(open));
 button.textContent=open?'HIDE HIGHLIGHTS −':'SHOW HIGHLIGHTS +';
}
function expandDay(number,open=true){
 const card=document.getElementById(`day-${number}`);
 if(!card)return;
 if(card.classList.contains('is-open')!==open)toggleDay(number);
}
function setFilter(filter){
 $$('.filter').forEach(button=>{
  const selected=button.dataset.filter===filter;
  button.classList.toggle('active',selected);
  button.setAttribute('aria-pressed',String(selected));
 });
 $$('.day-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.phase!==filter;});
}
$$('.filter').forEach(btn=>btn.addEventListener('click',()=>setFilter(btn.dataset.filter)));

// Interactive equipment checklist saved locally on the visitor's device.
let currentChecklist='personal';
const inMemoryStore=new Map();
function storageGet(key){try{return JSON.parse(localStorage.getItem(key)||'[]');}catch{return inMemoryStore.get(key)||[];}}
function storageSet(key,value){inMemoryStore.set(key,value);try{localStorage.setItem(key,JSON.stringify(value));}catch{}}
function getChecked(){const stored=storageGet(`spiti2027-${currentChecklist}`);return Array.isArray(stored)?stored:[];}
function checklistStatus(){
 const checked=getChecked(); const total=PACKING[currentChecklist].length;
 const percent=Math.round(checked.length/total*100);
 $('#progressValue').textContent=percent+'%';
 $('#progressRing').style.setProperty('--progress',percent+'%');
 $('#progressRing').setAttribute('aria-valuenow',String(percent));
 $('#checkStatus').textContent=`${checked.length} of ${total} packed`;
}
function renderChecklist(){
 const grid=$('#checkGrid');grid.innerHTML='';
 PACKING[currentChecklist].forEach((item,index)=>{
  const label=document.createElement('label');label.className='check-item';
  const input=document.createElement('input');input.type='checkbox';input.checked=getChecked().includes(index);
  input.setAttribute('aria-label',item);
  const span=document.createElement('span');span.textContent=item;
  input.addEventListener('change',()=>{
   const values=new Set(getChecked());
   input.checked?values.add(index):values.delete(index);
   storageSet(`spiti2027-${currentChecklist}`,[...values]);
   checklistStatus();
  });
  label.append(input,span);grid.append(label);
 });
 checklistStatus();
}
$$('.check-tab').forEach(button=>button.addEventListener('click',()=>{
 currentChecklist=button.dataset.checklist;
 $$('.check-tab').forEach(el=>{const active=el===button;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});
 renderChecklist();
}));
$('#resetChecklist').addEventListener('click',()=>{storageSet(`spiti2027-${currentChecklist}`,[]);renderChecklist();});
renderChecklist();

// Respect brochure start date. Do not imply the batch can still be booked after departure.
function updateCountdown(){
 const departure=new Date('2027-01-21T00:00:00+05:30').getTime();
 const diff=departure-Date.now();
 if(diff<=0){
  $('#countdownBox').innerHTML='<small>JANUARY 2027 EXPEDITION</small><div class="departed-message">This batch has departed or concluded. Contact the organisers for future trips.</div>';
  return;
 }
 const total=Math.floor(diff/60000);
 $('#daysLeft').textContent=String(Math.floor(total/1440));
 $('#hoursLeft').textContent=pad(Math.floor(total%1440/60));
 $('#minutesLeft').textContent=pad(total%60);
}
updateCountdown();
window.setInterval(()=>{if($('#daysLeft'))updateCountdown();},60000);

// The enquiry form has NO server, no database, no payment gateway.
// It composes a WhatsApp message in the visitor's own WhatsApp app/browser.
$('#enquiryForm').addEventListener('submit',event=>{
 event.preventDefault();
 const form=event.currentTarget;
 if(!form.reportValidity())return;
 const name=$('#guestName').value.trim();
 const phone=$('#guestPhone').value.trim();
 const travellers=$('#groupSize').value;
 const interest=$('#interest').value;
 const note=$('#guestMessage').value.trim();
 const lines=[
  'Hello YHM Expeditions!',
  '',
  'I am interested in the Winter Spiti 2027 4×4 Expedition (21–31 January 2027).',
  `Name: ${name}`,
  `Contact number: ${phone}`,
  `Travellers: ${travellers}`,
  `Interested in: ${interest}`,
  ...(note?[`Questions / requests: ${note}`]:[]),
  '',
  'Please share availability, full costs (including exclusions), and booking details. Thank you!'
 ];
 const url=`https://wa.me/919998556599?text=${encodeURIComponent(lines.join('\n'))}`;
 const win=window.open(url,'_blank','noopener,noreferrer');
 if(!win){window.location.href=url;}
});

// Clickable highlights/gallery with keyboard-navigable native modal.
const galleryButtons=$$('#galleryGrid .gallery-tile');
const lightbox=$('#galleryLightbox');
let galleryIndex=0;
const nativeDialog=el=>typeof el.showModal==='function';
function openGallery(index){
 galleryIndex=(index+galleryButtons.length)%galleryButtons.length;
 const el=galleryButtons[galleryIndex];
 $('#lightboxImage').src=el.dataset.img;
 $('#lightboxImage').alt=el.dataset.title+' — illustration from the expedition brochure';
 $('#lightboxTitle').textContent=el.dataset.title;
 $('#lightboxNote').textContent=el.dataset.note;
 $('#lightboxCount').textContent=`${galleryIndex+1} / ${galleryButtons.length}`;
 if(!lightbox.open){nativeDialog(lightbox)?lightbox.showModal():lightbox.setAttribute('open','');}
}
galleryButtons.forEach((el,i)=>el.addEventListener('click',()=>openGallery(i)));
$('#closeLightbox').addEventListener('click',()=>lightbox.close());
$('#lightboxPrev').addEventListener('click',()=>openGallery(galleryIndex-1));
$('#lightboxNext').addEventListener('click',()=>openGallery(galleryIndex+1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close();});

// Preview of every original brochure page. Also supports swipe on mobile.
const brochureDialog=$('#brochureDialog');
let brochurePage=1;
function showBrochurePage(page){
 brochurePage=Math.max(1,Math.min(14,page));
 $('#brochurePageImage').src=`assets/brochure-${pad(brochurePage)}.webp`;
 $('#brochurePageImage').alt=`Official Winter Spiti 2027 brochure, page ${brochurePage} of 14`;
 $('#brochurePageNumber').textContent=`Page ${brochurePage} of 14`;
 $('#brochurePrev').disabled=brochurePage===1;
 $('#brochureNext').disabled=brochurePage===14;
}
$('#openBrochure').addEventListener('click',()=>{showBrochurePage(1);nativeDialog(brochureDialog)?brochureDialog.showModal():brochureDialog.setAttribute('open','');});
$('#closeBrochure').addEventListener('click',()=>brochureDialog.close());
$('#brochurePrev').addEventListener('click',()=>showBrochurePage(brochurePage-1));
$('#brochureNext').addEventListener('click',()=>showBrochurePage(brochurePage+1));
brochureDialog.addEventListener('click',e=>{if(e.target===brochureDialog)brochureDialog.close();});
let swipeX=null;
$('#brochurePageImage').addEventListener('touchstart',e=>{swipeX=e.changedTouches[0].screenX;},{passive:true});
$('#brochurePageImage').addEventListener('touchend',e=>{
 if(swipeX===null)return;
 const difference=e.changedTouches[0].screenX-swipeX;
 if(Math.abs(difference)>55)showBrochurePage(brochurePage+(difference<0?1:-1));
 swipeX=null;
},{passive:true});
document.addEventListener('keydown',e=>{
 if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight')return;
 const dir=e.key==='ArrowRight'?1:-1;
 if(brochureDialog.open){e.preventDefault();showBrochurePage(brochurePage+dir);}
 else if(lightbox.open){e.preventDefault();openGallery(galleryIndex+dir);}
});

// Simple native share/copy flow. Never pretends sharing succeeded on failure.
$('#shareSite').addEventListener('click',async()=>{
 const url=location.href.split('#')[0];
 try{
  if(navigator.share){await navigator.share({title:'Winter Spiti 2027 4×4 Expedition',text:'Explore the 11-day Winter Spiti 2027 expedition.',url});return;}
  if(navigator.clipboard){await navigator.clipboard.writeText(url);$('#shareSite').textContent='Link copied ✓';}
  else{window.prompt('Copy this page link:',url);}
 }catch(error){if(error?.name!=='AbortError')window.prompt('Copy this page link:',url);}
});
$('#copyrightYear').textContent=String(new Date().getFullYear());
