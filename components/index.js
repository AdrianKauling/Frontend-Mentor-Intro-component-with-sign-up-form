function MainDiv() {
    return (
        <React.Fragment>
            <MyArticle />
            <MyAside />
        </React.Fragment>
    )
}

function MyArticle() {
    return (
        <article className="MyArticle flex-item">
                <h1>Learn to code by watching others</h1>
                <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invatuable.</p>
        </article>
    )
}

function MyAside() {
    return (
        <aside className="flex-item">
            <section id="tryFreeText">
                <p>
                    <strong>Try it free 7 days</strong> then $20/mo. thereafter
                </p>
            </section>

            <MyForm />
        </aside>
    )
}

function MyForm() {
    return (
        <form id="myForm">

            <div className="inp-form">

                <input type="text" id="firstName" autoComplete="off" placeholder="First Name" required/>
                <span className="spanError"></span>

            </div>

            <div  className="inp-form">

                <input type="text" id="lastName" autoComplete="off" placeholder="Last Name" required/>
                <span className="spanError"></span>

            </div>

            <div className="inp-form">

                <input type="email" id="email"  autoComplete="off" placeholder="Email Address" required/>
                <span className="spanError"></span>

            </div>

            <div className="inp-form">

                <input type="password" id="password"  autoComplete="off" placeholder="Password" required/>
                <span className="spanError"></span>

            </div>

            <button className="inp-form" type="submit">CLAIM YOUR FREE TRIAL</button>

            <footer>
                <p>
                    By clicking the button, you are agreeing to our <a href="#">Terms and Services</a>
                </p>
            </footer>
        </form>
    )
}

ReactDOM.render(
    <MainDiv />,
    document.querySelector('#app')
)