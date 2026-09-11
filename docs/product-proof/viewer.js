// Captured addon results, not a web simulation of Blender operations.
(() => {
 const root=document.querySelector('#viewer'),params=new URLSearchParams(location.search);
 const id=params.get('set')||'',embed=params.get('layout')==='embed';
 if(embed)document.documentElement.classList.add('embed');
 const el=(tag,className,text)=>{const n=document.createElement(tag);if(className)n.className=className;if(text!==undefined)n.textContent=text;return n;};
 const mediaURL=value=>{const url=new URL(value,location.href);if(!['https:','http:'].includes(url.protocol))throw Error('Unsupported image link.');return url.href;};
 function report(){if(parent!==window)parent.postMessage({type:'bn-proof-size',height:Math.ceil(root.getBoundingClientRect().height)},'*');}
 new ResizeObserver(report).observe(root);
 function theme(proof){
  const colours={...proof.theme};
  for(const [query,key] of [['bg','bg'],['fg','fg'],['accent','accent']])if(/^[\da-f]{6}$/i.test(params.get(query)||''))colours[key]='#'+params.get(query);
  for(const [key,value] of Object.entries(colours))if(/^[a-z-]+$/.test(key)&&/^#[\da-f]{6}$/i.test(value))document.documentElement.style.setProperty('--'+key,value);
  const style=document.documentElement.style;
  if(params.has('bg')||params.has('fg')){
   style.setProperty('--surface','color-mix(in srgb,var(--bg) 94%,var(--fg))');
   style.setProperty('--muted','color-mix(in srgb,var(--fg) 90%,var(--bg))');
   style.setProperty('--line','color-mix(in srgb,var(--fg) 50%,var(--bg))');
  }
  if(colours.accent){const rgb=colours.accent.slice(1).match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4),l=rgb.reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);style.setProperty('--on-accent',l>.179?'#070a12':'#ffffff');}
 }
 const picture=(state,className='')=>{const img=el('img',className);img.src=mediaURL(state.image);img.alt=state.alt||state.label;img.draggable=false;return img;};
 function footer(proof){const toolbar=el('div','toolbar'),count=el('span','state-number'),full=el('a','full-image','Open full-size image ↗');full.target='_blank';full.rel='noopener';const standalone=el('a','','Larger viewer ↗');standalone.href=`./?set=${encodeURIComponent(id)}`;standalone.target='_blank';standalone.rel='noopener';toolbar.append(count,full);if(embed)toolbar.append(standalone);return {toolbar,count,full};}
 function renderStates(proof){
  if(!proof.states?.length)throw Error('No examples are available.');
  const body=el('div','proof-body'),stage=el('div','stage'),caption=el('p','caption'),label=el('strong'),copy=el('span');caption.append(label,copy);caption.setAttribute('aria-live','polite');
  stage.style.setProperty('--ratio',proof.aspectRatio||'8 / 5');stage.setAttribute('aria-label','Selected example');
  const choices=el('div','choices');choices.setAttribute('role','group');choices.setAttribute('aria-label',proof.choiceLabel||'Choose an example');
  choices.style.setProperty('--columns',Math.min(4,proof.states.length));choices.style.setProperty('--mobile-columns',proof.states.length===4?2:3);
  const {toolbar,count,full}=footer(proof),buttons=[];let request=0,current=null;
  async function activate(index,focus=false){
   const state=proof.states[index],token=++request;stage.classList.add('loading');
   const next=picture(state);if(proof.nativePixels)next.style.objectFit='scale-down';try{await next.decode();}catch{if(token===request){stage.classList.remove('loading');copy.textContent='This image could not load. Try another example or open the image directly.';full.href=next.src;}return;}
   if(token!==request)return;
   current?.remove();stage.append(next);current=next;stage.classList.remove('loading');
   stage.dataset.state=state.id;label.textContent=state.label;copy.textContent=state.caption||'';full.href=next.src;count.textContent=`${index+1} / ${proof.states.length}`;
   buttons.forEach((button,i)=>{button.setAttribute('aria-pressed',String(i===index));});if(focus)buttons[index].focus();report();
  }
  proof.states.forEach((state,index)=>{
   const button=el('button','choice');button.type='button';button.setAttribute('aria-pressed','false');button.setAttribute('aria-label',state.label);
   if(state.thumb){const thumb=picture({image:state.thumb,alt:''});thumb.loading='lazy';button.append(thumb);}button.append(el('span','',state.label));
   button.addEventListener('click',()=>activate(index));button.addEventListener('keydown',event=>{let n;if(event.key==='ArrowRight'||event.key==='ArrowDown')n=(index+1)%proof.states.length;else if(event.key==='ArrowLeft'||event.key==='ArrowUp')n=(index-1+proof.states.length)%proof.states.length;else if(event.key==='Home')n=0;else if(event.key==='End')n=proof.states.length-1;else return;event.preventDefault();activate(n,true);});buttons.push(button);choices.append(button);
  });
  body.append(stage,caption,choices,toolbar,el('p','credit',proof.credit||''));root.append(body);
  activate(Math.max(0,proof.states.findIndex(s=>s.id===proof.defaultState)));
 }
 function renderComparison(proof){
  if(proof.stereogram)throw Error('Stereograms must use whole-image switching.');
  const body=el('div','proof-body comparison-body'),stage=el('div','stage comparison');stage.style.setProperty('--ratio',proof.aspectRatio||'8 / 5');
  const before=picture(proof.before,'before'),after=picture(proof.after,'after'),divider=el('div','divider');divider.setAttribute('aria-hidden','true');
  const left=el('span','corner before-label',proof.before.label),right=el('span','corner after-label',proof.after.label),range=el('input','range');range.type='range';range.min='0';range.max='100';range.value='50';range.setAttribute('aria-label',`Compare ${proof.before.label} and ${proof.after.label}`);
  const actions=el('div','actions'),buttons=[];
  function reveal(v){const value=Math.max(0,Math.min(100,Number(v)));range.value=value;range.setAttribute('aria-valuetext',`${value}% ${proof.before.label}, ${100-value}% ${proof.after.label}`);stage.style.setProperty('--reveal',value+'%');left.hidden=value<12;right.hidden=value>88;buttons.forEach(([b,n])=>b.setAttribute('aria-pressed',String(n===value)));}
  for(const [text,n] of [[proof.before.label,100],['50 / 50',50],[proof.after.label,0]]){const b=el('button','',text);b.type='button';b.addEventListener('click',()=>reveal(n));buttons.push([b,n]);actions.append(b);}
  range.addEventListener('input',()=>reveal(range.value));stage.append(after,before,left,right,divider,range);
  const {toolbar,count,full}=footer(proof);count.textContent='Drag to compare';full.href=after.src;
  body.append(stage,actions,el('p','caption',proof.caption||''),toolbar,el('p','credit',proof.credit||''));root.append(body);reveal(50);
  Promise.all([before.decode(),after.decode()]).then(()=>{if(before.naturalWidth!==after.naturalWidth||before.naturalHeight!==after.naturalHeight)throw Error('Comparison images must have matching dimensions.');}).catch(error=>{const warning=el('p','status',error.message);root.replaceChildren(warning);});
 }
 async function main(){
  if(!/^[a-z0-9-]+$/.test(id))throw Error('Choose a valid example set.');
  const response=await fetch(`./sets/${id}.json`,{cache:'no-cache'});if(!response.ok)throw Error('These examples are not available yet.');const proof=await response.json();
  theme(proof);document.title=`${proof.product} · ${proof.title}`;root.replaceChildren();
  const header=el('header','page-heading');header.append(el('p','eyebrow',`BLUE NILE / ${proof.product}`),el('h1','',proof.title),el('p','intro',proof.description||''));root.append(header);
  if(proof.type==='comparison')renderComparison(proof);else renderStates(proof);document.fonts.ready.then(report);
 }
 main().catch(error=>root.replaceChildren(el('p','status',error.message)));
})();
