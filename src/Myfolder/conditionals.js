function App() {
  const title = "Blog post";
  const body = "This is my blog post";
  const comments = [
    {id: 1, text: 'Comment one'},
    {id: 2, text: 'Comment two'},
    {id: 3, text: 'Comment three'}
  ];
  //for 1 and 2
  const loading = false;
  const showComments = true;
  if(loading) return <h1>Loading...</h1>

  //for 3 as a variable
  const commentBlock = (<div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))};{/*or key={id}*/}
      </ul>
    </div>)

  return (
    
    <div>
      <h1>{title.toUpperCase()}</h1>

      <p>{body}</p>
      {/* 1)If showComments(this is the condition) is true then show div of comments and if not 'no'  / put the conditions in () - all depends on what it's set to above in const loading*/}
      {showComments ? (
        <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))};{/*or key={id}*/}
          </ul>
        </div>
      ) : (
        'no' 
      )}

      {/* 2)OR IF JUST SHOW COMMENTS IF SET TO TRUE ABOVE THEN USE && (thejsx)*/}
      {showComments && (
        <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))};{/*or key={id}*/}
          </ul>
        </div>
      )}

      {/*3 */}
      {showComments && commentBlock}
      
      
      

      
    </div>
    
  );
}

export default App;