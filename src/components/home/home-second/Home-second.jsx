import SecondLeft from "./second-left/Second-left";
import SecondRight from "./second-right/Second-right";

export default function HomeSecond() {
    return <div className="home-second vh-100 row">
        <SecondLeft></SecondLeft>
        <SecondRight></SecondRight>
    </div>
}