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
        boxSizing: "border-box",
    },

    top_split: {
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
    }
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
            </span>

            <br />

            <h2>Projects</h2>

            <br />

            <div>
                <div>
                    <Link href="https://www.dataconstruct.io"><h3>DataConstruct.io</h3></Link>

                    <span>
                        Generate fake data in various formats plus the code boilerplate through the site, or through the cli tool.
                    </span>
                    <br />
                    <br />
                    <span {...stylex.props(styles.top_split)}>
                        <Link href="https://www.dataconstruct.io/organizations/playground/schemas">Playground</Link>
                        <span>/</span>
                        <Link href="https://github.com/Data-Construct/faking-cli">CLI</Link>
                        <span>/</span>
                        <Link href="https://github.com/Data-Construct/faking">Library (Rust and WASM support)</Link>
                    </span>
                </div>

                <br />

                <div>
                    <Link href="https://control-ui.clearfeld.com"><h3>Control UI (WIP)</h3></Link>

                    <span>
                        Accessible and customizable components that you can copy and paste into your apps, or install as a package.
                    </span>
                    <br />
                    <span>
                        Built using stylex, shadcn, radix primitives as a foundation.
                    </span>
                </div>

                <br />

                <div>
                    <Link href="https://www.alltoolbox.io"><h3>AllToolBox</h3></Link>

                    <span>
                        Developer toolbox containing various micro tools, code snippets, and cheatsheets for tools and frameworks.
                    </span>
                </div>
            </div>
        </div>
    );
}
