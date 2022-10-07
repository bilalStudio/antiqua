import NavBar from "../Components/NavBar";
import PostProgettoStep3Component from "../Components/PostProgettoStep3Component";
import { PostProgettoProvider } from "../context/PostProgettoContext";

export default function PostProgettoStep3() {

    return (
        <PostProgettoProvider>
            <div>
                <main style={{ padding: "1rem 0" }}>
                    <PostProgettoStep3Component />
                </main>
            </div>
        </PostProgettoProvider>
    );
}