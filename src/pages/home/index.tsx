import * as stylex from "@stylexjs/stylex";
import { Link } from "../../commons/link";

const styles = stylex.create({
	base: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		// justifyContent: "center",
		width: "100%",
		height: "100%",
		padding: "1rem",
		// boxSizing: "border-box",
		paddingBottom: "2rem",
	},

	top_split: {
		display: "flex",
		gap: "1rem",
		flexWrap: "wrap",
	},

	meta_group_wrap: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},

	group_wrap: {
		maxWidth: "768px",
	},

	img: {
		maxWidth: "768px",
		borderRadius: "8px",
		width: "100%",
	},
});

export default function Home() {
	return (
		<div {...stylex.props(styles.base)}>
			<span {...stylex.props(styles.top_split)}>
				<span>clearfeld</span>
				<span>/</span>
				<Link href="https://blog.clearfeld.com">blog</Link>
				<span>/</span>
				<Link href="https://x.com/clearfeld">twitter</Link>
				<span>/</span>
				<Link href="https://github.com/clearfeld">github</Link>
				<span>/</span>
				<Link href="https://music.clearfeld.com">music</Link>
				<span>/</span>
				<Link href="https://tools.clearfeld.com">tools</Link>
				<span>/</span>
				<Link href="https://games.clearfeld.com">games</Link>
			</span>

			<br />

			<h2>Projects - I work / worked on</h2>

			<br />

			<div {...stylex.props(styles.meta_group_wrap)}>
				<div {...stylex.props(styles.group_wrap)}>
					<Link href="https://github.com/clearfeld/construct">
						<h3>Construct</h3>
					</Link>

					<p>A GUI API Client for REST requests, that works fully locally.</p>

					{/* biome-ignore lint/a11y/useAltText: <explanation> */}
					<img
						src={
							"https://pbs.twimg.com/media/GiA2QYUXkAAifsa?format=jpg&name=large"
						}
						{...stylex.props(styles.img)}
					/>
				</div>

				<br />

				<div {...stylex.props(styles.group_wrap)}>
					<Link href="https://www.dataconstruct.io">
						<h3>DataConstruct.io</h3>
					</Link>

					<p>
						Generate fake data in various formats plus the code boilerplate
						through the site, or through the cli tool.
					</p>

					<span {...stylex.props(styles.top_split)}>
						<Link href="https://www.dataconstruct.io/organizations/playground/schemas">
							Playground
						</Link>
						<span>/</span>
						<Link href="https://github.com/Data-Construct/faking-cli">CLI</Link>
						<span>/</span>
						<Link href="https://github.com/Data-Construct/faking">
							Library (Rust and WASM support)
						</Link>
					</span>
				</div>

				<br />

				<div {...stylex.props(styles.group_wrap)}>
					<Link href="https://control-ui.clearfeld.com">
						<h3>Control UI (WIP)</h3>
					</Link>

					<p>
						Accessible and customizable components that you can copy and paste
						into your apps, or install as a package.
					</p>

					<p>Built using stylex, shadcn, radix primitives as a foundation.</p>
				</div>

				<br />

				<div {...stylex.props(styles.group_wrap)}>
					<Link href="https://www.alltoolbox.io">
						<h3>AllToolBox</h3>
					</Link>

					<p>
						Developer toolbox containing various micro tools, code snippets, and
						cheatsheets for tools and frameworks.
					</p>

					{/* biome-ignore lint/a11y/useAltText: <explanation> */}
					<img
						src={
							"https://pbs.twimg.com/media/GcxyyOPWYAAL-na?format=jpg&name=large"
						}
						{...stylex.props(styles.img)}
					/>
				</div>
			</div>
		</div>
	);
}
