
const Home = ({name, title}) => {
    
    return <div>
        
        <section className="splash">
            <section>
            <img src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib
            =rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto
            =format&fit=crop&w=500&q=60"/>
            </section>
            <section>
                <h1>My name is {name}</h1>
                <p>Title: {title}  </p>
            </section>
        </section>
    </div>
}

export default Home;