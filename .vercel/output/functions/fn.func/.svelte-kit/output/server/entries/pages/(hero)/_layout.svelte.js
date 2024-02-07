import { c as create_ssr_component, d as add_attribute, b as subscribe, f as each, e as escape, g as null_to_empty, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import "../../../chunks/client.js";
import { p as pages } from "../../../chunks/index.js";
const MenuIcon = "data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2024%2024'%20height='25'%20width='25'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='none'%20d='M0%200h24v24H0z'%3e%3c/path%3e%3cpath%20d='M3%2018h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'%3e%3c/path%3e%3c/svg%3e";
const css$3 = {
  code: "section.svelte-p1vim5 :first-child article.svelte-p1vim5.svelte-p1vim5,section.svelte-p1vim5 :last-child article.svelte-p1vim5.svelte-p1vim5{width:15%}section.svelte-p1vim5 :nth-child(1) article.svelte-p1vim5.svelte-p1vim5{height:0}section.svelte-p1vim5 .svelte-p1vim5.svelte-p1vim5:nth-child(2){align-items:center;display:flex;flex-direction:column;font-family:'Lucida-Calligraphy';padding:0.5em 0 0.25em 0;width:70%}section.svelte-p1vim5 .svelte-p1vim5:nth-child(2)>p.svelte-p1vim5{font-size:var(--step--1);font-weight:700;margin-bottom:0}section.svelte-p1vim5 :nth-child(2) article div.svelte-p1vim5.svelte-p1vim5{font-size:var(--step-0);font-weight:bold;margin:0;text-align:center;width:100%}section.svelte-p1vim5 :nth-child(3) a.svelte-p1vim5.svelte-p1vim5{color:var(--color-black);font-family:var(--font-sans-serif);font-size:var(--step--3);font-weight:600;text-align:center;vertical-align:center}section.svelte-p1vim5 a.svelte-p1vim5.svelte-p1vim5{background:var(--color-secondary);border-radius:0.375em;border-style:solid;border-width:0;height:2em;line-height:1.2em;margin-bottom:1em;margin-top:1;padding-bottom:0.125em;text-align:center;width:fit-content}section.svelte-p1vim5 a.svelte-p1vim5.svelte-p1vim5:focus,section.svelte-p1vim5 a.svelte-p1vim5.svelte-p1vim5:hover{transform:scale(1.2)}section.svelte-p1vim5.svelte-p1vim5.svelte-p1vim5{align-items:center;background-color:var(--color-primary);color:var(--color-black);display:flex;flex-direction:row;height:fit-content;justify-content:space-around;overflow-wrap:break-word;padding-bottom:0.2em;text-align:center;white-space:pre-wrap;width:100%}h1.svelte-p1vim5.svelte-p1vim5.svelte-p1vim5{background:var(--color-primary);color:var(--color-black);display:block;font-family:'Lucida-Calligraphy';font-size:var(--step-3);font-weight:700;height:fit-content;width:fit-content}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="hero" class="svelte-p1vim5" data-svelte-h="svelte-ea4bli"><article class="svelte-p1vim5"><a href="/menu" class="svelte-p1vim5"><img${add_attribute("src", MenuIcon, 0)} alt="Menu Icon" class="svelte-p1vim5"></a></article> <article class="svelte-p1vim5"><h1 class="svelte-p1vim5">The Village Library</h1> <div class="svelte-p1vim5">Skidaway Island</div> <p class="svelte-p1vim5">(912) 598-1183</p></article> <article class="svelte-p1vim5"><a href="/donate" class="svelte-p1vim5">Donate</a></article> </section>`;
});
const Facebook = "/_app/immutable/assets/Facebook.oLzgX5qJ.png";
const InstagramIcon = "/_app/immutable/assets/Instagram.RMNne9wq.png";
const css$2 = {
  code: "img.svelte-1k3hw0w{display:block;height:auto;margin-left:auto;margin-right:auto;width:3em}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section data-svelte-h="svelte-9bdu1p"><address>Village Library, Inc.
    <br>
    1 Skidaway Village Square
    <br>
    Savannah, GA 31411
    <br>
    (912) 598-1183</address></section> <section data-svelte-h="svelte-1izpfci"><article><a id="facebook" href="http://www.facebook.com/SIvillagelibrary/"><img alt="Facebook"${add_attribute("src", Facebook, 0)} class="svelte-1k3hw0w"></a> <a id="instagram" href="http://www.instagram.com/si_village_library"><img alt="Follow us on Instagram"${add_attribute("src", InstagramIcon, 0)} class="svelte-1k3hw0w"></a></article> <br> <a href="/menu">Site Map</a></section> <section data-svelte-h="svelte-1bf8aki"><a href="mailto:thevillagelibrary.inc@gmail.com">Contact our Webmaster</a> </section>`;
});
const homeIcon = "data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%20576%20512'%20height='30'%20width='30'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M280.37%20148.26L96%20300.11V464a16%2016%200%200%200%2016%2016l112.06-.29a16%2016%200%200%200%2015.92-16V368a16%2016%200%200%201%2016-16h64a16%2016%200%200%201%2016%2016v95.64a16%2016%200%200%200%2016%2016.05L464%20480a16%2016%200%200%200%2016-16V300L295.67%20148.26a12.19%2012.19%200%200%200-15.3%200zM571.6%20251.47L488%20182.56V44.05a12%2012%200%200%200-12-12h-56a12%2012%200%200%200-12%2012v72.61L318.47%2043a48%2048%200%200%200-61%200L4.34%20251.47a12%2012%200%200%200-1.6%2016.9l25.5%2031A12%2012%200%200%200%2045.15%20301l235.22-193.74a12.19%2012.19%200%200%201%2015.3%200L530.9%20301a12%2012%200%200%200%2016.9-1.6l25.5-31a12%2012%200%200%200-1.7-16.93z'%3e%3c/path%3e%3c/svg%3e";
const aboutIcon = "data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2020%2020'%20aria-hidden='true'%20height='30'%20width='30'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20d='M18%2010a8%208%200%2011-16%200%208%208%200%200116%200zm-7-4a1%201%200%2011-2%200%201%201%200%20012%200zM9%209a1%201%200%20000%202v3a1%201%200%20001%201h1a1%201%200%20100-2v-3a1%201%200%2000-1-1H9z'%20clip-rule='evenodd'%3e%3c/path%3e%3c/svg%3e";
const newseventsIcon = "data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2024%2024'%20height='30'%20width='30'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.875%203H4.125C2.953%203%202%203.897%202%205v14c0%201.103.953%202%202.125%202h15.75C21.047%2021%2022%2020.103%2022%2019V5c0-1.103-.953-2-2.125-2zm0%2016H4.125c-.057%200-.096-.016-.113-.016-.007%200-.011.002-.012.008L3.988%205.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012%2013.946c-.007.01-.052.046-.137.046z'%3e%3c/path%3e%3cpath%20d='M6%207h6v6H6zm7%208H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z'%3e%3c/path%3e%3c/svg%3e";
const newarrivalsIcon = "data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='none'%20stroke-width='2'%20viewBox='0%200%2024%2024'%20stroke-linecap='round'%20stroke-linejoin='round'%20height='30'%20width='30'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'%3e%3c/path%3e%3cpath%20d='M5%204m0%201a1%201%200%200%201%201%20-1h2a1%201%200%200%201%201%201v14a1%201%200%200%201%20-1%201h-2a1%201%200%200%201%20-1%20-1z'%3e%3c/path%3e%3cpath%20d='M9%204m0%201a1%201%200%200%201%201%20-1h2a1%201%200%200%201%201%201v14a1%201%200%200%201%20-1%201h-2a1%201%200%200%201%20-1%20-1z'%3e%3c/path%3e%3cpath%20d='M5%208h4'%3e%3c/path%3e%3cpath%20d='M9%2016h4'%3e%3c/path%3e%3cpath%20d='M13.803%204.56l2.184%20-.53c.562%20-.135%201.133%20.19%201.282%20.732l3.695%2013.418a1.02%201.02%200%200%201%20-.634%201.219l-.133%20.041l-2.184%20.53c-.562%20.135%20-1.133%20-.19%20-1.282%20-.732l-3.695%20-13.418a1.02%201.02%200%200%201%20.634%20-1.219l.133%20-.041z'%3e%3c/path%3e%3cpath%20d='M14%209l4%20-1'%3e%3c/path%3e%3cpath%20d='M16%2016l3.923%20-.98'%3e%3c/path%3e%3c/svg%3e";
const donateIcon = "data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%20512%20512'%20height='30'%20width='30'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M256%20416c114.9%200%20208-93.1%20208-208S370.9%200%20256%200%2048%2093.1%2048%20208s93.1%20208%20208%20208zM233.8%2097.4V80.6c0-9.2%207.4-16.6%2016.6-16.6h11.1c9.2%200%2016.6%207.4%2016.6%2016.6v17c15.5.8%2030.5%206.1%2043%2015.4%205.6%204.1%206.2%2012.3%201.2%2017.1L306%20145.6c-3.8%203.7-9.5%203.8-14%201-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9%200-16.3%208.2-16.3%2018.3%200%208.2%205%2015.5%2012.1%2017.6l62.3%2018.7c25.7%207.7%2043.7%2032.4%2043.7%2060.1%200%2034-26.4%2061.5-59.1%2062.4v16.8c0%209.2-7.4%2016.6-16.6%2016.6h-11.1c-9.2%200-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7%209.5-3.8%2014-1%205.4%203.4%2011.4%205.1%2017.8%205.1h38.9c9%200%2016.3-8.2%2016.3-18.3%200-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34%2026.4-61.5%2059.1-62.4zM480%20352h-32.5c-19.6%2026-44.6%2047.7-73%2064h63.8c5.3%200%209.6%203.6%209.6%208v16c0%204.4-4.3%208-9.6%208H73.6c-5.3%200-9.6-3.6-9.6-8v-16c0-4.4%204.3-8%209.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7%200-32%2014.3-32%2032v96c0%2017.7%2014.3%2032%2032%2032h448c17.7%200%2032-14.3%2032-32v-96c0-17.7-14.3-32-32-32z'%3e%3c/path%3e%3c/svg%3e";
const css$1 = {
  code: ".dropbtn.svelte-15fqwcs.svelte-15fqwcs.svelte-15fqwcs{background-color:var(--background-white);border:0;border-radius:0;cursor:pointer;box-sizing:border-box;color:var(--color-black);display:block;font-family:var(--font-sans-serif);font-size:var(--step--2);font-weight:700;height:auto;margin-top:0;outline:0;overflow-wrap:break-word;text-align:center;text-decoration:none;text-size-adjust:100%;width:fit-content}.dropbtn.active.svelte-15fqwcs.svelte-15fqwcs.svelte-15fqwcs,.dropbtn.svelte-15fqwcs.svelte-15fqwcs.svelte-15fqwcs:hover,nav.svelte-15fqwcs>ul li.svelte-15fqwcs>a.active.svelte-15fqwcs,nav.svelte-15fqwcs>ul li.svelte-15fqwcs>a.svelte-15fqwcs:hover{background:var(--color-secondary);border:2px solid var(--color-primary);border-radius:1em;color:var(--color-black);text-align:center;width:inherit}.dropdown.svelte-15fqwcs.svelte-15fqwcs.svelte-15fqwcs{position:relative;display:inline-block;width:fit-content}.dropdown-content.svelte-15fqwcs.svelte-15fqwcs.svelte-15fqwcs{border:2px solid var(--color-secondary);border-radius:1em;background-color:var(--color-primary);display:none;opacity:1;position:absolute;z-index:2}#about.svelte-15fqwcs.svelte-15fqwcs.svelte-15fqwcs{left:-125%;min-width:350%}#newsevents.svelte-15fqwcs.svelte-15fqwcs.svelte-15fqwcs{left:-225%;min-width:550%}#donate.svelte-15fqwcs.svelte-15fqwcs.svelte-15fqwcs{left:-72%;min-width:250%\r\n}.dropdown-content.svelte-15fqwcs a.svelte-15fqwcs.svelte-15fqwcs{color:var(--color-white);display:block;text-decoration:none}.dropdown-content.svelte-15fqwcs a.svelte-15fqwcs.svelte-15fqwcs:hover{color:var(--color-black);background-color:var(--color-secondary)}.dropdown.svelte-15fqwcs:hover .dropdown-content.svelte-15fqwcs.svelte-15fqwcs{display:block}.dropdown.svelte-15fqwcs:hover .dropbtn.svelte-15fqwcs.svelte-15fqwcs{background-color:var(--color-secondary);color:var(--color-black)}nav.svelte-15fqwcs.svelte-15fqwcs.svelte-15fqwcs{background-color:var(--background-white);display:block}nav.svelte-15fqwcs>ul li.svelte-15fqwcs>a.svelte-15fqwcs{line-height:1.5em;padding:0 0.5em;vertical-align:center}nav.svelte-15fqwcs>ul li.svelte-15fqwcs>a.svelte-15fqwcs{box-sizing:border-box;color:var(--color-black);display:block;font-family:var(--font-sans-serif);font-size:var(--step--2);font-weight:700;height:auto;margin-top:0;outline:0;overflow-wrap:break-word;text-align:center;text-decoration:none;text-size-adjust:100%;width:fit-content}nav.svelte-15fqwcs>ul li.svelte-15fqwcs>a.active.svelte-15fqwcs{background:var(--color-secondary);color:var(--color-black);text-align:center;width:inherit}nav.svelte-15fqwcs>ul.svelte-15fqwcs.svelte-15fqwcs{height:fit-content}nav.svelte-15fqwcs>ul.svelte-15fqwcs.svelte-15fqwcs{background:var(--background-white);display:flex;flex-direction:row;gap:1em;align-items:center;justify-content:center;list-style-type:none;margin:0.625em;padding:0}nav.svelte-15fqwcs>ul.svelte-15fqwcs.svelte-15fqwcs{height:fit-content;margin:0.625em 0}nav.svelte-15fqwcs li.svelte-15fqwcs.svelte-15fqwcs{display:inline-block}nav.svelte-15fqwcs>ul li.svelte-15fqwcs>a.svelte-15fqwcs:hover{background-color:var(--color-secondary);color:var(--color-black)}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const icons = {
    home: homeIcon,
    about: aboutIcon,
    newsevents: newseventsIcon,
    newarrivals: newarrivalsIcon,
    donate: donateIcon
  };
  $$result.css.add(css$1);
  path = $page.url.pathname;
  $$unsubscribe_page();
  return `<nav class="svelte-15fqwcs"><ul class="svelte-15fqwcs">${each(pages, (aPage) => {
    return `${aPage.subPages.length > 0 ? `<li class="svelte-15fqwcs"><div class="dropdown svelte-15fqwcs"><button class="${escape(
      null_to_empty(path === "/" ? aPage.path === "home" ? "active dropbtn" : " dropbtn" : path.includes(aPage.path) ? "active dropbtn" : " dropbtn"),
      true
    ) + " svelte-15fqwcs"}"><img${add_attribute("src", icons[aPage.path], 0)}${add_attribute("alt", `${aPage.name} Icon`, 0)}>${escape(aPage.name)}</button> <div${add_attribute("id", aPage.path, 0)} class="dropdown-content svelte-15fqwcs"><a${add_attribute("href", `/${aPage.path}`, 0)} class="svelte-15fqwcs">${escape(aPage.name)}</a> <div class="divider"></div> ${each(aPage.subPages, (subPage) => {
      return `<a${add_attribute("href", `/${aPage.path}/${subPage.path}`, 0)} class="svelte-15fqwcs">${escape(subPage.name)}</a>`;
    })} </div></div> </li>` : `<li class="svelte-15fqwcs"><a${add_attribute("href", aPage.path !== "home" ? `/${aPage.path}` : "/", 0)} class="${escape(
      null_to_empty(path === "/" ? aPage.path === "home" ? "active" : "" : path.includes(aPage.path) ? "active" : ""),
      true
    ) + " svelte-15fqwcs"}"><img${add_attribute("src", icons[aPage.path], 0)}${add_attribute("alt", `${aPage.name} Icon`, 0)}>${escape(aPage.name)}</a> </li>`}`;
  })}</ul> </nav>`;
});
const css = {
  code: "#new-wing.svelte-xxfurx{aspect-ratio:650/160;background-image:url('$lib/assets/images/NewWing.jpg');background-repeat:no-repeat;background-size:cover;margin:0, auto;width:100%}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} <div id="new-wing" class="svelte-xxfurx"></div> ${validate_component(Navbar, "NavBar").$$render($$result, {}, {}, {})}</header> <main>${slots.default ? slots.default({}) : ``}</main> <footer>${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </footer>`;
});
export {
  Layout as default
};
