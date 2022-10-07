import NavBar from "../Components/NavBar";
import PostProgettoStep2Component from "../Components/PostProgettoStep2Component";
import PostProgettoContext, { PostProgettoProvider } from "../context/PostProgettoContext";

export default function PostProgettoStep2() {


return (
    <PostProgettoProvider>
    <div>
        <main style={{ padding: "1rem 0" }}>
            <PostProgettoStep2Component />
        </main>
    </div>
    </PostProgettoProvider>
);
}