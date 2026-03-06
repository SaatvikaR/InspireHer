import { useNavigate } from "react-router-dom";

function Home() {

const navigate = useNavigate();

return (

<div style={{textAlign:"center",marginTop:"100px"}}>

<h1>InspireHer</h1>
<h2>Women Achievement Platform</h2>

<p>
A platform to share and explore inspiring stories of women from around the world.
</p>

<button onClick={()=>navigate("/stories")}>
View Stories
</button>

<button onClick={()=>navigate("/submit")}>
Share Your Story
</button>

</div>

)

}

export default Home;