import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function afterUpdate() {
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.data_2 === void 0 && $$bindings.data_2 && data_2 !== void 0)
    $$bindings.data_2(data_2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${constructors[2] ? `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(constructors[2] || missing_component, "svelte:component").$$render(
                  $$result,
                  { data: data_2, form, this: components[2] },
                  {
                    this: ($$value) => {
                      components[2] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}` : `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
function set_read_implementation(fn) {
}
function set_manifest(_) {
}
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta
			name="'description"
			content="The website of The Village Library, a non-profit, volunteer-run community library on Skidaway Island in Savannah, Georgia"
		/>
		<meta name="keywords" content="library,village,skidaway" />

		<link rel="icon" href="` + assets2 + '/favicon.svg" type="image/svg+xml" />\n		<link rel="icon" href="' + assets2 + '/favicon.ico" />\n		<link rel="apple-touch-icon" href="' + assets2 + '/192.png" />\n		<link rel="manifest" href="' + assets2 + `/manifest.json" />

		<title>The Village Library</title>
		<style>
			body {
				--background-black: #000000; /* #5a5a5a; */
				--background-secondary: #f9f9fb;
				--background-white: #ffffff;
				--border-hairline: 1px solid #0004;
				--borderRadius-outer: 0.5em;
				--color-black: #212529;
				--color-border-primary: #cdcdcd;
				--color-link: #551a8b;
				--color-link-hover: var(--color-secondary);
				--color-modal-fader: #b3b3b3cc;
				--color-primary: #7283fe;
				--color-secondary: #f29085;
				--color-tertiary: #5a5a5a;
				--color-white: #ffffff;
				--font-serif: 'Times New Roman', Times, serif;
				--font-sans-serif: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
					'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
				--pad: clamp(0.5em, min(2vw, 4vh), 4em);
				--shadow-chrome: 0 0.25em 1em 0.25em #0003;
				--page-width: 95%;

				/* @link https://utopia.fyi/type/calculator?c=320,16,1.125,1920,24,1.125,5,5,900-1200-1800-600&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
				/* Step -5: 8.88px → 13.32px */
				--step--5: clamp(0.56rem, calc(0.5rem + 0.28vw), 0.83rem);
				/* Step -4: 9.99px → 14.98px */
				--step--4: clamp(0.62rem, calc(0.56rem + 0.31vw), 0.94rem);
				/* Step -3: 11.24px → 16.86px */
				--step--3: clamp(0.7rem, calc(0.63rem + 0.35vw), 1.05rem);
				/* Step -2: 12.64px → 18.96px */
				--step--2: clamp(0.79rem, calc(0.71rem + 0.4vw), 1.19rem);
				/* Step -1: 14.22px → 21.33px */
				--step--1: clamp(0.89rem, calc(0.8rem + 0.44vw), 1.33rem);
				/* Step 0: 16.00px → 24.00px */
				--step-0: clamp(1rem, calc(0.9rem + 0.5vw), 1.5rem);
				/* Step 1: 18.00px → 27.00px */
				--step-1: clamp(1.13rem, calc(1.01rem + 0.56vw), 1.69rem);
				/* Step 2: 20.25px → 30.38px */
				--step-2: clamp(1.27rem, calc(1.14rem + 0.63vw), 1.9rem);
				/* Step 3: 22.78px → 34.17px */
				--step-3: clamp(1.42rem, calc(1.28rem + 0.71vw), 2.14rem);
				/* Step 4: 25.63px → 38.44px */
				--step-4: clamp(1.6rem, calc(1.44rem + 0.8vw), 2.4rem);
				/* Step 5: 28.83px → 43.25px */
				--step-5: clamp(1.8rem, calc(1.62rem + 0.9vw), 2.7rem);
			}

			/*---------------------
					RESETS
			---------------------*/
			html,
			body,
			address,
			blockquote,
			dl,
			dt,
			dd,
			div,
			form,
			fieldset,
			caption,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			hr,
			ul,
			li,
			ol,
			table,
			tr,
			td,
			th,
			p,
			img {
				margin: 0;
				padding: 0;
			}
			img,
			fieldset,
			object {
				border: none;
			}
			ul {
				list-style-type: none;
			}
			*,
			*:after,
			*:before {
				box-sizing: border-box;
			}
			button,
			label {
				cursor: pointer;
			}
			html,
			body {
				min-height: 100%;
			}
			/*---------------------
				AT RULES
			---------------------*/
			@font-face {
				font-family: 'Lucida-Calligraphy';
				font-weight: normal;
				src: url('/fonts/lucida-calligraphy.ttf') format('truetype');
			}
			/* phone only 599px */
			@media screen and (max-width: 37.4375em) {
				* {
					-ms-text-size-adjust: none;
					-webkit-text-size-adjust: none;
				}
				footer {
					flex-direction: row;
				}
				footer {
					gap: 1em;
				}

				.pagewithsubpagesbody {
					margin: 0;
				}
				.pagewithsubpagesbody p,
				#upcomingeventslist p {
					text-align: left;
				}

				.pagewithsubpages {
					flex-direction: column;
				}
			}
			/* tablet portrait up 600px */
			@media screen and (min-width: 37.5em) {
				footer {
					flex-direction: row;
				}

				.pagewithsubpagesbody {
					margin: 0 0 0 0.625em;
				}
				.pagewithsubpagesbody p,
				#upcomingeventslist p {
					text-align: justify;
				}

				.pagewithsubpages {
					flex-direction: row;
				}
			}
			/*--------------------------------------
					SELECTORS
			---------------------------------------*/

			a p {
				text-align: center;
			}
			a,
			li,
			p,
			td {
				font-family: var(--font-sans-serif);
				font-size: var(--step-1);
				margin-top: 0;
			}
			address {
				font-family: var(--font-sans-serif);
				font-size: var(--step-1);
				font-style: normal;
				margin-bottom: 0.5em;
				text-align: center;
			}
			body {
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				background-color: var(--background-white);
				display: flex;
				flex-direction: column;
				font-family: var(--font-sans-serif);
				margin: 0.125em auto;
				overflow: auto;
				overflow-x: hidden;
				text-align: center;
			}
			figcaption {
				border-top: 1px solid #00bcd4;
				font-family: var(--font-sans-serif);
				font-size: var(--step-1);
				font-weight: bold;
				margin-bottom: 0.5em;
				padding: 1em 0 0 0;
				text-align: center;
			}
			figure {
				margin: 1em 0;
			}
			footer :nth-child(2) {
				display: flex;
				flex-direction: column;
			}
			footer a {
				color: var(--color-white);
			}
			footer a {
				font-size: var(--step--1);
				margin: 0;
			}
			footer a:hover {
				color: var(--color-link-hover);
			}
			footer address {
				font-size: var(--step--1);
			}
			footer article {
				display: flex;
				flex-direction: row;
				gap: 1em;
				height: fit-content;
			}
			footer {
				background-color: var(--color-tertiary);
				color: var(--color-white);
				display: flex;
				flex-shrink: 0;
				font-size: var(--step--3);
				justify-content: space-around;
				line-height: 1.2em;
				margin-top: 0.625em;
				padding: 0.25em 0;
				text-align: center;
			}
			h2 {
				color: var(--color-black);
				font-family: var(--font-sans-serif);
				font-size: var(--step-2);
				font-weight: bold;
				margin: 0;
				text-align: center;
			}
			h3 {
				color: var(--color-black);
				font-family: var(--font-sans-serif);
				font-size: var(--step-1);
				font-weight: 700;
				margin: 0;
				text-align: center;
			}
			h4 {
				color: var(--color-black);
				font-family: var(--font-sans-serif);
				font-size: var(--step-1);
				font-weight: 700;
				margin: 0;
				text-align: left;
			}
			img {
				display: block;
				height: auto;
				margin-left: auto;
				margin-right: auto;
				max-width: 100%;
			}
			main {
				flex: 0;
			}
			p {
				margin-bottom: 0.5em;
			}
			small {
				display: block;
				font-family: var(--font-sans-serif);
				font-size: var(--step-1);
				font-weight: 500;
				margin-left: auto;
				margin-right: auto;
				text-align: center;
				width: fit-content;
			}
			.divider {
				border-top: 1px solid var(--color-primary);
				color: var(--background-black);
				display: block;
				height: 0;
				margin: 0 auto;
				opacity: 1;
				overflow-x: hidden;
				text-align: center;
			}
			.full,
			.side-menu {
				width: 100%;
			}

			.pagewithoutsubpages,
			.pagewithsubpages {
				display: flex;
				margin: 0 auto;
				width: var(--page-width);
			}

			.pagewithoutsubpages {
				flex-direction: column;
			}

			.pagewithsubpagesbody {
				align-items: top;
				overflow-x: hidden;
				width: 100%;
			}

			.pagewithoutsubpages p {
				text-align: left;
			}

			.picture {
				max-width: 50%;
			}
			.poster {
				max-width: 25%;
			}
			.sub {
				border-top: 1px solid var(--color-secondary);
				width: 80%;
			}
			.close {
				background-color: transparent;
				border: none;
				float: left;
				text-align: left;
			}
			#root {
				display: flex;
				flex-direction: column;
				min-height: 100vh;
			}
		</style>

		` + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div id="fauxBody" style="display: contents">' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1hvhuzc"
};
async function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  options as c,
  set_private_env as d,
  prerendering as e,
  set_public_env as f,
  get_hooks as g,
  set_safe_public_env as h,
  set_assets as i,
  set_building as j,
  set_manifest as k,
  set_prerendering as l,
  set_read_implementation as m,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
