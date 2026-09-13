// Real captured addon results. Supports legacy hosted sets and editable Workshop data.
(() => {
 'use strict';
 const root=document.querySelector('#viewer'),params=new URLSearchParams(location.search),local=document.getElementById('bn-proof-data');
 const id=params.get('set')||'',embed=document.documentElement.classList.contains('embed')||params.get('layout')==='embed';
 if(embed)document.documentElement.classList.add('embed');
 const el=(tag,className,text)=>{const n=document.createElement(tag);if(className)n.className=className;if(text!==undefined)n.textContent=String(text);return n;};
 const clamp=(v,min,max,fallback)=>Number.isFinite(Number(v))?Math.max(min,Math.min(max,Number(v))):fallback;
 const mediaURL=value=>{
  const raw=String(value||'').trim();if(!raw)return '';
  if(/[\u0000-\u001f]/.test(raw))throw Error('Unsupported image link.');
  if(/^data:image\/(?:png|jpeg|webp);base64,[a-z\d+/]*={0,2}$/i.test(raw)){
   if(raw.length>8000000*4/3+64)throw Error('This image exceeds the 8 MB limit.');return raw;
  }
  const url=new URL(raw,location.href);if(!['https:','http:'].includes(url.protocol)||url.username||url.password)throw Error('Unsupported image link.');return url.href;
 };
 let resizeQueued=false;
 function report(){if(resizeQueued)return;resizeQueued=true;requestAnimationFrame(()=>{resizeQueued=false;if(parent!==window)parent.postMessage({type:'bn-proof-size',proofId:root.dataset.proofId||id,height:Math.ceil(root.getBoundingClientRect().height)},'*');});}
 if(typeof ResizeObserver!=='undefined')new ResizeObserver(report).observe(root);
 function fontStack(role,fallback){
  const tokens=[role?.family,...String(role?.fallback||'').split(',')].filter(Boolean).map(s=>String(s).trim().replace(/^['"]|['"]$/g,''));
  const safe=tokens.filter(s=>/^[\p{L}\p{N} _-]{1,100}$/u.test(s));
  return safe.length?safe.map(s=>/^(serif|sans-serif|monospace|system-ui|cursive|fantasy|ui-[a-z]+)$/.test(s)?s:`"${s}"`).join(','):fallback;
 }
 function theme(proof){
  const colours={...proof.theme};
  for(const [query,key]of[['bg','bg'],['fg','fg'],['accent','accent']])if(/^[\da-f]{6}$/i.test(params.get(query)||''))colours[key]='#'+params.get(query);
  const style=document.documentElement.style;
  for(const key of ['bg','fg','accent','surface','line','muted'])if(/^#[\da-f]{6}$/i.test(colours[key]||''))style.setProperty('--'+key,colours[key]);
  if(params.has('bg')||params.has('fg')){
   style.setProperty('--surface','color-mix(in srgb,var(--bg) 94%,var(--fg))');style.setProperty('--muted','color-mix(in srgb,var(--fg) 90%,var(--bg))');style.setProperty('--line','color-mix(in srgb,var(--fg) 50%,var(--bg))');
  }
  if(/^#[\da-f]{6}$/i.test(colours.accent||'')){
   const rgb=colours.accent.slice(1).match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4),l=rgb.reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);style.setProperty('--on-accent',l>.179?'#070a12':'#ffffff');
  }
  style.setProperty('--font-display',fontStack(proof.typography?.display,'Oxanium,Arial,sans-serif'));
  style.setProperty('--font-body',fontStack(proof.typography?.body,'Outfit,Arial,sans-serif'));
  style.setProperty('--font-mono',fontStack(proof.typography?.mono,'monospace'));
 }
 function imageStyle(img,state,proof){
  const locked=!!proof.stereogram,fit=locked?'contain':state.fit==='cover'?'cover':proof.nativePixels?'scale-down':'contain';
  img.style.objectFit=fit;img.style.objectPosition=`${locked?50:clamp(state.positionX,0,100,50)}% ${locked?50:clamp(state.positionY,0,100,50)}%`;
  img.style.transform=`scale(${locked?1:clamp(state.zoom,1,4,1)}) rotate(${locked?0:clamp(state.rotation,-180,180,0)}deg)`;
 }
 function picture(state,proof={}){
  const img=el('img');const src=mediaURL(state?.image);if(src)img.src=src;
  img.alt=state?.alt||state?.label||'';img.draggable=false;imageStyle(img,state||{},proof);return img;
 }
 function layer(state,proof,className='') {const box=el('div',`image-layer ${className}`),img=picture(state,proof);box.append(img);return{box,img};}
 async function ready(img){if(!img.getAttribute('src'))throw Error('Choose an image for this frame.');await img.decode();if(img.naturalWidth*img.naturalHeight>32000000)throw Error('This image exceeds 32 megapixels.');}
 function ratio(proof){const r=String(proof.aspectRatio||'8 / 5');return /^\d+(?:\.\d+)?\s*\/\s*\d+(?:\.\d+)?$/.test(r)&&r.split('/').every(n=>Number(n)>0)?r:'8 / 5';}
 function fullLink(link,img){link.href=img.src;if(img.src.startsWith('data:')){link.download='comparison-image';link.textContent='Save full-size image ↓';}else{link.removeAttribute('download');link.textContent='Open full-size image ↗';}}
 function footer(proof){
  const toolbar=el('div','toolbar'),count=el('span','state-number'),full=el('a','full-image','Open full-size image ↗');full.target='_blank';full.rel='noopener';toolbar.append(count,full);
  if(embed&&!local){const standalone=el('a','','Larger viewer ↗');const u=new URL(location.href);u.searchParams.delete('layout');standalone.href=u.href;standalone.target='_blank';standalone.rel='noopener';toolbar.append(standalone);}
  return{toolbar,count,full};
 }
 function renderStates(proof){
  if(!Array.isArray(proof.states)||proof.states.length<1||proof.states.length>24)throw Error('Use between 2 and 24 examples.');
  const body=el('div','proof-body'),stage=el('div','stage'),caption=el('p','caption'),label=el('strong'),copy=el('span');caption.append(label,copy);caption.setAttribute('aria-live','polite');
  stage.style.setProperty('--ratio',ratio(proof));stage.setAttribute('aria-label','Selected example');
  const choices=el('div','choices');choices.setAttribute('role','group');choices.setAttribute('aria-label',proof.choiceLabel||'Choose an example');
  choices.style.setProperty('--columns',Math.min(4,proof.states.length));choices.style.setProperty('--mobile-columns',proof.states.length===4?2:Math.min(3,proof.states.length));
  const{toolbar,count,full}=footer(proof),buttons=[];let request=0,current=null;
  async function activate(index,focus=false){
   const state=proof.states[index],token=++request;stage.classList.add('loading');stage.querySelector('.image-message')?.remove();
   let next;try{next=layer(state,proof);await ready(next.img);}catch(error){
    if(token===request){stage.classList.remove('loading');current?.remove();current=null;stage.append(el('p','image-message',state.image?'This image could not load. Check its link or choose another image.':error.message));label.textContent=state.label||'';copy.textContent=state.caption||'';full.removeAttribute('href');buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));stage.dataset.state=state.id||String(index);count.textContent=`${index+1} / ${proof.states.length}`;report();}return;
   }
   if(token!==request)return;
   current?.remove();stage.append(next.box);current=next.box;stage.classList.remove('loading');
   stage.dataset.state=state.id||String(index);label.textContent=state.label||'';copy.textContent=state.caption||'';fullLink(full,next.img);count.textContent=`${index+1} / ${proof.states.length}`;
   buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));if(focus)buttons[index].focus();report();
  }
  proof.states.forEach((state,index)=>{
   const button=el('button','choice');button.type='button';button.setAttribute('aria-pressed','false');button.setAttribute('aria-label',state.label||`Image ${index+1}`);
   if(state.thumb){try{const thumb=picture({image:state.thumb,alt:''});thumb.loading='eager';button.append(thumb);}catch{/* Ignore unsafe optional thumbnails. */}}
   button.append(el('span','',state.label||`Image ${index+1}`));
   button.addEventListener('click',()=>activate(index));button.addEventListener('keydown',event=>{let n;if(event.key==='ArrowRight'||event.key==='ArrowDown')n=(index+1)%proof.states.length;else if(event.key==='ArrowLeft'||event.key==='ArrowUp')n=(index-1+proof.states.length)%proof.states.length;else if(event.key==='Home')n=0;else if(event.key==='End')n=proof.states.length-1;else return;event.preventDefault();activate(n,true);});buttons.push(button);choices.append(button);
  });
  body.append(stage,caption,choices,toolbar,el('p','credit',proof.credit||''));root.append(body);activate(Math.max(0,proof.states.findIndex(s=>s.id===proof.defaultState)));
 }
 function renderComparison(proof){
  if(proof.stereogram)throw Error('Stereograms must use whole-image switching.');
  const source=proof.states?.[0]||proof.before,result=proof.states?.[1]||proof.after;if(!source||!result)throw Error('An A/B comparison requires two images.');
  // A fixed clipping layer surrounds transformed images, keeping the divider aligned.
  const framing={fit:source.fit,positionX:source.positionX,positionY:source.positionY,zoom:source.zoom,rotation:source.rotation};
  const body=el('div','proof-body comparison-body'),stage=el('div','stage comparison');stage.style.setProperty('--ratio',ratio(proof));
  const before=layer(source,proof,'before-layer'),after=layer({...result,...framing},proof,'after-layer'),divider=el('div','divider');divider.setAttribute('aria-hidden','true');
  const left=el('span','corner before-label',source.label||'Before'),right=el('span','corner after-label',result.label||'After'),range=el('input','range');range.type='range';range.min='0';range.max='100';range.value='50';range.setAttribute('aria-label',`Compare ${source.label||'Before'} and ${result.label||'After'}`);
  const actions=el('div','actions'),buttons=[];
  function reveal(v){const value=clamp(v,0,100,50);range.value=value;range.setAttribute('aria-valuetext',`${value}% ${source.label||'Before'}, ${100-value}% ${result.label||'After'}`);stage.style.setProperty('--reveal',value+'%');left.hidden=value<12;right.hidden=value>88;buttons.forEach(([b,n])=>b.setAttribute('aria-pressed',String(n===value)));}
  for(const [text,n]of[[source.label||'Before',100],['50 / 50',50],[result.label||'After',0]]){const b=el('button','',text);b.type='button';b.addEventListener('click',()=>reveal(n));buttons.push([b,n]);actions.append(b);}
  range.addEventListener('input',()=>reveal(range.value));stage.append(after.box,before.box,left,right,divider,range);
  const{toolbar,count,full}=footer(proof);count.textContent='Drag to compare';if(after.img.getAttribute('src'))fullLink(full,after.img);
  body.append(stage,actions,el('p','caption',proof.caption||''),toolbar,el('p','credit',proof.credit||''));root.append(body);reveal(proof.initialSplit??50);
  Promise.all([ready(before.img),ready(after.img)]).then(()=>{if(before.img.naturalWidth!==after.img.naturalWidth||before.img.naturalHeight!==after.img.naturalHeight)throw Error('Comparison images must have matching natural dimensions.');}).catch(error=>{stage.replaceChildren(el('p','image-message',error.message));range.disabled=true;actions.querySelectorAll('button').forEach(b=>b.disabled=true);full.removeAttribute('href');});
  if(proof.target?.image){const target=el('div','target-reference'),frame=el('div','target-image-frame'),img=picture(proof.target);frame.append(img);target.append(frame,el('p','caption',proof.target.caption||proof.target.label||'Colour target'));body.append(target);}
 }
 async function main(){
  let proof;if(local){proof=JSON.parse(local.textContent);}else{
   if(!/^[a-z\d-]+$/.test(id))throw Error('Choose a valid example set.');
   const response=await fetch(`./sets/${id}.json`,{cache:'no-cache'});if(!response.ok)throw Error('These examples are not available yet.');proof=await response.json();
  }
  if(!proof||typeof proof!=='object')throw Error('Invalid comparison data.');
  theme(proof);document.documentElement.classList.toggle('show-heading',!!proof.showHeadingInEmbed);document.title=`${proof.product||'Blue Nile'} · ${proof.title||'Comparison'}`;root.replaceChildren();root.dataset.proofId=proof.id||id;root.dataset.revision=proof.workshopRevision||'';
  const header=el('header','page-heading');header.append(el('p','eyebrow',`BLUE NILE / ${proof.product||''}`),el('h1','',proof.title||'Compare the results.'),el('p','intro',proof.description||''));root.append(header);
  if(proof.type==='comparison')renderComparison(proof);else renderStates(proof);document.fonts.ready.then(report);
 }
 main().catch(error=>root.replaceChildren(el('p','status',error.message)));
})();
