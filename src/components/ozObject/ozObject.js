import object1 from "../object1/object1";
export default RenderPoll;

function RenderPoll(props){
    // console.log(props);
    return (
        <div className='poll'>
            <section className="seker">
                <header className="coteret_seker">
                    <p className="status">{props.object.status}</p>
                    <h1 className="question">{props.object.question}</h1>
                    {/* <img className="img" src={props.object.image} alt=""/> */}
                </header>
                <RenderAnswer object={object1}/>
                <div className="seker_details">
                    <p className="category">{props.object.category}</p>
                </div>
            </section>
        </div>
        )
}

function RenderAnswer(props){
    // console.log(props);
    return(
        <div>{props.object.result.map(function(ans,i){
         return (
            <div className="answer" id={'answer'+(1+i)}>
                <p className="answer_text" >{props.object.answers[i]['text']}</p>
                <p className="vote_count" >{ans['count']}</p>
                <p className="vote_percent" >{ans['percent']}</p>
            </div>)
        })
        }</div>
    )
}

// const seker = document.querySelector('.seker');
// const coteretSeker = document.querySelector('.coteret_seker');
// const status = document.querySelector('.status');
// const question = document.querySelector('.question');
// const img = document.querySelector('.img');
// const answers = document.querySelector('.answers');
// const answer = document.querySelector('.answer');
// const voteCount = document.querySelector('.vote_count');
// const votePercent = document.querySelector('.vote_percent');
// const sekerDetails = document.querySelector('.seker_details');
// const category = document.querySelector('.category');
// const  = document.querySelector('.');

// status.textContent = props.status;
// question.textContent = props.question;
// category.textContent = props.category;
// img.src = props.image;